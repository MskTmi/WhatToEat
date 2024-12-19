let isPlaying = false;  // 控制是否在播放状态
let randomTimeout;  // 保存setTimeout的返回值，用于清除
let currentMode = "human";  // 默认为人类模式
let resetCount = 0;  // 重置次数
let currentOrder = 2;  // 默认当前时间的餐次 (0 = 早餐, 1 = 午餐, 2 = 晚餐)
let screenWidth, screenHeight;
let currentHour = (new Date()).getHours();
let currentFoodPool = []; // 添加一个全局变量用于存储当前的食物池

// 各模式的食物池
const foodPools = {};

// 各模式的吐槽语句
const monsterTeases = ["大哥，饶命啊大哥", "吃吃吃，就知道吃", "壮士，干了这碗热翔", "就这，还不够我塞牙缝儿", "莫慌，抱紧我", "吃一个，长一斤", "你帅你先吃", "你胖你先吃", "听说吃这玩意吃不胖", "你先吃，我不饿", "不吃不是中国人", "配上鸡汤，口味更佳", "我仿佛看到了盐水瓶", "嗯，好吃么？", "饭后注意漱口哦", "这菜红烧味道如何？", "饭后百步走，活到九十九", "分享页面到朋友圈，可以获得30个QQ太阳", "据说吃完99%都哭了", "惊天内幕！这网页是逗你玩的", "为了身边的朋友！！转！！！！", "我也是醉了", "我想静静，不要问我静静是谁", "解决吃什么难题哪家强？", "我就笑笑不说话", "转发过100，然并卵", "活到老，吃到老", "我给你讲个笑话", "你别哭喔", "你知道怎样得精神分裂症吗？那样我就再不是一个人了。", "天下没有不散的筵席。我都还没吃完，你们都走了。", "吃不到的醋，最酸。", "躲了一辈子的雨，雨会不会很难过", "小猪一定不知道自己的肉很好吃吧，真替它们心酸。", "作为一个胖子，居然还自称自己不是个粗人！", "心情不好就吃吃吃", "念念不忘，必会下单", "好吃不如饺子，好玩不过嫂子", "别低头，哈喇子会掉", "今晚我们都是吃货", "我这叫圆润，不叫胖", "这不叫胖，叫丰满！", "吃饭前记得用手机消消毒", "集满20个赞，明天早起瘦10斤", "好吃的不要不要的", "不好吃，不要钱", "吃的我蹲下起立就头晕", "听说你是广东人？", "贝爷，卒"];

$(document).ready(function () {
    // 打印控制台信息
    printProjectInfo();

    // 初始化时间
    if (currentHour < 9 || currentHour >= 23) {
        currentOrder = 0; // 早饭
    } else if (currentHour < 13) {
        currentOrder = 1; // 午饭
    } else {
        currentOrder = 2; // 晚饭
    }

    // 更新餐次
    updateMealForCurrentOrder(currentOrder);
    // 更新食物池
    selectMealPoolBasedOnMode();

    $(".title").on("animationend webkitAnimationEnd", function () {
        $(this).removeClass("shake");
    });

    $("#temp_container").on("animationend webkitAnimationEnd", function (e) {
        $(e.target).remove();
    });

    // 开始/停止
    $("#start").click(function () {
        $("body").toggleClass("playing", !isPlaying);
        if (isPlaying) {
            isPlaying = false;
            clearTimeout(randomTimeout);

            // 显示吐槽
            if (currentMode === "monster") {
                $(".os").text(monsterTeases[randomNumber(monsterTeases.length)]);
            }
            
            // 显示随机到的食物
            $(".punctuation").text("！");
            $("#start").find("span").text("换一个");
            document.title = "Mst | " + $(".title").text();
        } else {
            isPlaying = true;
            
            // 每次切换食物时的吐槽
            handleTeases(++resetCount);
            
            // 重置标题
            resetTitle();
            
            $("#start").find("span").text("停");
            $(".os").text("");

            // 触发随机食物显示
            triggerRandomFoodDisplay();
        }
    });

    // 模式切换
    $("#toggle span").click(function () {
        // 添加 selected 类
        $(this).addClass("selected").siblings().removeClass("selected");
    
        // 获取当前 span 的宽度和位置
        const $this = $(this);
        const $colorBlock = $("#colorBlock");
    
        const blockWidth = $this.outerWidth(); // 动态计算宽度
        const blockLeft = $this.position().left; // 获取相对父级的左偏移
        const blockTop = $this.position().top; // 获取相对父级的顶部偏移
    
        // 更新色块位置和大小
        $colorBlock.css({
            width: `${blockWidth}px`,
            left: `${blockLeft}px`,
            top: `${blockTop}px`, // 确保在多行时正确跟随
            backgroundColor: $this.data("color"), // 根据 data-color 设置色块背景色
        });
    
        // 更新模式
        currentMode = $this.data("type");
    
        // 更新食物池
        selectMealPoolBasedOnMode();
    
        // 重置计数
        resetCount = 0;
    });
    
    // 餐次切换
    $(".title").click(function () {
        currentOrder++;
        if (currentOrder > 2) {
            currentOrder = 0;
        }

        // 更新餐次
        updateMealForCurrentOrder(currentOrder);
        // 更新食物池
        selectMealPoolBasedOnMode();
    });

    // 窗口变化时更新屏幕宽高
    $(window).resize(function () {
        screenWidth = $(window).width();
        screenHeight = $(window).height();
    }).resize();
});

// 随机数生成函数
function randomNumber(max = 100, min = 0) {
    return Math.ceil(Math.random() * (max - min) + min);
}

// 处理每次切换食物时的吐槽
function handleTeases(count) {
    if (count === 2) tease("我就知道你会换一个 ( ͡° ͜ʖ ͡°)");
    if (count === 5) tease("说，你是不是天秤座？Σ( ° △ °|||)︴");
    if (count === 10) tease("你是吃了炫迈吗？(￣△￣；)");
    if (count === 20) tease("难道你是处女座？(๑•̀ㅂ•́)و✧");
    if (count === 30) tease("再换我可要报警了！( *・ω・)✄╰ひ╯");
}

// 重置标题
function resetTitle() {
    $(".today, .time, .eat").show();
    $(".what").text("神马");
    $(".punctuation").text("？");
    $(".title").addClass("shake");
}

// 切换食物池
function selectMealPoolBasedOnMode() {
    // 如果食物池已存在，则直接切换
    if (foodPools[currentMode]) {
        currentFoodPool = foodPools[currentMode][currentOrder === 0 ? "breakfast" : (currentOrder === 1 ? "lunch" : "dinner")];
        return;
    }

    // 如果食物池不存在，则发起请求加载
    fetch(`/foodData/${currentMode}.json`) // 模式名要与文件名一致
        .then(response => response.json())
        .then(data => {
            // 将从 JSON 获取到的食物池赋给当前食物池
            foodPools[currentMode] = data;
            currentFoodPool = foodPools[currentMode][currentOrder === 0 ? "breakfast" : (currentOrder === 1 ? "lunch" : "dinner")];
        })
        .catch(error => {
            console.error(`Error loading ${currentMode}.json:`, error);
        });
}


// 随机食物显示
function triggerRandomFoodDisplay() {
    function displayRandomFood() {
        let foodIndex = randomNumber(currentFoodPool.length) - 1;
        let foodItem = currentFoodPool[foodIndex];
        let positionTop = randomNumber(screenHeight);
        let positionLeft = randomNumber(screenWidth - 50);
        let fontSize = randomNumber(37, 14);

        $(".what").text(foodItem);
        let tempElement = $("<span class='temp'>" + foodItem + "</span>").css({
            top: positionTop,
            left: positionLeft,
            color: "rgba(0,0,0," + randomNumber(7, 3) / 10 + ")",
            fontSize: fontSize + "px"
        }).appendTo($("#temp_container"));

        randomTimeout = setTimeout(displayRandomFood, 60);
    }

    displayRandomFood();
}

// 更新餐次
function updateMealForCurrentOrder(order) {
    const mealTimes = ["早上", "中午", "晚上"];
    if (!isPlaying) {
        $(".time").text(mealTimes[order]);
        $(".what").text("神马");
        $(".punctuation").text("？");
        $(".title").addClass("shake");
        resetCount = 0;

        const prompt = $(".tip").show();
        setTimeout(function () {
            prompt.remove();
        }, 4000);
    }
}

// 吐槽函数
function tease(message) {
    const comment = $("<div class='comment'>" + message + "</div>");
    comment.on("animationend webkitAnimationEnd", function () {
        $(this).remove();
    }).appendTo($("body"));
}

// 开源信息
function printProjectInfo() {
    var license = "MIT License";
    var github = "https://github.com/MskTmi/WhatToEat";
    var disclaimer = "This project is for learning and reference only, and does not bear any responsibility.";
    console.group("Project Information");

    console.log("%cThis project is licensed under the " + license, "color: darkorange; font-size: 20px;");
    console.log("%cThe source code for this project is hosted on " + github, "color: darkorange; font-size: 20px;");
    console.log("%cDisclaimer: " + disclaimer, "color: darkorange; font-size: 20px;");

    console.groupEnd();
}
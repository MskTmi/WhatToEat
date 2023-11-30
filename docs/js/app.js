var i = 0;
//早饭
var breakfast = "面包 蛋糕 荷包蛋 烧饼 饽饽 肉夹馍 油条 馄饨 火腿 面条 小笼包 大笼包 玉米粥 肉包 煎饼果子 饺子 煎蛋 烧卖 生煎 锅贴 包子 酸奶 苹果 梨 香蕉 皮蛋瘦肉粥 蛋挞 南瓜粥 煎饼 玉米糊 泡面 粥 馒头 燕麦片 水煮蛋 米粉 豆浆 牛奶 花卷 豆腐脑 煎饼果子 小米粥 黑米糕 鸡蛋饼 牛奶布丁 水果沙拉 鸡蛋羹 南瓜馅饼 鸡蛋灌饼 奶香小馒头 汉堡包 披萨 八宝粥 三明治 蛋包饭 豆沙红薯饼 驴肉火烧 粥 粢饭糕 蒸饺 白粥".split(" ");
//午饭/晚饭
var lunch = "盖浇饭 砂锅 大排档 米线 满汉全席 西餐 麻辣烫 自助餐 炒面 快餐 水果 西北风 馄饨 火锅 烧烤 泡面 水饺 日本料理 涮羊肉 味千拉面 面包 扬州炒饭 自助餐 菜饭骨头汤 茶餐厅 海底捞 西贝莜面村 披萨 麦当劳 KFC 汉堡王 卡乐星 兰州拉面 沙县小吃 烤鱼 烤肉 海鲜 铁板烧 韩国料理 粥 快餐 萨莉亚 桂林米粉 东南亚菜 甜点 农家菜 川菜 粤菜 湘菜 本帮菜 全家便当".split(" ");
//monster
var abnormal = "冰箱 书桌 电扇 空调 马桶 翔 鼠标 键盘 显示器 电视 台灯 饭盒 iPad iPhone 手机 餐巾纸 电话 椅子 纸箱 窗帘 插座 被单 报纸 杂志 相框 照片 衣服 内裤 内衣 袜子 妹子 汉子 砖头 混凝土 钢筋 塑料袋 衣架 书 手环 手表 鼠标垫 眼药水 跑车 自行车 三轮车 坦克 潜水艇 飞机 火箭 U盘 CPU 显卡 刀片 碎玻璃 圆珠笔 钢笔 交通卡 银行卡 身份证 户口簿 橡皮筋 双面胶 502胶水 订书机 螺丝刀 锤子 榔头 垃圾桶 花花草草 树皮 洗手液 妇炎洁 姨妈巾 哆啦A梦 仙人掌 企鹅 大熊猫 穿山甲 米老鼠 唐老鸭 跳跳虎 旅行箱 DVD 音响 热水器 热水袋 电热棒 电池 充电器 相机 自拍杆 耳机 吊灯 雨伞 钱包 鞋子 人字拖 床垫 绣花针 戒指 窨井盖 路灯 主板 程序猿 工程狮 电线 摄像头 西北风 生活 路由器 洗手液 沐浴露 肥皂 羽毛球拍 保龄球 皮带 皮鞭 电池 牙膏 手电筒 瑜伽垫 假发 82年的自来水 马蜂窝 瑞士军刀 地板 水管 电钻".split(" ");
//自定义大转盘
var turntable = "冰激凌 奶茶 再来一次 汉堡王 麦麦 毛血旺 萨莉亚 薯条 钵钵鸡 川菜 **启动！".split(" ");
//monster中的吐槽词
var abnormalTease = "大哥，饶命啊大哥 吃吃吃，就知道吃 壮士，干了这碗热翔 就这，还不够我塞牙缝儿 莫慌，抱紧我 吃一个，长一斤 你帅你先吃 你胖你先吃 听说吃这玩意吃不胖 你先吃，我不饿 不吃不是中国人 配上鸡汤，口味更佳 我仿佛看到了盐水瓶 嗯，好吃么？ 饭后注意漱口哦 这菜红烧味道如何？ 饭后百步走，活到九十九 分享页面到朋友圈，可以获得30个QQ太阳 据说吃完99%都哭了 惊天内幕！这网页是逗你玩的 为了身边的朋友！！转！！！！ 我也是醉了 我想静静，不要问我静静是谁 解决吃什么难题哪家强？ 我就笑笑不说话 转发过100，然并卵 活到老，吃到老 我给你讲个笑话 你别哭喔 你知道怎样得精神分裂症吗？那样我就再不是一个人了。 天下没有不散的筵席。我都还没吃完，你们都走了。 吃不到的醋，最酸。 躲了一辈子的雨，雨会不会很难过 小猪一定不知道自己的肉很好吃吧，真替它们心酸。 作为一个胖子，居然还自称自己不是个粗人！ 心情不好就吃吃吃 念念不忘，必会下单 好吃不如饺子，好玩不过嫂子 别低头，哈喇子会掉 今晚我们都是吃货 我这叫圆润，不叫胖 这不叫胖，叫丰满！ 吃饭前记得用手机消消毒 集满20个赞，明天早起瘦10斤 好吃的不要不要的 不好吃，不要钱 吃的我蹲下起立就头晕 听说你是广东人？ 贝爷，卒。".split(" ");
//默认时间
var order = 2;
//当前时间
var Hours = (new Date).getHours();
//重置次数
var Reset = 0;
var human = "human";
var b, C, E, meal;

$(document).ready(function () {
    //打印控制台信息
    printProjectInfo();

    $(".title").on("animationend webkitAnimationEnd", function (t) {
        $(this).removeClass("shake")
    })

    $("#temp_container").on("animationend webkitAnimationEnd", function (t) {
        $(t.target).remove()
    })

    $("#start").click(function () {

        $("body").toggleClass("playing", !i);
        if (i) {
            i = 0;
            if ("monster" == human) {
                $(".os").text(abnormalTease[randomNumber(abnormalTease.length)]);
            }
            $(".punctuation").text("！");
            $("#start").find("span").text("换一个");
            clearTimeout(b);
            document.title = "Mst | " + $(".title").text();
        } else {
            i = 1;
            Reset++;
            2 == Reset && tease("我就知道你会换一个 ( ͡° ͜ʖ ͡°)");
            5 == Reset && tease("说，你是不是天秤座？Σ( ° △ °|||)︴");
            10 == Reset && tease("你是吃了炫迈吗？(￣△￣；)");
            20 == Reset && tease("难道你是处女座？(๑•̀ㅂ•́)و✧");
            30 == Reset && tease("再换我可要报警了！( *・ω・)✄╰ひ╯");

            //重置状态
            $(".today, .time, .eat").css("display", false)
            //判断使用哪个数组
            var pool = lunch
            switch ($("div > .selected").data("type")) {
                case "human":
                    if (order == 0) {
                        pool = breakfast
                    }
                    break;
                case "monster":
                    pool = abnormal;
                    break;
                case "turntable":
                    pool = turntable;
                    //隐藏一些内容
                    $(".today, .time, .eat").css("display", "none")
                    break;
            }

            $(".punctuation").text("？"), $("#start").find("span").text("停"), $(".os").text(""),
                function o() {
                    var e = randomNumber(pool.length) - 1,
                        item = pool[e],
                        a = randomNumber(C),
                        c = randomNumber(E - 50),
                        l = randomNumber(37, 14);
                    $(".what").text(item);
                    var m = $("<span class='temp'>" + item + "</span>").css({
                        top: a,
                        left: c,
                        color: "rgba(0,0,0," + randomNumber(7, 3) / 10 + ")",
                        fontSize: l + "px"
                    }).appendTo($("#temp_container"));
                    b = setTimeout(o, 60)
                }()
        }
    })

    $("#toggle span").click(function () {
        //添加selected
        $(this).addClass("selected").siblings().removeClass("selected");
        //添加色块
        $("#colorBlock").removeClass().addClass($(this).data("type"));
        human = $(this).data("type");
        Reset = 0;
    })

    //当前时间
    if (9 > Hours || Hours >= 23) {
        order = 0;
    } else if (13 > Hours) {
        order = 1;
    } else {
        order = 2;
    }
    SwitchMeal(order)

    // 为标题元素绑定点击事件
    $(".title").click(function () {
        order++;
        if (order > 2) {
            order = 0;
        }
        SwitchMeal(order);
    })

    $("#ribbon").click(function () {
        return alert(this.$(".title")), !1
    })

    $(window).resize(function () {
        E = $(window).width(), C = $(window).height()
    }).resize()

});

function randomNumber(t, e) {
    return t = t || 100, e = e || 0, Math.ceil(Math.random() * (t - e) + e)
}

function tease(t) {
    var e = $("<div class='comment'>" + t + "</div>");
    e.on("animationend webkitAnimationEnd", function (t) {
        $(this).remove()
    }).appendTo($("body"))
}

function SwitchMeal(time) {
    var meals = ["早上", "中午", "晚上"];
    if (!i) {
        $(".time").text(meals[time]);
        $(".what").text("神马");
        $(".punctuation").text("？");
        $(".title").addClass("shake");
        Reset = 0;

        var prompt = $(".tip").show();
        setTimeout(function () {
            prompt.remove()
        }, 4e3)

    }
}

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



"use strict";

define(['vue'], function (Vue) {
    new Vue({
        el: "#state",
        data: {
            back: false,
            show: false,
            pre: false,
            next: false,
            stateList: [{ title: "我们要这群人！在线等挺急的……", img: "1.png", content: "2017年是 未来无线 亮剑出击、全面发力的一年 放心，这是一则耿直的招聘信息 只真诚，不套路 每一个才华横溢的人 都值得我们好好对待 福建未来无线信息技术有限公司 广州分公司招人啦！ 商务经理、商务主管、商务副总监 一起搞事情！", html: "state01.html", date: "2017-09-07" }, { title: "你从来都不是配角，我们了解你的价值！", img: "2.png", content: "不瞒你说 未来无线已是行业领先的信息服务商 但我们的野心远不止于此 接下来 尽请期待我们的变化 无论是业务量、发送量，还是合作伙伴 现在缺一起做事的小伙伴 这条推送主要还是想找人 福建未来无线信息技术有限公司 深圳分公司招人啦！", html: "state02.html", date: "2017-09-07" }, { title: "【招聘】未来无线上海分公司，等你来搞事情", img: "3.png", content: "你是想在家讲究生存 还是来魔都享受生活？ 如果你有 Good Good Study Day Day Up的心态 风雨无阻，刀山火海的吃苦精神 热情洋溢，见你如见阳光的魅力 见过世面，深藏不漏的能力", html: "state03.html", date: "2017-09-07" }, { title: "【“未来”同行，“无线”远航】2017户外拓展超燃归来", img: "4.png", content: "八月，烈日炎炎 热情满满的未来无线员工搞了件事情  “未来”同行 ，“无线”远航 2017未来无线户外拓展！", html: "state04.html", date: "2017-08-22" }, { title: "未来无线邀你一起干票大的！", img: "5.png", content: "没错 这是一篇 招聘帖 未来无线在大家不断努力下 已成为国内知名专业信息服务提供商 其实也不是很厉害啦 就是月发送短信数量 动不动就 15亿+", html: "state05.html", date: "2017-06-15" }, { title: "【夜华推荐】三生三世十里募才，四海八荒", img: "6.png", content: "春风十里，不如投个简历！ 招聘信息已爆满人间仙界 向钱看？还是向厚看？ 为助力各位仙友纵横四海八荒 收获十里桃林 本仙已使出洪荒之力渡于你 请诸位仙友留步 带好元神，骑上毕方鸟朝下望", html: "state06.html", date: "2017-04-17" }]
        },
        computed: {},
        methods: {
            /**
             * 查看详情
             * @param index
             */
            viewDetail: function viewDetail(index) {
                var item = this.stateList[index];
                this.$nextTick(function () {
                    this.stateList.forEach(function (item) {
                        Vue.set(item, 'show', false);
                    });
                    Vue.set(item, 'show', true);
                });
                this.show = true;
                this.pre = true;
                this.next = true;
                if (index === 0) {
                    this.pre = false;
                }
                if (index === this.stateList.length - 1) {
                    this.next = false;
                }
                document.body.scrollTop = 500;
                document.documentElement.scrollTop = 500;
            },
            knewDetail: function knewDetail(index) {
                location.href = '/view/aboutOur/aboutOurState.html?index=' + index;
            },
            backList: function backList() {
                if (this.back) {
                    location.href = '/view/aboutOur/aboutOurState.html';
                }
                this.show = false;
            }
        },
        created: function created() {
            var url = window.location.href;
            if (url.indexOf("=") != -1) {
                var index = url.substr(url.indexOf("=") + 1, url.length);
                this.back = true;
                this.viewDetail(index);
                $("#nav li:nth-child(4)").addClass("active");
                $("#subNav li:nth-child(2)").addClass("active");
            }
            /*var that = this;
            var ApiPath = globalConfig.basePath;
            var url = ApiPath +'/api/state';
            fetch (url,{method:"get",cache:"reload"}).then(function(result){
                if (result.status !== 200) {
                    console.log("存在问题，状态码为" + result.status);
                    return
                }
                result.json().then(function (json) {
                    that.stateList = json.stateList;
                    if(that.stateList.length > 0){
                        // console.log(that.stateList);
                        for (var i in that.stateList) {
                            var item = that.stateList[i];
                            var show = item.content.substr(0,33);
                            item.part = show;
                        }
                    }
                })
            }).catch(function(err){
                console.log("Fetch错误:"+err);
            });*/
        }
    });
});
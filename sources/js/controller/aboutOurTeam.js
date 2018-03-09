'use strict';

define(['vue'], function (Vue) {

    new Vue({
        el: '#aboutOur_team',
        data: {
            show: false,
            pre: false,
            next: false,
            detailItem: {},
            team: [{ imgPath: "team-pic1.jpg", title: "公司员工体验陶瓷制作", time: "2017.10.16", more: "汉寿南部的金牛山，海拔..." }, { imgPath: "team-pic2.jpg", title: "公司员工永泰天门山游玩", time: "2017.10.16", more: "汉寿南部的金牛山，海拔..." }, { imgPath: "team-pic3.jpg", title: "公司尾牙优秀员工表彰", time: "2017.10.16", more: "去年年底，朋友圈里..." }],
            detail: [{
                p1: "汉寿南部的金牛山，海拔344.5米，是该县境内的制高点，距汉寿县城东南26公里，距常德65公里，为雪峰山余脉。金牛山美，由西向东连绵起伏，为资水、沅水的分水岭。“风洞雨洞”点缀其间，酷似牛鼻，竹林苍翠，漫山遍野，恰似牛毛，观其山形，活像一卧牛向东北翘首而望。",
                img2: "team-pic1.jpg",
                p3: "山中清泉处处，水塘座座，汇集成溪，曲折回肠，流水淙淙，清脆古朴。石级辗转，幽深而又雅致。其主峰建有龙泉寺。骑车登至金牛山顶，令人顿觉心旷神怡，沉入恬淡的人生佳境。。。11月16日，就在这风光秀丽的冬日，德行天下铁人队有一拨铁骨硬汉，激情全程往返，再次登顶金牛山。"
            }, {
                p1: "汉寿南部的金牛山，海拔344.5米，是该县境内的制高点，距汉寿县城东南26公里，距常德65公里，为雪峰山余脉。金牛山美，由西向东连绵起伏，为资水、沅水的分水岭。“风洞雨洞”点缀其间，酷似牛鼻，竹林苍翠，漫山遍野，恰似牛毛，观其山形，活像一卧牛向东北翘首而望。",
                img2: "team-pic2.jpg",
                p3: "山中清泉处处，水塘座座，汇集成溪，曲折回肠，流水淙淙，清脆古朴。石级辗转，幽深而又雅致。其主峰建有龙泉寺。骑车登至金牛山顶，令人顿觉心旷神怡，沉入恬淡的人生佳境。。。11月16日，就在这风光秀丽的冬日，德行天下铁人队有一拨铁骨硬汉，激情全程往返，再次登顶金牛山。"
            }, {
                p1: "去年年底，朋友圈里流传着一篇“福州一土豪公司购置四部全新的福特轿车，作为优秀员工的年终奖”的图文消息，这个让福州绝大部分白领羡慕嫉妒恨的图文里，描述了在福州一家公司的年会上，公司给优秀员工的年终奖是福特轿车。",
                img2: "team-pic3.jpg",
                p3: "公司总经理吴清说，“这么做真的不是作秀，公司在2015年初就向员工允诺过会给优秀员工送车作为奖励的，这次奖励的优秀员工，有的还没满一年。",
                p4: "“我们也愿意将公司成果与有梦想的年轻人一起分享，公司2015年中就承诺给优秀员工奖励公司股份，在今年年初优秀员工也已经成为公司股东。年底了，我们不谈理想，来点实际的。”"
            }]
        },
        methods: {
            /**
             * 点击更多详情
             * @param index
             */
            viewDetail: function viewDetail(index) {
                var item = this.team[index];
                this.$nextTick(function () {
                    this.team.forEach(function (item) {
                        Vue.set(item, 'show', false);
                    });
                    Vue.set(item, 'show', true);
                });
                this.detailItem = this.detail[index];
                this.show = true;
                this.pre = true;
                this.next = true;
                if (index === 0) {
                    this.pre = false;
                }
                if (index === this.team.length - 1) {
                    this.next = false;
                }
                document.body.scrollTop = 500;
                document.documentElement.scrollTop = 500;
            },
            backList: function backList() {
                this.show = false;
            }
        },
        computed: {},
        mounted: function mounted() {},
        created: function created() {
            var url = window.location.href;
            if (url.indexOf("=") != -1) {
                var index = url.substr(url.indexOf("=") + 1, url.length);
                this.back = true;
                this.viewDetail(index);
                $("#nav li:nth-child(4)").addClass("active");
                $("#subNav li:nth-child(3)").addClass("active");
            }
        }
    });
});
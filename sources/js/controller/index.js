'use strict';

define(['vue', 'utils/tools'], function (Vue, Tool) {

    new Vue({
        el: '#app',
        data: {
            hover: '',
            clickImg: '/sources/static/image/home/apply/marketing.png',
            left: true,
            _top: 0,
            _left: 0,
            _right: 0,
            _width: 0,
            canvas: null,
            serviceNum: true,
            list: [{ name: "sms", img: "sms.png", hoverImg: "sms_white.png", title: "行业短信", subhead_one: "运营商战略合作", subhead_two: "三网合一通道稳定速率快", top: 0, href: "/view/product/product.html" }, { name: "voice", img: "voice.png", hoverImg: "voice_white.png", title: "语音验证码", subhead_one: "全国全网覆盖", subhead_two: "三秒钟响应,100%到达", top: 40, href: "/view/product/productVoice.html" }, { name: "flux", img: "flux.png", hoverImg: "flux_white.png", title: "流量业务", subhead_one: "一站搞定全国流量", subhead_two: "多方位提供用户体验", top: 80, href: "/view/product/productFlow.html" }, { name: "colorMsg", img: "colorMsg.png", hoverImg: "colorMsg_white.png", title: "彩信服务", subhead_one: "长短信、图文、视频等多媒体内容,超大容量、一触即发", subhead_two: "", top: 40, href: "/view/product/productColorMsg.html" }, { name: "international", img: "international.png", hoverImg: "international_white.png", title: "国际短信", subhead_one: "支持全球200+国家与地区", subhead_two: "多语言、运营商支持", top: 0, href: "/view/product/productInternationSms.html" }],
            radiateArc: [{ backgroundColor: 'rgba(173, 205, 255, 0.2)', borderColor: 'rgba(75, 139, 253, 0.2)', radius: 225 }, { backgroundColor: 'rgba(173, 205, 255, 0.3)', borderColor: 'rgba(75, 139, 253, 0.3)', radius: 175 }, { backgroundColor: 'rgba(173, 205, 255, 0.5)', borderColor: 'rgba(75, 139, 253, 0.5)', radius: 125 }],
            advantageList: [{ name: "stabilize", img: "stabilize.png", hoverImg: "stabilize_b.png", title: "丰富的短信资源通道", subhead_one: "运营数十个独有三网合一号码", subhead_two: "并与10多个主要省份运营商实现战略合作", top: 1100, left: 1 }, { name: "power", img: "power.png", hoverImg: "power_b.png", title: "技术研发实力保障", subhead_one: "网关平台系统具备超强的伸缩性能", subhead_two: "获多项国家知识产权和企业荣誉", top: 1250, left: -70 }, { name: "disasterPrevention", hoverImg: "disasterPrevention_b.png", img: "disasterPrevention.png", title: "灾备通过随时切换", subhead_one: "为客户准备多条灾备通道,突发情况及时告警", subhead_two: "系统预警自动切换,确保生产安全", top: 1400, left: 1 }, { name: "inTime", img: "inTime.png", hoverImg: "inTime_b.png", title: "稳定安全的秒达速率", subhead_one: "通道优先级高、通道加密、稳定速率快", subhead_two: "最高可达2000/条并发", top: 1100, right: 700 }, { name: "coverage", img: "coverage.png", hoverImg: "coverage_b.png", title: "多协议无缝对接", subhead_one: "自主研发多种平台支持多种协议标准", subhead_two: "开发的商业逻辑不受限于系统底层平台", top: 1250, right: 769 }, { name: "guarantee", img: "guarantee.png", hoverImg: "guarantee_b.png", title: "7X24小时全天候服务保障", subhead_one: "运维及客服团队提供7*24小时不间断服务", subhead_two: "保证第一时间时间进行服务响应", top: 1400, right: 700 }],
            applyList: [{ name: "marketing", img: "marketing.png", active: true, label: "互动营销", top: 19, left: 75 }, { name: "order", img: "order.png", active: false, label: "订单信息", top: 19, right: 75 }, { name: "validateCode", img: "validateCode.png", active: false, label: "验证码", top: 116, left: 1 }, { name: "interior", img: "interior.png", active: false, label: "内部信息", top: 116, right: 1 }, { name: "expenditure", img: "expenditure.png", active: false, label: "消费提醒", top: 221, left: 75 }, { name: "client", img: "client.png", active: false, label: "客户关怀", top: 221, right: 75 }, { name: "flow", img: "flow.png", active: false, label: "物流", top: 326, left: 1 }, { name: "financial", img: "financial.png", active: false, label: "金融", top: 326, right: 1 }, { name: "app", img: "App.png", active: false, label: "App", top: 431, left: 75 }, { name: "warning", img: "warning.png", active: false, label: "应急预警", top: 431, right: 75 }, { name: "journey", img: "journey.png", active: false, label: "行程信息", top: 536, left: 1 }, { name: "government", img: "government.png", active: false, label: "政务信息", top: 536, right: 1 }]
        },
        computed: {
            hoverName: function hoverName() {
                return this.hover;
            }
        },
        methods: {
            drawArc: function drawArc(ctx, backgroundColor, borderColor, radius) {
                var canvas = this.canvas;
                var width = canvas.width;
                var height = canvas.height;
                ctx.beginPath();
                var grd = ctx.createRadialGradient(width / 2, height / 2, radius - 125, width / 2, height / 2, radius);
                grd.addColorStop(0, 'white');
                grd.addColorStop(1, backgroundColor);
                //使用经向渐变
                ctx.fillStyle = grd;
                ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2, true);
                ctx.fill();
                ctx.strokeStyle = borderColor;

                ctx.stroke();
                ctx.closePath();
            },
            draw: function draw(ctx) {
                var canvas = this.canvas;
                var width = canvas.width;
                var height = canvas.height;
                var image = new Image();
                image.width = 160;
                image.height = 160;
                image.src = '/sources/static/image/home/advantage/center.png';
                image.onload = function () {
                    ctx.drawImage(image, (width - image.width) / 2, (height - image.height) / 2, 160, 160);
                };
                var that = this;
                this.radiateArc.forEach(function (item, index) {
                    that.drawArc(ctx, item.backgroundColor, item.borderColor, item.radius);
                });
            },
            mouseenterServiceNum: function mouseenterServiceNum() {
                this.serviceNum = false;
            },
            mouseleaveServiceNum: function mouseleaveServiceNum() {
                this.serviceNum = true;
            },
            getAdvantageClass: function getAdvantageClass(item) {
                if (item.left) {
                    return {
                        top: item.top + 'px',
                        marginLeft: item.left + 'px'
                    };
                } else {
                    return {
                        top: item.top + 'px',
                        marginLeft: item.right + 'px'
                    };
                }
            },
            /**
             * 获取应用场景的样式
             * @param item
             * @returns {*}
             */
            getApplyClass: function getApplyClass(item) {
                if (item.left) {
                    return {
                        top: item.top + 'px',
                        left: item.left + 'px'
                    };
                } else {
                    return {
                        top: item.top + 'px',
                        right: item.right + 'px'
                    };
                }
            },
            /**
             * 应用场景悬停样式
             * @returns {*}
             */
            getLineClass: function getLineClass() {
                if (this.left) {
                    return {
                        top: this._top + 'px',
                        left: this._left + 'px',
                        width: this._width + 'px'
                    };
                } else {
                    return {
                        top: this._top + 'px',
                        right: this._right + 'px',
                        width: this._width + 'px'
                    };
                }
            },
            /**
             * 应用场景悬停事件
             * @param e
             * @param item
             */
            clickApply: function clickApply(e, item) {
                this.$nextTick(function () {
                    this.applyList.forEach(function (item) {
                        Vue.set(item, 'active', false);
                    });
                    Vue.set(item, 'active', true);
                });
                this.clickImg = "/sources/static/image/home/apply/" + item.img;

                this._top = item.top + 56;
                if (item.left) {
                    this.left = true;
                    this._left = item.left + 120;
                    this._width = 301 - this._left;
                } else {
                    this.left = false;
                    this._right = item.right + 120;
                    this._width = 301 - this._right;
                }
            },
            mouseOut: function mouseOut(e, name) {
                e.stopPropagation();
                var target = e.target;
                if (target.nodeName === "LI") {}
                this.hover = '';
            },
            mouseOver: function mouseOver(e, name) {
                e.stopPropagation();
                // var target=e.target;
                // if(target.nodeName==="LI"){
                //     Tool.addClass(target,"pulse animated");
                //     setTimeout(function () {
                //         Tool.removeClass(target,"pulse animated");
                //     },300);
                // }else{
                //
                // }
                if (this.hover !== name) {
                    this.hover = name;
                }
            }
        },
        mounted: function mounted() {
            this.canvas = document.getElementById("home_advantage_canvas");
            if (this.canvas.getContext) {
                var ctx = this.canvas.getContext('2d');
                this.draw(ctx);
            }
        }
    });
});
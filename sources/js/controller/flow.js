'use strict';

define(['vue'], function (Vue) {
    new Vue({
        el: '#flow',
        data: {
            reasonList: [{ name: "platform", img: "platform.png", title: "便捷平台", subhead_one: "资源丰富", subhead_two: "DSP投放", subhead_three: "服务保障" }, { name: "resource", img: "resource.png", title: "资源丰富", subhead_one: "全国超过万家客户", subhead_two: "核心社交平台均有合作", subhead_three: "可覆盖绝大部分手机用户" }, { name: "DSP", img: "DSP.png", title: "DSP投放", subhead_one: "拥有十年资深媒体传播经验", subhead_two: "独有DSP投放渠道", subhead_three: "涵盖核心主流应用产品" }, { name: "service", img: "service.png", title: "服务保障", subhead_one: "7*24小时服务", subhead_two: "让客户安心", subhead_three: "确保流量调发稳定" }],
            strategy: [{ name: "main", img: "main.png", title: "主流应用全面对接", subhead: "将深度整合主流社交平台、核心应用等打造移动数据流量便捷接口" }, { name: "game", img: "game.png", title: "手游到家、DSP对接", subhead: "通过多种方式，展现数据流量套餐订购服务和运营商自有产品，激活用户" }, { name: "tradition", img: "tradition.png", title: "传统商家积分互动结合", subhead: "和传统商家结合，以积分兑换、微信H5活动等游戏，拉动流量应用和流量充值包等发展" }]
        },
        computed: {},
        methods: {}
    });
});
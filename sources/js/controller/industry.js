'use strict';

define(['vue'], function (Vue) {
    new Vue({
        el: '#industry',
        data: {
            reasonList: [{ name: "resource", img: "resource.png", title: "资源丰富", subhead: "号码资源丰富,三网合一,优质通道" }, { name: "channel", img: "channel.png", title: "稳定快速", subhead: "运营商战略,通道稳定安全，速率快" }, { name: "price", img: "price.png", title: "价格实在", subhead: "根据客户业务定制,给予极具竞争力的价格" }, { name: "interface", img: "interface.png", title: "接口灵活", subhead: "技术标准端口对接,专属客服三对一服务" }],
            guarantee: [{ name: "race", img: "race.png", title: "网关速率容量保障", subhead_one: "未来无线自主研发的网关平台系统容量大", subhead_two: "单通道每秒速率可达2000条短信", left: 100 }, { name: "extend", img: "extend.png", title: "平台扩展扩容保障", subhead_one: "自主研发的网关平台系统具备超强的伸缩性能", subhead_two: "根据客户的具体业务需求提供系统，增快硬件资源和通道资源", right: 150 }, { name: "protocol", img: "protocol.png", title: "协议系统兼容保障", subhead_one: "自主研发的网关平台系统支持SOA体系灵活部署", subhead_two: "支持多种标准协议，开发的商业逻辑不受限于系统底层平台", left: 120 }, { name: "worming", img: "worming.png", title: "故障告警转移保障", subhead_one: "自主研发的网关平台支持双工热备、负载均衡、单点故障", subhead_two: "可自动检测并即时发出告警、同时能将业务自动切换到可用的备用平台", right: 180 }, { name: "service", img: "service.png", title: "7*24小时服务保障", subhead_one: "未来无线技术运维及客服团队提供7*24小时的不间断的服务", subhead_two: "保证第一时间进行服务响应", left: 30 }]
        },
        computed: {},
        methods: {
            getClass: function getClass(item) {
                var url = '/sources/static/image/product/industry/' + item.img;
                return {
                    background: 'url(' + url + ') no-repeat center center'
                };
            },
            getGuaranteeClass: function getGuaranteeClass(item) {
                if (item.left) {
                    return {
                        marginLeft: item.left + 'px'
                    };
                } else {
                    return {
                        marginLeft: item.right + 'px'
                    };
                }
            }
        }
    });
});
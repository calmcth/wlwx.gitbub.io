'use strict';

define(['vue'], function (Vue) {
    new Vue({
        el: '#colorMsg',
        data: {
            colorMsgServer: [{ name: "server-0", img: "s-0.png", title: "操作方便", subhead1: "可视化的预览编辑模式", subhead2: "快速上手，简单易用" }, { name: "server-1", img: "s-1.png", title: "大体量", subhead1: "最大支持80k", subhead2: "最大支持10帧发送" }, { name: "server-2", img: "s-2.png", title: "支持多格式文件", subhead1: "jpg/gif/bmp/png等图片格式", subhead2: "amr/mp3/mid/3gp等音频视频格式" }, { name: "server-3", img: "s-3.png", title: "优质通道", subhead1: "覆盖全国三网及运营商号段", subhead2: "到达率号行业领先" }, { name: "server-4", img: "s4.png", title: "高性能", subhead1: "专享彩信通道", subhead2: "卓越的发送能力" }, { name: "server-5", img: "s-5.png", title: "稳定安全", subhead1: "配置防盗策略，绑定IP和手机", subhead2: "通信机防护机制保障信息安全" }],
            applicationArea_one: [{ name: "area-0", title: "企业内刊手机报", content: "公司内部新闻通知，公司产品动态，行业相关新闻动态行业政策分析解读，领导每期寄语，培训学习资料等" }, { name: "area-1", title: "客户关怀手机报", content: "公司新闻动态，行情分析，政策解读，行业分析等" }, { name: "area-2", title: "政府单位政务手机报", content: "重点新闻，学习文件，精神解读，省市文件，领导讲话通知信息等" }, { name: "area-3", title: "公司客户关系管理", content: "行业新闻，政策解读，会员通知，新品通知，新品使用指南，季节店铺注意事项，客户开拓指南，财务管理指南，销售指南等" }],
            applicationArea_two: [{ name: "area-0", title: "酒店、餐饮行业手机报", content: "促销打折优惠活动通知，图片介绍新店新菜，健康知识会员通知等" }, { name: "area-1", title: "保险公司内部激励手机报", content: "保险新品学习，公司通知信息，各地成交通报，奖励通报电话营销技巧，面谈技巧，销售技巧，培训时间通知等" }, { name: "area-2", title: "银行客户关怀手机报", content: "行业相关动态，讲座日期通知，销售日期公告利率调整预期分析，政策分析解读等" }, { name: "area-3", title: "门户型或服务型网站手机报", content: "行业相关动态，讲座日期通知，销售日期公告利率调整预期分析，政策分析解读等" }]
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
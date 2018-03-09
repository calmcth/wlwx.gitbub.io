'use strict';

define(['vue'], function (Vue) {
    new Vue({
        el: '#solution',
        data: {
            plan1: [{ name: "p1-0", img: "plan1-0.png", title: "O2O行业" }, { name: "p1-1", img: "plan1-1.png", title: "金融行业" }, { name: "p1-2", img: "plan1-2.png", title: "电商行业" }, { name: "p1-3", img: "plan1-3.png", title: "企业集团" }, { name: "p1-4", img: "plan1-4.png", title: "物流行业" }],
            plan2: [{ name: "p2-0", img: "plan2-0.png", title: "低延时", content: "强悍的系统性能，毫秒级完成短信处理，将短信提交至运营商。短信自动分流，验证码、通知、活动通知短信在系统内自动分流，避免短信堵塞验证码类通道。多线BGP机房，电信、网通等多线骨干网网接入，客户服务器处于任何网络机房均可快速提交短信，减少短信提交耗时" }, { name: "p2-1", img: "plan2-1.png", title: "高到达率", content: "直连通道与运营商直接下发短信一样的到达率。系统稳定，网络波动小，提交成功率高。与运营商多年深入合作，了解运营商规则，完美解决部分运营商限流问题。" }, { name: "p2-2", img: "plan2-2.png", title: "高稳定性", content: "运营商直连通道。直接运营商网络，避免中间服务商中转所带来的不稳定性。及时为每位客户做短信通道组互备及自动切换，避免运营商故障导致的短信发送异常。" }, { name: "p2-3", img: "plan2-3.png", title: "并发能力强", content: "强悍的系统性能和充足的通道储备，解决高峰期的发送速度问题。满足各类节假日活动巨量的短信发送需求。" }, { name: "p2-4", img: "plan2-4.png", title: "支持多通道", content: "借助多通道体系，可将多项业务（验证码、系统通知、营销短信）完美隔离，互相不影响，可细化到每一个签名一个专用通道。" }, { name: "p2-5", img: "plan2-5.png", title: "数据加密传输", content: "接口数据均采用专业加密，确保数据传输安全可靠。" }, { name: "p2-6", img: "plan2-6.png", title: "专业资质", content: "专业的云通讯服务商，拥有工信部颁发的《中华人民共和国增值电信业务经营许可证》。" }, { name: "p2-7", img: "plan2-7.png", title: "灵活的子账号体系", content: "借助多通道体系，可将多项业务（验证码、系统通知、营销短信）完美隔离，互相不影响，可细化到每一个签名一个专用通道。" }, { name: "p2-8", img: "plan2-8.png", title: "完善的控制台", content: "Web控制台可以方便的实现资质、签名、模板报备。还提供短信发送量、到达率、分组统计、发送记录等分析等报表，方便您全权掌控每一条短信。" }]
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
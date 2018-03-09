'use strict';

define(['vue'], function (Vue) {
    new Vue({
        el: '#support-return',
        data: {
            respTable: [{ code: "0", exp: "提交成功" }, { code: "1000", exp: "服务器出现未知异常" }, { code: "1001", exp: "操作不合法，操作前未获取Token，或Token已过时" }, { code: "1002", exp: "签名验证不通过！" }, { code: "1003", exp: "Json参数解析出错" }, { code: "1004", exp: "操作不合法，cust_code: xxxxxx不存在" }, { code: "1005", exp: "客户端IP鉴权不通过" }, { code: "1006", exp: "客户账号已停用！" }, { code: "1007", exp: "签名验证不通过" }, { code: "1008", exp: "客户提交接口协议HTTPS, 与客户参数允许的协议不一致！" }, { code: "1009", exp: "提交的短信内容超过规定的长度！" }, { code: "1010", exp: "提交短信失败，原因是：模版过滤审核不通过！" }, { code: "1011", exp: "客户账户不存在！" }, { code: "1012", exp: "账户没有足够的余额" }, { code: "1013", exp: "扩展号码(sp_code)不符合规范！" }],
            codeTable: [{ code: "0", exp: "成功" }, { code: "8", exp: "流量超过限制" }, { code: "12", exp: "用户账号未登录" }, { code: "15", exp: "通道不支持该目标号码" }, { code: "20", exp: "超过账号线程数限制" }, { code: "22", exp: "账号已经被关闭" }, { code: "23", exp: "账号状态错误" }, { code: "24", exp: "账号余额不足" }, { code: "27", exp: "长短信拆分条数过多" }, { code: "29", exp: "无效号码" }],
            channelTable: [{ code: "MX:0001", exp: "签名匹配规则不成功" }, { code: "MX:0002", exp: "向上级通道提交短信失败" }, { code: "MX:0003", exp: "单个手机号码当天下行条数超过上限(长短信算1条)" }, { code: "MX:0004", exp: "短信内容中包含敏感词 (HTTP对应错误码：25)" }, { code: "MX:0005", exp: "模版过滤失败(签名未报备) (HTTP对应错误码：26)" }, { code: "MX:0006", exp: "通道敏感词" }, { code: "MX:0007", exp: "客户投诉黑名单" }, { code: "MX:0008", exp: "根据签名无法匹配到通道" }, { code: "MX:0009", exp: "目标号码在网关黑名单中" }, { code: "MX:0010", exp: "目标号码不符合手机号码规范" }, { code: "MX:0011", exp: "目标号码在禁1年黑名单中" }, { code: "MX:0012", exp: "目标号码在客户退订黑名单中" }, { code: "MX:0013", exp: "目标号码在网关黑名单中" }, { code: "MX:0014", exp: "人工审核不通过" }, { code: "MX:0015", exp: "目标号码在钓鱼黑名单中" }, { code: "MX:0016", exp: "目标号码在通道黑名单中" }]
        },
        computed: {},
        methods: {}
    });
});
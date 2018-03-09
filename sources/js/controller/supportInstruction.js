'use strict';

define(['vue'], function (vue) {
    new vue({
        el: '#supportInstruction',
        data: {
            API: [{
                name: '普通短信',
                key: 'sendSms',
                url: 'http://IP：地址（请咨询客服）:8860/sendSms',
                parameters: [{ param: 'smsReq', paramName: 'SmsReq参数对象', paramType: 'SmsReq', paramDes: '[必填]' }, { param: 'password', paramName: '账号密码', paramType: 'String', paramDes: '[必填]' }, { param: 'serviceBaseUrl', paramName: '服务器地址', paramType: 'String', paramDes: '[必填] https://ip:port' }],
                SmsReq: [{ param: 'uid', paramName: '业务标识', paramType: 'String', paramDes: '[选填]由贵司自定义32为数字透传至我司' }, { param: 'content', paramName: '短信内容', paramType: 'String', paramDes: '[必填]' }, { param: 'destMobiles', paramName: '接收号码', paramType: 'String', paramDes: '[必填]同时发送给多个号码时,号码之间用英文半角逗号分隔(,)' }, { param: 'cust_code', paramName: '用户账号', paramType: 'String', paramDes: '[必填]' }, { param: 'sp_code', paramName: '长号码', paramType: 'String', paramDes: '[选填]' }, { param: 'need_report', paramName: '状态报告需求与否', paramType: 'String', paramDes: '[选填]是 yes 否 no 默认yes' }, { param: 'msgFmt', paramName: '信息格式', paramType: 'String', paramDes: '[选填]0：ASCII串;3：短信写卡操作;4：二进制信息;8：UCS2编码;默认8' }],
                returnData: '{' + '"uid": "1123344567", ' + '"status": "success",' + '"respCode": "0",' + '"respMsg": "提交成功！",' + '"totalChargeNum": 1,' + '"result": [' + '{' + '"msgid": "59106312221352221524",' + '"mobile": "1348908xxxx",' + '"code": "0",' + '"msg": "提交成功.",' + '"chargeNum": 1' + '}' + ']' + '}'
            }, {
                name: '变量短信',
                key: 'sendVariantSms',
                url: 'http://IP：地址（请咨询客服）:8860/sendVariantSms',
                parameters: [{ param: 'VariantSmsReq', paramName: 'VariantSmsReq参数对象', paramType: 'SmsReq', paramDes: '[必填]' }, { param: 'password', paramName: '账号密码', paramType: 'String', paramDes: '[必填]' }, { param: 'serviceBaseUrl', paramName: '服务器地址', paramType: 'String', paramDes: '[必填] https://ip:port' }],
                VariantSmsReq: [{ param: 'uid', paramName: '业务标识', paramType: 'String', paramDes: '[选填]由贵司自定义32为数字透传至我司' }, { param: 'content', paramName: '短信内容', paramType: 'String', paramDes: '[必填]短信模板。其中的变量用“${vari}”来替代,i代表变量的序号（从0开始增长，每次增加1）。例如：“${var0}用户您好，今天${var1}的天气，晴，温度${var2}度，事宜外出。”，该短信中具有两个变量参数。编码为UTF-8格式。' }, { param: 'params', paramName: '变量短信参数', paramType: 'List<VariantParams>', paramDes: '[必填]同时发送给多个号码时,号码之间用英文半角逗号分隔(,),，其中变量短信每一组为json格式，如: [{"mobile"："手机号码","var":["福州","30"]},{"mobile"："手机号码","var":["厦门","32"]}]每组变量中第一个变量固定为目标手机号码，对应短信模板中的参数，var为变量个数要与内容中的(其中i变量系好，从1开始)个数匹配，以此类推。（请注意：变量中不要包含有逗号和竖线，否则发送的格式解析会有问题） VariantParams见下面表格说明' }, { param: 'cust_code', paramName: '用户账号', paramType: 'String', paramDes: '[必填]' }, { param: 'sp_code', paramName: '长号码', paramType: 'String', paramDes: '[选填]' }, { param: 'need_report', paramName: '状态报告需求与否', paramType: 'String', paramDes: '[选填]是 yes 否 no 默认yes' }, { param: 'msgFmt', paramName: '信息格式', paramType: 'String', paramDes: '[选填]0：ASCII串;3：短信写卡操作;4：二进制信息;8：UCS2编码;默认8' }],
                VariantParams: [{ param: 'mobile', paramName: '手机号码', paramType: 'String', paramDes: '{"mobile"："手机号码","var":["厦门","32"]}' }, { param: 'vars', paramName: '变量内容', paramType: 'String[]', paramDes: '{"mobile"："手机号码","var":["厦门","32"]}' }],
                returnData: '{' + '"uid": "1123344567",' + '"status": "success",' + '"respCode": "0",' + '"respMsg": "提交成功！",' + '"totalChargeNum": 3,' + '"result": [' + '    {' + ' "msgid": "59106412291510790879",' + ' "mobile": "13489080110",' + ' "code": "0",' + ' "msg": "提交成功.",' + ' "chargeNum": 1' + '     },' + '     {' + '  "msgid": "59106412291510790880",' + '  "mobile": "13489080111",' + '  "code": "0",' + '  "msg": "提交成功.",' + '  "chargeNum": 1' + '      }' + '   ]' + '}'
            }, {
                name: '获取上行',
                key: 'getMO',
                url: 'http://IP：地址（请咨询客服）:8860/getMO',
                parameters: [{ param: 'cust_code', paramName: '用户账号', paramType: 'String', paramDes: '[必填]' }, { param: 'password', paramName: '账号密码', paramType: 'String', paramDes: '[必填]' }, { param: 'serviceBaseUrl', paramName: '服务器地址', paramType: 'String', paramDes: '[必填] https://ip:port' }],
                returnData: '[' + '{' + '"smsLabel": "",' + '"recv_time": "2017-12-22 09:57:41",' + '"msg_content": "xxxxx",' + '"sp_code": "106903510107281",' + '"src_mobile": "13489080110",' + '"msg_id": "-3807905081491652607"' + '},' + '{' + '"smsLabel": "",' + '"recv_time": "2017-12-22 09:57:44",' + '"msg_content": "xxxxxxx",' + '"sp_code": "106903510107281",' + '"src_mobile": "13489080110",' + '"msg_id": "-3807904256858324992"' + '}' + ']'
            }, {
                name: '获取状态报告',
                key: 'getToken',
                url: 'http://IP：地址（请咨询客服）:8860/getToken',
                parameters: [{ param: 'cust_code', paramName: '用户账号', paramType: 'String', paramDes: '[必填]' }, { param: 'password', paramName: '账号密码', paramType: 'String', paramDes: '[必填]' }, { param: 'serviceBaseUrl', paramName: '服务器地址', paramType: 'String', paramDes: '[必填] https://ip:port' }],
                returnData: '[' + '{' + '"msgid": "59106412211644219176",' + '"mobile": "1348908xxxx",' + '"report_status": "SUCCESS",' + '"report": "DELIVRD",' + '"uid": "1123344567",' + '"recv_time": "2017-12-21 16:44:31"' + '}' + ']'
            }, {
                name: '查询账户余额',
                key: 'GetToken',
                url: 'http://IP：地址（请咨询客服）:8860/GetToken',
                parameters: [{ param: 'cust_code', paramName: '用户账号', paramType: 'String', paramDes: '[必填]' }, { param: 'password', paramName: '账号密码', paramType: 'String', paramDes: '[必填]' }, { param: 'serviceBaseUrl', paramName: '服务器地址', paramType: 'String', paramDes: '[必填] https://ip:port' }],
                returnData: '{' + '"cust_code": "096522",' + '"sms_balance": 9950,' + '"status": "1"' + '}'
            }, {
                name: '获取某手机号码黑名单类型列表',
                key: 'getBlacklist',
                url: 'http://IP：地址（请咨询客服）:8860/getBlacklist',
                parameters: [{ param: 'cust_code', paramName: '用户账号', paramType: 'String', paramDes: '[必填]' }, { param: 'password', paramName: '账号密码', paramType: 'String', paramDes: '[必填]' }, { param: 'serviceBaseUrl', paramName: '服务器地址', paramType: 'String', paramDes: '[必填] https://ip:port' }, { param: 'Mobile', paramName: '手机号码', paramType: 'String', paramDes: '[必填]' }],
                returnData: '[' + '    {' + '        "create_time": "2017-12-29 10:24:58",' + '        "cust_id": 0,' + '        "mobile": "18778480787",' + '        "smsLabel": "none",' + '        "type": "1"' + '    },' + '    {' + '        "create_time": "2017-12-29 10:23:47",' + '        "cust_id": 2283,' + '        "mobile": "18778480787",' + '        "smsLabel": "none",' + '        "type": "3"' + '    },' + '    {' + '        "create_time": "2016-11-11 19:28:34",' + '        "cust_id": 2283,' + '        "mobile": "18778480787",' + '        "note": "客户发送退订指令[td]",' + '        "smsLabel": "85",' + '        "type": "4"' + '    },' + '    {' + '        "create_time": "2017-12-29 10:24:32",' + '        "cust_id": 2283,' + '        "mobile": "18778480787",' + '        "smsLabel": "none",' + '        "type": "4"' + '    }' + ']'
            }]
        },
        computed: {},
        methods: {}
    });
});
'use strict';

define(['vue'], function (Vue) {

    new Vue({
        el: '#aboutOut_job',
        data: {
            active: 0,
            tabs: [{ index: 0, text: "总公司" }, { index: 1, text: "分公司" }],
            currentView: '分公司',
            job: {
                headerCompany: { index: 0, offer: [{ jobName: "经理助理", number: "2人", address: "福州", salary: "面议", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "1.负责通信运营商文件材料收集整理;" }, { content: "2.负责领导的日程安排、日常事务处理、业务进度的跟踪、决策信息的传达;" }, { content: "3.协调领导与公司中高层的联系工作,协调控制各项工作的安排落实;" }, { content: "4.负责各类数据报表的统计以及往来商业文件的管理与档案建立;" }, { content: "5.完成领导布置的临时性事务。" }]
                        }, { title: "岗位要求:", contents: [{ content: "1.大专以上学历;" }, { content: "2.熟悉运营商合作流程;" }, { content: "3.熟悉操作word、excel、PPT等办公软件;" }, { content: "4.良好的文字功底及语言表达能力，良好的沟通能力;" }, { content: "5.工作认真负责,积极进取，较强的独立工作能力及团队合作意识，有通信行业工作经验的优先。" }]
                        }]
                    }, { jobName: "客服文员", number: "若干人", address: "福州", salary: "面议", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "1、通过企业QQ回答客户咨询问题;" }, { content: "2、客服部通道签名报备审核给运营商;" }, { content: "3、运营商投诉处理和申诉;" }, { content: "4、资源材料申请和跟踪进度;" }, { content: "5、完成上级下达的相关任务。" }]
                        }, { title: "岗位要求:", contents: [{ content: "1、工作细心，做事耐心，对待工作具备高度责任心;" }, { content: "2、良好的沟通协调和团队意识;" }, { content: "3、熟练使用办公软件以及PS等修图软件。" }]
                        }]
                    }, { jobName: "C++程序员", number: "若干人", address: "福州", salary: "面议", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "1、负责流量分销系统主要功能模块需求分析和系统设计、开发、单元测试及交付工作;" }, { content: "2、审核下属的代码质量，书写技术文档和制定开发规范;" }, { content: "3、系统性能优化，安全加固，保证系统的安全、稳定、快速运行。" }]
                        }, { title: "岗位要求:", contents: [{ content: "1年以上C|C++开发经验;" }, { content: "熟悉mysql数据库;" }, { content: "熟悉tcp|ip网络通信协议;" }, { content: "熟悉linux,windows操作系统API;" }, { content: "熟悉多线程编程模式;" }, { content: "了解ace,libevent,asio等至少一种网络通信框架;" }, { content: "有通信行业经验者优先。" }]
                        }]
                    }, { jobName: "JAVA工程师", number: "若干人", address: "福州", salary: "面议", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "1、负责流量分销系统主要功能模块需求分析和系统设计、开发、单元测试及交付工作;" }, { content: "2、审核下属的代码质量，书写技术文档和制定开发规范;" }, { content: "3、系统性能优化，安全加固，保证系统的安全、稳定、快速运行;" }, { content: "4、负责指导和培训低级别工程师（高级开发工程师）。" }]
                        }, { title: "岗位要求:", contents: [{ content: "1、大专以上学历，计算机相关专业;" }, { content: "2、积极的工作态度，良好的沟通能力;" }, { content: "3、熟练使用JAVA、Jsp、Servlet等j2ee相关技术，熟练掌握面向对象思想;" }, { content: "4、熟练使用J2EE框架，如struts、spring、hibernate;jsp、js、ajax、prototype、extjs、jquery等web开发技术;" }, { content: "5、熟练使用oracle10g及以上版本数据库的设计和应用;" }, { content: "6、熟练使用Eclipse或者JBuilder等JAVA开发工具;" }, { content: "7、熟练使用tomcat/web logic应用服务器发布项目，熟练掌握脚本语言。" }]
                        }]
                    }, { jobName: "运维工程师", number: "若干人", address: "福州", salary: "面议", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "1、公司平台及通道监控、系统运行维护管理;" }, { content: "2、服务器的安装、更新、监控、远程管理及备份等;" }, { content: "3、负责分析排除系统、数据库、网络、应用等故障及错误;" }, { content: "4、参与制定及执行安全、备份、统计策略;" }, { content: "5、分析处理日常投诉、故障，针对不同问题分类解决;" }, { content: "6、负责公司平台客户接口的对接。" }]
                        }, { title: "岗位要求:", contents: [{ content: "1、计算机或通信等相关专业;" }, { content: "2、对Windows、Linux操作系统有一定管理工作经验，有电信行业运维管理经验的优先;" }, { content: "3、熟悉oracle、MSSQL数据库的基本操作、数据备份及还原技术，熟悉日常查询、管理及相关备份操作;" }, { content: "4、了解一般防火墙、路由器、交换机管理、网络维护、故障判断管理等能力;" }, { content: "5、具备良好的分析解决问题能力，熟悉相关协议分析;" }, { content: "6、了解运营商短信接口协议CMPP、SGIP、SMGP，有维护数据、短信的技术支持经验者优先;" }, { content: "7、具备较强的问题处理和协调能力、团队合作精神，做事有条理，有强烈的责任感，工作认真细致，善于发现和解决问题。" }]
                        }]
                    }, { jobName: "客服专员", number: "若干人", address: "福州", salary: "2500-3300", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "1、针对客户提交的信息，进行审核;" }, { content: "2、公司短信平台的通道监测;" }, { content: "3、熟练操作公司的平台，准确迅速的完成指令和任务，主要是审核客户信息;" }, { content: "4、面对客户问询，耐心沟通，并迅速妥善的协调解决;" }, { content: "5、有较强的责任心及团队合作精神，并且要具备较强的组织协调（部门间）能力;" }, { content: "6、协助销售部门处理客户关系;" }, { content: "7、完成上级下达的相关任务。" }]
                        }, { title: "岗位要求:", contents: [{ content: "1、工作细心，做事耐心，对待工作具备高度责任心;" }, { content: "2、良好的沟通协调和团队意识;" }, { content: "3、熟练办公软件操作，特别是Excel的操作技巧。" }]
                        }]
                    }, { jobName: "法务专员", number: "1人", address: "福州", salary: "3000-5000", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "1、负责公司合同预审核工作，起草、修改公司合同和相关法律文件;" }, { content: "2、负责公司法律风险规避、法律意识宣传、法务管理、法务档案的建立健全工作;" }, { content: "3、参与公司重要商务决策的交易风险把控;" }, { content: "4、协助人力资源部、财务部门完善公司内部相关管理规定;" }, { content: "5、为公司分公司及各部门提供法律咨询。" }]
                        }, { title: "岗位要求:", contents: [{ content: "1、法律相关专业大专及以上学历;" }, { content: "2、法务从业经验2年及以上，上市公司法务经验优先;" }, { content: "3、熟悉法律法规，政策条例，具备良好的专业素养，沟通、组织能力;" }, { content: "4、可独立解决公司相关合同拟定、审核处理能力，有风险控制意识;" }, { content: "5、工作有条理、计划性，原则性强，正直、踏实，办事沉稳、细致、沟通能力强。" }]
                        }]
                    }] },
                branchCompany: { index: 1, offer: [{ jobName: "文案策划", number: "1人", address: "北京", salary: "5000—1W", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "会整理制作公司投标文案" }, { content: "能收集通信行业最新情报" }, { content: "充满热情与探索精神" }, { content: "提案者思维，能写，会说！" }, { content: "会从观众角度审视策略" }, { content: "更能将需求转化成高品质策划案" }, { content: "想法、表现力，缺一不可" }, { content: "思考、逻辑、执行力，样样全活" }, { content: "一个有趣的人（非常重要）" }]
                        }, { title: ">>>>如果您有这些优势，告诉我:", contents: [{ content: " 有公司策划、文案撰写工作经验" }, { content: "本科学历，广告、营销、新闻等相关专业优先" }, { content: "具有极强观察力，逻辑思维能力强" }, { content: "能独立采写稿件，语言组织表达能力强，撰稿快" }, { content: "除熟练掌握OFFLCE软件，还会PPT、PS" }, { content: "喜欢挑战，不畏惧压力" }]
                        }]
                    }, { jobName: "客服专员", number: "若干人", address: "北京", salary: "3000-5000", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "耐心帮客户解决问题" }, { content: "协助销售部门处理客户关系" }, { content: "你前途无亮，飞速成长" }, { content: "因为这一刻，客户开始倾听你的意见" }, { content: "已经不再当你是小朋友了" }, { content: "对外，你游刃有余" }, { content: "对内，主管、领导都寻求你的意见" }]
                        }, { title: ">>>>如果您有这些优势，告诉我:", contents: [{ content: "熟练办公软件操作，特别是Excel" }, { content: "超强的组织协调（部门间）能力" }]
                        }]
                    }, { jobName: "人事主管", number: "1人", address: "北京", salary: "6000-1W", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "世有伯乐，然后有千里马" }, { content: "千里马常有，而伯乐不常有" }, { content: "慧眼识珠，经验老道" }, { content: "对外，无所不能的你，四处搜寻高手" }, { content: "对内，一切琐碎被你整理的井井有条" }, { content: "爱管家，更爱经营家" }, { content: "你是一颗链接所有部门的齿轮" }, { content: "你转动，公司才能转动" }]
                        }, { title: ">>>>如果您有这些优势，告诉我:", contents: [{ content: "有人事相关工作经验" }, { content: "会编写各类人事规章制度" }, { content: "掌握人力资源六大模块操作流程，有实际操作经验" }, { content: "有一定数据统计分析能力" }, { content: "熟练操作office办公软件" }, { content: "熟悉国家和地区劳动法规及相关政策" }]
                        }]
                    }, { jobName: "运维工程师", number: "5人", address: "北京", salary: "8000-2W", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "你是计算机或通信等相关专业" }, { content: "执行安全、备份、统计策略" }, { content: "处理日常故障，分类解决问题" }, { content: "有你在，好安心" }, { content: "处女座集中营欢迎你！" }]
                        }, { title: ">>>>如果您有这些优势，告诉我:", contents: [{ content: "计算机或通信等相关专业" }, { content: "处理日常故障，执行安全、备份、统计策略" }, { content: "有Windows、Linux操作系统管理工作经验" }, { content: "了解oracle、MSSQL数据库的基本操作、数据备份及还原技术" }, { content: "了解运营商短信接口协议SMPP、SGIP、SMGP" }]
                        }]
                    }, { jobName: "运维总监", number: "1人", address: "北京", salary: "1W-3W", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "关键词：通道、系统、服务器、防火墙" }, { content: "稳：你能确保团队工作足够规范" }, { content: "精：你能做出精确的成本核算" }, { content: "活：灵活的架构规划，为未来思考" }, { content: "任何问题团队都能宠辱不惊" }, { content: "你追求一切完美的事物！" }, { content: "更爱工匠精神与匠人追求" }, { content: "同样欢迎处女座～" }]
                        }, { title: ">>>>如果您有这些优势，告诉我:", contents: [{ content: "能够独立带领团队" }, { content: "有电信行业运维管理经验，有维护数据、短信经验" }, { content: "处理日常故障，执行安全、备份、统计策略" }, { content: "有Windows、Linux操作系统管理工作经验" }, { content: "熟悉oracle、MSSQL数据库的基本操作、数据备份及还原技术" }, { content: "了解运营商短信接口协议SMPP、SGIP、SMGP" }]
                        }]
                    }, { jobName: "研发工程师", number: "5人", address: "北京", salary: "1W-3W", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "逻辑严谨的思维框架" }, { content: "成就感爆棚的兴奋瞬间" }, { content: "优秀的编程，是一件艺术品" }, { content: "其实蛮难的;我想，你懂！" }, { content: "处女座集中营欢迎你！" }]
                        }, { title: ">>>>如果您有这些优势，告诉我:", contents: [{ content: "ajax等Web前端开发技术" }, { content: "Java，J2EE以及常用开源框架" }, { content: "IVR/ VOIP 通信协议（ TCP/IP, SIP, RTP）及基本架构/Asterisk/IPPBX" }, { content: "有Linux系统及其环境下的C/C++服务器编程经验" }, { content: "精通多线程/多进程开发" }, { content: "了解服务器端数据库使用/优化（mySQL等）" }, { content: "了解开源C/C++服务器代码" }]
                        }]
                    }, { jobName: "研发总监", number: "1人", address: "北京", salary: "2W-5W", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "你挑剔、龟毛" }, { content: "说研发是技术活，更是艺术活！" }, { content: "说带团队就是带状态、带梦想" }, { content: "你帮助下属洞察自我、发挥潜能" }, { content: "激发团队并发挥整体力量" }, { content: "集众人之力攻克技术难题" }, { content: "信仰team work" }, { content: "你爱一切简洁的事物！" }, { content: "更爱工匠精神与匠人追求" }, { content: "欢迎处女座～" }]
                        }, { title: ">>>>如果您有这些优势，告诉我:", contents: [{ content: "能够独立带领技术团队" }, { content: "熟悉、ajax等Web前端开发技术" }, { content: "熟悉Java，J2EE以及常用开源框架" }, { content: "熟悉IVR/ VOIP 通信协议（ TCP/IP, SIP, RTP）及基本架构/Asterisk/IPPBX" }, { content: "有Linux系统及其环境下的C/C++服务器编程经验" }, { content: "精通多线程/多进程开发" }, { content: "熟悉服务器端数据库使用/优化（mySQL等）" }, { content: "对各种开源C/C++服务器代码有深入研究" }]
                        }]
                    }, { jobName: "商务经理", number: "20人", address: "北京", salary: "4000-8000", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "吃苦耐劳，客户就是上帝" }, { content: "能说会道，天不怕地不怕" }, { content: "人见人爱，无不良嗜好" }, { content: "自认为能够改变什么" }, { content: "三分信息，七分执行" }, { content: "这七分更多，靠你！" }]
                        }, { title: ">>>>如果您有这些优势，告诉我:", contents: [{ content: "有短信和移动互联网行业经验" }, { content: "有销售行业工作经验，业绩突出" }, { content: "具备一定的市场分析及判断能力" }]
                        }]
                    }, { jobName: "商务总监", number: "1人", address: "北京", salary: "6000-10000", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "你的热情是灯塔" }, { content: "做出表率并指引方向" }, { content: "你像伞一样为大家遮挡强光" }, { content: "让队员能放心大胆的冲在前面" }, { content: "目标一致、思想统一" }, { content: "让团队潜能发挥达到优秀，甚至接近卓越" }]
                        }, { title: ">>>>如果您有这些优势，告诉我:", contents: [{ content: "有客户资源优先" }, { content: "有短信和移动互联网行业经验" }, { content: "3年以上销售行业工作经验，业绩突出" }, { content: "具备较强的市场分析及判断能力" }]
                        }]
                    }, { jobName: "行政人事", number: "1人", address: "深圳", salary: "面议", more: "更多", isOpen: false, detail: [{ title: "岗位职责:", contents: [{ content: "1、负责公司日常行政管理的运作" }, { content: "2、负责公司的档案管理及各类文件、资料的鉴定及统计管理工作;" }, { content: "3、协助行政经理对各项行政事务的安排及执行;" }]
                        }, { title: "任职要求:", contents: [{ content: "1、大专以上学历，18-30岁;" }, { content: "2、工作细致、认真、有责任心;" }, { content: "3、熟练使用office办公软件及自动化设备。" }]
                        }, { title: "", contents: [{ content: "简历可投递至 2881624565@qq.com " }, { content: "因为工作比较繁忙，请投递简历，合则约见！" }]
                        }, { title: "福利待遇:", contents: [{ content: "1.上班时间：7.5小时工作制，9:00-18:30（中午休息2小时） 大小周轮休;" }, { content: "2.公司提供宽敞舒适的办公环境，交通便利，临近地铁口;" }, { content: "3.各种假日福利费，灵活的月薪制度模式;" }, { content: "4.不定期公司员工活动，如：唱K、爬山、烧烤、踩单车和聚餐。" }]
                        }, { title: "工作地点:", contents: [{ content: "深圳市南山区科苑路16号东方科技大厦1411" }] }]
                    }] }
            }
        },
        methods: {
            showDetail: function showDetail(item) {
                item.isOpen = !item.isOpen;
            },
            toggle: function toggle(i, v) {
                this.active = i;
                // this.currentView = v
            }
        },
        components: {},
        computed: {},
        mounted: function mounted() {}
    });
});
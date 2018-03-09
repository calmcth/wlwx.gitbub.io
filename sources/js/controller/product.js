"use strict";

$(function () {
    // 产品页/关于我们导航添加 active  方法调用
    addClassSubNav("#product_menu");addClassSubNav("#subNav");
    // 产品页banner图文案动态加载
    var $banner_txt1 = $("#banner_txt span");
    var $banner_txt2 = $("#banner_txt p");
    $banner_txt1.text($("#product_menu .active span").text());
    if ($banner_txt1.text() == "行业短信") {
        $banner_txt2.text("运营商战略合作，三网合一通道稳定速率快");
    } else if ($banner_txt1.text() == "语音验证码") {
        $banner_txt2.text("全国全网覆盖，三秒钟响应，100%到达");
    } else if ($banner_txt1.text() == "流量业务") {
        $banner_txt2.text("一站搞定全国流量，全方位提升用户体验");
    } else if ($banner_txt1.text() == "彩信服务") {
        $banner_txt2.text("长短信、多图文、视音频多媒体全方位展示时尚新颖，图文并茂，生动直观");
    } else if ($banner_txt1.text() == "国际短信") {
        $banner_txt2.text("支持全球200+国家与地区多语言、运营商支持");
    }
});
// 产品页/关于我们导航添加 active
function addClassSubNav(el) {
    $(el + " a").each(function () {
        if ($(this)[0].href == String(window.location)) {
            $(el + " li").removeClass("active");
            $(this).parent().addClass("active");
        }
    });
};
// 产品 -- 精准营销
function tab(el) {
    $(el).addClass("active").siblings().removeClass("active");
    var $index = $(el).index();
    $("#content" + $index).addClass("open").siblings().removeClass("open");
}
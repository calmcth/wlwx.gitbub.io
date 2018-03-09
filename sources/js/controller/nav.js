"use strict";

$(function () {
    nav("#menus");
});
// 整站导航添加 active
function nav(el) {
    $(el + " a").each(function () {
        if ($(this)[0].href == String(window.location)) {
            $(el + " li").removeClass("active");
            $(this).parents(".menu").addClass("active");
        }
    });
};
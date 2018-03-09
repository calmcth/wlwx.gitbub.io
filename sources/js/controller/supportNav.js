"use strict";

$(function () {
    nav("#supportMenus");
});
// 整站导航添加 active
function nav(el) {
    $(el + " a").each(function () {
        if ($(this)[0].href == String(window.location)) {
            $(el + " li").removeClass("active");
            $(this).parents(".support_menu").addClass("active");
        }
    });
};
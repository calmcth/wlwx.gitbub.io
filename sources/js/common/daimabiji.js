$(function(){
    yy("nav");
    // var ind = 3;
    // var nav = $(".nav");
    // var init = $(".nav .m").eq(ind);
    // var block = $(".nav .block");
    // block.css({
    //     "left": init.position().left - 3
    // });
    // nav.hover(function() {},
    // function() {
    //     block.stop().animate({
    //         "left": init.position().left - 3
    //     },
    //     300);
    // });
    // $(".nav").slide({
    //     type: "menu",
    //     titCell: ".m",
    //     targetCell: ".sub",
    //     effect:"slideDown",
    //     delayTime: 300,
    //     triggerTime: 0,
    //     returnDefault: true,
    //     defaultIndex: ind,
    //     startFun: function(i, c, s, tit) {
    //         block.stop().animate({
    //             "left": tit.eq(i).position().left - 3
    //         },
    //         300);
    //     }
    // });
    /**
     * 为元素移除class
     * @param {HTMLElement} ele
     * @param {String} cls
     */
    function removeClass(ele,cls) {
        if(hasClass(ele,cls)){
            var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)');
            ele.className=ele.className.replace(reg,'');
        }
    }

    function addClass(ele,cls) {
        if(!hasClass(ele,cls)){
            ele.className+=' '+cls;
        }
    }
    function hasClass(ele,cls) {
        return (new RegExp('(\\s|)'+cls+'(\\s|$)')).test(ele.className);
    }


    function yy(a) {
        var lock = true;
        if($(window).scrollTop() >= 60 ){
            addClass(document.getElementById(a),'s_down');
        }
        $(window).scroll(function() {
            if (lock) {
                var before = $(window).scrollTop();
                $(window).scroll(function() {
                    var after = $(window).scrollTop();
                    if(before < after) {
                        before = after;
                        addClass(document.getElementById(a),'s_down');
                    }
                    if(after <60) {
                        removeClass(document.getElementById(a),'s_down');
                    }
                });
                lock =false;
                setTimeout(function(){
                    lock = true;
                },500);
            }
        });
    }
});



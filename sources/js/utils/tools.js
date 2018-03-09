define([], function () {
    var requestAnimFrame=(function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {
            window.setTimeout(callback,1000/60);
        }
    })();

    /**
     * 判断元素是否有某个class
     * @param {HTMLElement} ele
     * @param {String} cls
     * @returns {boolean}
     */
    function hasClass(ele,cls) {
       return (new RegExp('(\\s|)'+cls+'(\\s|$)')).test(ele.className);
    }

    /**
     * 为元素添加class
     * @param {HTMLElement} ele
     * @param {String} cls
     */
   function addClass(ele,cls) {
       if(!hasClass(ele,cls)){
           ele.className+=' '+cls;
       }
   }

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

    /**
     * 获取滚动条距顶部的距离
     * @returns {Element|number}
     */
   function getScrollTop() {
       return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
   }

    /**
     * 设置滚动条距顶部的距离
     * @param value
     * @returns {*}
     */
   function setScrollTop(value) {
       window.scrollTo(0,value);
       return value;
   }

    /**
     * 在${duration} 时间内，滚动条平滑滚动到 ${to} 指定位置
     * @param {Number} to
     * @param {Number} duration
     */
   function scrollTo(to,duration) {
       if(duration < 0){
           setScrollTop(0);
           return
       }
       var diff=to-getScrollTop();
       if(diff === 0) return;
       var setp=diff/duration *10;

       requestAnimFrame(function () {
           if(Math.abs(setp) > Math.abs(diff)){
               setScrollTop(getScrollTop()+diff);
               return;
           }

           setScrollTop(getScrollTop()+setp);

           if(diff >0 && getScrollTop()>=to || diff<0 &&getScrollTop()<=0){
               return
           }
           scrollTo(to,duration-16);
       })
   }

   return {
       hasClass:hasClass,
       addClass:addClass,
       removeClass:removeClass,
       getScrollTop:getScrollTop,
       setScrollTop:setScrollTop,
       scrollTo:scrollTo
   }
});
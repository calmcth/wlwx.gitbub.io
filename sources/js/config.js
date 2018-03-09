/**
 *
 * @type {{basePath, isDebug}}
 * basePath:配置ajax 请求数据
 */
window.globalConfig = (function(){
    return {
        basePath:"http://"+window.location.host
    }
})();
/* 通配符的使用方式
   * 匹配任意数量的字符，但不匹配 /
   ? 匹配单个字符，但不匹配 /
   ** 匹配任意数量的字符，包括/，只要它是路径中唯一的一部分
   {} 允许使用一个逗号分割的列表或者表达式
   ! 在模式的开头用于否定一个匹配模式(即排除与模式匹配的信息)
    大多数的人都知道foo/*.js将匹配位于foo/目录下的所有的.js结尾的文件。
    foo/**而将匹配foo/目录以及其子目录中所有以.js结尾的文件。
*/
fis.set('project.ignore', [
  'vendor/**',
  'node_modules/**',
  'dist/**'
]);

// npm install -g fis3-parser-less-2.x 启动构建less
fis.match('sources/static/style/**.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    })
});
//追加文本文件后缀列表。
fis.set('project.fileType.text', 'js');
//转译
fis.match('/sources/js/controller/**.js', {
    parser: fis.plugin('babel-6.x', {
        presets: ['es2015']
    }),
    rExt:'js'
});

//fis用于编译velocity模板的解析器。
fis.match("**.html", {
    parser: fis.plugin("vm")
});

// 清除其他配置，只保留如下配置
/*fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});*/

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

//将less转换出来的css与其他css合并
/*fis.match('static/less/!*.{less,css}', {
  packTo: '/static/erp_app.css'
});*/

//配置本地部署，将 fis3 编译产出到指定目录
fis.media('pro').match('/sources/**', {
    //release: '/dist/$0'
    deploy: fis.plugin('local-deliver', {
        to: 'D:/host/dist'
    })
}).match('**.html', {
    // release: '/dist/$0'
    deploy: fis.plugin('local-deliver', {
        to: 'D:/host/dist'
    })
}).hook('relative').match('**', {
    relative: true
});

//添加时间戳
fis.set('date', new Date);
fis.match('*.{js,css,png}', {
    query: '?t=' + (fis.get('date').getTime() + 'v1.0.0')
});

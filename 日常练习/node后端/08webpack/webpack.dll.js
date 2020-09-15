const path = require('path');
// dll
const webpack = require('webpack');


module.exports = {
    /**
     * 性能优化-DLL-指定某些包不被打包
     * 需要运行webpack.dll.js文件
     * 修改webpack配置 webpack --config webpack.dll.js
     */
    entry: {
        // jquery 最终打包生成的name
        // ['jquery'] 要打包的库是jquery
        jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dll'),
        library: '[name]_[hash]' // 打包库里面向外面暴露出去的内容叫什么名字
    },
    plugins: [
        new webpack.DllPlugin({
            // 打包生成一个mainfest.json，用于提供和jquery映射
            name: '[name]_[hash]', // 映射库暴露的内容名称 
            path: path.join(__dirname, 'dll/manifest.json'), // 输出文件路径

        })
    ]
}
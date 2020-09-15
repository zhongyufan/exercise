const path = require('path');
// 自动编写html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// JS中抽离CSS插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// 新构建自动删除旧文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// PWA
const WorkBoxWebpackPlugin = require('work-box-webpack-plugin');
// dll
const webpack = require('webpack');
// 配合dll自动向html引入文件
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

// 设置node.js环境变量
process.env.NODE_ENV = 'development';

/**
 * 🔍 搜索目录
 * 1、HTMl压缩
 * 2、CSS压缩
 * 3、JS压缩
 * 4、打包HTML资源
 * 5、打包样式资源
 * 6、打包图片资源
 * 7、打包其他资源
 * 8、devServer
 * 9、开发环境配置
 * 10、生产环境配置
 *     11、抽离CSS
 *     12、ESlint
 *     13、性能优化-HMR-热模块替换
 *     14、性能优化-sourcemap-代码源头追踪
 *     15、性能优化-oneOf
 *     16、性能优化-缓存
 *     17、性能优化-treeshaking
 *     18、性能优化-codesplit-代码分割
 *            方法三在index.js中
 *     19、性能优化-lazyloading-懒加载/预加载
 *     20、性能优化-PWA-渐进式网络开发应用程序（离线可访问）
 *     21、性能优化-多进程打包
 *     22、性能优化-externals-指定某些包不被打包，防止cnd链接库被打包
 *     23、性能优化-DLL-指定某些包不被打包 (在webpack.dll.js文件中)
 * 注意：如果path.join无法使用 则使用resolve代替 resolve从path结构中得出
 */

 /**
  * 性能优化-treeshaking
  * 比喻：一颗树有新叶老叶，摇一摇老叶自动掉落
  * 用处：去除无用代码
  * 1、必须使用ES6模块化
  * 2、开启production环境
  * 在package.json中配置 "sideEffects":false 所有代码都没有副作用（都可以进行treeshaking）
  * 问题可能把css / @babel/polyfill 等文件干掉
  * "sideEffects":["*.css","*.less"] 标记不要进行treeshaking
  */
module.exports = {
    // 入口
    entry: '/src/index.js',
    /**
     * 性能优化-codesplit-代码分割
     * 方式一
     */
    // 多入口
    // entry: {
    //     main: '/src/index.js',
    //     test: '/src/xxx.js',
    // },
    // 输出
    output: {
        // 名字
        filename: 'js/built.js',
        // [name]取文件名 [contenthash]前10位contenthash值
        // filename: 'js/[name].[contenthash:10].js',
        // 路径
        path: path.join(__dirname, 'build')
    },
    // 识别其他文件
    module: {
        rules: [
            /**
             * ESlint
             */
            /**
            * 语法检查 ESlint eslint-loader
            * 注意：只检查自己写的源代码
            * 设置检查规则 package.json -> eslintConfig 设置
            * 推荐使用 airbnb eslint-config-airbnb-base（去base包含react风格）
            */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // 自动修复错误
                    fix: true
                }
            },
            {
                /**
                 * 性能优化-oneOf
                 */
                // 以下loader只会匹配一个，不能有多个配置处理同一类型文件
                oneOf: [
                    {
                        /**
                         * 打包样式资源
                         */
                        // 注意：css是插入在js文件中
                        // 匹配文件
                        test: /\.css$/,
                        // 使用loader处理
                        use: [
                            /**
                             * 抽离CSS
                             */
                            // 执行顺序为从下到上
                            // 'style-loader',
                            MiniCssExtractPlugin.loader, // 取代style-loader提取css为单独文件
                            'css-loader',
                            /**
                             * css兼容性处理 postcss
                             * postcss-preset-env 插件帮助postcss找到package.json中browserslist里面的配置
                             * 具体配置查看browserslist文档
                             * 默认使用生产环境，开发环境需要设置node的环境
                             */
                            //'postcss-loader', -使用默认值 
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    plugins: () => [
                                        // postcss的插件
                                        require('postcss-preset-env')()
                                    ]
                                }
                            }
                        ]
                    }, {
                        // 注意：css是插入在js文件中
                        test: /\.less$/,
                        use: [
                            'style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    },
                    /**
                     * 打包图片资源
                     */
                    // 打包图片资源
                    // 问题：处理不了html中img图片
                    {
                        test: /\.(jpg|png|gif)$/,
                        loader: 'url-loader',
                        options: {
                            // 图片大小小于8kb，就会被base64处理（8～12kb都是可以接受）
                            // 优：减少请求数量
                            // 缺：图片体积更大
                            limit: 8 * 1024,
                            // 问题：因为url-loader默认使用es6模块化解析，html-loader默认使用commonjs模块化解析
                            // 关闭es6模块化，使用commonjs解析
                            esModule: false,
                            // 给图片进行重命名
                            // hash - 取10位
                            // ext - 文件原扩展名
                            name: '[hash:10].[ext]',
                            // 输出目录位置
                            outputPath: 'img'
                        }
                    },
                    // 处理html文件中的img图片
                    {
                        test: /\.html$/,
                        loader: 'html-loader'
                    },
                    /**
                     * 打包其他资源
                     */
                    // 打包其他资源 例如字体
                    {
                        // 排除需要打包的资源
                        exclude: /\.(css|js|html｜png)$/,
                        loader: 'file-loader'
                        // 可以加入options修改名字
                    },
                    /**
                     * js兼容性处理：babel-loader
                     */
                    {
                        
                        test: /\.js$/,
                        exclude: /node_modules/,
                        /**
                        * 性能优化-多进程打包
                        * 进程启动时间大概600ms,进程通讯也有开销
                        * 只有工作时间比较长，才需要多进程打包 例如js
                        */
                        use: [{
                            loader: 'thread-loader',
                            options: {
                                workers:2 // 开启两个进程
                            }
                        },'babel-loader'],
                        options: {
                            // 预设 基本js兼容性处理
                            // presets: ['@babel/preset-env']

                            // 预设 全部js兼容性处理 在入口文件引入@babel/polyfill

                            // 预设 按需加载 core.js
                            presets: ['@babel/preset-env', {
                                // 按需加载
                                useBuiltIns: 'usage',
                                // 指定版本
                                corejs: {
                                    version: 3
                                },
                                // 指定兼容性支持的浏览器版本
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    ie: '9',
                                    safari: '10',
                                    edge: '17'
                                }
                            }],
                            /**
                             * 性能优化-缓存
                             * 文件资源缓存在总章
                             */
                            // 开启babel缓存，二次构建读取缓存
                            cacheDirectory:true
                        }
                    }
                ],
            }
        ]
    },
    // 插件
    pulgins: [
        /**
         * 打包HTML资源
         */
        // html-webpack-pulgin 默认创建一个空HMTL文件，引入打包输出的所有资源
        new HtmlWebpackPlugin({
            // 复制文件，并自定引入打包输出的所有资源
            template: './src/index.html',
            /**
             * HTMl压缩
             */
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        }),
        // 从js中提取css
        new MiniCssExtractPlugin({
            // 重命名输出的css
            filename: 'css/built.css'
        }),
        /**
         * CSS压缩
         */
        // 压缩CSS
        new OptimizeCssAssetsWebpackPlugin(),
        // 新构建自动删除旧文件
        new CleanWebpackPlugin(),
        /**
         * 性能优化-PWA-渐进式网络开发应用程序（离线可访问）
         */
        new WorkBoxWebpackPlugin({
            // 帮助serviceworker快速启动
            // 删除旧的serviceworker
            // 生成一个serviceworker配置文件，在入口文件中注册
            clientsClaim: true,
            skipWaiting: true
        }),
        /**
         * 性能优化-DLL
         */
        new webpack.DllReferencePlugin({
            manifest: path.join(__dirname,'dll','manifest.json')
        }),
        // 将某个文件打包输出并在html中自动引入资源
        new AddAssetHtmlWebpackPlugin({
            filepath: path.join(__dirname, 'dll/jquery.js')
        })
    ],
    /**
     * 性能优化-codesplit-代码分割
     * 方式二
     */
    // 将node_modules中代码单独打包成一个chunk最终输出
    // 自动分析多入口文件中有没有公共文件，如果有会打包成单独一个chunk
    optimization: {
        splitChunks: {
          chunks:'all'
      }  
    },
    // 模式
    /**
     * 开发环境配置
     * css使用style-loader支持HMR
     */
    /**
     * JS压缩
     */
    mode: 'development', // production 生产环境自动压缩JS
    /**
     * devServer
     */
    // 开发服务器 devServer 自动化
    // 启动指令 npx webpack-dev-server（npx 启动内置模块）
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        // 启动gzip压缩
        comress: true,
        port: 3000,
        open: true,
        /**
         * 性能优化-HMR-热模块替换
         */
        // 开启HMR功能
        hot: true,
        /**
         * 性能优化-sourcemap-代码源头追踪
         */
        devtool: 'source-map',
    },
    /**
     * 性能优化-externals-防止cnd链接库被打包
     */
    externals: {
        // 拒绝jQuery被打包进来
        jquery: 'jQuery'
    }
    /**
     * 生产环境配置
     */
    // 生产环境：
    // 1、CSS抽离JS（CSS插入JS中 导致JS文件过大页面闪屏 ）
    // 2、代码压缩
    // 3、兼容性问题
    // ...

    /**
     * 性能优化
     * -开发环境性能优化
     * 
     * --优化打包构建速度
     * ---HMR 热模块替换，只会重新打包修改的模块
     * ----css文件 style-loader内部实现HMR功能，因此推荐开发环境使用
     * ----js文件 默认不支持HMR 需要在index.js中添加代码，只能处理非入口文件
     * ----html文件  默认不支持HMR，导致文件不能热更新，解决方法修改entry入口，将html文件加入入口（不需要做HMR功能，因为只有一个文件）
     * ---oneOf
     * ---缓存（babel、字体、图片）
     * ----在module-rules中使用oneOf oneOf内的loader只会匹配一个
     * 
     * --优化代码调试
     * ---source-map 一种提供源代码到构建后代码映射技术（如果构建后代码出错，通过映射可以定位到源代码错误）
     * ----[inline|hidden|eval][nosources][cheap[-module]]-source-map
     * ----开发环境推荐使用 eval-source-map
     * ----生产环境推荐使用 source-map 隐藏代码推荐 nosources-source-map / hidden-source-map
     * 
     * -生产环境性能优化
     * 
     * --优化打包构建速度
     * 
     * --优化代码运行性能
     * ---文件资源缓存
     * ----hash：文件名带上.[hash:10] 服务器使用缓存，如果文件资源改变，hash值也随之变化，缓存失效。问题：JS和CSS同时使用一个hash值，如果重新打包会导致两者都失效
     * ----chunkhash：文件名带上.[chunkhash:10] 根据chunk生成hash，如果打包来源同一chunk，那么hash值一样。问题同上
     * ----contenthash：文件名带上.[contenthash:10] 根据文件的内容生成hash值
     */
}
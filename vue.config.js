const moment = require('moment'); //引入时间插件
let date = moment().format("YYYYMMDD-HHmm"); //创建打包时间
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); // 引入webpack插件
let outputDir = process.env.VUE_APP_OUTDIR + date //打包目录
module.exports = {
    publicPath:'./',
    outputDir: outputDir,
    assetsDir:'./static',
    indexPath:'./index.html',
    configureWebpack: {
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        warnings: false,
                        compress: {
                            drop_console: true, // console
                            drop_debugger: false,
                            pure_funcs: ["console.log"] // 移除console
                        }
                    }
                })
            ]
        },
        plugins: [],
        externals: {
            vue: "Vue",
        }
    },
}
const moment = require('moment');
let date = moment().format("YYYYMMDD-HHmm");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
let outputDir = process.env.VUE_APP_OUTDIR + date
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
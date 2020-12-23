const CompressionPlugin = require("compression-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports ={
    publicPath:"/",
    outputDir: 'dist',
    productionSourceMap: false,
    configureWebpack:config=>{
        return{
            plugins: [
                //开启gzip
                new CompressionPlugin({
                    filename:'[path].gz[query]',
                    algorithm:"gzip",
                    test:new RegExp('\\.(js|css)$'),
                    threshold:10240,
                    minRatio:0.8,
                }),
                // 去除console.log&代码压缩
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            warnings: false,
                            drop_console: true,
                            drop_debugger: true,
                            pure_funcs: ['console.log']
                        },
                        sourceMap: true,
                    }
                })
            ]
        }
    },
    chainWebpack(config) {
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 要公用的scss的路径
                    resources: './src/assets/css/common.scss'
                })
                .end()
        })
    },


};

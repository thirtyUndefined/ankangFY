module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: 'http://localhost:3033'
            }
        }
    },
    configureWebpack: {
        externals: {
            "BMap": "BMap"
        }
    }
}
const EjsWebpackPlugin = require('ejs-webpack-plugin');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname +'/dist',
        filename:'bundle.js' 
    }
}
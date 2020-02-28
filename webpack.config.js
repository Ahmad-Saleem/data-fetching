var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './main.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'data-fetching.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'production',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'examples/index.html'
        })
    ]

}
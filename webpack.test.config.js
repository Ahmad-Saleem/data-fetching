var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry : './examples/index.js',
    output : {
        path : path.resolve(__dirname , './examples'),
        filename: 'bundle.js',
        library: 'data-fetching',      
        libraryTarget: 'umd',      
        publicPath: '/examples/',      
        umdNamedDefine: true  
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'index.html'
        })
    ],
    resolve: {      
        alias: {          
          'react': path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
        }  
    },  
    externals: {      
        // Don't bundle react or react-dom      
        react: {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        }  
    } 
}
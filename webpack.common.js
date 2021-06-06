const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports ={

    entry: './src/index.ts',
    plugins: [new HtmlWebpackPlugin({
        template:'./src/template.html'
    })],
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include:[path.resolve(__dirname, 'src')]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    },
    resolve:{
        extensions:['.ts', '.js']
    },


}
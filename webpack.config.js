const path = require('path');

module.exports ={
    mode:'development',
    devtool:'eval-source-map',
    entry: './src/index.ts',
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include:[path.resolve(__dirname, 'src')]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    resolve:{
        extensions:['.ts', '.js']
    },
    output:{
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public') 
    }
}
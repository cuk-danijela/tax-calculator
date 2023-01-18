// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'), // source folder path -> ADDED IN THIS STEP
    JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },

    mode: 'development',
    // Dev server configuration -> ADDED IN THIS STEP
    // Now it uses our "src" folder as a starting point
    devServer: {
        static: {
            directory: path.SRC
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
    ],
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            { 
                test: /\.(jpg|png|svg|gif)$/, 
                type: 'asset/resource', 
            },
        ],

    },
    // Enable importing JS files without specifying their's extenstion -> ADDED IN THIS STEP
    //
    // So we can write:
    // import MyComponent from './my-component';
    //
    // Instead of:
    // import MyComponent from './my-component.jsx';
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
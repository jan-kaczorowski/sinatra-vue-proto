const webpack = require('webpack')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    main: path.resolve( __dirname, 'src/main' ),
  },
  output: {
    path: path.resolve( __dirname, 'build' ),
    filename: 'prodapp.[contenthash].js'
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  mode: 'development',
  module: {

    rules: [{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ],
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }
  ]


    // rules: [

    //   {
    //     test: /\.vue$/,
    //     loader: 'vue-loader',
    //     options: {
    //       loaders: {
    //         use: [
    //           'vue-style-loader',
    //           'css-loader',
    //           'sass-loader'
    //         ]
    //       }
    //     }
    //   },
    //   // Babel loader, will use your project’s .babelrc
    //   {
    //     test: /\.js?$/,
    //     exclude: /node_modules/,
    //     loader: 'babel-loader'
    //   },
    //   // Other loaders that are needed for your components
    //   {
    //     test: /\.scss$/,
    //     use: [
    //       'vue-style-loader',
    //       'css-loader',
    //       'sass-loader'
    //     ]
    //   },
    //   {
    //     test: /\.(png|jpg|gif|svg)$/,
    //     loader: 'file-loader',
    //     options: {
    //       name: '[name].[ext]?[hash]'
    //     }
    //   }


    //   // {
    //   //   test: /\.vue$/,
    //   //   loader: 'vue-loader',
    //   //   options: {
    //   //     loaders: {}
    //   //   }
    //   // },
    //   // {
    //   //   test: /\.js$/,
    //   //   loader: 'babel-loader',
    //   //   exclude: /node_modules/
    //   // },
  
    //   // {
    //   //   test: /.css$/,
    //   //   use: [
    //   //     'vue-style-loader',
    //   //     'css-loader',
    //   //   ]
    //   // }
    // ]
  }

}


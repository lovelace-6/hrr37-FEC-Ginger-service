const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,

  output: {
    filename: 'bundle-author.js',
    path: `${__dirname}/public`,
  },


  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /.js$|\.jsx$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8

    })
  ]


};

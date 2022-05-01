const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name][contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|mp4)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.png',
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: './.env',
      systemvars: true,
    }),
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
    // watchContentBase: true,
    // progress: true,
    open: true,
    hot: true,
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      ui: path.resolve(__dirname, 'src/ui'),
      utils: path.resolve(__dirname, 'src/utils'),
      assets: path.resolve(__dirname, 'src/assets'),
      api: path.resolve(__dirname, 'src/api'),
      '@redux': path.resolve(__dirname, 'src/redux'),
    },
    extensions: ['.js', '.jsx']
  },
}

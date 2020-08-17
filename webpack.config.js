const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'main.js'),
  watch: false,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          {
            loader: path.resolve(__dirname, 'inspect.js')
          },{
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};
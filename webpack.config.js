var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  //This is the entry point of the app to go into the webpack (it's an array bc you can have multiple entry points)
  entry: [
    './app/index.js'
  ],
  //This is where we install outside loaders to process our code into regular JS (in this app, babel loader will be used to convert JSX into JS)
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  //Where and how we should output the code
  output: {
    filename: "index_bundle.js",
    //__dirname just refers to the current directory that the script resides in
    path: __dirname + '/dist'
  },
  plugins: [HtmlWebpackPluginConfig]
}

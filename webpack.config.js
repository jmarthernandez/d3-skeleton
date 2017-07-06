module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};

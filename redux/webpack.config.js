/*global module */
module.exports = {
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?stage=0'}
    ]
  }
};


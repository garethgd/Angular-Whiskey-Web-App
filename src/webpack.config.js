var path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loeader: 'file-loader',
          options:{
            name: '[name].[ext]',
            
          }
        }]
      }
    ]
  }
};

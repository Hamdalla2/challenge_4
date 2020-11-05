module.exports = {
  entry: __dirname + '/public/app.jsx',
  module : {
    rules : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  
          options: {
            presets: ['react', 'es2015']  
        }
      }
    }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
};
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { watchFile } = require('fs');


module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".tsx",".ts",".js"]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "index.html" },
      ],
    }),
  ],
  devServer: {
    watchFiles: ["./src/**/*"],
  },
};
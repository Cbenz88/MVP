const path = require('path');
const entry = path.join(__dirname + '/client/src');
const output = path.join(__dirname + '/client/dist');

module.exports = {
   entry: `${entry}/app.jsx`,
   output: {
     filename: "bundle.js",
     path: output
   },
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         use: "babel-loader"
       },
       {
         test: /\.css$/,
         use: ["style-loader", "css-loader"]
       }
     ]
   }
  };
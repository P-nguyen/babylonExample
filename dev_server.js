const express = require('express')

// const path = require("path");
const { resolve } = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const PORT = process.env.PORT || 3000;
const app = express();
const config = require('./webpack.config');
const complier = webpack(config);


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'dist','index.html'));
});

app.use(webpackDevMiddleware(complier, {
  contentBase: resolve( __dirname, 'dist'),
  publicPath: '/',
  historyApiFallback: true

}));

const mapImages = express.static(resolve(__dirname, 'server/maps/'));
app.use('/maps', mapImages);

// app.use( '/' , express.static(path.join(__dirname ,'game','assets','map')));

app.listen(PORT, () => {
  console.log('Example app listening on port: ', PORT)
});
/* eslint no-console: 0 */

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import _ from 'underscore';

import config from './webpack.config';

const app = express();
const PORT = 3000;
const hmrClient = 'webpack-hot-middleware/client?path=http://localhost:' + PORT + '/__webpack_hmr&reload=true';
const setupHmr = {};
Object.keys(config.entry)
  .forEach(path => {
    setupHmr[path] = _.flatten([hmrClient, config.entry[path]]);
  });
config.entry = setupHmr;

const compiler = webpack(config);

const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
});

app.use(wdm);

app.use(webpackHotMiddleware(compiler));

const server = app.listen(PORT, 'localhost', err => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Listening at http://localhost:${PORT}`);
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

process.on('SIGTERM', () => {
  console.log('Stopping dev server');
  wdm.close();
  server.close(() => {
    process.exit(0);
  });
});

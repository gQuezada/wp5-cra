
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const openBrowser = require('react-dev-utils/openBrowser');
const createDevServerConfig = require('../config/webpackDevServer.config');
const configFactory = require('../config/webpack.config');

const {
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');

const protocol = 'https';

const urls = prepareUrls(
  'http',
  process.env.HOST || '0.0.0.0',
  3000,
  '/'
);

const config = configFactory('development');
const compiler = webpack(config);

const serverConfig = createDevServerConfig();
const devServer = new WebpackDevServer(compiler, serverConfig);
devServer.listen(3000, 'localhost', err=>{
  console.log(err);
  openBrowser(urls.localUrlForBrowser);
})


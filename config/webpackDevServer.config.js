module.exports = function () {
  return {
    contentBase: process.cwd()+'/build',
    port: 3000,
    hot: true,
  };
};

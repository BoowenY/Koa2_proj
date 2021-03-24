const errorHandler = (error, ctx) => {
  console.log(error.message);
  ctx.status = 404;
  ctx.body = "发生错误"
};
module.exports = errorHandler;

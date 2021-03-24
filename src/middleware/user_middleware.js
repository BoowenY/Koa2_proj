const verifyUser = async (ctx, next) => {
    const {name, password} = ctx.request.body;
    //判断用户名或者密码不能为空
    if(name || !password || name == '' || password == '') {
        const error = new Error("用户名或者密码不能为空");
        return ctx.app.emit('error',error, ctx);
    }
 await next();
}
module.exports = {
    verifyUser
}
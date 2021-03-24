const service = require("../service/user_service.js");
class UserController {
  async create(ctx, next) {
    //获取用户请求传递的参数
    const user = ctx.request.body;
    //查询数据
    const res = await service.create(user);
    ctx.body = res;
    //返回数据
  }
}
module.exports = new UserController();

/*
 * @Author: yaoyue
 * @Date: 2021-07-20 10:09:26
 * @LastEditTime: 2021-07-22 10:24:22
 * @LastEditors: Please set LastEditors
 * @Description: 通用接口，如 login / upload
 * @FilePath: \Base-Koa\router\index.js
 */
const router = require("koa-router")();
const { handleLogin } = require("../../components/User/control");
const { handleUpload } = require("../../components/Common");

router.get("/", async (ctx, next) => {
  ctx.body = {
    msg: "你的世界变得那么大了，我也就变得可有可无了",
  };
});

// 图片上传接口
const KoaBody = require("koa-body");
router.post("/upload", handleUpload);

// 验证码生成接口
const { getCode } = require("../../Config/Verification");

router.get("/captcha", (ctx) => {
  let code = getCode();
  ctx.body = Result.success("获取验证码成功", code);
  //code.test.toLowerCase() 该数据为验证码内容
});

router.post("/login", handleLogin);

module.exports = router;
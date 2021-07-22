/*
 * @Author: yaoyue
 * @Date: 2021-07-20 10:09:26
 * @LastEditTime: 2021-07-22 11:03:42
 * @LastEditors: Please set LastEditors
 * @Description: app
 * @FilePath: \Base-Koa\app.js
 */
const Koa = require("koa2");
const { Base } = require("./Config/index");
const app = new Koa();
const path = require("path");

const { AddRouter } = require("./bin/router.js");

//bodyParser
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.body = {
      code: 500,
      msg: "服务器错误",
      data: error,
    };
  }
});
//听说这样才能用到request.body
const bodyparser = require("koa-body");
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
    multipart: true, // ***** 就是这个 (是否支持 multipart-formdate 的表单)
    formidable: {
      keepExtensions: true,
    },
  })
);

// cors 跨域
const cors = require("koa-cors");
app.use(cors());

//static
const KoaStatic = require("koa-static");
app.use(KoaStatic(path.join(__dirname, "/public")));

// 登录拦截
// const FILTER = require("./Config/interceptor");
// FILTER(app);

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

AddRouter(app);
app.listen(Base.port);

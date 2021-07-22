<!--
 * @Author: your name
 * @Date: 2021-07-20 10:09:26
 * @LastEditTime: 2021-07-22 10:11:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Base-Koa\README.md
-->

# YY_BASE_KOA_JS

##这里是 yyue 写的一部基础框架

#安装

- npm i

#运行基础程序

- npm start

#功能介绍

- 实现了文件上传接口，
- 封装了验证码
- 将整个功能模块合在一起，作为 components 来实现具体的功能，结构可能会有些复杂,但我还是分开了，嘿嘿
- 提供了密码加密和 token 生成，校验模式
- 实现登录拦截功能，不登陆就没法进行其他请求
- 短语验证可以实现，基于阿里云的
- 对于返回数据继续了基本的封装，后续可以改进

#待完成功能

- 这里是列表文本文件上传进行具体分类，主要途径是限制具体上传格式
- 验证功能，这个功能我在 controller 进行了控制，但是拆分出来多少有一点不习惯
- 基本配置如防止爬虫、减少请求次数、减缓服务器压力

#对自己要求
1、完善整体操作逻辑，实现企业级的后端基本要求
2、对于所用库的是否满足条件和其他性能

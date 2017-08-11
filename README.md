# 基于vue2和Element UI 页面模板

## 使用组件介绍
|项目| 地址| 描述|
|:---|:---|:---|
|vue2|[https://www.vuefe.cn/v2/guide/](https://www.vuefe.cn/v2/guide/)|构建用户界面(user interface)的渐进式框架|
|vue-router|[https://github.com/vuejs/vue-router](https://github.com/vuejs/vue-router)|vue页面路由组件|
|Element UI|[http://element.eleme.io](http://element.eleme.io/#/zh-CN)|基于 Vue 2.0 的组件库|
|axios|[https://github.com/mzabriskie/axios](https://github.com/mzabriskie/axios)| http请求替代vue-resource|
|webpack|[https://webpack.js.org/](https://webpack.js.org/)|编译打包工具|

## 使用步骤

1.按照node.js建议按照6或7版本

2.使用npm按照vue
>npm install -g vue-cli

由于网络原因可以考虑使用淘宝提供的npm镜像按照[https://npm.taobao.org/](https://npm.taobao.org/)

npm install -g cnpm --registry=https://registry.npm.taobao.org

3.运行

命令行进入项目目录执行
>npm install #按照组件

>npm run dev #开发运行

>npm run build #上线打包

mpm命令介绍：
```
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

alias: npm i
common options: [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]

-S, --save 安装包信息将加入到dependencies（生产阶段的依赖）
-D, --save-dev 安装包信息将加入到devDependencies（开发阶段的依赖），所以开发阶段一般使用它
-O, --save-optional 安装包信息将加入到optionalDependencies（可选阶段的依赖）
-E, --save-exact 精确安装指定模块版本,留意package.json 文件的 dependencies 字段，以看出版本号中的^消失了
注：全局安装（global）,使用 -g 或 --global
```
默认安装最新版本，npm install 组件@3.9.1 指定版本号


npm init vue-cli 在项目中引导创建一个vue项目工程
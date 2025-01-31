# chaoxing-sign-ui

基于 React.js, 使用 Material UI 组件库构建。作为 [chaoxing-sign-cli](https://github.com/cxOrz/chaoxing-sign-cli) 的客户端，欢迎对本仓库代码进行二次开发。

> 注意：本页面只针对此前端项目进行介绍，如需搭配服务端使用，请移步 [这里](https://github.com/cxOrz/chaoxing-sign-cli#%E8%BF%90%E8%A1%8C%E6%8E%A5%E5%8F%A3%E6%9C%8D%E5%8A%A1) 。

## 描述

流程：克隆项目 -> 安装依赖 -> 构建项目 -> 部署

命令描述：

- `yarn install` ，安装依赖，如果时间太长请尝试挂代理或使用淘宝源。
- `yarn start` ，启动开发服务器，不要忘记把接口服务(另一个仓库)也运行起来。
- `yarn build` ，构建项目，输出到 build 文件夹。

## 配置

`src/config/api.js` ：该文件中配置 `baseUrl` 变量为接口地址，默认 `http://localhost:5000` 。若接口部署在服务器，不要忘记将接口地址改为服务器IP或绑定的域名。

`src/pages/DashBoard/DashBoard.js` ：若使用腾讯云的通用文字识别服务，二维码识别成功率极高，支持PNG、JPG、JPEG、PDF等格式，图片大小不能超过7M。查看此源码文件中的 parseEnc 函数，可注释掉默认识别函数，使用推荐的函数，同时需要在CLI项目中的 `src/functions/tencent/QrCodeOCR.js` 配置 `secretId` 和 `secretKey`。

## 最佳实践

使用 [腾讯云开发-静态网站托管](https://console.cloud.tencent.com/tcb/hosting)，将构建的网页部署进去。

步骤：
1. 确认已进行过必要的配置，例如接口地址、文字识别服务。
2. 在本地的项目目录下运行 `yarn build` 或 `npm run build` ，将构建网页并输出到 build 目录下。
3. 将 build 目录内的所有内容（不包括build文件夹），在静态网站托管页面上传。
4. 通过云开发的默认域名即可访问。

![](https://636c-cloudbase-1a4211-1252446325.tcb.qcloud.la/chaoxing-sign-ui/tcb-hosting.png?)
## 贡献

欢迎对本仓库提交代码，但在这之前请发起一个Issue描述你想要修改或提供的功能，经过讨论之后再确定是否进行下去，避免辛苦写完代码最终没有得到合并。本项目按照个人意愿进行开发，一些功能以及设计带有个人主观的想法，所以有想法要提交代码的朋友请一定先讨论一下。讨论过后请新建一个分支(以提供的功能命名），并在此分支完成你的代码，提交 pull request。请务必保持代码整洁和 commit 规范。

## 展示

![](https://636c-cloudbase-1a4211-1252446325.tcb.qcloud.la/chaoxing-sign-ui/1.png?)
![](https://636c-cloudbase-1a4211-1252446325.tcb.qcloud.la/chaoxing-sign-ui/2.png?)
![](https://636c-cloudbase-1a4211-1252446325.tcb.qcloud.la/chaoxing-sign-ui/4.png?)

## 鸣谢

非常感谢超星学习通，实践出真知。

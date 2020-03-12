# ningo-osc-node: 凝果开源社@开源社区孵化器

## 项目简介

暂略。

## 构建过程

```bash
$ nest new ningo-osc-node
$ yarn add @nestjs/swagger debug ip skyapm-nodejs swagger-ui-express
```

## 本地开发

强烈推荐使用 Yarn 来管理项目依赖库。

### 0. 全局依赖

```bash
yarn global add pm2 swagger
```

### 1. 克隆项目

配置 SSH

```bash
$ ssh-keygen -t rsa -b 4096 -C "${EMAIL}"
$ cat ~/.ssh/id_rsa.pub
```

克隆项目：

```bash
$ git clone ${PATH}
```

安装依赖：

```bash
$ yarn install
```

### 2. 分支开发

拉取远程 dev 分支：

```bash
$ git fetch origin dev:dev
```

本地建立负责的功能分支：

```bash
$ git checkout -b feat/${NAME}
```

推送本地分支至远程：

```
$ git push origin feat/${NAME}
```

热更新模式下运行开发模式：

```bash
$ yarn start:dev
```

### 3. 执行测试

运行单元测试代码：

```bash
$ npm run test
```

运行端到端测试代码：

```bash
$ npm run test:e2e
```

生成测试覆盖率：

```bash
$ npm run test:cov
```

### 4. 打包上线

## 开源协议

暂不开源，请自觉维护知识产权。
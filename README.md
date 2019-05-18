# ningo-osc-cms: 凝果开源社@开源社区孵化器

## 构建过程

1. 通过 ningo-vue-style 配置构建项目骨架。
2. 基于 ningo-git-style 协作规范安装依赖。

## 本地开发

> 强烈推荐使用 Yarn 来管理项目依赖库。

### 1. 安装

克隆项目：

```
git clone ${PATH}
```

安装依赖：

```shell
yarn install
```

拉取远程 dev 分支：

```shell
git fetch origin dev:dev
```

本地建立负责的功能分支：

```shell
git checkout -b feat/${NAME}
```

推送本地分支至远程：

```shell
git push origin feat/${NAME}
```

### 2. 开发

热更新模式下运行开发模式：

```shell
npm run serve
```

### 3. 测试

运行单元测试代码：

```shell
npm run test:unit
```

运行代码风格检查工具并自动进行风格修复：

```shell
npm run lint
```

### 4. 打包

> 后期引入 Electron 进行打包

编译并打包整个项目：

```shell
npm run build
```

## 自定义配置文件

后期将尝试把配置文件统一放置在根目录下的 config 文件夹中，具体参考 [Configuration Reference](https://cli.vuejs.org/config/)。

---
sidebar_position: 1
---

# Rao Pics 介绍

📌 把《素材管理 App》打造为**后台管理系统**，实现**局域网内实时查看**、App 之间 **互相导入导出**。

🍺 还可以和我([rao.pics](https://rao.pics))一样，实现自建 WEB 图片站、图床、在 NAS 中部署，也能实时**同步/查看**。

✌️ 而这些，你只需要一个网盘同步工具即可，我使用的是[MEGA](https://mega.nz/)。

🔴 原则：所有的功能，**不能修改 library 中的任何文件，破坏性写入**，导致你使用的 App 出现异常，**我深知素材数据对于你我的重要性。**

**支持的 App**：

- [Eagle - 图片收集及管理必备工具](https://eagle.cool)

## 设计理念

![](/img/preview.gif)

:::tip 如此简单 - 各司其职

- App 管理素材
- Core
  - 生成 Sqlite DataBase
  - 提供 Api 接口（可选）
  - NSFW 自动标签（可选）
- Web
  - 渲染网页

:::

## 快速开始

主要分为 2 个部分：

- Core - 包含将 App 转换为 **Sqlite Database**、生成对应的**API 接口**、**NSFW 并自动标签**
- Web - 网页展示页面

### ✅ Core 安装

拉取仓库：

```shell
git clone -b example https://github.com/rao-pics/core.git example
pnpm i
```

填写配置文件：

.env.example 改为 .env 正确填写 `LIBRARY`

```shell
# Eagle App 库文件夹地址 一般以 .library 结尾
LIBRARY=/Users/qymeet/Pictures/test.library

# prisma cli 命令时才需要，也可以使用系统同环境变量
# 参考：https://www.prisma.io/docs/guides/development-environment/environment-variables/managing-env-files-and-setting-variables
# 不建议修改此参数
DATABASE_URL=file:${LIBRARY}/raopics.db?connection_limit=1
```

数据库初始化：

```shell
pnpm db:init
```

启动服务：

```shell
pnpm start
```

打开 [http://localhost:4002/r](http://localhost:4002/r)，会随机显示一张 Library 中的图片。

### ✅ Web 安装

拉取仓库：

```shell
git clone https://github.com/rao-pics/rua.git
```

新建.env，填写 `API_HOST`

```shell
# 请求接口配置
API_HOST=http://localhost:4002
```

运行：

```shell
pnpm i
pnpm start
```

打开 [http://localhost:3000](http://localhost:3000)，访问网站。

## 特性

再次强调：所有的功能，**不能修改 library 中的任何文件，破坏性写入**，导致你使用的 App 出现异常，**我深知素材数据对于你我的重要性。**

- **🔌 扩展式。**不会对你现有的`library`进行任何修改。
- **⚡ 实时无等待，就是一个字，快！**
  - 导入一张或多张素材
  - 对素材进行操作，如：添加标签、移动到文件夹、添加注释、修改名字等
  - 新建文件夹、嵌套文件夹、新建标签、标签颜色等场景
- **🎨 高度还原 Eagle App 布局。** 减少你的使用/学习成本。
- **🐒 NSFW 自动标签**
  - 自动 NSFW 标签，并标签分组。
  - 对 NSFW 图片进行模糊处理，减少你的社死现场。

:::tip 🎒 图片收集爱好者

- 我是图片收集爱好者，目前已整理的图片 3W 多张，总计大小 30 多个 G。
- 所以经过了我测试、使用，前车之鉴，比我资源少的，可以放心使用。
- 超过我几倍的请酌情考虑。

:::

## 支持的功能

### 素材类型

- 图片：`GIF`，`BMP`，`JPG`，`JPEG`，`GIF`，`WEBP`
- 视频：`MP4`

### Core

- 🔀 `Transfrom` 转换
  - **支持的 App**
    - Eagle App
  - **素材**
    - 导入、覆盖导入、重复素材替换
    - 删除、放入回收站
    - 修改素材名称、注释、链接等。
    - 新增、修改、删除标签
    - 新增、修改、删除文件夹
  - **标签**
    - NSFW 自动标签。 `Drawing`，`Hentai`，`Neutral`，`Porn`，`Sexy`
    - 新建、删除、重命名标签
    - 标签分组
  - **文件夹**
    - 新增、删除、重命名
    - 嵌套文件夹
- 📝 `API` 接口
  - `/api/image`：获取图片相关
  - `/api/r`：随机一张 library 中的图片
  - `/api/folder`：文件夹信息
  - `/api/tag`：标签信息

# API

通过 API 访问素材库中的资源。

:::tip
大多数时候接口的前缀为`/api`，特殊情况：随机返回一张图片
:::

## 随机返回一张图片

_GET_

- `/r`
- `/api/r`
- `/random`
- `/api/random`

## 根据 id 获取图片信息

_GET_

- `/api/image:id`

## 获取图片列表

_POST_

- `/api/image`

### Query

```ts
type QueryString = {
  // 默认值 1
  page?: number;
  //   默认值 20
  pageSize?: number;
};
```

### Body

```ts
type Body = {
  orderBy?: Prisma.Enumerable<Prisma.ImageOrderByWithRelationInput>;
  include?: Prisma.ImageInclude;
  where?: Prisma.ImageWhereInput;
};
```

### Example

查询扩展名为 jpg，倒序排，并在返回之中包含 tags 信息。

```js
const body = {
  // 倒序
  orderBy: { mtime: "desc" },
  // 扩展名为jpg的资源
  where: { ext: "jpg" },
  // 在返回值中包含 tags 信息
  include: { tags: true },
};

fetch("/api/image?page=1&pageSize=20", {
  method: "post",
  body: JSON.stringify(body),
}).then((res) => console.log(res));
```

:::tip

你不用担心参数错误问题，库中导出了针对本项目所使用的类型文件、每一个参数都会有智能提示。
更多语法可以查看 [Prisma Api](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
:::

### 智能提示

![](/tips.png)

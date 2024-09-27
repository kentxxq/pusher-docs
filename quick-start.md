# 快速上手

## 注册/忘记密码

官网地址: [pusher.kentxxq.com](https://pusher.kentxxq.com)

测试账号: `test` 密码: `test`

- 注册: 就是填入你的邮箱地址,系统会自动创建账号. 然后发送密码到你的邮箱
- 忘记密码: 把密码发送到你的邮箱.
- **每晚自动重置 test 账号信息, 并清理没有登录过的账号.**

> 发送邮箱的频率有限制, 避免被爆破...

## 房间

![房间](/assets/q/room.png)

`房间`类似于聊天室, **是消息的入口**

- `房间名`: 方便用户记忆
- `房间code`: 一串 UUID,保证唯一性

## 管道

![管道](/assets/q/channel.png)

`管道`就是钉钉,飞书之类的 webhook. 这些管道可以通往不同的地方.

- `管道名称`: 方便用户记忆
- `管道类型`: 飞书/钉钉/企业微信...不同管道有不同的 json 格式
- `管道地址`: 管道的 url 地址
- `代理地址`: 管道的代理地址,`https://用户名:密码@proxy.com:7890`

## 关联管道

![关联](/assets/q/r.png)

## 发送信息

**简单版本**: 直接通过 get 请求发送信息

```shell
curl https://pusher.kentxxq.com/pusher.webapi/Room/SendMessageByGet/你的房间code?content=123
```

**复杂版本**

- 通过 post 发送 json 数据
- 传递参数
  - `templateCode=you-template-code` 使用特定的[字符串模板](/string-template) `you-template-code` 解析 json
  - `roomKey=111` 房间需要密钥 `111` 才能访问
  - 可以使用`\n`进行换行

```shell
curl -X POST https://pusher.kentxxq.com/pusher.webapi/Room/SendMessageByPost/你的房间code?templateCode=you-template-code&roomKey=111 \
     -H "Content-Type: application/json" \
     -d '{"content":"123\n你好"}'
```

> 如果你不使用 templateCode 参数,将会把`原始json`发送给管道

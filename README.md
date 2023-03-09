# AutoFillForm Extension --- 抢先版

![tag](https://badgen.net/github/tag/xuan-zai/AutoFillForm)

一款帮助我们填写网页表单的浏览器插件，目前支持 chrome、edge 浏览器。

## 使用该插件的注意事项：
1. 我们需要在 `data.json` 中填写我们需要的数据：
   
   如网页的 form 表单中有一个登录框，用户名的 `name` 值是 `username`、密码的 `name` 值是 `password` ，数据格式如下：
   
   ```json
    // data.json
    {
        "Login": {
            "title": "Login", // 标题，方便于我们知道在什么样的情况这里面存放的是什么数据
            "description": "用户登录", // 描述，对该数据进行描述
            "data": {
                "username": "admin",  // form 表单中有一个属性是 username ，值为 admin
                "password": "a123456" // form 表单中有一个属性是 password ，值为 a123456
            }
        }
    }
   ```
   这样就会在插件中就会出现关于这个关于登录的数据集，我们点击添加就可以把预定的数据添加到 form 表单中。

2. 当 `form` 表单中有单选框的话，我们需要对原本的数据格式进行一些修改，如下:

   ```json
    // data.json
    {
        "Radio": {
            "title": "radio",
            "description": "单选框",
            "data": {
                "whereSelect": {
                    "type": "radio",
                    "value": 1, // 这个的值与 radio 中的 value 相对应
                }
            }
        }
    }
   ```

3. 当我们需要对时间框进行自动填值时，可以这样填写 `data.json` 里面的数据格式：
   ```json
    {
        "demo": {
            "title": "标题",
            "description": "描述",
            "data": {
                "date": {
                    "type": "time", // 这个 input 框的类型
                    "value": "2021-03-02" // 要选的时间值
                }
            }
        }
    }
   ```

> ⚠️ 当前版本只支持 `antd ui` 框架，其他的框架还在测试兼容中...
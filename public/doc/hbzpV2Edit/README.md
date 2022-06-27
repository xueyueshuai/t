


## 请求格式

- 方式post 
- 数据均为json格式

## 搜索参数

## 响应代码统一格式

```
{
    page:xx,
    pageSize:xx,
    search:{
        aa:xx,
        bb:xx,
        cc:xx
    }
}
```
**search 可能为{} 可能为null**

  
```
    {
        code:200,
        msg:'ok',
        data:Any
    }
```
- code(200成功|201失败msg可以直接给用户展示|202登录令牌类的错误) 
- msg(描述信息) 
- data(数据主体)


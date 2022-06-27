
# java应用(v2-server)公共
---
## 请求格式
- 方式post 
- 数据均为json格式
----
## 搜索参数
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

---

## 响应代码统一格式为  
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
---


# 模块:定点培训企业|机构 
## api-添加机构或者企业的接口 逻辑如下
### 此口只有主管单位可以调用
### 唯一去重复
  - "nickName": "全称06261451",
  - "userAccount": "user06261451",
  - "mobile": "18806261451",
  - 社会统一代码去重复

### 将传信息入库包含主管单位主键
### 需要注意要同时去加入(base_user 和 sys_user_orgination)
```
    base_user
        "code":uuid
        "nickName": "全称06261451",
        "userAccount": "user06261451",
        "mobile": "18806261451",
    
    sys_user_orgination
        所有字段
        包含上级主管单位
        状态为草稿

```
### 参与留痕
- 此接口参与留痕切记切记

## api-删除机构或企业


# 模块:审批
## api-审批规则 的获取
## api-审批规则 的设置


## api-审批流 获取需要我审核的list
- 搜索参数
```
{
    page: x
    pageSize: xx,
    search:{
        v2_process_rule_type:'',
    }
}
```
- 注意
```
    1 where 条件
        1 = 1
        adn move_base_user_id = 登录者id
        and start_base_user_id != 登录者id
    2 order by 排序
        move_time asc
```

## api-审批流 进行审批
> 通过
- 更改 status(本条状态) 和 move_base_user_id(移动到哪人审批)
- 如果为末尾节点 出发后置操作
- 操纵留痕
- 记录审批人工作效率

> 拒绝
- 必须填写 驳回原因(可选择返回到哪个人, 可以是发起人)
- 更改 status(本条状态) 和 move_base_user_id(移动到哪人审批)
- 操纵留痕
- 记录审批人工作效率

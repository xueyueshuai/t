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
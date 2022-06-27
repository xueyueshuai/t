## api-添加机构或者企业

?> 此口只有主管单位可以调用

?> 唯一去重复
  - "nickName": "全称06261451",
  - "userAccount": "user06261451",
  - "mobile": "18806261451",
  - 社会统一代码去重复


?> 将传信息入库包含主管单位主键

?> 需要注意要同时去加入(base_user 和 sys_user_orgination)

- 
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



?> 操作留痕 (此接口参与留痕切记切记)

## api-删除机构或企业

?> 请求参数

- 
```
{
    ids:"1,2,3" // base_user_id,
}
```


?> 操作人身份 只能是 主管单位|超级管理

?> 软删除(base_user, sys_user_orgination)软删除字段更改为是


?> 操作留痕






## api-修改

?> 请求参数 ...



?> 接口使用者身份 (主管单位|机构|企业)


?> 唯一去重复
  "nickName": "全称06261451",
  "userAccount": "user06261451",
  "mobile": "18806261451",
  社会统一代码去重复


?> 修改的字段要体现到(base_user|sys_user_orgination)中


?> 注意  
    主管单位操作后,审核通过;
    机构,企业操作后,等待审核;


?> 操作留痕

?> 参与审批流
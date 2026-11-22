---
docId: module.selfcompile
kind: architecture
status: current
ownerRole: game-code-maintainer
visibility: internal
updatedAt: 2026-11-04T21:32:00+08:00
verifiedAt: null
supersedes: []
evidenceRefs: [[内部路径已省略]]
---
> 公开脱敏版：内部路径、会话标识、角色定义与原始日志引用已省略；未公开的原证不据此冒称可复算。设计、结构及未验状态保留。更新 2026-11-22。



# 游戏内SelfCompile：受控工具入口，不是外部编译流水线

## 当前职责

SelfCompileEntry.java（内部记录未公开）注册selfcompile_status、受策略控制的selfcompile_request，以及generated目录的查询/操作工具和skills。**整个插件不是无用模块**。

selfcompile_request默认关闭，策略文件显式允许才开；外部run-mutation不经过此工具。游戏内需求可以形成学习/需求记录，不自动获得修改源码或部署权限。

## 数据与接口

SelfCompileService使用运行配置下selfcompile/mutations；该空间与外部发布mutation目录不是同一个生命周期真源。generated是独立注册的查询/操作工具；request关闭不关闭generated。其管理动作授权、调用方隔离和干预审计需逐工具核验，本轮未证明完备，也不据局部方法缺检查推断整个网络入口无鉴权。管理工具的世界干预必须标注，不能当自然执行证据。

## 停用边界

入口注释与生产接线显示MutationPipeline旧内部流水线未作为当前编译通道。其11态设计、候选晋级、预算锁不能和外部脚本拼成“已上线全流程”。停用子系统的删除需证明消费者、反射与历史数据兼容，不在本轮删业务代码。

## 三线关系与验证

外部编码线构建部署由[外部编码线](<025-外部编码线.md>)管理；任务链可消费已注册工具，不接上停用编译器；学习线提交需求不等于授予编译。本文仅静态核对，运行策略是否开启、各generated工具是否实机有效未知。

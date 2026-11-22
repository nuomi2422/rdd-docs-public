---
docId: module.stager
kind: architecture
status: current
ownerRole: harness-maintainer
visibility: internal
updatedAt: 2026-11-06T15:35:18.311Z
verifiedAt: null
supersedes: []
evidenceRefs: [[内部路径已省略]]
---
> 公开脱敏版：内部路径、会话标识、角色定义与原始日志引用已省略；未公开的原证不据此冒称可复算。设计、结构及未验状态保留。更新 2026-11-22。



# Stager：已退役流程与保留依赖

## 何时启用

2026-11-06现行登记：四阶段流水线已废弃，不再作为开工入口。原“用户明确要求才开stage”已被后续裁定取代。当前复用写码/进游戏/退游戏门禁；DSH目标、Harness门禁和RDD游戏任务链仍是不同状态所有者。证据：注册表routing（内部记录未公开）、门禁当前迁移注释（内部记录未公开）。

## 保留的历史实现（不是启用入口）

stages.json（内部记录未公开）当前version2定义plan→implement→verify→close四阶段；stager.js（内部记录未公开）管理当前任务/轮次、文档、marks及推进。README旧七阶段不作为现行结构。

## 契约与数据

Stager拥有自己的流程state和任务文档，不拥有业务代码、发布phase或世界完成事实。gate检查本阶段本轮所需文件/marks，支持waiver；文件存在不证明证据充分。state应由工具维护，这是使用约束，不宣称已有防篡改安全保证。

stage中Harness配置是注入命令/提示，不自动替调用者执行preflight/postflight。机器发现UNKNOWN不能被人工描述成通过，即便当前推进实现只据need计算ok。

## 当前迁移缺口

stages.json仍包含旧rdd架构/rdd存放路由和旧角色标签。现行写作落点以知识库写作规则（内部记录未公开）为准；工具路由尚未迁完，不能声称本次文档重写已修脚本。不为清文档而自动开stage或迁生产状态。

保留原因：check-align/check-global与面板仍有活依赖，不能仅因流程退役就物理删除目录。见目录规范（内部记录未公开）。2026-11-06本轮仅核文档与源码，不运行stage或修改生产状态。

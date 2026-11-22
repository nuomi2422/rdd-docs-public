---
docId: module.settlement
kind: architecture
status: current
ownerRole: game-code-maintainer
visibility: internal
updatedAt: 2026-11-06T15:35:18.311Z
verifiedAt: null
supersedes: []
evidenceRefs: [[内部路径已省略] [内部路径已省略]]
---
> 公开脱敏版：内部路径、会话标识、角色定义与原始日志引用已省略；未公开的原证不据此冒称可复算。设计、结构及未验状态保留。更新 2026-11-22。



# Settlement：基地、设施与位置保护

## 职责与代码边界

业务模块包含 settlement-core（纯逻辑登记、几何、保护与验收模型）和 plugins:settlement（Minecraft工具、事件监听、设施持久化与上下文投影）。这是同一模块的核心/适配分层，不是两个设施真源。

- 负责：设施登记、网格/占地、蓝图与施工工具衔接、验收、临时授权、位置级保护、设施规划/运行摘要。
- 不负责：选择主线目标、判任务链终态、维护全部世界库存、替学习者发布经验。设施登记不等于世界已建成。
- 纠正旧边界：不能笼统写“不管真正建筑”；统一工具可衔接蓝图施工，底层实际方块动作仍由Numen执行层承担。

## 入口、数据与消费者

SettlementPlugin.java（内部记录未公开） setup注册工具、保护监听、contributeState与contributePlanningKnowledge。设施真源归SettlementService，运行配置下settlement设施文件独立于RDD的AssetRegistry；RDD/执行上下文消费其投影，不能反过来把摘要当设施账本。

## 契约与失败边界

- 施工进度、结构可用、生产条件分别验收；“registered/accepted”不得提升为建筑成功。
- 保护按位置裁决；临时授权先检查，其次STRUCTURE/SPACE。保护针对同伴的执行路径，不声称防止真人拆家。
- 查询设施与登记/修改设施分开；临时授权必须有范围和有效期，不能用永久放宽保护绕开失败。
- 世界/维度/设施身份与owner应保留到消费者，不把另一个基地库存算当前基地备用。

## 当前核实与未闭合

2026-11-06 23时源码核对（44609e454）：旧“ProtectionRing无生产调用”已过时。SettlementTool.ringZones（内部记录未公开）和SettlementRegisterTool（内部记录未公开）均调用唯一ProtectionRing生成器；小几何失败降级为结构保护。可认源码接线，不能据此认门洞/授权全部实机验收。SettlementTool头注“南墙中点留口”与实现旁注“无开口”仍有口径冲突，应在后续代码维护时核对，不因旧文档再造生成器。

三线：任务链使用设施事实；学习线可学习建设回执但无设施写权；外部编码线修改几何/保护必须补边界和真实方块动作回归。

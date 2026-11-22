# 决策记录（公开摘要）

回仓库首页（内部记录未公开） · 架构图谱（内部记录未公开） · [当前状态](https://github.com/nuomi2422/restart-developmental-doer/blob/master/STATUS.md)

> 从公开架构图谱的决策历史导出。每条保留编号、版本、类型、时间、摘要、取代/保留范围与证据位置；**内部会话、个人调度和未公开原证已省略**。决策记录说明设计意图，不证明代码、部署或世界效果已完成。

## D-20261106-001 · architecture-v1

- **时间**：2026-11-06T15:09:59.014Z
- **类型**：human_confirmed
- **摘要**：双最高指针、动态决策修复链、版本及全AI查重更新触发；首次版本化基线，非历史快照补造

## D-20261107-001 · architecture-v1

- **时间**：2026-11-07T11:26:00+08:00
- **类型**：human_confirmed
- **摘要**：全员默认自治：学习/发布全程序自动验证、取消人工审批门；无具体目标时先补施工文档，再推进通关MC并修AC/基建机械盲点

## D-20261107-002 · architecture-v2

- **时间**：2026-11-07T17:42:30+08:00
- **类型**：human_confirmed
- **摘要**：按044先增强验证感知→任务链/角色上下文→内外学习闭环→带学习长线→AC/基建增量与回归；自动验证无人工审批，原生执行少动。
- **取代**：D-20261107-001:priority_only
- **保留**：autonomy、automatic_validation、single_driver、truthful_evidence、minimal_native_execution_changes

## D-20261108-001 · navigation-v2

- **时间**：2026-11-08T00:48:00+08:00
- **类型**：human_confirmed
- **摘要**：架构导航增加状态完整性、模块细节分层、关系方向、决策演变查询、正文备份和指挥官关键词自动导航；不全量注入，不把备份/文档报告当事实。
- **影响节点**：goal、commander-intent、architecture-version、taskchain、camera
- **保留**：architecture-v2、truthful_evidence、no_full_injection、single_source_of_truth
- **公开证据入口**：`架构意图/034-架构思维导航MCP.md`、`架构意图/035-架构导航图谱.json`

## D-20261108-002 · architecture-v2

- **时间**：2026-11-08T01:40:00+08:00
- **类型**：human_confirmed
- **摘要**：工程门禁按角色分档：指挥官（跳过21项施工类 + 监督轮C1-C5，其中C5改为每次被激活都必须巡检架构并留查重结论）、主干活（原43项全量不动）、学习者（L1 30分闹钟/L2 查游戏内学习单位/L3 看待复核）。角色只决定跑不跑，不改判据强度；跳过记SKIP并写明原因，不算通过。
- **影响节点**：harness、commander-intent、learning
- **保留**：architecture-v2、single_source_of_truth、truthful_evidence、no_pseudo_pass
- **公开证据入口**：`施工文档/045-多角色门禁施工方案-20261107.md`、`架构意图/036-架构巡检记录.jsonl`

## D-20261108-003 · architecture-v2

- **时间**：2026-11-08T01:55:00+08:00
- **类型**：human_confirmed
- **摘要**：图谱从「现状地图」升级成「编年史」：新增按节点聚合的时间线——MCP 工具 arch_history 把节点自带 history（状态字段变更：版本/日期/改了什么/为什么/证据/变更前五维状态/差异）与决策链里 affects 到该节点的决策缝成一条史。节点 history 为空时只显示决策，不编造。
- **影响节点**：harness、commander-intent、architecture-version
- **保留**：architecture-v2、single_source_of_truth、truthful_evidence
- **公开证据入口**：`架构意图/034-架构思维导航MCP.md`

## D-20261108-004 · architecture-v2

- **时间**：2026-11-08T06:55:00+08:00
- **类型**：human_confirmed
- **摘要**：开任务后必须一直干：门禁 C6 规定施工 goal armed 期间不许自己撤掉 20 分钟监督闹钟，唯一例外是主人主动叫停（须在原话留痕）；同时固定空转三级推进——已布置的文档任务优先，全做完再推进 MC（找锚点、修 AC、修基建）。
- **影响节点**：harness、commander-intent、taskchain
- **保留**：architecture-v2、truthful_evidence、no_pseudo_pass
- **公开证据入口**：`施工文档/045-多角色门禁施工方案-20261107.md`

## D-20261108-005 · architecture-v2

- **时间**：2026-11-08T07:15:00+08:00
- **类型**：human_confirmed
- **摘要**：防收工与任务顺序：新增门禁 C7（任务开着时每 20 分钟盘上必须有真产出，日志不算）与纪律『不许说没有目标』——主人给了文档任务就以文档为准，文档没做完就是活没做完；文档做完了才自己推进主线（MC 找锚点、修 AC、修基建）。20 分钟闹钟提示词改为固定顺序：先读内部岗位定义 → 看文档任务 → 跑 round 门禁（BLOCK 不开工）→ 架构巡检记账 → 看施工 AI 是否断掉 → 按三级推进。
- **影响节点**：harness、commander-intent、taskchain
- **保留**：architecture-v2、truthful_evidence、no_pseudo_pass

## D-20261108-006 · architecture-v2

- **时间**：2026-11-08T07:35:00+08:00
- **类型**：human_confirmed
- **摘要**：把「查过架构／读过内部岗位定义」从自报改成工具痕迹：架构 MCP 每次调用写 .harness/audit/mcp-calls.jsonl，新增 role_card 与 my_tasks 两个带记账的工具；门禁 C1/C3 改读账本，并新增 C8『本轮必须调过工具（防发呆）』。没有调用记录就是没干，发一段文本不算。
- **影响节点**：harness、commander-intent
- **保留**：architecture-v2、truthful_evidence、no_pseudo_pass

## D-20261108-007 · architecture-v2

- **时间**：2026-11-08T08:33:00+08:00
- **类型**：human_confirmed
- **摘要**：学习单位真源澄清：检索只读 experience-<uuid>.jsonl（ExperienceKnowledgeSource.java:172，providerId=experience，ExperienceStoreRetrievalBridge.java:57）；skills.jsonl 只被 SkillCatalogView 读来做统计，没有任何检索 provider 读它 —— 是待接线目录（死库）。26 号架构意图里的『学习单位』在现行代码里落到 experience 条目。因此 bug-11（同族去重）必须搬到 experience 库重做；skills 接线到检索是独立新特性，不混进 bug-11。
- **影响节点**：learning、learner、learning-retrieval、skill-lifecycle
- **保留**：architecture-v2、single_source_of_truth、truthful_evidence

## D-20261108-008 · architecture-v2

- **时间**：2026-11-08T09:22:00+08:00
- **类型**：human_confirmed_via_peer
- **摘要**：学习单位接线选 A 先行、B 中期：先把技能并入经验库复用现有检索链（让技能知识能送到模型），独立 provider（语义干净）作为中期演进。实施前置三件事必须先满足：①技能→经验字段契约（risk/evidenceLevel→maturity/bodyRef 三个缺口先定）②幂等迁移（同 skillId 重复迁移不得产生重复条目，先 dry-run 再落）③技能名额上限（按实际预算算，不写死 8）。
- **影响节点**：learning、learner、learning-retrieval、skill-lifecycle
- **保留**：architecture-v2、single_source_of_truth、truthful_evidence
- **公开证据入口**：`施工文档/046-skills接入检索施工单-20261108.md`

## D-20261108-009 · architecture-v2

- **时间**：2026-11-08T11:59:00+08:00
- **类型**：human_confirmed_via_peer
- **摘要**：主人新口径：**只真实记录「通关 Minecraft」的自主过程**——要的是 AI 自己把游戏打通的过程数据，不是我们替它安排每一步。经验注入偏差另行审计（单独立项查），不与「通关记录」混在一起。据此：不对游戏或目标下命令、不干预任务链，只做记录与审计；角色分工、架构与门禁按此复核。
- **影响节点**：goal、learning、harness、learning-trace
- **保留**：architecture-v2、truthful_evidence、no_pseudo_pass

## D-20261108-010 · architecture-v2

- **时间**：2026-11-08T16:35:00+08:00
- **类型**：human_confirmed_via_peer
- **摘要**：干活侧 harness 的第一职责定为「规范验证 + 规范记录」：进游戏验证的干活 AI 有 harness/实验台/核心工具可自主取证；验证要有足够多视角与信息（行为轨迹/世界状态/回执/视频）才能理解现场、发现盲点；**不要持续无节制增加工具**，新增过多会让整体程序混乱。边界不变：游戏内 AI 只吃当轮上下文与工具回执，不读实验台历史。
- **影响节点**：harness、learning-trace、coding
- **保留**：architecture-v2、truthful_evidence、no_pseudo_pass、发散后收拢扩展后收敛
- **公开证据入口**：`架构意图/034-架构思维导航MCP.md`

## D-20261108-011 · architecture-v2

- **时间**：2026-11-08T17:26:00+08:00
- **类型**：human_confirmed_via_peer
- **摘要**：任务链规划口径（主人直接原意，经转述）：**不重复建造**——已有设施先按现实有效性核对（结构可用/功能可用），缺失或失效才规划补齐；规划者必须核对已有东西、遵循主人经验，不自由发挥。**为困难节点设抽象准备节点，不限于最终挑战**（进入/探索下界这类高风险节点同样先标准备；不把准备清单写死）。**末节点未完成总目标时可标记并继续生成下一批节点，原有规划节奏不变**。具体数量与次数上限不自行替主人定，列待确认。状态：全部为意图，未实现（taskchain-conditions 代码有、部署/实机未验；不重复建造核对、抽象准备节点、续批语义均无实现）。
- **影响节点**：taskchain、taskchain-conditions、assets、settlement
- **保留**：architecture-v2、truthful_evidence、D-20261107-002 的推进顺序
- **公开证据入口**：`架构意图/034-架构思维导航MCP.md`、`施工文档/044-验证先行的任务链与学习闭环总施工单.md`

## D-20261108-012 · architecture-v2

- **时间**：2026-11-08T09:55:53.650Z
- **类型**：human_confirmed_via_peer
- **摘要**：经另一指挥官转述的主人直接要求：任务链验实际行为，不以规划节点自述代替；睡觉/进食等安全需求按规划→触发/不触发依据→执行终态→世界事实→恢复主线取证。sleep地下主动拒绝当时可合理，但环境/昼夜/敌情/可达性变化须重新评估，不能一次拒绝让安全需求永久消失；eat现由生存闸+工具承接，不虚构eat支线。基地是核心准备，先核已有可用、缺失失效才补。近期顺序：摄像机修复并实看→任务链改后规划/行为→学习线；快捷进入、同伴创建及跨世界隔离纳入既有044/049续批，不另造框架。实验台发现盲点能力分五维验证，不承诺预测所有错误。 同日后续经转述：主人授权离开期间继续自主施工，一般技术事项不逐项询问，游戏/存档边界不变；实验台自动组装上下文/环境/行为形成可证的事前风险与反例线索，严格防未来信息泄漏，分别报告命中、误报、漏报、UNKNOWN，日志拼接不等于预测。
- **影响节点**：taskchain、rdd、assets、settlement、evidence-validation、harness、learning-trace
- **保留**：architecture-v2、单一驾驶与主人交接、不重复建造与困难节点抽象准备、未观察不等于未发生
- **公开证据入口**：`架构意图/034-架构思维导航MCP.md`、`架构意图/027-任务链线.md`、`施工文档/044-验证先行的任务链与学习闭环总施工单.md`、`施工文档/049-节点性质维度设计候选-20261108.md`

## D-20261108-013 · architecture-v3

- **时间**：2026-11-08T14:28:49.314Z
- **类型**：human_confirmed_via_peer
- **摘要**：经指挥官转述：新增位于指挥官之上的思考者职责，主动汇聚决策/行动/环境/结果证据进行对照、归因和证伪；运行时管理主线/支线/日常多个逻辑待办、主次指针与挂起/取消/延后提醒，条件变化重评估，不依赖一次性固定计划。逻辑并行不等于多驾驶身体。Minecraft随机性需结合AI灵活性与框架稳定；效率改善是待证伪假设。设计需写为什么、现象、推理、证据、替代与验证。角色已定义但agent未创建、权限未变、调度未实现。
- **影响节点**：thinker、commander-intent、taskchain、learning-trace、evidence-validation
- **保留**：architecture-v2既有目标与D-011/D-012、唯一驾驶、真实证据、自主施工及安全边界
- **公开证据入口**：`架构意图/034-架构思维导航MCP.md`、`架构意图/027-任务链线.md`、`施工文档/044-验证先行的任务链与学习闭环总施工单.md`、`施工文档/049-节点性质维度设计候选-20261108.md`

## D-20261109-001 · architecture-v3

- **时间**：2026-11-09T04:41:47.026Z
- **类型**：human_confirmed
- **摘要**：主人直接阐明：规划与执行都必须拿到"为什么、过去发生了什么、风险与取舍"，而不只是"做什么"。他据重复死亡、装备重造、夜间遇险与随机机遇推断僵硬/不稳与此有关——这是待核验的因果假设，不是唯一根因。规划侧保长线目标、依赖与整体稳定；执行侧贴世界、处理随机事件、运行中与任务协商；执行者不得无证完成或越过安全边界。示例（交易所、钻石套+保护、盾牌、双桶、备用装备、睡觉、进食）都是语义举例、须带理由与适用条件，不得硬编码成全局规则。提前完成（如途中/箱里拿到钻石）必须由当前世界事实与目标谓词核验后才可重排与跳过不再必要的依赖；箱内发现≠取得；缺证/旧代/他人箱子/重复/目标变更等不得算完成。
- **影响节点**：taskchain、planning-guide、execution-skills、commander-intent、goal

## D-20261109-002 · architecture-v3

- **时间**：2026-11-09T05:17:58.503Z
- **类型**：human_confirmed
- **摘要**：主人新强调四点：①支线与日常任务同样要持续给出 why 与触发/拒绝/再评估依据；②学习归因必须有 why（证据、前因后果、反例、适用条件与时效），缺项只能算线索；③实验台/相机承担"强感官+整洁信息"，用于发现现象并追究根源，画面不可判即 UNKNOWN，证据须可复查；④DSH 支持受管自重启以实现插件更迭自动加载，不需主人手动。安全与运行验证分层：自重启只解决"加载新代码"，不等于实机效果已验证；游戏侧当前非正常退出、存档保存状态未知，未擅动。
- **影响节点**：taskchain、learning、camera、learning-trace、harness

## D-20261109-003 · architecture-v3

- **时间**：2026-11-09T09:12:26.405Z
- **类型**：technical_decision
- **摘要**：动作证据账本的"覆盖"拆成两维并给出可签发等级：contentIntegrity（已消费字节事后复读一致，可 verified）与 windowCompleteness（观测段内连续无缺口⇒verified-for-observed-window；全局连续仍 unproven）。PRESENT 只在两维都成立时给出，且必须带 caveat window-scope:observed-bytes-only，明确只覆盖声明窗口内的观测字节，不推广为整条时间线完整。缺口（截断/轮转/inode 变/半行停滞/读失败）任一出现即 UNKNOWN。
- **影响节点**：harness、taskchain

## D-20261109-004 · architecture-v3

- **时间**：2026-11-09T12:34:02.562Z
- **类型**：technical_decision
- **摘要**：确认缺口：identitySnapshot 只含 worldId/session、不含 event_seq（WorldStateService.java:240-246），event_seq 仅由 MonitoringJournal 写信封时产生 ⇒ 读端无法把身份快照绑定到具体事件 ⇒ 身份归属保持 UNKNOWN。读端约束：不接同源 resolver（守护测试）、证据卡只报 RAW_PRESENT+attributable=UNKNOWN 且门禁/验收不得当通过（守门测试）。解除条件属生产侧：快照需带可回指事件的键且来源不得由同一 WorldContextStamp 派生。
- **影响节点**：harness、taskchain

## D-20261110-001 · architecture-v4

- **时间**：2026-11-10T04:36:05.630Z
- **类型**：human_confirmed
- **摘要**：主人直接要求三层团队核心架构：思考者足够原证、低频解决疑难并有模块重构决策权；指挥官五分钟核真实内容/目标进展、协调一主多辅、维护架构任务唯一事实；执行者暂停目标须指挥官确认，完成者验收集成后可收束；秘书仅副工。普通架构工程不再逐项问主人，不可逆行为及安全边界保留。
- **影响节点**：harness、thinker、commander-intent、architecture-version、master-construction
- **取代**：D-20261108-002:activation_forced_audit_policy_only；D-20261108-004:20min_and_unconditional_worker_continuation_only；D-20261108-005:mtime_as_progress_only；D-20261108-013:thinker_advisory_only_scope
- **保留**：three_product_lines、single_driver、truthful_evidence、automatic_validation、camera_deferred、historical_evidence
- **公开证据入口**：`架构意图/006-Harness模块.md`、`架构意图/034-架构思维导航MCP.md`、`施工文档/045-多角色门禁施工方案-20261107.md`

## D-20261110-002 · architecture-v5

- **时间**：2026-11-10T14:33:32.362Z
- **类型**：human_confirmed_via_peer
- **摘要**：主人经指挥官转述明确四线：学习、外部自主编程、运行时保证（任务链为组成）、沉淀资产。学习单位产出形式为skills，不建口误SQS术语或第二管线；AC未来扩展只记意图。总目标、三层一主多辅、唯一驾驶及051在飞施工不变。
- **影响节点**：goal、coding、learning、taskchain、assets、runtime-assurance
- **取代**：D-20261110-001:preserved_three_line_classification_only
- **保留**：goal、three-tier-team、single_driver、module_ownership、current_051_work、historical_evidence
- **公开证据入口**：`架构意图/001-RDD必读.md`、`架构意图/025-外部编码线.md`、`架构意图/026-学习线.md`、`架构意图/027-任务链线.md`、`架构意图/014-RDD模块.md`

## D-20261110-003 · architecture-v5

- **时间**：2026-11-10T14:57:28.251Z
- **类型**：human_confirmed_via_peer
- **摘要**：特殊联动方向：两脑独立、女仆唯一主讲、RDD静默执行保内部证据、能力互借覆盖增强并保双方生态防双驾驶。双真实实体首版/小核心/租约协议属AI建议，物理表现未定；仅设计未实施，不改变四线三层及051。
- **影响节点**：maid-rdd-link、tlm-link
- **保留**：four_lines、three_tier_team、single_driver、current_051_work、tlm_existing_appearance
- **公开证据入口**：`架构意图/033-TLM联动模块.md`、`施工文档/052-女仆与RDD特殊联动施工方案-20261110.md`

## D-20261110-004 · architecture-v5

- **时间**：2026-11-10T15:19:07.320Z
- **类型**：human_confirmed_via_peer
- **摘要**：保留RDD＋Numen与MSC＋女仆原组合，可单开、并存、逐能力交叉选配；陪伴代言/RDD静默仅预设，执行委托与直接身体适配分开。
- **影响节点**：maid-rdd-link
- **取代**：D-20261110-003:fixed_speaker_and_mandatory_two_entities_only
- **保留**：four_lines、three_tier_team、native_pairs、single_body_controller、domain_ownership、current_051_work
- **公开证据入口**：`架构意图/033-TLM联动模块.md`、`施工文档/052-女仆与RDD特殊联动施工方案-20261110.md`

## D-20261111-001 · architecture-v5

- **时间**：2026-11-11T04:54:24.163Z
- **类型**：human_confirmed
- **摘要**：本会话主人直接确认当前排期：验证能力可信→同一旧存档受控换位置重开并技能化→任务链多线/why和村庄基地交易供给路线验收→学习→通关。冻结机制延期。仅调整排期/场景，不改变四线分工，不把文档同步当功能完成。
- **影响节点**：master-construction、autonomy、learning-trace、taskchain
- **取代**：D-20261107-002:construction_priority_order_only
- **保留**：four_lines、three_tier_team、single_driver、automatic_validation、historical_evidence、same_original_live_save、existing_experience_skills_and_models
- **公开证据入口**：`施工文档/044-验证先行的任务链与学习闭环总施工单.md`、`架构意图/034-架构思维导航MCP.md`

## D-20261111-002 · architecture-v5

- **时间**：2026-11-11T12:36:55.642Z
- **类型**：human_confirmed
- **摘要**：主人直接要求指挥官简洁职责卡：守宏观意图/代码质量及AI盲点和验证效率，唯一600秒闹钟按需核下属→导航→文档→实况，思考者仅复杂难题/成批问题/大里程碑集中使用。
- **影响节点**：harness、commander-intent
- **取代**：D-20261110-001:five_minute_supervision_frequency_only
- **保留**：architecture-v5、three-tier-team、single_driver、truthful_evidence、current_product_schedule
- **公开证据入口**：`架构意图/006-Harness模块.md`、`架构意图/034-架构思维导航MCP.md`

## D-20261111-003 · architecture-v5

- **时间**：2026-11-11T15:09:46.070Z
- **类型**：human_confirmed
- **摘要**：主人要求044第⑤步承接运行时保证，沿D0/E0/D1补AC、工具、基建及协同接缝并通关；保留已有成果，不复制测试世界。
- **影响节点**：master-construction、autonomy、runtime-assurance
- **取代**：D-20261111-001:step5_scope_and_stale_progress_only
- **保留**：four_lines、single_driver、automatic_validation、historical_evidence、same_original_live_save、camera_deferred、learning_acceptance_depends_on_reliable_samples
- **公开证据入口**：`施工文档/044-验证先行的任务链与学习闭环总施工单.md`、`架构意图/027-任务链线.md`、`架构意图/034-架构思维导航MCP.md`

## D-20261113-001 · architecture-v5

- **时间**：2026-11-12T16:20:24.816Z
- **类型**：human_confirmed
- **摘要**：主人直接重申四线全自动；实验台/灵活任务链/学习为运行时持续泛化三个基准。当前外部学习主力，内部面向未来玩家；按最终/当前目标与世界条件加权检索目录、按需展开；技能机器检查后自动试用，前后轨迹驱动自动验证/迭代/撤回；语义资产含用途和地图，两类AI实际上下文作为验收。
- **影响节点**：goal、learning、learning-triggers、external-learner、learner、learning-retrieval、execution-skills、planning-guide、skill-lifecycle、runtime-assurance、taskchain、assets、maps、worldstate、evidence-boundary、learning-trace、master-construction
- **取代**：D-20261108-010:blanket_internal_learner_history_ban_only
- **纠正**：043学习包不自动发布/晋级旧条款；034对内部学习者一概禁历史；004外部不能替代内部的旧绝对表述；首次试用需先证明实机有效的循环前置
- **保留**：architecture-v5_four_lines、single_body_scheduler、truthful_evidence、existing_automatic_release、versioned_history
- **公开证据入口**：`架构意图/026-学习线.md`、`架构意图/027-任务链线.md`、`架构意图/014-RDD模块.md`、`架构意图/034-架构思维导航MCP.md`、`施工文档/044-验证先行的任务链与学习闭环总施工单.md`

## D-20261115-001 · architecture-v5

- **时间**：2026-11-15T08:03:36.609Z
- **类型**：human_confirmed
- **摘要**：主人直接要求下一阶段轮回训练施工：外置主力主动看与接内部触发，场景skills引用可独立使用的组件，语义/性质/世界检索，AC观测计算及积木分类组合，摄像机绑定实验台，24项纳入同一持续修复。
- **影响节点**：learning、external-learner、learning-retrieval、execution-skills、acx、video-trace、camera、master-construction、cycle-training
- **纠正**：mandatory_skill_wrapper_interpretation；indefinite_camera_bench_deferral_for_next_phase
- **保留**：architecture-v5_four_lines、044_master_order、single_body_scheduler、existing_automatic_release、versioned_history、truthful_evidence
- **公开证据入口**：`施工文档/053-轮回训练施工单.md`、`架构意图/026-学习线.md`、`架构意图/019-ACX模块.md`、`架构意图/017-镜头模块.md`

## D-20261115-002 · architecture-v5

- **时间**：2026-11-15T09:12:00.000Z
- **类型**：human_confirmed_via_peer
- **摘要**：主人17:07直接要求进入整备而非新增功能：收紧急缺陷→代码/文档/架构MCP整合减复杂度→基线与C盘玩家预览→轮回训练准备→训练基线→真正训练；053保持后续承接，不据此开建。
- **影响节点**：master-construction、cycle-training
- **保留**：architecture-v5_four_lines、044_master_order、053_future_scope、single_driver、truthful_evidence、current_artifacts
- **公开证据入口**：`施工文档/044-验证先行的任务链与学习闭环总施工单.md`、`施工文档/053-轮回训练施工单.md`、`架构意图/034-架构思维导航MCP.md`

## D-20261116-001 · architecture-v5

- **时间**：2026-11-15T16:36:13.539Z
- **类型**：human_confirmed_via_peer
- **摘要**：本轮唯一现行顺序指向044当前整备段；全验后准确baseline tag再承接053准备，正常手动入口，规划独立优先且仅未配继承；不是完成声明。
- **影响节点**：master-construction、cycle-training、rdd
- **取代**：D-20261115-002:current_readiness_order_and_tag_timing_only
- **纠正**：旧最小自动创建/发目标条件不再作为现行交付要求
- **保留**：architecture-v5_four_lines、single_driver、historical_evidence、053_existing_scope、offline_deployment_runtime_effect_separation
- **公开证据入口**：`施工文档/044-验证先行的任务链与学习闭环总施工单.md#L678-L680`、`施工文档/053-轮回训练施工单.md#L151-L166`、`架构意图/034-架构思维导航MCP.md#L48`

## D-20261117-EXEC-001 · architecture-v6

- **时间**：2026-11-17T10:30:18.360Z
- **类型**：human_confirmed
- **摘要**：执行层重新规范化：共同数据获取/加工/缓存/检索，参数化原子积木与AC并行/嵌套/异步恢复，生命周期与效果反馈；本轮只整顿文档及角色，工程暂不开启。
- **影响节点**：goal、worldstate、acx、numen、learning、coding、taskchain、runtime-assurance、learner、external-learner、learning-retrieval、skill-lifecycle、cycle-training、architecture-version、master-construction、commander-intent、thinker、maps
- **纠正**：取代原生Numen尽量不动作为重整阻碍的解读；撤销产物必须包装skills的残留；时间线快照不是已实现实时世界总线
- **保留**：four_functional_lines、three_team_layers、domain_ownership、single_body_arbitration、existing_release_and_evidence、174_independent_authorized_scope
- **公开证据入口**：`架构意图/034-架构思维导航MCP.md`、`施工文档/053-轮回训练施工单.md`、`架构意图/008-WorldState模块.md`、`架构意图/019-ACX模块.md`、`架构意图/028-Numen引擎与执行层.md`

## D-20261117-CYCLE-002 · architecture-v6

- **时间**：2026-11-17T14:59:54.659Z
- **类型**：human_confirmed
- **摘要**：后续以通关MC为训练总目标，轮内覆盖记盲点并标明介入，轮后外部集中改进；共用生命周期参照保专属扩展，补异步工具防空转等原文细节。仅文档准备。
- **影响节点**：learning、external-learner、skill-lifecycle、cycle-training、acx、numen、learning-trace
- **纠正**：局部失败不归零已有长程基线；采矿遇袭只是局部回归，安身立命为通关前段；不强制每个盲点立即修复或先开放内部编程；不把共同生命周期写成万能状态机；异步运行须自身检测、有限恢复和真实反馈
- **保留**：architecture_v6_four_lines、existing_implementations_and_evidence、single_driver_and_body_arbitration、174_independent_scope、documentation_only_hold
- **公开证据入口**：`架构意图/034-架构思维导航MCP.md`、`施工文档/053-轮回训练施工单.md`、`架构意图/019-ACX模块.md`、`架构意图/026-学习线.md`

## D-20261119-053-001 · architecture-v6

- **时间**：2026-11-19T01:07:59.029+08:00
- **类型**：human_confirmed
- **摘要**：053在v6既定契约内全面施工：最小全链优先打通、独立模块同时做，验好按依赖接；准备框架组合验过才正式轮回。指挥官先查架构MCP与迭代、回原文；按范围设持久目标，受阻/待验报证停放，达标完成。
- **影响节点**：commander-intent、harness、cycle-training、runtime-assurance、master-construction
- **取代**：D-20261117-EXEC-001:仅文档准备的当时限制；D-20261117-CYCLE-002:仅文档准备的当时限制
- **保留**：architecture-v6、已定五块契约与四线分工、唯一身体仲裁与受管发布、原档与历史原证、源码部署实机效果分层
- **公开证据入口**：`架构意图/034-架构思维导航MCP.md`、`施工文档/053-轮回训练施工单.md`、`架构意图/006-Harness模块.md`

## D-20261121-RDD-SUP-001 · architecture-v6

- **时间**：2026-11-21T03:25:45.000Z
- **类型**：human_confirmed
- **摘要**：游戏内监督只接断链：执行者安全处置后可按游戏运行时间暂停当前任务10分钟；正常运行或等待不催，普通补催沿原180秒节流走系统通道。
- **影响节点**：taskchain
- **纠正**：取代游戏内AI旧暂停复评/重复重算及普通补催分散判据；不扩大到主人暂停。
- **保留**：目标初次激活、原节流范围、正常回执、生存保护、主人暂停、外部监督、053不复工
- **公开证据入口**：`架构意图/027-任务链线.md`、`施工文档/054-现实摄影和小补丁补全.md`

## D-20261121-TEAM-001 · architecture-v6

- **时间**：2026-11-21T09:40:28.000Z
- **类型**：human_confirmed
- **摘要**：最简施工组为1名指挥官+4名干活AI，其中1人兼主工；执行者完工先报并申请实机验证，未获准不自行开游戏。决策问题先做可逆方案或其他已授权项；确实都做不了时先汇报卡点、原证和恢复条件，再暂停自己的目标，由指挥官决定改派、缩范围、恢复或继续停放。只停本人目标，不扩散为全队停工。
- **影响节点**：harness、commander-intent
- **取代**：D-20261110-001:执行者暂停目标须指挥官事前确认的字面顺序
- **保留**：architecture-v6、three-tier-team、one-main-multi-assist、single_driver、commander_disposition、truthful_evidence、owner_finish_authority
- **公开证据入口**：`架构意图/034-架构思维导航MCP.md`、`架构意图/006-Harness模块.md`、`施工文档/044-验证先行的任务链与学习闭环总施工单.md`

## D-20261121-HARNESS-001 · architecture-v7

- **时间**：2026-11-21T10:18:00.000Z
- **类型**：human_confirmed
- **摘要**：AGENTS.md及按需子文件为核心、命令工作流为辅助；四模块稳定内容指纹，核心只由主人注册，AI扩展自注册并按生命周期复核；多项目各持小地图。
- **影响节点**：harness
- **纠正**：压缩指针在/actions的compress，不是/align第三选项；稳定内容指纹不等于游戏TaskFingerprint
- **保留**：RDD四线、原有模块职责、真实证据、核心工具清单、公开与私有仓边界
- **公开证据入口**：`架构意图/006-Harness模块.md`、`架构意图/042-Harness导航图谱.json`、`架构意图/043-Agene导航图谱.json`

## D-20261121-PREP-055 · architecture-v7

- **时间**：2026-11-21T15:02:30.549Z
- **类型**：human_confirmed
- **摘要**：四包共同完成完整轮回准备，统一世界数据与计算直达AC，组件可独立/组装，055联调、053正式轮回；首例不缩范围，公开介绍不签已实现。
- **影响节点**：worldstate、acx、cycle-training、runtime-assurance、taskchain、learning-retrieval、assets、skill-lifecycle、coding
- **保留**：domain_ownership、single_body_arbitration、partial_implementation_evidence、architecture-v7
- **公开证据入口**：`施工文档/055-轮回准备四组并行开发与联调.md`、`架构意图/034-架构思维导航MCP.md`

## D-20261122-COMMANDER-001 · architecture-v7

- **时间**：2026-11-22T07:30:00+08:00
- **类型**：human_confirmed
- **摘要**：指挥官接单后先报计划，再建立唯一一条20分钟“指挥官职责校准”闹钟；不建指挥官持久目标，靠闹钟唤醒并按职责卡逐项自检、在卡内授权范围自行纠偏。职责卡压缩为六块短动作。
- **影响节点**：harness
- **取代**：D-20261119-053-001:指挥官设持久目标作为常规续接的旧做法
- **纠正**：闹钟不是目标的替代装饰，而是本模式唯一的续接机制；闹钟不得扩权或替代用户开工/暂停指令
- **保留**：计划后再开工、真实证据分层、唯一驾驶、整队收工权在用户、现有岗位权限
- **公开证据入口**：`架构意图/006-Harness模块.md`

## D-20261122-COMMANDER-002 · architecture-v7

- **时间**：2026-11-22T09:40:00+08:00
- **类型**：human_confirmed
- **摘要**：指挥官授权按文档范围内可逆动作直接做，含开关/重启游戏、可逆配置、换下属模型/API；只有三库、唯一存档/原证等不可逆才问，禁止过度防御和空等授权。开工拆独立任务，给下属设可续跑目标，轮次用尽续设；按§4抽查。
- **影响节点**：commander-intent、harness
- **纠正**：撤销角色006旧句“不设执行者持久目标、换模型/API/配置暂缓、进游戏需等安排”的过度限制；其“指挥官自身不建持久目标、靠20分钟校准闹钟”保留。；可逆不等于无边界：不可逆行为仍先问用户，不把不可逆拆成多次可逆绕过。
- **保留**：指挥官自身不建持久目标、20分钟校准闹钟、整队收工权在用户、真实证据分层、唯一集成与共享实例不抢身体、不可逆才审批
- **公开证据入口**：`架构意图/006-Harness模块.md`

## 怎么用这些记录

1. 找到与你问题相关的决策编号（例如 D-20261117-EXEC-001）。
2. 按 `affects` 打开对应架构正文，读职责与边界。
3. 用 `证据入口` 核对公开证据；标为“内部原证未公开”的，不要假定可复算。
4. 记录与现状冲突时，以源码和[当前状态](https://github.com/nuomi2422/restart-developmental-doer/blob/master/STATUS.md)为准，并提交 issue 说明。

**开发期说明：** 这些记录供阅读和查证，不构成外部接手、维护承诺或授权交接。项目后续会做适配，但当前不承诺响应时限。

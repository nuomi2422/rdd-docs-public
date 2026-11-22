# 架构图谱与可运行 MCP（公开版）

[回仓库首页](../README.md) · [决策记录](../决策/README.md) · [当前状态](https://github.com/nuomi2422/restart-developmental-doer/blob/master/STATUS.md)

**这是什么：** 一套只读的架构导航。它把 RDD 的总目标、四线、模块职责、关系、生命周期状态和决策，整理成一张机器可查的图谱；人和 AI 都能按需展开，不必先读完整文档。

**这不是什么：** 不是游戏运行时、不是世界真值、不是开工授权，也不是交接文档。图谱描述的是**设计意图与证据位置**，实现状态要回源码和状态页核实。当前仍在开发期，不开放外部接手。

## 直接看（不需要安装）

- [graph.json](graph.json)：46 个节点、123 条关系、40 条决策、31 个可公开来源。
- [决策记录](../决策/README.md)：按编号读设计变化与取代关系。
- 图谱里的来源路径指向本仓公开正文；标注“内部原证未公开”的，说明原记录不在公开范围。

## 本机运行 MCP

图谱目录自带一个自包含 MCP 服务，只读、不连游戏、不读凭据：

    cd 图谱/mcp
    npm install      # 只安装 @modelcontextprotocol/sdk
    node server.mjs  # 通过 stdio 供 MCP 客户端使用

客户端配置示例（JSON）：

    {
      "mcpServers": {
        "rdd-architecture-public": {
          "command": "node",
          "args": ["<本仓绝对路径>/图谱/mcp/server.mjs"]
        }
      }
    }

不想配 MCP 也行，命令行直接查：

    node cli.mjs arch_overview
    node cli.mjs arch_search 任务链
    node cli.mjs arch_focus taskchain
    node cli.mjs arch_integrity

## 能查什么

| 工具 | 回答什么问题 |
|---|---|
| arch_projects / arch_overview | 项目有哪些分支、总目标是什么 |
| arch_focus / arch_detail | 某模块的父链、子层、关系和证据 |
| arch_search | 按中文概念或关键词找节点 |
| arch_status | 设计、源码、部署、实机、效果分别到哪一步 |
| arch_decisions / arch_history | 这个模块或版本怎么走到今天 |
| arch_source | 按来源 ID 读公开正文片段 |
| arch_integrity | 图谱引用和状态字段是否自洽 |
| arch_history | 某节点的完整变更时间线 |
| arch_next | 依据缺口给出的下一步候选（推断，不是授权） |
| arch_propose | 把补充想法整理成只读草案 |
| arch_source | 按来源 ID 分页读公开正文 |
| role_card / my_tasks | 读职责正文、列公开施工任务 |

## 判断口径

- **状态分维度**：design 是意图，code 是源码情况，deployment/runtime/effect 要另取证。字段齐全不等于能力完成。
- **未公开不等于不存在**：图谱移除了私有台账和内部岗位定义，节点与关系仍保留；需要原始回执时应说明缺失。
- **图谱是索引**：它不复制全文，结论回到具体文档、源码或原始回执。
- **一次修改不自动可信**：来源哈希只证明内容变过或没变，不证明摘要仍正确。

## 更新方式

公开图谱由私有维护主库脱敏导出，不在这里直接改正文。发现问题请提 issue 指出节点、关系和应查阅的公开来源；维护者回主库修正后重新发布。

许可证：图谱数据与文档 CC BY 4.0；mcp/ 脚本 MIT；游戏代码和上游资源各保其自身许可。

# Gemini AI 协作指南

本文档为利用 AI（尤其是 Gemini）与本项目进行协作提供指导。请遵循以下准则以确保高效、安全、一致的开发。

## 1. 项目简介

**Deep Research** 是一个基于 Nuxt 3 构建的 Web 应用，旨在利用大语言模型（LLM）的能力，对给定主题进行深入、自动化的信息检索、整合和分析，并最终生成结构化的研究报告。

## 2. 用途

用户可以通过一个简单的界面输入研究主题，应用后端将调用集成的人工智能服务（如 OpenAI、DeepSeek、Tavily 搜索等）和网络抓取工具（Firecrawl）来执行以下操作：
-   **初步规划**: 根据用户输入生成研究框架和搜索关键词。
-   **信息检索**: 并行执行网络搜索和内容抓取。
-   **内容处理**: 对检索到的信息进行去重、清洗和总结。
-   **报告生成**: 将处理后的信息整合成一份层次清晰、内容详实的研究报告。
-   **可视化**: 以流程图的形式展示整个研究过程。

## 3. 文件结构

以下是项目关键目录和文件的说明，可帮助 AI 快速定位和修改代码。

```
/
├── app/                      # Nuxt 前端应用
│   ├── components/           # Vue 组件 (UI构建块)
│   │   ├── ResearchForm.vue  # 研究任务表单
│   │   └── ResearchReport.vue # 研究报告展示
│   ├── composables/          # Vue 3 可组合函数 (封装和复用逻辑)
│   │   ├── useAiProvider.ts  # 管理 AI 服务商配置
│   │   └── useWebSearch.ts   # 处理网页搜索逻辑
│   ├── layouts/              # 页面布局
│   ├── pages/                # 页面 (路由)
│   │   └── index.vue         # 应用主页
│   ├── stores/               # Pinia 状态管理
│   │   └── config.ts         # 应用配置（如API Key）
│   └── types/                # 前端相关的 TypeScript 类型
│
├── server/                   # Nuxt 后端 (Nitro)
│   └── api/                  # API 接口
│       ├── research.post.ts  # 核心：执行研究任务的流式接口
│       ├── report.post.ts    # 生成并保存报告接口
│       └── feedback.post.ts  # 用户反馈接口
│
├── lib/                      # 核心业务逻辑 (前后端共享)
│   ├── ai/                   # AI 相关模块
│   │   ├── providers.ts      # AI 服务商实现
│   │   └── text-splitter.ts  # 文本分割工具
│   └── core/                 # 核心研究流程
│       └── deep-research.ts  # 主要的研究流程编排
│
├── shared/                   # 前后端共享的类型和工具函数
│   └── types/
│       ├── config.ts         # 配置相关的类型
│       └── types.d.ts        # 通用类型定义
│
├── nuxt.config.ts            # Nuxt 配置文件
└── package.json              # 项目依赖和脚本
```

## 4. AI 协作指南

### 4.1. 技术栈

-   **框架**: [Nuxt 4](https://nuxt.com/) (基于 [Vue 3](https://vuejs.org/))
-   **UI**: [Nuxt UI](https://ui.nuxt.com/) (基于 [Tailwind CSS](https://tailwindcss.com/))
-   **状态管理**: [Pinia](https://pinia.vuejs.org/)
-   **语言**: [TypeScript](https://www.typescriptlang.org/)
-   **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/)
-   **代码格式化**: [Prettier](https://prettier.io/)

### 4.2. 开发规范

-   **遵循现有模式**: 在添加或修改功能时，请严格参考并遵循项目中已有的代码风格、命名约定和设计模式。例如，使用 `composables` 封装逻辑，使用 Pinia Store 管理全局状态。
-   **类型安全**: 所有代码都必须是类型安全的。在添加新功能时，请务Cok写和使用 `shared/types/` 和 `app/types/` 中定义的 TypeScript 类型。
-   **模块化**: 将不同功能的代码拆分到独立的模块中。UI 组件放在 `app/components/`，可复用逻辑放在 `app/composables/`，核心业务逻辑放在 `lib/`。
-   **环境变量**: API 密钥等敏感信息应通过环境变量配置，切勿硬编码。参考 `.env.example` 文件。前端通过 `useRuntimeConfig` 访问，后端通过 `process.env` 访问。
-   **代码格式**: 在提交代码前，请运行 `pnpm format` 命令以确保代码风格一致。

### 4.3. 常用操作

-   **安装依赖**:
    ```bash
    pnpm install
    ```
-   **启动开发环境**:
    ```bash
    pnpm dev
    ```
-   **格式化代码**:
    ```bash
    pnpm format
    ```
-   **运行 Linter**:
    ```bash
    pnpm lint
    ```
-   **构建生产版本**:
    ```bash
    pnpm build
    ```

## 5. 后续增强建议

AI 可以从以下方面协助改进项目：

1.  **增强报告功能**:
    -   支持将报告导出为 PDF 或 Markdown 文件。
    -   在报告中增加图表或数据可视化。
    -   允许用户对报告内容进行在线编辑和保存。

2.  **优化 AI 流程**:
    -   引入更复杂的 Agent 或多 Agent 协作模式，以处理更复杂的研究任务。
    -   增加对不同类型数据源（如 PDF、学术论文）的处理能力。
    -   通过 RAG (Retrieval-Augmented Generation) 提升信息检索和生成的质量。

3.  **用户体验提升**:
    -   实现用户认证系统，保存用户的历史研究记录。
    -   优化研究流程的可视化展示，使其更具交互性。
    -   提供更精细的 AI 配置选项（如选择不同模型、调整参数等）。

4.  **健壮性**:
    -   根据项目实际需求，考虑增加适当的测试，以确保核心功能的稳定性和可靠性。
    -   增强 API 接口的错误处理和输入验证。

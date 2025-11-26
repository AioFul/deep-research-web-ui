# Deep Research Web UI

[[English](README.md) | 中文]

**Deep Research** 是一个基于 Nuxt 3 构建的高级 AI 驱动研究助手。它利用大语言模型（LLM）和递归网络搜索技术，自动化执行深度信息检索、分析和报告生成过程。

只需提供一个主题，它将为您：
1.  **规划**：生成研究框架和搜索关键词。
2.  **搜索**：使用业界领先的工具并行执行网络搜索并抓取内容。
3.  **分析**：阅读、去重并综合来自多个来源的信息。
4.  **报告**：生成结构清晰、内容详实且包含引用的研究报告。
5.  **可视化**：以交互式流程图展示完整的 AI 思考与研究过程。

## ✨ 核心功能

- 🚀 **隐私安全**：所有配置和 API 密钥均存储在您的浏览器本地（客户端模式），或安全地配置在您的服务器上（服务端模式）。
- 🔍 **递归深度搜索**：通过递归探索相关主题和追踪线索，超越浅层搜索结果，提供更深度的洞察。
- 🕙 **实时反馈**：通过透明的执行流程，实时观察 AI 的思考、规划和搜索过程。
- 📊 **可视化知识图谱**：以交互式树状图展示研究路径和收集到的信息。
- 📄 **专业报告**：将研究发现导出为精美的 Markdown 或 PDF 报告。
- 🤖 **多模型支持**：兼容 OpenAI, DeepSeek, SiliconFlow, OpenRouter, Ollama 等多种模型服务。
- 🌍 **多语言支持**：支持多种语言的研究和报告生成（英语、中文、荷兰语等）。
- 🐳 **轻松部署**：支持 Docker 部署，提供简化的服务端模式（环境变量配置）和灵活的客户端模式。

## 🛠️ 技术架构

基于现代、稳健的技术栈构建：
- **框架**: [Nuxt 4](https://nuxt.com/) (Vue 3)
- **UI 库**: [Nuxt UI](https://ui.nuxt.com/) & Tailwind CSS
- **状态管理**: [Pinia](https://pinia.vuejs.org/)
- **AI 集成**: [Vercel AI SDK](https://sdk.vercel.ai/)
- **搜索集成**: Tavily & Firecrawl

## 🚀 快速开始

### 选项 1: Docker 部署（推荐）

Deep Research 支持两种运行模式：**服务端模式**（在服务器端配置 API 密钥）或 **客户端模式**（用户在浏览器中输入 API 密钥）。

#### 服务端模式（适合分享使用）
用户无需配置任何内容。您通过环境变量提供 API 密钥。

```bash
docker run -p 3000:3000 \
  -e NUXT_PUBLIC_SERVER_MODE=true \
  -e NUXT_AI_API_KEY=你的AI-API密钥 \
  -e NUXT_WEB_SEARCH_API_KEY=你的搜索API密钥 \
  -e NUXT_PUBLIC_AI_PROVIDER=openai-compatible \
  -e NUXT_PUBLIC_AI_MODEL=gpt-4o-mini \
  -e NUXT_PUBLIC_WEB_SEARCH_PROVIDER=tavily \
  anotia/deep-research-web:latest
```

#### 客户端模式（适合个人使用）
用户在浏览器设置中自行配置 API 密钥。

```bash
docker run -p 3000:3000 --name deep-research-web -d anotia/deep-research-web:latest
```

### 选项 2: 本地开发

1.  **克隆仓库**:
    ```bash
    git clone https://github.com/AnotiaWang/deep-research-web-ui.git
    cd deep-research-web-ui
    ```

2.  **安装依赖**:
    ```bash
    pnpm install
    ```

3.  **启动开发服务器**:
    ```bash
    pnpm dev
    ```
    访问应用：`http://localhost:3000`

4.  **构建生产版本**:
    ```bash
    pnpm build
    ```

## ⚙️ 配置说明

### 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| **服务端模式** | | |
| `NUXT_PUBLIC_SERVER_MODE` | 启用服务端配置模式 | `false` |
| `NUXT_AI_API_KEY` | AI 服务商 API 密钥 | - |
| `NUXT_AI_API_BASE` | AI 服务商基础 URL | - |
| `NUXT_WEB_SEARCH_API_KEY` | 搜索服务商 API 密钥 (Tavily/Firecrawl) | - |
| **公共设置** | | |
| `NUXT_PUBLIC_AI_PROVIDER` | AI 服务商 (`openai`, `deepseek`, `siliconflow`, `custom`) | `openai-compatible` |
| `NUXT_PUBLIC_AI_MODEL` | 模型 ID (如 `gpt-4o`, `deepseek-chat`) | `gpt-4o-mini` |
| `NUXT_PUBLIC_AI_CONTEXT_SIZE`| 最大上下文窗口大小 | `128000` |
| `NUXT_PUBLIC_WEB_SEARCH_PROVIDER` | 搜索服务商 (`tavily`, `firecrawl`, `google-pse`) | `tavily` |
| `NUXT_PUBLIC_WEB_SEARCH_CONCURRENCY_LIMIT` | 最大并发搜索请求数 | `2` |
| `NUXT_PUBLIC_WEB_SEARCH_SEARCH_LANGUAGE` | 默认搜索语言 | `en` |

### 支持的服务商

**AI 模型:**
- OpenAI (及兼容接口)
- DeepSeek
- SiliconFlow
- OpenRouter
- Ollama (本地运行)
- InfiniAI

**网络搜索:**
- Tavily (推荐)
- Firecrawl
- Google Programmable Search Engine (PSE)

## 📂 项目结构

```
/
├── app/                      # Nuxt 前端应用
│   ├── components/           # Vue 组件 (研究表单、报告展示等)
│   ├── composables/          # 共享逻辑 (AI 服务商、搜索逻辑)
│   ├── stores/               # Pinia 状态 (配置、历史记录)
│   └── pages/                # 应用路由
├── server/                   # Nitro 后端
│   └── api/
│       ├── research.post.ts  # 核心递归研究逻辑
│       └── report.post.ts    # 报告生成接口
├── lib/                      # 核心业务逻辑 (前后端共享)
│   ├── ai/                   # AI 服务商抽象与提示词
│   └── core/                 # 深度研究算法实现
└── docs/                     # 详细文档
```

## 🛣️ 路线图

- [x] 递归深度搜索与分析
- [x] 多语言支持
- [x] Docker 部署支持
- [x] 实时可视化展示
- [ ] **增强报告功能**：改进 PDF/Markdown 导出，集成数据可视化图表。
- [ ] **高级 Agent**：支持多 Agent 协作处理复杂任务。
- [ ] **数据源扩展**：支持 PDF 上传和学术论文分析 (RAG)。
- [ ] **用户系统**：用户认证和云端历史记录同步。

## 🤝 贡献指南

欢迎贡献代码！请随时提交 Pull Request。
1.  Fork 本项目
2.  创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3.  提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4.  推送到分支 (`git push origin feature/AmazingFeature`)
5.  提交 Pull Request

## 📄 许可证

本项目基于 MIT 许可证分发。详情请参阅 `LICENSE` 文件。

## 🌟 赞助

<a href="https://www.swiftproxy.net/?ref=anotiawang">
<img width="415" alt="image" src="https://github.com/user-attachments/assets/df889a5f-c4fc-4209-b49d-9c7dc8b9c3ca" />
</a>

**使用 Swiftproxy 解锁可靠的代理服务**

通过 Swiftproxy，您可以访问高性能、安全的代理服务，以增强您的网络自动化、隐私保护和数据采集能力。我们的服务深受开发者和企业信赖，用于扩展抓取任务并确保安全的在线体验。立即访问 Swiftproxy.net 开始使用。使用优惠码 `GHB5` 可享 9 折优惠！

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=AnotiaWang/deep-research-web-ui&type=Date)](https://star-history.com/#AnotiaWang/deep-research-web-ui&Date)
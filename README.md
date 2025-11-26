# Deep Research Web UI

[English | [中文](README_zh.md)]

**Deep Research** is an advanced, AI-powered research assistant built with Nuxt 3. It leverages Large Language Models (LLMs) and recursive web search techniques to automate the process of deep information retrieval, analysis, and report generation.

Give it a topic, and it will:
1.  **Plan**: Generate a research framework and search keywords.
2.  **Search**: Execute parallel web searches and crawl content using industry-leading tools.
3.  **Analyze**: Read, deduplicate, and synthesize information from multiple sources.
4.  **Report**: Produce a structured, comprehensive research report with citations.
5.  **Visualize**: Display the entire research thought process in an interactive flow.

## ✨ Key Features

- 🚀 **Safe & Secure**: All configuration and API keys are stored locally in your browser (Client Mode), or securely on your server (Server Mode).
- 🔍 **Recursive Deep Search**: Goes beyond surface-level results by recursively exploring related topics and following leads.
- 🕙 **Real-time Feedback**: Watch the AI think, plan, and search in real-time with a transparent execution flow.
- 📊 **Visual Knowledge Graph**: Interactive tree visualization of the research path and gathered information.
- 📄 **Professional Reports**: Exports findings as polished Markdown or PDF reports.
- 🤖 **Multi-Model Support**: Works with OpenAI, DeepSeek, SiliconFlow, OpenRouter, Ollama, and more.
- 🌍 **Multi-Language**: Supports research and reporting in multiple languages (English, Chinese, Dutch, etc.).
- 🐳 **Easy Deployment**: Docker-ready with support for both simplified Server Mode (env vars) and flexible Client Mode.

## 🛠️ Architecture

Built on a modern, robust tech stack:
- **Framework**: [Nuxt 4](https://nuxt.com/) (Vue 3)
- **UI Library**: [Nuxt UI](https://ui.nuxt.com/) & Tailwind CSS
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **AI Integration**: [Vercel AI SDK](https://sdk.vercel.ai/)
- **Search Integration**: Tavily & Firecrawl

## 🚀 Quick Start

### Option 1: Docker (Recommended)

You can run Deep Research in two modes: **Server Mode** (API keys set on server) or **Client Mode** (users enter API keys in browser).

#### Server Mode (Best for sharing)
Users don't need to configure anything. You provide the API keys via environment variables.

```bash
docker run -p 3000:3000 \
  -e NUXT_PUBLIC_SERVER_MODE=true \
  -e NUXT_AI_API_KEY=your-ai-api-key \
  -e NUXT_WEB_SEARCH_API_KEY=your-search-api-key \
  -e NUXT_PUBLIC_AI_PROVIDER=openai-compatible \
  -e NUXT_PUBLIC_AI_MODEL=gpt-4o-mini \
  -e NUXT_PUBLIC_WEB_SEARCH_PROVIDER=tavily \
  anotia/deep-research-web:latest
```

#### Client Mode (Best for personal use)
Users configure their own API keys in the browser settings.

```bash
docker run -p 3000:3000 --name deep-research-web -d anotia/deep-research-web:latest
```

### Option 2: Local Development

1.  **Clone the repository**:
    ```bash
git clone https://github.com/AnotiaWang/deep-research-web-ui.git
cd deep-research-web-ui
```

2.  **Install dependencies**:
    ```bash
pnpm install
```

3.  **Start development server**:
    ```bash
pnpm dev
```
    Access the app at `http://localhost:3000`.

4.  **Build for production**:
    ```bash
pnpm build
```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| **Server Mode** | | |
| `NUXT_PUBLIC_SERVER_MODE` | Enable server-side configuration mode | `false` |
| `NUXT_AI_API_KEY` | API Key for the AI Provider | - |
| `NUXT_AI_API_BASE` | Base URL for the AI Provider | - |
| `NUXT_WEB_SEARCH_API_KEY` | API Key for Search Provider (Tavily/Firecrawl) | - |
| **Public Settings** | | |
| `NUXT_PUBLIC_AI_PROVIDER` | AI Provider (`openai`, `deepseek`, `siliconflow`, `custom`) | `openai-compatible` |
| `NUXT_PUBLIC_AI_MODEL` | Model ID (e.g., `gpt-4o`, `deepseek-chat`) | `gpt-4o-mini` |
| `NUXT_PUBLIC_AI_CONTEXT_SIZE`| Max context window size | `128000` |
| `NUXT_PUBLIC_WEB_SEARCH_PROVIDER` | Search Provider (`tavily`, `firecrawl`, `google-pse`) | `tavily` |
| `NUXT_PUBLIC_WEB_SEARCH_CONCURRENCY_LIMIT` | Max parallel search requests | `2` |
| `NUXT_PUBLIC_WEB_SEARCH_SEARCH_LANGUAGE` | Default search language | `en` |

### Supported Providers

**AI Models:**
- OpenAI (and compatibles)
- DeepSeek
- SiliconFlow
- OpenRouter
- Ollama (Local)
- InfiniAI

**Web Search:**
- Tavily (Recommended)
- Firecrawl
- Google Programmable Search Engine (PSE)

## 📂 Project Structure

```
/
├── app/                      # Nuxt Frontend
│   ├── components/           # Vue Components (ResearchForm, Reports, etc.)
│   ├── composables/          # Shared logic (AI providers, Search logic)
│   ├── stores/               # Pinia State (Config, History)
│   └── pages/                # Application Routes
├── server/                   # Nitro Backend
│   └── api/
│       ├── research.post.ts  # Core recursive research logic
│       └── report.post.ts    # Report generation endpoint
├── lib/                      # Core Business Logic (Shared)
│   ├── ai/                   # AI Provider abstractions & Prompts
│   └── core/                 # Deep Research algorithm implementation
└── docs/                     # Detailed Documentation
```

## 🛣️ Roadmap

- [x] Recursive deep search & analysis
- [x] Multi-language support
- [x] Docker deployment
- [x] Real-time visualization
- [ ] **Enhanced Reporting**: PDF/Markdown export improvements, data visualization integration.
- [ ] **Advanced Agents**: Multi-agent collaboration for complex tasks.
- [ ] **Data Sources**: Support for PDF upload and academic paper analysis (RAG).
- [ ] **User System**: Authentication and cloud history sync.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🌟 Sponsor

<a href="https://www.swiftproxy.net/?ref=anotiawang">
<img width="415" alt="image" src="https://github.com/user-attachments/assets/df889a5f-c4fc-4209-b49d-9c7dc8b9c3ca" />
</a>

**Unlock Reliable Proxy Services with Swiftproxy**

With Swiftproxy, you can access high-performance, secure proxies to enhance your web automation, privacy, and data collection efforts. Our services are trusted by developers and businesses to scale scraping tasks and ensure a safe online experience. Get started today at Swiftproxy.net. Use the coupon `GHB5` to get 10% off!

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=AnotiaWang/deep-research-web-ui&type=Date)](https://star-history.com/#AnotiaWang/deep-research-web-ui&Date)
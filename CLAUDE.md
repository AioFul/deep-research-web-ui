# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is **Deep Research**, an AI-powered research assistant built with Nuxt 4/3 that automates deep information retrieval, analysis, and report generation. The system uses LLMs and recursive web search to conduct comprehensive research on any topic.

## Development Commands

### Setup & Running
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Format code
pnpm format

# Check code formatting (lint)
pnpm lint
```

### Testing
```bash
# Run tests
vitest
```

## Architecture Overview

### Technology Stack
- **Framework**: Nuxt 4 (Vue 3 + TypeScript) with Vite
- **UI Library**: Nuxt UI 3.3.0 + Tailwind CSS 4
- **State Management**: Pinia
- **AI Integration**: Vercel AI SDK with multiple providers
- **Flow Visualization**: @vue-flow/core
- **Search Providers**: Tavily, Firecrawl, Google PSE, SearXNG, Browserless

### System Modes

The application runs in **two modes**:

1. **Server Mode** (`NUXT_PUBLIC_SERVER_MODE=true`)
   - API keys configured via server environment variables
   - Users don't need to configure keys
   - Configuration set at server startup

2. **Client Mode** (default)
   - Users enter API keys in browser settings
   - Keys stored in localStorage
   - Each user manages their own configuration

### Key Directories

```
├── app/                      # Nuxt Frontend
│   ├── components/           # Vue Components (ResearchForm, Reports, ConfigManager)
│   ├── composables/          # Shared logic (useAiProvider, useWebSearch, useHistory)
│   ├── stores/               # Pinia state management (config.ts)
│   ├── pages/                # Application routes (index.vue)
│   └── layouts/              # Page layouts
├── server/                   # Nitro Backend
│   └── api/
│       ├── research.post.ts  # Core research orchestration API
│       ├── feedback.post.ts  # AI feedback generation
│       ├── report.post.ts    # Report generation
│       └── fetch.ts          # Web scraping endpoint
├── lib/                      # Shared business logic
│   ├── ai/                   # AI provider abstractions
│   │   ├── providers.ts      # AI provider factory
│   │   └── text-splitter.ts  # Context window management
│   ├── core/                 # Deep research algorithm
│   │   ├── deep-research.ts  # Recursive search orchestration
│   │   └── feedback.ts       # Feedback generation logic
│   └── prompt.ts             # LLM prompt templates
├── shared/                   # Common types and utilities
│   ├── types/                # TypeScript type definitions
│   └── utils/                # Shared utility functions
└── docs/                     # Architecture documentation (Chinese)
```

### Core Research Algorithm

The `deep-research.ts` module implements a **recursive search algorithm**:

1. **Query Generation**: AI generates search queries based on user input or recursive refinement
2. **Parallel Search**: Queries are executed in parallel (concurrency controlled by `PLIMIT`)
3. **Result Processing**: AI analyzes search results and extracts key learnings
4. **Recursive Exploration**: AI generates follow-up questions for deeper investigation
5. **Depth Tracking**: Algorithm tracks recursion depth (defaults: breadth=3, maxDepth=3)
6. **Deduplication**: URLs and learnings are deduplicated across all nodes

Key flow:
- Root node (ID '0') → Generate 3 queries → Each search → Process results → Generate follow-ups → Recurse
- Breadth halves at each depth level (3 → 2 → 1) to avoid exponential explosion
- Progress updates streamed to clients via `onProgress` callback

### Configuration System

The `app/stores/config.ts` implements dual-mode configuration:
- **Server config**: Read from `runtimeConfig` (Nuxt server environment variables)
- **Local config**: Stored in localStorage (`deep-research-config` key)
- **Validation**: `validateConfig()` checks required fields for each provider

Key environment variables:
- `NUXT_PUBLIC_SERVER_MODE`: Enable/disable server mode
- `NUXT_AI_API_KEY`: AI provider API key (server mode)
- `NUXT_WEB_SEARCH_API_KEY`: Search provider API key (server mode)
- `NUXT_PUBLIC_AI_PROVIDER`: AI provider type (openai, deepseek, siliconflow, openrouter, ollama, etc.)
- `NUXT_PUBLIC_WEB_SEARCH_PROVIDER`: Search provider (tavily, firecrawl, google-pse, searxng)
- `NUXT_WEB_SEARCH_API_BASE`: Custom API base URL (for Firecrawl, SearXNG)
- `NUXT_PUBLIC_WEB_SEARCH_CONCURRENCY_LIMIT`: Max parallel searches (default: 2)

### AI Integration

Located in `lib/ai/providers.ts`, the system supports:
- OpenAI (and OpenAI-compatible APIs like SiliconFlow)
- DeepSeek
- OpenRouter
- Ollama (local models)
- InfiniAI

Key functions:
- `getLanguageModel(aiConfig: ConfigAi)`: Creates AI SDK-compatible model instance
- `getProviderKey(providerType: AiProviderType)`: Maps provider names to keys
- `getApiBase(providerType: AiProviderType)`: Returns API base URLs

### Search Integration

`app/composables/useWebSearch.ts` provides a unified search interface:
- **Tavily**: Primary search provider (supports advanced search topics)
- **Firecrawl**: Web scraping and indexing
- **Google PSE**: Programmable Search Engine
- **SearXNG**: Self-hosted metasearch
- **Browserless**: Chrome-based scraping with proxy support

Each provider implements the same interface: `(query, { maxResults, lang }) => Promise<WebSearchResult[]>`

### Search Flow Visualization

Located in `app/components/DeepResearch/`:
- `DeepResearch.vue`: Main orchestration component
- `SearchFlow.vue`: Vue Flow visualization of research tree
- `SearchNode.vue`: Individual node rendering
- `NodeDetail.vue`: Node detail panel

Nodes display real-time status (generating query → searching → processing → complete) with reasoning and error states.

### Streaming JSON Response

`shared/utils/json.ts` implements `parseStreamingJson()`:
- Parses AI JSON output in real-time as it streams
- Supports partial objects and reasoning text
- Emits 'object', 'reasoning', 'error', and 'bad-end' events
- Validation via Zod schemas ensures structured output compliance

### Key Technical Details

1. **Type Safety**: Heavy use of TypeScript + Zod schemas for runtime validation
2. **Async Concurrency**: Uses `p-limit` to control search concurrency
3. **Token Management**: `js-tiktoken` for context window calculation in text-splitter.ts
4. **Locale Support**: Built-in i18n via @nuxtjs/i18n (en, zh, nl)
5. **Real-time Updates**: All AI operations stream progress to UI
6. **Horizontal Scaling**: Hybrid communication via shared types and modular functions

### API Endpoints

- `POST /api/research` - Core research orchestration (accepts query, breadth, depth, language)
- `POST /api/feedback` - Generate AI feedback questions
- `POST /api/report` - Generate final report from learnings
- `POST /api/fetch` - Fetch and extract content from URL (proxy for Browserless)

### Error Handling

`shared/utils/errors.ts` contains `throwAiError()` for consistent error handling across AI operations. Errors are streamed to clients via the progress mechanism.

# 项目分析总结报告（完整版）

生成时间: 2025-11-25 09:34:21 UTC

## 执行耗时统计

- **总执行时间**: 297.46 秒
- **预处理阶段**: 0.15 秒 (0.0%)
- **研究阶段**: 38.02 秒 (12.8%)
- **文档生成阶段**: 259.29 秒 (87.2%)
- **输出阶段**: 0.00 秒 (0.0%)
- **Summary生成时间**: 0.000 秒

## 缓存性能统计与节约效果

### 性能指标
- **缓存命中率**: 77.1%
- **总操作次数**: 35
- **缓存命中**: 27 次
- **缓存未命中**: 8 次
- **缓存写入**: 9 次

### 节约效果
- **节省推理时间**: 148.5 秒
- **节省Token数量**: 61061 输入 + 19322 输出 = 80383 总计
- **估算节省成本**: $0.0410
- **性能提升**: 77.1%
- **效率提升比**: 0.5x（节省时间 / 实际执行时间）

## 核心调研数据汇总

根据Prompt模板数据整合规则，以下为四类调研材料的完整内容：

### 系统上下文调研报告
提供项目的核心目标、用户角色和系统边界信息。

```json
{
  "business_value": "提供AI驱动的深度研究能力，帮助用户通过递归网络搜索和智能分析深入探索复杂问题，节省研究时间并提高研究质量。",
  "confidence_score": 0.9,
  "external_systems": [
    {
      "description": "如OpenAI、SiliconFlow等AI模型服务",
      "interaction_type": "API调用",
      "name": "AI服务提供商"
    },
    {
      "description": "如Tavily、Firecrawl等网络搜索API",
      "interaction_type": "API调用",
      "name": "网络搜索服务"
    },
    {
      "description": "用于网页内容抓取的浏览器API服务",
      "interaction_type": "API调用",
      "name": "浏览器API"
    }
  ],
  "project_description": "这是一个基于Nuxt.js的AI驱动深度研究和分析系统，能够通过递归网络搜索和AI分析对复杂问题进行深入探索，并生成详细的研究报告。",
  "project_name": "nuxt-app",
  "project_type": "FullStackApp",
  "system_boundary": {
    "excluded_components": [
      "外部AI服务",
      "外部搜索服务",
      "用户本地数据存储",
      "第三方浏览器API"
    ],
    "included_components": [
      "前端用户界面",
      "后端API服务",
      "AI模型集成",
      "网络搜索集成",
      "配置管理系统",
      "历史记录功能",
      "多语言支持"
    ],
    "scope": "AI驱动的深度研究和分析系统，包含前端界面、后端API、AI集成、网络搜索集成和配置管理"
  },
  "target_users": [
    {
      "description": "需要深入研究特定主题的专业研究人员",
      "name": "研究人员",
      "needs": [
        "深度分析能力",
        "多角度探索",
        "高质量研究报告"
      ]
    },
    {
      "description": "需要撰写论文或报告的学生",
      "name": "学生",
      "needs": [
        "快速获取信息",
        "结构化研究流程",
        "多语言支持"
      ]
    },
    {
      "description": "需要对复杂问题进行调研分析的职场人士",
      "name": "知识工作者",
      "needs": [
        "高效研究工具",
        "智能数据整理",
        "可追溯的研究过程"
      ]
    }
  ]
}
```

### 领域模块调研报告
提供高层次的领域划分、模块关系和核心业务流程信息。

```json
{
  "architecture_summary": "该项目采用前后端分离的全栈架构，以Nuxt.js作为前端框架，后端提供API服务。系统以AI驱动的深度研究为核心，通过递归网络搜索和智能分析实现复杂问题的深入探索。架构采用领域驱动设计思想，划分为前端界面域、核心业务域、AI服务域、网络搜索域和配置管理域，各域之间通过明确定义的接口协作。系统支持多语言，具备良好的可扩展性和模块化设计，通过状态管理和依赖注入实现组件间的数据流管理。",
  "business_flows": [
    {
      "description": "用户输入研究问题，系统通过AI生成搜索查询，执行网络搜索，分析结果并递归深入探索，最终生成详细研究报告",
      "entry_point": "server/api/research.post.ts",
      "importance": 9.0,
      "involved_domains_count": 4,
      "name": "深度研究流程",
      "steps": [
        {
          "code_entry_point": "app/components/ResearchForm.vue",
          "domain_module": "前端界面域",
          "operation": "接收用户输入的研究问题并提交到后端API",
          "step": 1,
          "sub_module": "研究表单模块"
        },
        {
          "code_entry_point": "lib/core/deep-research.ts",
          "domain_module": "核心业务域",
          "operation": "调用AI模型生成搜索查询，执行递归搜索分析",
          "step": 2,
          "sub_module": "深度研究模块"
        },
        {
          "code_entry_point": "lib/core/deep-research.ts",
          "domain_module": "网络搜索域",
          "operation": "执行网络搜索并获取搜索结果",
          "step": 3,
          "sub_module": "搜索处理模块"
        },
        {
          "code_entry_point": "lib/core/deep-research.ts",
          "domain_module": "AI服务域",
          "operation": "分析搜索结果并提取关键信息",
          "step": 4,
          "sub_module": "AI分析模块"
        },
        {
          "code_entry_point": "lib/core/deep-research.ts",
          "domain_module": "核心业务域",
          "operation": "整合研究结果并生成最终报告",
          "step": 5,
          "sub_module": "报告生成模块"
        },
        {
          "code_entry_point": "app/components/ResearchReport.vue",
          "domain_module": "前端界面域",
          "operation": "展示研究报告并提供下载选项",
          "step": 6,
          "sub_module": "报告展示模块"
        }
      ]
    },
    {
      "description": "基于用户查询生成相关后续问题，帮助用户明确研究方向",
      "entry_point": "server/api/feedback.post.ts",
      "importance": 7.0,
      "involved_domains_count": 3,
      "name": "AI反馈生成流程",
      "steps": [
        {
          "code_entry_point": "app/components/ResearchFeedback.vue",
          "domain_module": "前端界面域",
          "operation": "触发反馈问题生成请求",
          "step": 1,
          "sub_module": "反馈模块"
        },
        {
          "code_entry_point": "lib/core/feedback.ts",
          "domain_module": "核心业务域",
          "operation": "调用AI模型生成相关后续问题",
          "step": 2,
          "sub_module": "反馈生成模块"
        },
        {
          "code_entry_point": "lib/core/feedback.ts",
          "domain_module": "AI服务域",
          "operation": "处理AI模型调用并返回格式化结果",
          "step": 3,
          "sub_module": "AI处理模块"
        },
        {
          "code_entry_point": "app/components/ResearchFeedback.vue",
          "domain_module": "前端界面域",
          "operation": "展示生成的反馈问题供用户选择",
          "step": 4,
          "sub_module": "反馈展示模块"
        }
      ]
    },
    {
      "description": "管理AI提供商、模型选择、搜索服务等配置信息",
      "entry_point": "app/stores/config.ts",
      "importance": 8.0,
      "involved_domains_count": 2,
      "name": "配置管理流程",
      "steps": [
        {
          "code_entry_point": "app/stores/config.ts",
          "domain_module": "配置管理域",
          "operation": "初始化配置状态，区分服务器模式和本地模式",
          "step": 1,
          "sub_module": "配置状态模块"
        },
        {
          "code_entry_point": "app/components/ConfigManager.vue",
          "domain_module": "前端界面域",
          "operation": "提供配置管理界面供用户设置",
          "step": 2,
          "sub_module": "配置管理界面模块"
        },
        {
          "code_entry_point": "app/stores/config.ts",
          "domain_module": "配置管理域",
          "operation": "验证并保存用户配置信息",
          "step": 3,
          "sub_module": "配置验证模块"
        },
        {
          "code_entry_point": "app/composables/useAiProvider.ts",
          "domain_module": "其他相关域",
          "operation": "应用配置到AI服务和网络搜索服务",
          "step": 4,
          "sub_module": null
        }
      ]
    }
  ],
  "confidence_score": 9.0,
  "domain_modules": [
    {
      "code_paths": [
        "app/components/*.vue",
        "app/pages/*.vue",
        "app/layouts/*.vue"
      ],
      "complexity": 7.0,
      "description": "负责用户交互界面的展示和用户操作的处理，包括研究表单、报告展示、配置管理等界面组件，为用户提供直观的操作界面和流畅的用户体验",
      "domain_type": "核心业务域",
      "importance": 9.0,
      "name": "前端界面域",
      "sub_modules": [
        {
          "code_paths": [
            "app/components/ResearchForm.vue"
          ],
          "description": "处理用户输入研究问题的界面组件",
          "importance": 9.0,
          "key_functions": [
            "接收用户输入",
            "提交研究任务"
          ],
          "name": "研究表单模块"
        },
        {
          "code_paths": [
            "app/components/ResearchReport.vue"
          ],
          "description": "展示AI生成的研究报告界面组件",
          "importance": 9.0,
          "key_functions": [
            "展示报告",
            "提供下载选项"
          ],
          "name": "报告展示模块"
        },
        {
          "code_paths": [
            "app/components/ConfigManager.vue"
          ],
          "description": "提供配置项编辑和保存的界面组件",
          "importance": 8.0,
          "key_functions": [
            "配置编辑",
            "配置保存"
          ],
          "name": "配置管理界面模块"
        },
        {
          "code_paths": [
            "app/components/ResearchFeedback.vue"
          ],
          "description": "展示AI生成的反馈问题供用户选择的界面组件",
          "importance": 7.0,
          "key_functions": [
            "展示反馈问题",
            "用户选择处理"
          ],
          "name": "反馈展示模块"
        }
      ]
    },
    {
      "code_paths": [
        "lib/core/*.ts",
        "server/api/research.post.ts",
        "server/api/feedback.post.ts",
        "server/api/report.post.ts"
      ],
      "complexity": 9.0,
      "description": "系统的核心逻辑处理层，包括深度研究算法、反馈生成、递归搜索等核心业务逻辑，负责协调各服务组件完成具体业务需求",
      "domain_type": "核心业务域",
      "importance": 10.0,
      "name": "核心业务域",
      "sub_modules": [
        {
          "code_paths": [
            "lib/core/deep-research.ts"
          ],
          "description": "实现AI驱动的递归网络搜索和分析系统",
          "importance": 9.0,
          "key_functions": [
            "生成搜索查询",
            "处理搜索结果",
            "递归研究",
            "生成报告"
          ],
          "name": "深度研究模块"
        },
        {
          "code_paths": [
            "lib/core/feedback.ts"
          ],
          "description": "生成AI驱动的反馈问题帮助用户明确研究方向",
          "importance": 8.0,
          "key_functions": [
            "生成反馈问题",
            "格式化AI响应"
          ],
          "name": "反馈生成模块"
        },
        {
          "code_paths": [
            "lib/core/deep-research.ts"
          ],
          "description": "整合研究结果并生成详细研究报告",
          "importance": 9.0,
          "key_functions": [
            "整合结果",
            "生成报告"
          ],
          "name": "报告生成模块"
        }
      ]
    },
    {
      "code_paths": [
        "lib/ai/*.ts",
        "lib/prompt.ts",
        "shared/utils/ai-model.ts"
      ],
      "complexity": 8.0,
      "description": "负责与AI模型的交互和处理，包括提示词生成、模型调用、响应处理、文本分割等功能，为系统提供AI能力支撑",
      "domain_type": "基础设施域",
      "importance": 9.0,
      "name": "AI服务域",
      "sub_modules": [
        {
          "code_paths": [
            "lib/prompt.ts"
          ],
          "description": "生成AI助手的提示词模板",
          "importance": 8.0,
          "key_functions": [
            "生成系统提示",
            "生成语言提示"
          ],
          "name": "提示词生成模块"
        },
        {
          "code_paths": [
            "lib/ai/providers.ts"
          ],
          "description": "处理AI模型调用和响应流处理",
          "importance": 9.0,
          "key_functions": [
            "模型调用",
            "响应处理"
          ],
          "name": "AI模型交互模块"
        },
        {
          "code_paths": [
            "lib/ai/text-splitter.ts"
          ],
          "description": "将大块文本分割成适合AI处理的小块",
          "importance": 7.0,
          "key_functions": [
            "文本分割",
            "块大小管理"
          ],
          "name": "文本分割模块"
        }
      ]
    },
    {
      "code_paths": [
        "server/utils/content.ts",
        "lib/core/deep-research.ts"
      ],
      "complexity": 7.0,
      "description": "负责网络搜索功能的实现，包括搜索查询执行、结果获取、内容抓取等，为深度研究提供数据源",
      "domain_type": "基础设施域",
      "importance": 8.0,
      "name": "网络搜索域",
      "sub_modules": [
        {
          "code_paths": [
            "lib/core/deep-research.ts"
          ],
          "description": "执行网络搜索并获取搜索结果",
          "importance": 9.0,
          "key_functions": [
            "执行搜索",
            "获取结果"
          ],
          "name": "搜索处理模块"
        },
        {
          "code_paths": [
            "server/utils/content.ts"
          ],
          "description": "从搜索结果中抓取具体内容",
          "importance": 8.0,
          "key_functions": [
            "内容抓取",
            "数据提取"
          ],
          "name": "内容抓取模块"
        }
      ]
    },
    {
      "code_paths": [
        "app/stores/config.ts",
        "shared/types/config.ts",
        "nuxt.config.ts",
        "app/composables/useServerMode.ts"
      ],
      "complexity": 6.0,
      "description": "管理系统的全局配置，包括AI提供商、模型选择、搜索服务等配置项，支持服务器模式和本地模式",
      "domain_type": "基础设施域",
      "importance": 8.0,
      "name": "配置管理域",
      "sub_modules": [
        {
          "code_paths": [
            "app/stores/config.ts"
          ],
          "description": "管理应用的配置状态",
          "importance": 8.0,
          "key_functions": [
            "状态管理",
            "模式切换"
          ],
          "name": "配置状态模块"
        },
        {
          "code_paths": [
            "app/stores/config.ts",
            "shared/types/config.ts"
          ],
          "description": "验证配置项的正确性",
          "importance": 7.0,
          "key_functions": [
            "配置验证",
            "错误检查"
          ],
          "name": "配置验证模块"
        },
        {
          "code_paths": [
            "shared/types/config.ts"
          ],
          "description": "定义配置的数据结构和类型",
          "importance": 6.0,
          "key_functions": [
            "类型定义",
            "接口声明"
          ],
          "name": "配置类型定义模块"
        }
      ]
    }
  ],
  "domain_relations": [
    {
      "description": "前端界面调用核心业务域的服务来执行深度研究和反馈生成等核心功能",
      "from_domain": "前端界面域",
      "relation_type": "服务调用",
      "strength": 9.0,
      "to_domain": "核心业务域"
    },
    {
      "description": "核心业务域依赖AI服务域的模型调用来完成搜索查询生成、结果分析等AI驱动功能",
      "from_domain": "核心业务域",
      "relation_type": "AI模型调用",
      "strength": 10.0,
      "to_domain": "AI服务域"
    },
    {
      "description": "核心业务域调用网络搜索域的服务获取研究所需的数据源",
      "from_domain": "核心业务域",
      "relation_type": "数据依赖",
      "strength": 8.0,
      "to_domain": "网络搜索域"
    },
    {
      "description": "AI服务域需要从配置管理域获取AI提供商、模型等配置信息",
      "from_domain": "AI服务域",
      "relation_type": "配置依赖",
      "strength": 7.0,
      "to_domain": "配置管理域"
    },
    {
      "description": "网络搜索域需要从配置管理域获取搜索服务提供商等配置信息",
      "from_domain": "网络搜索域",
      "relation_type": "配置依赖",
      "strength": 7.0,
      "to_domain": "配置管理域"
    },
    {
      "description": "前端界面从配置管理域读取当前配置并在界面上展示，同时响应配置变更",
      "from_domain": "前端界面域",
      "relation_type": "状态管理",
      "strength": 8.0,
      "to_domain": "配置管理域"
    },
    {
      "description": "前端界面域使用网络搜索域的功能来实现某些辅助性的搜索显示功能",
      "from_domain": "前端界面域",
      "relation_type": "工具支撑",
      "strength": 6.0,
      "to_domain": "网络搜索域"
    }
  ]
}
```

### 工作流调研报告
包含对代码库的静态分析结果和业务流程分析。

```json
{
  "main_workflow": {
    "description": "用户输入研究问题，系统通过AI生成搜索查询，执行网络搜索，分析结果并递归深入探索，最终生成详细研究报告。这是系统最核心的功能流程，实现了AI驱动的递归搜索和分析机制。",
    "flowchart_mermaid": "graph TD\n    A[用户输入研究问题] --> B[AI生成搜索查询]\n    B --> C[执行网络搜索]\n    C --> D[AI分析搜索结果]\n    D --> E{是否需要进一步探索}\n    E -->|是| F[生成新查询继续搜索]\n    F --> D\n    E -->|否| G[整合研究结果]\n    G --> H[生成研究报告]\n    H --> I[展示报告给用户]\n    \n    style A fill:#e1f5fe\n    style H fill:#f3e5f5\n    style I fill:#e8f5e8",
    "name": "深度研究流程"
  },
  "other_important_workflows": [
    {
      "description": "基于用户查询生成相关后续问题，帮助用户明确研究方向。系统通过AI模型分析用户输入的问题，生成一系列相关的反馈问题供用户选择，以优化研究方向和范围。",
      "flowchart_mermaid": "graph TD\n    A[用户输入研究问题] --> B[AI分析问题内容]\n    B --> C[生成相关反馈问题]\n    C --> D[格式化反馈问题列表]\n    D --> E[展示反馈问题]\n    E --> F[用户选择反馈问题]\n    F --> G[优化研究方向]\n    \n    style A fill:#e1f5fe\n    style E fill:#fff3e0\n    style G fill:#e8f5e8",
      "name": "AI反馈生成流程"
    },
    {
      "description": "管理AI提供商、模型选择、搜索服务等配置信息。系统支持服务器模式和本地模式两种配置方式，允许用户自定义AI和网络搜索的提供商及参数。",
      "flowchart_mermaid": "graph TD\n    A[用户访问配置界面] --> B{检查配置模式}\n    B -->|服务器模式| C[读取运行时配置]\n    B -->|本地模式| D[读取本地存储配置]\n    C --> E[显示配置选项]\n    D --> E\n    E --> F[用户修改配置]\n    F --> G[验证配置有效性]\n    G --> H[保存配置]\n    H --> I[应用配置到服务]\n    \n    style A fill:#e1f5fe\n    style I fill:#e8f5e8",
      "name": "配置管理流程"
    },
    {
      "description": "允许用户保存和加载先前的研究结果。系统将已完成的研究任务以历史记录的形式保存，用户可以随时重新访问以前的研究成果，避免重复研究。",
      "flowchart_mermaid": "graph TD\n    A[完成研究任务] --> B[保存研究结果到历史记录]\n    B --> C[生成历史记录标识]\n    C --> D[用户访问历史记录]\n    D --> E[选择历史记录]\n    E --> F[加载研究结果]\n    F --> G[重新展示研究报告]\n    G --> H[支持再次编辑或分享]\n    \n    style A fill:#e1f5fe\n    style G fill:#e8f5e8",
      "name": "历史记录管理流程"
    }
  ]
}
```

### 代码洞察数据
来自预处理阶段的代码分析结果，包含函数、类和模块的定义。

```json
[
  {
    "code_dossier": {
      "code_purpose": "util",
      "description": null,
      "file_path": "lib/prompt.ts",
      "functions": [
        "systemPrompt",
        "languagePrompt"
      ],
      "importance_score": 0.8,
      "interfaces": [],
      "name": "prompt.ts",
      "source_summary": "export const systemPrompt = () => {\n  const now = new Date().toISOString()\n  return `You are an expert researcher. Today is ${now}. Follow these instructions when responding:\n  - You may be asked to research subjects that is after your knowledge cutoff, assume the user is right when presented with news.\n  - The user is a highly experienced analyst, no need to simplify it, be as detailed as possible and make sure your response is correct.\n  - Be highly organized.\n  - Suggest solutions that I didn't think about.\n  - Be proactive and anticipate my needs.\n  - Treat me as an expert in all subject matter.\n  - Mistakes erode my trust, so be accurate and thorough.\n  - Provide detailed explanations, I'm comfortable with lots of detail.\n  - Value good arguments over authorities, the source is irrelevant.\n  - Consider new technologies and contrarian ideas, not just the conventional wisdom.\n  - You may use high levels of speculation or prediction, just flag it for me.`\n}\n\n/**\n * Construct the language requirement prompt for LLMs.\n * Placing this at the end of the prompt makes it easier for the LLM to pay attention to.\n * @param language the language of the prompt, e.g. `English`\n */\nexport const languagePrompt = (language: string) => {\n  let languagePrompt = `Respond in ${language}.`\n\n  if (language === '中文') {\n    languagePrompt += ' 在中文和英文之间添加适当的空格来提升可读性'\n  }\n  return languagePrompt\n}\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 5.0,
      "lines_of_code": 29,
      "number_of_classes": 0,
      "number_of_functions": 2
    },
    "dependencies": [],
    "detailed_description": "该组件是一个工具模块，专门用于生成AI助手的提示词(Prompt)。它包含两个主要功能：systemPrompt函数用于生成系统级提示词，定义了AI助手的角色(专家研究员)和行为准则；languagePrompt函数用于生成语言要求提示词，确保AI助手以特定语言回应，并对中文回应添加额外的格式要求(在中英文间添加空格)。这两个函数都是纯函数，根据当前时间或输入语言返回相应的提示词字符串，为AI对话系统提供标准化的提示模板。",
    "interfaces": [],
    "responsibilities": [
      "生成系统级提示词",
      "生成语言要求提示词",
      "定义AI助手角色和行为准则",
      "提供标准化的提示模板"
    ]
  },
  {
    "code_dossier": {
      "code_purpose": "specificfeature",
      "description": null,
      "file_path": "lib/core/deep-research.ts",
      "functions": [
        "generateSearchQueries",
        "processSearchResult",
        "writeFinalReport",
        "deepResearch",
        "childNodeId"
      ],
      "importance_score": 0.8,
      "interfaces": [
        "WriteFinalReportParams",
        "SearchQuery",
        "PartialSearchQuery",
        "ProcessedSearchResult",
        "PartialProcessedSearchResult",
        "ResearchStep",
        "ResearchResult"
      ],
      "name": "deep-research.ts",
      "source_summary": "import { streamText } from 'ai'\nimport { z } from 'zod'\nimport { parseStreamingJson, type DeepPartial } from '~~/shared/utils/json'\n\nimport { trimPrompt } from '../ai/providers'\nimport { languagePrompt, systemPrompt } from '../prompt'\nimport zodToJsonSchema from 'zod-to-json-schema'\nimport { throwAiError } from '~~/shared/utils/errors'\n\nexport type ResearchResult = {\n  learnings: ProcessedSearchResult['learnings']\n}\n\nexport interface WriteFinalReportParams {\n  prompt: string\n  learnings: ProcessedSearchResult['learnings']\n  language: string\n  aiConfig: ConfigAi\n}\n\n// Used for streaming response\nexport type SearchQuery = z.infer<typeof searchQueriesTypeSchema>['queries'][0]\nexport type PartialSearchQuery = DeepPartial<SearchQuery>\nexport type ProcessedSearchResult = z.infer<typeof searchResultTypeSchema>\nexport type PartialProcessedSearchResult = DeepPartial<ProcessedSearchResult>\n\nexport type ResearchStep =\n  | {\n      type: 'generating_query'\n      result: PartialSearchQuery\n      nodeId: string\n      parentNodeId?: string\n    }\n  | { type: 'generating_query_reasoning'; delta: string; nodeId: string }\n  | {\n      type: 'generated_query'\n      query: string\n      result: PartialSearchQuery\n      nodeId: string\n    }\n  | { type: 'searching'; query: string; nodeId: string }\n  | { type: 'search_complete'; results: WebSearchResult[]; nodeId: string }\n  | {\n      type: 'processing_serach_result'\n      query: string\n      result: PartialProcessedSearchResult\n      nodeId: string\n    }\n  | {\n      type: 'processing_serach_result_reasoning'\n      delta: string\n      nodeId: string\n    }\n  | {\n      type: 'node_complete'\n      result?: ProcessedSearchResult\n      nodeId: string\n    }\n  | { type: 'error'; message: string; nodeId: string }\n  | { type: 'complete'; learnings: ProcessedSearchResult['learnings'] }\n\n/**\n * Schema for {@link generateSearchQueries} without dynamic descriptions\n */\nexport const searchQueriesTypeSchema = z.object({\n  queries: z.array(\n    z.object({\n      query: z.string(),\n      researchGoal: z.string(),\n    }),\n  ),\n})\n\n// take an user query, return a list of SERP queries\nexport function generateSearchQueries({\n  query,\n  numQueries = 3,\n  learnings,\n  language,\n  searchLanguage,\n  aiConfig,\n}: {\n  query: string\n  language: string\n  numQueries?: number\n  // optional, if provided, the research will continue from the last learning\n  learnings?: string[]\n  /** Force the LLM to generate serp queries in a certain language */\n  searchLanguage?: string\n  aiConfig: ConfigAi\n}) {\n  const schema = z.object({\n    queries: z\n      .array(\n        z\n          .object({\n            query: z.string().describe('The SERP query.'),\n            researchGoal: z\n              .string()\n              .describe(\n                'First talk about the goal of the research that this query is meant to accomplish, then go deeper into how to advance the research once the results are found, mention additional research directions. Be as specific as possible, especially for additional research directions. JSON reserved words should be escaped.',\n              ),\n          })\n          .required({ query: true, researchGoal: true }),\n      )\n      .describe(`List of SERP queries, max of ${numQueries}`),\n  })\n  const jsonSchema = JSON.stringify(zodToJsonSchema(schema))\n  let lp = languagePrompt(language)\n\n  if (searchLanguage && searchLanguage !== language) {\n    lp += ` Use ${searchLanguage} for the SERP queries.`\n  }\n  const prompt = [\n    `Given the following prompt from the user, generate a list of highly effective Google search queries to research the topic. Return a maximum of ${numQueries} queries, but feel free to return less if the original prompt is clear. Make sure each query is creative, unique and not similar to each other: <prompt>${query}</prompt>`,\n    learnings\n      ? `Here are some learnings from previous research, use them to generate more specific queries: ${learnings.join(\n          '\\n',\n        )}`\n      : '',\n    `You MUST respond in JSON matching this JSON schema: ${jsonSchema}`,\n    lp,\n  ].join('\\n\\n')\n  return streamText({\n    model: getLanguageModel(aiConfig),\n    system: systemPrompt(),\n    prompt,\n    onError({ error }) {\n      throwAiError('generateSearchQueries', error)\n    },\n  })\n}\n\nexport const searchResultTypeSchema = z.object({\n  learnings: z.array(\n    z.object({\n      url: z.string(),\n      learning: z.string(),\n      /** This is added in {@link deepResearch} */\n      title: z.string().optional(),\n    }),\n  ),\n  followUpQuestions: z.array(z.string()),\n})\n\nfunction processSearchResult({\n  query,\n  results,\n  numLearnings = 5,\n  numFollowUpQuestions = 3,\n  language,\n  aiConfig,\n}: {\n  query: string\n  results: WebSearchResult[]\n  language: string\n  numLearnings?: number\n  numFollowUpQuestions?: number\n  aiConfig: ConfigAi\n}) {\n  const schema = z.object({\n    learnings: z\n      .array(\n        z.object({\n          url: z.string().describe('The source URL from which this learning was extracted'),\n          learning: z\n            .string()\n            .describe(\n              'A detailed, information-dense insight extracted from the search results. Include specific entities, metrics, numbers, and dates when available',\n            ),\n        }),\n      )\n      .describe(\n        `Collection of key learnings extracted from search results, each with its source URL. Maximum of ${numLearnings} learnings.`,\n      ),\n    followUpQuestions: z\n      .array(z.string())\n      .describe(\n        `List of relevant follow-up questions to explore the topic further, designed to uncover additional insights. Maximum of ${numFollowUpQuestions} questions.`,\n      ),\n  })\n  const jsonSchema = JSON.stringify(zodToJsonSchema(schema))\n  const contents = results.map((item) => trimPrompt(item.content, aiConfig.contextSize))\n  const prompt = [\n    `Given the following contents from a SERP search for the query <query>${query}</query>, extract ${numLearnings} key learnings from the contents. Make sure each learning is unique and not similar to each other. The learnings should be as detailed and information dense as possible. Include any entities like people, places, companies, products, things, etc in the learnings, as well as any exact metrics, numbers, or dates. Also generate up to ${numFollowUpQuestions} follow-up questions that could help explore this topic further.`,\n    `<contents>${contents\n      .map((content, index) => `<content url=\"${results[index]!.url}\">\\n${content}\\n</content>`)\n      .join('\\n')}</contents>`,\n    `You MUST respond in JSON matching this JSON schema: ${jsonSchema}`,\n    languagePrompt(language),\n  ].join('\\n\\n')\n\n  return streamText({\n    model: getLanguageModel(aiConfig),\n    system: systemPrompt(),\n    prompt,\n    onError({ error }) {\n      throwAiError('processSearchResult', error)\n    },\n  })\n}\n\nexport function writeFinalReport({ prompt, learnings, language, aiConfig }: WriteFinalReportParams) {\n  const learningsString = trimPrompt(\n    learnings\n      .map(\n        (learning, index) =>\n          `<learning index=\"${index + 1}\">\n${learning.learning}\n</learning>`,\n      )\n      .join('\\n'),\n    aiConfig.contextSize,\n  )\n  const _prompt = [\n    `Given the following prompt from the user, write a final report on the topic using the learnings from research. Make it as detailed as possible, aim for 3 or more pages, include ALL the key insights from research.`,\n    `<prompt>${prompt}</prompt>`,\n    `Here are all the learnings from previous research:`,\n    `<learnings>\\n${learningsString}\\n</learnings>`,\n    `Write the report using Markdown. Be factual, NEVER lie or make things up. Cite learnings from previous research when needed, using numbered citations like \"[1]\". Each citation should correspond to the index of the source in your learnings list. DO NOT include the actual URLs in the report text - only use the citation numbers.`,\n    languagePrompt(language),\n    `## Deep Research Report`,\n  ].join('\\n\\n')\n\n  return streamText({\n    model: getLanguageModel(aiConfig),\n    system: systemPrompt(),\n    prompt: _prompt,\n    onError({ error }) {\n      throwAiError('writeFinalReport', error)\n    },\n  })\n}\n\nfunction childNodeId(parentNodeId: string, currentIndex: number) {\n  return `${parentNodeId}-${currentIndex}`\n}\n\nexport async function deepResearch({\n  query,\n  breadth,\n  maxDepth,\n  languageCode,\n  aiConfig,\n  searchLanguageCode,\n  learnings,\n  onProgress,\n  currentDepth,\n  nodeId = '0',\n  retryNode,\n  webSearchFunction,\n  pLimitInstance,\n}: {\n  query: string\n  breadth: number\n  maxDepth: number\n  /** The language of generated response */\n  languageCode: Locale\n  /** The AI model configuration */\n  aiConfig: ConfigAi\n  /** The language of SERP query */\n  searchLanguageCode?: Locale\n  /** Accumulated learnings from all nodes visited so far */\n  learnings?: Array<{ url: string; learning: string }>\n  currentDepth: number\n  /** Current node ID. Used for recursive calls */\n  nodeId?: string\n  /** The Node ID to retry. Passed from DeepResearch.vue */\n  retryNode?: any\n  onProgress: (step: ResearchStep) => void\n  webSearchFunction: (query: string, options: { maxResults?: number; lang?: string }) => Promise<WebSearchResult[]>\n  pLimitInstance?: any\n}) {\n  const language = languageCode\n  const searchLanguage = searchLanguageCode\n\n  // Use provided pLimit or create a simple one if not provided\n  const limit = pLimitInstance || {\n    async(fn: () => Promise<any>) {\n      return fn()\n    },\n    concurrency: 2,\n  }\n\n  try {\n    let searchQueries: Array<PartialSearchQuery & { nodeId: string }> = []\n\n    // If retryNode is provided and not a root node, just use the query from the node\n    if (retryNode && retryNode.id !== '0') {\n      nodeId = retryNode.id\n      searchQueries = [\n        {\n          query: retryNode.label,\n          researchGoal: retryNode.researchGoal,\n          nodeId,\n        },\n      ]\n    }\n    // Otherwise (fresh start or retrying on root node)\n    else {\n      const searchQueriesResult = generateSearchQueries({\n        query,\n        learnings: learnings?.map((item) => item.learning),\n        numQueries: breadth,\n        language,\n        searchLanguage,\n        aiConfig,\n      })\n\n      for await (const chunk of parseStreamingJson(\n        searchQueriesResult.fullStream,\n        searchQueriesTypeSchema,\n        (value) => !!value.queries?.length && !!value.queries[0]?.query,\n      )) {\n        if (chunk.type === 'object' && chunk.value.queries) {\n          // Temporary fix: Exclude queries that equals `undefined`\n          // Currently only being reported to be seen on GPT-4o, where the model simply returns `undefined` for certain questions\n          // https://github.com/AnotiaWang/deep-research-web-ui/issues/7\n          searchQueries = chunk.value.queries\n            .filter((q) => q.query !== 'undefined')\n            .map((q, i) => ({\n              ...q,\n              nodeId: childNodeId(nodeId, i),\n            }))\n          for (let i = 0; i < searchQueries.length; i++) {\n            onProgress({\n              type: 'generating_query',\n              result: searchQueries[i]!,\n              nodeId: searchQueries[i]!.nodeId,\n              parentNodeId: nodeId,\n            })\n          }\n        } else if (chunk.type === 'reasoning') {\n          // Reasoning part goes to the parent node\n          onProgress({\n            type: 'generating_query_reasoning',\n            delta: chunk.delta,\n            nodeId,\n          })\n        } else if (chunk.type === 'error') {\n          onProgress({\n            type: 'error',\n            message: chunk.message,\n            nodeId,\n          })\n          break\n        } else if (chunk.type === 'bad-end') {\n          onProgress({\n            type: 'error',\n            message: 'Invalid structured output',\n            nodeId,\n          })\n          break\n        }\n      }\n\n      onProgress({\n        type: 'node_complete',\n        nodeId,\n      })\n\n      for (const searchQuery of searchQueries) {\n        onProgress({\n          type: 'generated_query',\n          query: searchQuery.query!,\n          result: searchQuery,\n          nodeId: searchQuery.nodeId,\n        })\n      }\n    }\n\n    // Run in parallel and limit the concurrency\n    const results = await Promise.all(\n      searchQueries.map((searchQuery) =>\n        limit(async () => {\n          if (!searchQuery?.query) {\n            return {\n              learnings: [],\n            }\n          }\n          onProgress({\n            type: 'searching',\n            query: searchQuery.query,\n            nodeId: searchQuery.nodeId,\n          })\n          try {\n            // search the web\n            const results = await webSearchFunction(searchQuery.query, {\n              maxResults: 5,\n              lang: languageCode,\n            })\n            if (!results.length) {\n              throw new Error('No search results found')\n            }\n            console.log(`[DeepResearch] Searched \"${searchQuery.query}\", found ${results.length} contents`)\n\n            onProgress({\n              type: 'search_complete',\n              results,\n              nodeId: searchQuery.nodeId,\n            })\n            // Breadth for the next search is half of the current breadth\n            const nextBreadth = Math.ceil(breadth / 2)\n\n            const searchResultGenerator = processSearchResult({\n              query: searchQuery.query,\n              results,\n              numFollowUpQuestions: nextBreadth,\n              language,\n              aiConfig,\n            })\n            let searchResult: PartialProcessedSearchResult = {}\n\n            for await (const chunk of parseStreamingJson(\n              searchResultGenerator.fullStream,\n              searchResultTypeSchema,\n              (value) => !!value.learnings?.length,\n            )) {\n              if (chunk.type === 'object') {\n                searchResult = chunk.value\n                onProgress({\n                  type: 'processing_serach_result',\n                  result: chunk.value,\n                  query: searchQuery.query,\n                  nodeId: searchQuery.nodeId,\n                })\n              } else if (chunk.type === 'reasoning') {\n                onProgress({\n                  type: 'processing_serach_result_reasoning',\n                  delta: chunk.delta,\n                  nodeId: searchQuery.nodeId,\n                })\n              } else if (chunk.type === 'error') {\n                onProgress({\n                  type: 'error',\n                  message: chunk.message,\n                  nodeId: searchQuery.nodeId,\n                })\n                break\n              } else if (chunk.type === 'bad-end') {\n                onProgress({\n                  type: 'error',\n                  message: 'Invalid structured output',\n                  nodeId: searchQuery.nodeId,\n                })\n                break\n              }\n            }\n            console.log(`Processed search result for ${searchQuery.query}`, searchResult)\n            // Assign URL titles to learnings\n            searchResult.learnings = searchResult.learnings?.map((learning) => {\n              return {\n                ...learning,\n                title: results.find((r) => r.url === learning.url)?.title,\n              }\n            })\n            const allLearnings = [...(learnings ?? []), ...(searchResult.learnings ?? [])]\n            const nextDepth = currentDepth + 1\n\n            onProgress({\n              type: 'node_complete',\n              result: {\n                learnings: searchResult.learnings ?? [],\n                followUpQuestions: searchResult.followUpQuestions ?? [],\n              },\n              nodeId: searchQuery.nodeId,\n            })\n\n            if (nextDepth <= maxDepth && searchResult.followUpQuestions?.length) {\n              console.warn(`Researching deeper, breadth: ${nextBreadth}, depth: ${nextDepth}`)\n\n              const nextQuery = `\n              Previous research goal: ${searchQuery.researchGoal}\n              Follow-up research directions: ${searchResult.followUpQuestions.map((q) => `\\n${q}`).join('')}\n            `.trim()\n\n              // Add concurrency by 1, and do next recursive search\n              limit.concurrency++\n              try {\n                const r = await deepResearch({\n                  query: nextQuery,\n                  breadth: nextBreadth,\n                  maxDepth,\n                  learnings: allLearnings,\n                  onProgress,\n                  currentDepth: nextDepth,\n                  nodeId: searchQuery.nodeId,\n                  languageCode,\n                  aiConfig,\n                  webSearchFunction,\n                  pLimitInstance: limit,\n                })\n                return r\n              } catch (error) {\n                throw error\n              } finally {\n                limit.concurrency--\n              }\n            } else {\n              return {\n                learnings: allLearnings,\n              }\n            }\n          } catch (e: any) {\n            console.error(`Error in node ${searchQuery.nodeId} for query ${searchQuery.query}`, e)\n            onProgress({\n              type: 'error',\n              message: e.message,\n              nodeId: searchQuery.nodeId,\n            })\n            return {\n              learnings: [],\n            }\n          }\n        }),\n      ),\n    )\n    // Conclude results\n    // Deduplicate\n    const urlMap = new Map<string, true>()\n    const finalLearnings: ProcessedSearchResult['learnings'] = []\n\n    for (const result of results) {\n      for (const learning of result.learnings) {\n        if (!urlMap.has(learning.url)) {\n          urlMap.set(learning.url, true)\n          finalLearnings.push(learning)\n        }\n      }\n    }\n    // Complete should only be called once\n    if (nodeId === '0') {\n      onProgress({\n        type: 'complete',\n        learnings: finalLearnings,\n      })\n    }\n    return {\n      learnings: finalLearnings,\n    }\n  } catch (error: any) {\n    console.error(error)\n    onProgress({\n      type: 'error',\n      message: error?.message ?? 'Something went wrong',\n      nodeId,\n    })\n    return {\n      learnings: [],\n    }\n  }\n}\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 36.0,
      "lines_of_code": 552,
      "number_of_classes": 0,
      "number_of_functions": 5
    },
    "dependencies": [
      {
        "dependency_type": "library",
        "is_external": true,
        "line_number": 1,
        "name": "ai",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "library",
        "is_external": true,
        "line_number": 2,
        "name": "zod",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 3,
        "name": "~~/shared/utils/json",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 5,
        "name": "lib/core/ai/providers",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 6,
        "name": "lib/core/prompt",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "library",
        "is_external": true,
        "line_number": 7,
        "name": "zod-to-json-schema",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 8,
        "name": "~~/shared/utils/errors",
        "path": null,
        "version": null
      }
    ],
    "detailed_description": "该组件是一个深度研究功能模块，实现了AI驱动的递归网络搜索和分析系统。其主要功能包括：1) 生成搜索查询：根据用户输入的问题，使用AI模型生成多个相关的搜索查询 2) 处理搜索结果：对网络搜索返回的内容进行AI分析，提取关键学习点和后续问题 3) 递归研究：通过树状结构递归地进行多轮搜索，从不同角度深入探索主题 4) 生成最终报告：整合所有研究结果，生成详细的报告。该组件支持多语言、错误处理、进度跟踪和并发控制，适用于需要深入研究复杂问题的场景。",
    "interfaces": [
      {
        "description": "研究结果类型定义",
        "interface_type": "type",
        "name": "ResearchResult",
        "parameters": [],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "生成最终报告的参数接口",
        "interface_type": "interface",
        "name": "WriteFinalReportParams",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "prompt",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "learnings",
            "param_type": "ProcessedSearchResult['learnings']"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "language",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "aiConfig",
            "param_type": "ConfigAi"
          }
        ],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "搜索查询类型定义",
        "interface_type": "type",
        "name": "SearchQuery",
        "parameters": [],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "部分搜索查询类型定义",
        "interface_type": "type",
        "name": "PartialSearchQuery",
        "parameters": [],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "处理后的搜索结果类型定义",
        "interface_type": "type",
        "name": "ProcessedSearchResult",
        "parameters": [],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "部分处理后的搜索结果类型定义",
        "interface_type": "type",
        "name": "PartialProcessedSearchResult",
        "parameters": [],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "研究步骤联合类型定义",
        "interface_type": "type",
        "name": "ResearchStep",
        "parameters": [],
        "return_type": null,
        "visibility": "public"
      }
    ],
    "responsibilities": [
      "根据用户查询生成多个相关的搜索查询",
      "处理网络搜索结果并提取关键学习点",
      "递归地进行多轮搜索以深入探索主题",
      "整合研究结果生成最终报告",
      "管理研究过程中的进度和错误处理"
    ]
  },
  {
    "code_dossier": {
      "code_purpose": "entry",
      "description": null,
      "file_path": "lib/core/index.ts",
      "functions": [],
      "importance_score": 0.8,
      "interfaces": [],
      "name": "index.ts",
      "source_summary": "// Re-export all core functionality\nexport * from './deep-research'\nexport * from './feedback'\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 1.0,
      "lines_of_code": 3,
      "number_of_classes": 0,
      "number_of_functions": 0
    },
    "dependencies": [
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": null,
        "name": "./deep-research",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": null,
        "name": "./feedback",
        "path": null,
        "version": null
      }
    ],
    "detailed_description": "这是一个核心模块的入口文件，主要功能是重新导出(core export)来自其他模块的功能。具体来说，该文件从 './deep-research' 和 './feedback' 两个子模块重新导出所有内容。这种设计模式使它成为一个聚合层，为外部使用者提供了一个统一的访问点，以便使用core模块的全部功能，而不需要直接引用内部子模块。这有助于简化API的使用，维护清晰的模块边界，并提供更整洁的公共API。",
    "interfaces": [],
    "responsibilities": [
      "重新导出deep-research模块的功能",
      "重新导出feedback模块的功能",
      "提供统一的core模块访问入口",
      "聚合core相关功能模块"
    ]
  },
  {
    "code_dossier": {
      "code_purpose": "util",
      "description": null,
      "file_path": "lib/core/feedback.ts",
      "functions": [
        "generateFeedback"
      ],
      "importance_score": 0.8,
      "interfaces": [
        "PartialFeedback"
      ],
      "name": "feedback.ts",
      "source_summary": "import { streamText } from 'ai'\nimport { z } from 'zod'\nimport { zodToJsonSchema } from 'zod-to-json-schema'\n\nimport { languagePrompt, systemPrompt } from '../prompt'\nimport { parseStreamingJson, type DeepPartial } from '~~/shared/utils/json'\nimport { throwAiError } from '~~/shared/utils/errors'\nimport { getLanguageModel } from '~~/shared/utils/ai-model'\n\ntype PartialFeedback = DeepPartial<z.infer<typeof feedbackTypeSchema>>\n\nexport const feedbackTypeSchema = z.object({\n  questions: z.array(z.string()),\n})\n\nexport function generateFeedback({\n  query,\n  language,\n  numQuestions = 3,\n  aiConfig,\n}: {\n  query: string\n  language: string\n  aiConfig: ConfigAi\n  numQuestions?: number\n}) {\n  const schema = z.object({\n    questions: z.array(z.string()).describe(`Follow up questions to clarify the research direction`),\n  })\n  const jsonSchema = JSON.stringify(zodToJsonSchema(schema))\n  const prompt = [\n    `Given the following query from the user, ask several follow up questions to clarify the research direction. Return a maximum of ${numQuestions} questions. Feel free to return less if the original query is clear, but always provide at least 1 question.`,\n    `<query>${query}</query>`,\n    `You MUST respond in JSON matching this JSON schema: ${jsonSchema}`,\n    languagePrompt(language),\n  ].join('\\n\\n')\n\n  const stream = streamText({\n    model: getLanguageModel(aiConfig),\n    system: systemPrompt(),\n    prompt,\n    onError({ error }) {\n      throwAiError('generateFeedback', error)\n    },\n  })\n\n  return parseStreamingJson(\n    stream.fullStream,\n    feedbackTypeSchema,\n    (value: PartialFeedback) => !!value.questions && value.questions.length > 0,\n  )\n}\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 2.0,
      "lines_of_code": 52,
      "number_of_classes": 0,
      "number_of_functions": 1
    },
    "dependencies": [
      {
        "dependency_type": "library",
        "is_external": true,
        "line_number": 1,
        "name": "ai",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "library",
        "is_external": true,
        "line_number": 2,
        "name": "zod",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "library",
        "is_external": true,
        "line_number": 3,
        "name": "zod-to-json-schema",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 5,
        "name": "lib/core/prompt",
        "path": "../prompt",
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 6,
        "name": "~~/shared/utils/json",
        "path": "~~/shared/utils/json",
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 7,
        "name": "~~/shared/utils/errors",
        "path": "~~/shared/utils/errors",
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 8,
        "name": "~~/shared/utils/ai-model",
        "path": "~~/shared/utils/ai-model",
        "version": null
      }
    ],
    "detailed_description": "该组件是一个用于生成AI驱动的反馈问题的工具模块。主要功能是基于用户输入的查询，利用AI模型生成相关的后续问题来澄清研究方向。通过使用Zod进行数据验证，将AI响应格式化为结构化的JSON格式。该组件实现了流式处理，能够实时处理AI模型的响应，并通过schema验证确保数据的完整性。使用了AI SDK提供的streamText功能与语言模型交互，并结合自定义的系统提示和语言提示来指导AI生成高质量的反馈问题。",
    "interfaces": [
      {
        "description": "用于表示反馈数据的部分结构，基于DeepPartial和feedbackTypeSchema",
        "interface_type": "type",
        "name": "PartialFeedback",
        "parameters": [],
        "return_type": null,
        "visibility": "private"
      }
    ],
    "responsibilities": [
      "生成AI驱动的后续问题",
      "处理AI响应的流式数据",
      "验证和解析JSON格式的AI响应",
      "管理AI模型配置和提示工程"
    ]
  },
  {
    "code_dossier": {
      "code_purpose": "other",
      "description": null,
      "file_path": "lib/ai/providers.ts",
      "functions": [
        "trimPrompt"
      ],
      "importance_score": 0.8,
      "interfaces": [],
      "name": "providers.ts",
      "source_summary": "import { getEncoding } from 'js-tiktoken'\n\nimport { RecursiveCharacterTextSplitter } from './text-splitter'\n\nconst MinChunkSize = 140\nconst encoder = getEncoding('o200k_base')\n\n// trim prompt to maximum context size\nexport function trimPrompt(prompt: string, contextSize?: number) {\n  if (!prompt) {\n    return ''\n  }\n\n  if (!contextSize) {\n    contextSize = 128_000\n  }\n\n  const length = encoder.encode(prompt).length\n  if (length <= contextSize) {\n    return prompt\n  }\n\n  const overflowTokens = length - contextSize\n  // on average it's 3 characters per token, so multiply by 3 to get a rough estimate of the number of characters\n  const chunkSize = prompt.length - overflowTokens * 3\n  if (chunkSize < MinChunkSize) {\n    return prompt.slice(0, MinChunkSize)\n  }\n\n  const splitter = new RecursiveCharacterTextSplitter({\n    chunkSize,\n    chunkOverlap: 0,\n  })\n  const trimmedPrompt = splitter.splitText(prompt)[0] ?? ''\n\n  // last catch, there's a chance that the trimmed prompt is same length as the original prompt, due to how tokens are split & innerworkings of the splitter, handle this case by just doing a hard cut\n  if (trimmedPrompt.length === prompt.length) {\n    return trimPrompt(prompt.slice(0, chunkSize), contextSize)\n  }\n\n  // recursively trim until the prompt is within the context size\n  return trimPrompt(trimmedPrompt, contextSize)\n}\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 7.0,
      "lines_of_code": 43,
      "number_of_classes": 0,
      "number_of_functions": 1
    },
    "dependencies": [
      {
        "dependency_type": "library",
        "is_external": true,
        "line_number": 1,
        "name": "js-tiktoken",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 3,
        "name": "./text-splitter",
        "path": "./text-splitter",
        "version": null
      }
    ],
    "detailed_description": "该组件主要负责处理AI模型输入提示的长度管理功能。它通过使用js-tiktoken库来计算文本的token数量，并提供一个trimPrompt函数来确保输入提示不超过指定的上下文大小限制。该组件实现了智能的文本截断算法，首先根据token数量计算需要移除的字符数，然后使用递归字符文本分割器来保持文本的语义完整性，最后通过递归调用确保截断后的提示长度符合要求。",
    "interfaces": [],
    "responsibilities": [
      "AI提示长度管理",
      "Token编码和计算",
      "文本智能截断",
      "上下文大小限制控制"
    ]
  },
  {
    "code_dossier": {
      "code_purpose": "util",
      "description": null,
      "file_path": "lib/ai/text-splitter.ts",
      "functions": [
        "splitText",
        "createDocuments",
        "splitDocuments",
        "joinDocs",
        "mergeSplits",
        "RecursiveCharacterTextSplitter.splitText"
      ],
      "importance_score": 0.8,
      "interfaces": [
        "TextSplitterParams",
        "RecursiveCharacterTextSplitterParams"
      ],
      "name": "text-splitter.ts",
      "source_summary": "interface TextSplitterParams {\n  chunkSize: number\n\n  chunkOverlap: number\n}\n\nabstract class TextSplitter implements TextSplitterParams {\n  chunkSize = 1000\n  chunkOverlap = 200\n\n  constructor(fields?: Partial<TextSplitterParams>) {\n    this.chunkSize = fields?.chunkSize ?? this.chunkSize\n    this.chunkOverlap = fields?.chunkOverlap ?? this.chunkOverlap\n    if (this.chunkOverlap >= this.chunkSize) {\n      throw new Error('Cannot have chunkOverlap >= chunkSize')\n    }\n  }\n\n  abstract splitText(text: string): string[]\n\n  createDocuments(texts: string[]): string[] {\n    const documents: string[] = []\n    for (let i = 0; i < texts.length; i += 1) {\n      const text = texts[i]\n      for (const chunk of this.splitText(text!)) {\n        documents.push(chunk)\n      }\n    }\n    return documents\n  }\n\n  splitDocuments(documents: string[]): string[] {\n    return this.createDocuments(documents)\n  }\n\n  private joinDocs(docs: string[], separator: string): string | null {\n    const text = docs.join(separator).trim()\n    return text === '' ? null : text\n  }\n\n  mergeSplits(splits: string[], separator: string): string[] {\n    const docs: string[] = []\n    const currentDoc: string[] = []\n    let total = 0\n    for (const d of splits) {\n      const _len = d.length\n      if (total + _len >= this.chunkSize) {\n        if (total > this.chunkSize) {\n          console.warn(\n            `Created a chunk of size ${total}, +\nwhich is longer than the specified ${this.chunkSize}`,\n          )\n        }\n        if (currentDoc.length > 0) {\n          const doc = this.joinDocs(currentDoc, separator)\n          if (doc !== null) {\n            docs.push(doc)\n          }\n          // Keep on popping if:\n          // - we have a larger chunk than in the chunk overlap\n          // - or if we still have any chunks and the length is long\n          while (total > this.chunkOverlap || (total + _len > this.chunkSize && total > 0)) {\n            total -= currentDoc[0]!.length\n            currentDoc.shift()\n          }\n        }\n      }\n      currentDoc.push(d)\n      total += _len\n    }\n    const doc = this.joinDocs(currentDoc, separator)\n    if (doc !== null) {\n      docs.push(doc)\n    }\n    return docs\n  }\n}\n\nexport interface RecursiveCharacterTextSplitterParams extends TextSplitterParams {\n  separators: string[]\n}\n\nexport class RecursiveCharacterTextSplitter extends TextSplitter implements RecursiveCharacterTextSplitterParams {\n  separators: string[] = ['\\n\\n', '\\n', '.', ',', '>', '<', ' ', '']\n\n  constructor(fields?: Partial<RecursiveCharacterTextSplitterParams>) {\n    super(fields)\n    this.separators = fields?.separators ?? this.separators\n  }\n\n  splitText(text: string): string[] {\n    const finalChunks: string[] = []\n\n    // Get appropriate separator to use\n    let separator: string = this.separators[this.separators.length - 1]!\n    for (const s of this.separators) {\n      if (s === '') {\n        separator = s\n        break\n      }\n      if (text.includes(s)) {\n        separator = s\n        break\n      }\n    }\n\n    // Now that we have the separator, split the text\n    let splits: string[]\n    if (separator) {\n      splits = text.split(separator)\n    } else {\n      splits = text.split('')\n    }\n\n    // Now go merging things, recursively splitting longer texts.\n    let goodSplits: string[] = []\n    for (const s of splits) {\n      if (s.length < this.chunkSize) {\n        goodSplits.push(s)\n      } else {\n        if (goodSplits.length) {\n          const mergedText = this.mergeSplits(goodSplits, separator)\n          finalChunks.push(...mergedText)\n          goodSplits = []\n        }\n        const otherInfo = this.splitText(s)\n        finalChunks.push(...otherInfo)\n      }\n    }\n    if (goodSplits.length) {\n      const mergedText = this.mergeSplits(goodSplits, separator)\n      finalChunks.push(...mergedText)\n    }\n    return finalChunks\n  }\n}\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 20.0,
      "lines_of_code": 136,
      "number_of_classes": 2,
      "number_of_functions": 9
    },
    "dependencies": [],
    "detailed_description": "该组件是一个文本分割工具，主要用于将大块文本分割成较小的块，适用于AI和大语言模型处理场景。核心功能包括：1) 定义了一个抽象的TextSplitter类，支持设置块大小(chunkSize)和块重叠(chunkOverlap)参数；2) 实现了基础的文本分割、文档创建和合并逻辑；3) 提供了一个具体的RecursiveCharacterTextSplitter实现，按照预定义的分隔符(如换行符、句号、逗号等)递归地分割文本；4) 包含了智能的块合并机制，确保生成的文本块不超过设定的大小限制，同时保留必要的上下文重叠。",
    "interfaces": [
      {
        "description": null,
        "interface_type": "interface",
        "name": "TextSplitterParams",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "chunkSize",
            "param_type": "number"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "chunkOverlap",
            "param_type": "number"
          }
        ],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": null,
        "interface_type": "interface",
        "name": "RecursiveCharacterTextSplitterParams",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "chunkSize",
            "param_type": "number"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "chunkOverlap",
            "param_type": "number"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "separators",
            "param_type": "string[]"
          }
        ],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": null,
        "interface_type": "abstract class",
        "name": "TextSplitter",
        "parameters": [
          {
            "description": "分块大小，默认1000",
            "is_optional": false,
            "name": "chunkSize",
            "param_type": "number"
          },
          {
            "description": "分块重叠，默认200",
            "is_optional": false,
            "name": "chunkOverlap",
            "param_type": "number"
          }
        ],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": null,
        "interface_type": "abstract method",
        "name": "splitText",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "text",
            "param_type": "string"
          }
        ],
        "return_type": "string[]",
        "visibility": "public"
      },
      {
        "description": null,
        "interface_type": "method",
        "name": "createDocuments",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "texts",
            "param_type": "string[]"
          }
        ],
        "return_type": "string[]",
        "visibility": "public"
      },
      {
        "description": null,
        "interface_type": "method",
        "name": "splitDocuments",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "documents",
            "param_type": "string[]"
          }
        ],
        "return_type": "string[]",
        "visibility": "public"
      },
      {
        "description": null,
        "interface_type": "method",
        "name": "mergeSplits",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "splits",
            "param_type": "string[]"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "separator",
            "param_type": "string"
          }
        ],
        "return_type": "string[]",
        "visibility": "public"
      },
      {
        "description": null,
        "interface_type": "class",
        "name": "RecursiveCharacterTextSplitter",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "separators",
            "param_type": "string[]"
          }
        ],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": null,
        "interface_type": "method",
        "name": "RecursiveCharacterTextSplitter.splitText",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "text",
            "param_type": "string"
          }
        ],
        "return_type": "string[]",
        "visibility": "public"
      }
    ],
    "responsibilities": [
      "文本分割策略管理",
      "文本块大小控制",
      "上下文重叠维护",
      "递归文本分割实现",
      "文本块合并优化"
    ]
  },
  {
    "code_dossier": {
      "code_purpose": "page",
      "description": null,
      "file_path": "app/pages/index.vue",
      "functions": [
        "generateFeedback",
        "startDeepSearch",
        "generateReport",
        "handleResearchComplete",
        "handleReportComplete",
        "loadHistoryItem"
      ],
      "importance_score": 0.7,
      "interfaces": [],
      "name": "index.vue",
      "source_summary": "<template>\n  <div>\n    <UContainer>\n      <div class=\"max-w-4xl mx-auto py-8 flex flex-col gap-y-4\">\n        <div class=\"flex flex-col sm:flex-row gap-2\">\n          <div class=\"flex flex-col sm:flex-row items-center mx-auto sm:ml-0 sm:mr-auto\">\n            <h1 class=\"text-3xl font-bold text-center mb-2 sm:mb-0 flex items-center\">\n              Deep Research\n              <div class=\"inline-flex flex-col items-start ml-2\">\n                <span v-if=\"isServerMode\" class=\"text-xs text-green-600 dark:text-green-400\">\n                  {{ $t('serverMode.title') }}\n                </span>\n                <span class=\"text-xs text-gray-400 dark:text-gray-500\"> v{{ version }} </span>\n              </div>\n            </h1>\n          </div>\n          <div class=\"mx-auto sm:ml-auto sm:mr-0 flex items-center gap-2\">\n            <GitHubButton />\n            <HistoryModal />\n            <ConfigManager ref=\"configManagerRef\" />\n            <ColorModeButton />\n            <LangSwitcher />\n          </div>\n        </div>\n\n        <i18n-t class=\"whitespace-pre-wrap\" keypath=\"index.projectDescription\" tag=\"p\">\n          <UButton class=\"!p-0\" variant=\"link\" href=\"https://github.com/dzhng/deep-research\" target=\"_blank\">\n            dzhng/deep-research\n          </UButton>\n        </i18n-t>\n\n        <ResearchForm :is-loading-feedback=\"!!feedbackRef?.isLoading\" ref=\"formRef\" @submit=\"generateFeedback\" />\n        <ResearchFeedback\n          :is-loading-search=\"!!deepResearchRef?.isLoading\"\n          ref=\"feedbackRef\"\n          @submit=\"startDeepSearch\"\n        />\n        <DeepResearch ref=\"deepResearchRef\" @complete=\"handleResearchComplete\" />\n        <ResearchReport ref=\"reportRef\" @complete=\"handleReportComplete\" />\n      </div>\n    </UContainer>\n    <AutoUpdateToast />\n  </div>\n</template>\n\n<script setup lang=\"ts\">\n  import type ResearchForm from '@/components/ResearchForm.vue'\n  import type ResearchFeedback from '@/components/ResearchFeedback.vue'\n  import type DeepResearch from '@/components/DeepResearch/DeepResearch.vue'\n  import type ResearchReport from '@/components/ResearchReport.vue'\n  import type ConfigManager from '@/components/ConfigManager.vue'\n  import type { ResearchInputData } from '@/components/ResearchForm.vue'\n  import type { ResearchFeedbackResult } from '@/components/ResearchFeedback.vue'\n  import type { ResearchResult } from '~~/lib/core/deep-research'\n  import type { ResearchHistoryItem } from '~/types/history'\n  import { useHistory } from '~/composables/useHistory'\n  import { feedbackInjectionKey, formInjectionKey, researchResultInjectionKey } from '@/constants/injection-keys'\n\n  const runtimeConfig = useRuntimeConfig()\n  const version = runtimeConfig.public.version\n  const isServerMode = runtimeConfig.public.serverMode\n\n  const configManagerRef = ref<InstanceType<typeof ConfigManager>>()\n  const formRef = ref<InstanceType<typeof ResearchForm>>()\n  const feedbackRef = ref<InstanceType<typeof ResearchFeedback>>()\n  const deepResearchRef = ref<InstanceType<typeof DeepResearch>>()\n  const reportRef = ref<InstanceType<typeof ResearchReport>>()\n\n  const form = ref<ResearchInputData>({\n    query: '',\n    breadth: 2,\n    depth: 2,\n    numQuestions: 3,\n  })\n  const feedback = ref<ResearchFeedbackResult[]>([])\n  const researchResult = ref<ResearchResult>({\n    learnings: [],\n  })\n\n  provide(formInjectionKey, form)\n  provide(feedbackInjectionKey, feedback)\n  provide(researchResultInjectionKey, researchResult)\n\n  async function generateFeedback() {\n    feedbackRef.value?.getFeedback()\n  }\n\n  async function startDeepSearch() {\n    deepResearchRef.value?.startResearch()\n  }\n\n  async function generateReport() {\n    reportRef.value?.generateReport()\n  }\n\n  async function handleResearchComplete() {\n    // 研究完成后立即保存历史记录（包含完整数据）\n    const { addHistoryItem } = useHistory()\n    if (researchResult.value.learnings.length > 0) {\n      addHistoryItem({\n        title: form.value.query,\n        query: form.value.query,\n        breadth: form.value.breadth,\n        depth: form.value.depth,\n        numQuestions: form.value.numQuestions,\n        feedback: [...feedback.value],\n        learnings: [...researchResult.value.learnings],\n        report: '', // 初始为空，将在报告生成后通过 complete 事件更新\n      })\n    }\n\n    // 触发报告生成\n    await generateReport()\n  }\n\n  function handleReportComplete(report: string) {\n    // 报告生成完成后更新历史记录\n    const { updateHistoryItem, findHistoryItemByQuery } = useHistory()\n    const existingItem = findHistoryItemByQuery(form.value.query)\n    if (existingItem) {\n      updateHistoryItem(existingItem.id, {\n        report,\n        learnings: [...researchResult.value.learnings],\n        feedback: [...feedback.value],\n      })\n    }\n  }\n\n  function loadHistoryItem(item: ResearchHistoryItem) {\n    // 加载历史记录\n    form.value = {\n      query: item.query,\n      breadth: item.breadth,\n      depth: item.depth,\n      numQuestions: item.numQuestions,\n    }\n\n    feedback.value = [...item.feedback]\n    researchResult.value = {\n      learnings: [...item.learnings],\n    }\n\n    // 如果历史记录中有报告，直接显示，不重新生成\n    if (item.report && reportRef.value) {\n      nextTick(() => {\n        reportRef.value?.displayReport(item.report)\n      })\n    }\n  }\n</script>\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 4.0,
      "lines_of_code": 150,
      "number_of_classes": 0,
      "number_of_functions": 6
    },
    "dependencies": [
      {
        "dependency_type": "component",
        "is_external": true,
        "line_number": null,
        "name": "UContainer",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "component",
        "is_external": false,
        "line_number": null,
        "name": "GitHubButton",
        "path": "@/components/GitHubButton.vue",
        "version": null
      },
      {
        "dependency_type": "component",
        "is_external": false,
        "line_number": null,
        "name": "HistoryModal",
        "path": "@/components/HistoryModal.vue",
        "version": null
      },
      {
        "dependency_type": "component",
        "is_external": false,
        "line_number": null,
        "name": "ConfigManager",
        "path": "@/components/ConfigManager.vue",
        "version": null
      },
      {
        "dependency_type": "component",
        "is_external": false,
        "line_number": null,
        "name": "ColorModeButton",
        "path": "@/components/ColorModeButton.vue",
        "version": null
      },
      {
        "dependency_type": "component",
        "is_external": false,
        "line_number": null,
        "name": "LangSwitcher",
        "path": "@/components/LangSwitcher.vue",
        "version": null
      },
      {
        "dependency_type": "component",
        "is_external": false,
        "line_number": null,
        "name": "ResearchForm",
        "path": "@/components/ResearchForm.vue",
        "version": null
      },
      {
        "dependency_type": "component",
        "is_external": false,
        "line_number": null,
        "name": "ResearchFeedback",
        "path": "@/components/ResearchFeedback.vue",
        "version": null
      },
      {
        "dependency_type": "component",
        "is_external": false,
        "line_number": null,
        "name": "DeepResearch",
        "path": "@/components/DeepResearch/DeepResearch.vue",
        "version": null
      },
      {
        "dependency_type": "component",
        "is_external": false,
        "line_number": null,
        "name": "ResearchReport",
        "path": "@/components/ResearchReport.vue",
        "version": null
      },
      {
        "dependency_type": "component",
        "is_external": false,
        "line_number": null,
        "name": "AutoUpdateToast",
        "path": "@/components/AutoUpdateToast.vue",
        "version": null
      }
    ],
    "detailed_description": "这是一个Nuxt.js前端页面组件，实现了深度研究功能的主界面。该页面集成了研究表单、反馈展示、深度研究和报告生成等组件，形成了一个完整的研究工作流程。页面支持服务器模式，并提供了版本信息展示。组件通过Provide/Inject模式在组件间共享表单数据、反馈数据和研究结果数据，实现了组件间的数据传递和状态管理。同时，页面还集成了历史记录功能，允许用户保存和加载先前的研究结果。",
    "interfaces": [],
    "responsibilities": [
      "协调研究工作流程",
      "管理表单和结果数据状态",
      "集成UI组件和功能模块",
      "处理历史记录操作",
      "提供用户界面和交互"
    ]
  },
  {
    "code_dossier": {
      "code_purpose": "widget",
      "description": null,
      "file_path": "app/components/ConfigManager.vue",
      "functions": [
        "createAndSelectAiModel",
        "debouncedListAiModels"
      ],
      "importance_score": 0.6,
      "interfaces": [
        "OpenAICompatibleModel",
        "OpenAICompatibleModelsResponse"
      ],
      "name": "ConfigManager.vue",
      "source_summary": "<script setup lang=\"ts\">\n  interface OpenAICompatibleModel {\n    id: string\n    object: string\n  }\n  interface OpenAICompatibleModelsResponse {\n    object: string\n    data: OpenAICompatibleModel[]\n  }\n\n  const {\n    config,\n    aiApiBase,\n    webSearchApiBase,\n    showConfigManager: showModal,\n  } = storeToRefs(useConfigStore())\n  const { t } = useI18n()\n  const runtimeConfig = useRuntimeConfig()\n  const isServerMode = computed(() => runtimeConfig.public.serverMode)\n\n  const loadingAiModels = ref(false)\n  const aiModelOptions = ref<string[]>([])\n  /** If loading AI models failed, use a plain input to improve UX */\n  const isLoadAiModelsFailed = ref(false)\n\n  const activeSections = ref(['0', '1'])\n  const settingSections = computed(() => [\n    {\n      label: t('settings.ai.provider'),\n      icon: 'i-lucide-bot',\n      slot: 'ai',\n    },\n    {\n      label: t('settings.webSearch.provider'),\n      icon: 'i-lucide-search',\n      slot: 'web-search',\n    },\n  ])\n  const aiProviderOptions = computed(() => [\n    {\n      label: t('settings.ai.providers.openaiCompatible.title'),\n      help: 'settings.ai.providers.openaiCompatible.description',\n      // Only kept for easy reference in i18n Ally\n      _help: t('settings.ai.providers.openaiCompatible.description'),\n      value: 'openai-compatible',\n    },\n    {\n      label: t('settings.ai.providers.siliconflow.title'),\n      help: 'settings.ai.providers.siliconflow.description',\n      // Only kept for easy reference in i18n Ally\n      _help: t('settings.ai.providers.siliconflow.description'),\n      value: 'siliconflow',\n      link: 'https://cloud.siliconflow.cn/i/J0NHrrX8',\n      linkText: 'cloud.siliconflow.cn',\n    },\n    {\n      label: t('settings.ai.providers.302-ai.title'),\n      help: 'settings.ai.providers.302-ai.description',\n      // Only kept for easy reference in i18n Ally\n      _help: t('settings.ai.providers.302-ai.description'),\n      value: '302-ai',\n      link: 'https://share.302.ai/GqEnKu',\n      linkText: '302.ai',\n    },\n    {\n      label: t('settings.ai.providers.infiniai.title'),\n      help: 'settings.ai.providers.infiniai.description',\n      // Only kept for easy reference in i18n Ally\n      _help: t('settings.ai.providers.infiniai.description'),\n      value: 'infiniai',\n      link: 'https://cloud.infini-ai.com/genstudio/model?deepsearch',\n      linkText: 'cloud.infini-ai.com',\n    },\n    {\n      label: 'DeepSeek',\n      value: 'deepseek',\n    },\n    {\n      label: 'OpenRouter',\n      value: 'openrouter',\n    },\n    {\n      label: 'Ollama',\n      value: 'ollama',\n    },\n  ])\n  const webSearchProviderOptions = computed(() => [\n    {\n      label: 'Tavily',\n      value: 'tavily',\n      help: 'settings.webSearch.providers.tavily.help',\n      // Only kept for easy reference in i18n Ally\n      _help: t('settings.webSearch.providers.tavily.help'),\n      link: 'https://app.tavily.com/home',\n    },\n    {\n      label: 'Firecrawl',\n      value: 'firecrawl',\n      help: 'settings.webSearch.providers.firecrawl.help',\n      // Only kept for easy reference in i18n Ally\n      _help: t('settings.webSearch.providers.firecrawl.help'),\n      link: 'https://www.firecrawl.dev/app/api-keys',\n      supportsCustomApiBase: true,\n    },\n    {\n      label: 'Google PSE',\n      value: 'google-pse',\n      help: 'settings.webSearch.providers.google-pse.help',\n      link: 'https://programmablesearchengine.google.com/', // Link to Google PSE console\n    },\n    {\n      label: 'SearXNG',\n      value: 'searxng',\n      supportsCustomApiBase: true,\n    },\n  ])\n  const tavilySearchTopicOptions = ['general', 'news', 'finance']\n  const selectedAiProvider = computed(() =>\n    aiProviderOptions.value.find((o) => o.value === config.value.ai.provider),\n  )\n  const selectedWebSearchProvider = computed(() =>\n    webSearchProviderOptions.value.find((o) => o.value === config.value.webSearch.provider),\n  )\n\n  // Try to find available AI models based on selected provider\n  const debouncedListAiModels = useDebounceFn(async () => {\n    if (!aiApiBase.value || !aiApiBase.value.startsWith('http')) return\n\n    try {\n      loadingAiModels.value = true\n      const result = await $fetch<OpenAICompatibleModelsResponse>(`${aiApiBase.value}/models`, {\n        headers: {\n          Authorization: `Bearer ${config.value.ai.apiKey}`,\n        },\n      })\n      console.log(`Found ${result.data.length} AI models for provider ${config.value.ai.provider}`)\n      aiModelOptions.value = result.data.map((m) => m.id)\n      isLoadAiModelsFailed.value = false\n\n      if (aiModelOptions.value.length) {\n        // Auto-select the current model\n        if (config.value.ai.model && !aiModelOptions.value.includes(config.value.ai.model)) {\n          aiModelOptions.value.unshift(config.value.ai.model)\n        }\n      }\n    } catch (error) {\n      console.error(`Fetch AI models failed`, error)\n      isLoadAiModelsFailed.value = true\n      aiModelOptions.value = []\n    } finally {\n      loadingAiModels.value = false\n    }\n  }, 500)\n\n  function createAndSelectAiModel(model: string) {\n    aiModelOptions.value.push(model)\n    config.value.ai.model = model\n  }\n\n  // Automatically fetch AI models list\n  watch(\n    () => [\n      config.value.ai.provider,\n      config.value.ai.apiKey,\n      config.value.ai.apiBase,\n      showModal.value,\n    ],\n    () => {\n      if (!showModal.value || isServerMode.value) return\n      debouncedListAiModels()\n    },\n    { immediate: true },\n  )\n  // Reset AI config when provider changed\n  watch(\n    () => config.value.ai.provider,\n    () => {\n      if (isServerMode.value) return\n      config.value.ai.apiKey = ''\n      config.value.ai.apiBase = ''\n      config.value.ai.model = ''\n      config.value.ai.contextSize = undefined\n      aiModelOptions.value = []\n      isLoadAiModelsFailed.value = false\n    },\n  )\n  // Reset web search config when provider changed\n  watch(\n    () => config.value.webSearch.provider,\n    () => {\n      if (isServerMode.value) return\n      config.value.webSearch.apiKey = ''\n      config.value.webSearch.apiBase = ''\n    },\n  )\n\n  defineExpose({\n    show() {\n      showModal.value = true\n    },\n  })\n</script>\n\n<template>\n  <div>\n    <UModal v-model:open=\"showModal\" :title=\"$t('settings.title')\">\n      <UButton icon=\"i-lucide-settings\" />\n\n      <template #body>\n        <UAccordion v-model=\"activeSections\" type=\"multiple\" :items=\"settingSections\" collapsible>\n          <!-- AI provider -->\n          <template #ai>\n            <div class=\"flex flex-col gap-y-2 mb-2\">\n              <UFormField>\n                <template v-if=\"selectedAiProvider?.help\" #help>\n                  <i18n-t class=\"whitespace-pre-wrap\" :keypath=\"selectedAiProvider.help\" tag=\"span\">\n                    <UButton\n                      v-if=\"selectedAiProvider.link\"\n                      class=\"!p-0\"\n                      :to=\"selectedAiProvider.link\"\n                      target=\"_blank\"\n                      variant=\"link\"\n                    >\n                      {{ selectedAiProvider.linkText || selectedAiProvider.link }}\n                    </UButton>\n                  </i18n-t>\n                </template>\n                <USelect\n                  v-model=\"config.ai.provider\"\n                  class=\"w-full\"\n                  :items=\"aiProviderOptions\"\n                  :disabled=\"isServerMode\"\n                />\n              </UFormField>\n              <UFormField\n                :label=\"$t('settings.ai.apiKey')\"\n                :required=\"config.ai.provider !== 'ollama'\"\n              >\n                <PasswordInput\n                  v-model=\"config.ai.apiKey\"\n                  class=\"w-full\"\n                  :placeholder=\"$t('settings.ai.apiKey')\"\n                  :disabled=\"isServerMode\"\n                />\n              </UFormField>\n              <UFormField :label=\"$t('settings.ai.apiBase')\">\n                <UInput\n                  v-model=\"config.ai.apiBase\"\n                  class=\"w-full\"\n                  :placeholder=\"aiApiBase\"\n                  :disabled=\"isServerMode\"\n                />\n              </UFormField>\n              <UFormField :label=\"$t('settings.ai.model')\" required>\n                <UInputMenu\n                  v-if=\"aiModelOptions.length && !isLoadAiModelsFailed && !isServerMode\"\n                  v-model=\"config.ai.model\"\n                  class=\"w-full\"\n                  :items=\"aiModelOptions\"\n                  :placeholder=\"$t('settings.ai.model')\"\n                  :loading=\"loadingAiModels\"\n                  create-item\n                  @create=\"createAndSelectAiModel\"\n                  :disabled=\"isServerMode\"\n                />\n                <UInput\n                  v-else\n                  v-model=\"config.ai.model\"\n                  class=\"w-full\"\n                  :placeholder=\"$t('settings.ai.model')\"\n                  :disabled=\"isServerMode\"\n                />\n              </UFormField>\n              <UFormField :label=\"$t('settings.ai.contextSize')\">\n                <template #help>\n                  {{ $t('settings.ai.contextSizeHelp') }}\n                </template>\n                <UInput\n                  v-model=\"config.ai.contextSize\"\n                  class=\"w-26\"\n                  type=\"number\"\n                  placeholder=\"128000\"\n                  :min=\"512\"\n                  :disabled=\"isServerMode\"\n                />\n                tokens\n              </UFormField>\n            </div>\n          </template>\n\n          <!-- Web search -->\n          <template #web-search>\n            <div class=\"flex flex-col gap-y-2\">\n              <UFormField>\n                <template #help>\n                  <i18n-t\n                    v-if=\"selectedWebSearchProvider?.help\"\n                    :keypath=\"selectedWebSearchProvider.help\"\n                    tag=\"p\"\n                  >\n                    <UButton\n                      class=\"!p-0\"\n                      :to=\"selectedWebSearchProvider.link\"\n                      target=\"_blank\"\n                      variant=\"link\"\n                    >\n                      {{ selectedWebSearchProvider.link }}\n                    </UButton>\n                  </i18n-t>\n                </template>\n                <USelect\n                  v-model=\"config.webSearch.provider\"\n                  class=\"w-full\"\n                  :items=\"webSearchProviderOptions\"\n                  :disabled=\"isServerMode\"\n                />\n              </UFormField>\n              <UFormField\n                :label=\"$t('settings.webSearch.apiKey')\"\n                :required=\"!config.webSearch.apiBase\"\n              >\n                <PasswordInput\n                  v-model=\"config.webSearch.apiKey\"\n                  class=\"w-full\"\n                  :placeholder=\"$t('settings.webSearch.apiKey')\"\n                  :disabled=\"isServerMode\"\n                />\n              </UFormField>\n\n              <template v-if=\"config.webSearch.provider === 'google-pse'\">\n                <UFormField\n                  :label=\"$t('settings.webSearch.providers.google-pse.pseIdLabel')\"\n                  required\n                >\n                  <UInput\n                    v-model=\"config.webSearch.googlePseId\"\n                    class=\"w-full\"\n                    :placeholder=\"$t('settings.webSearch.providers.google-pse.pseIdPlaceholder')\"\n                    :disabled=\"isServerMode\"\n                  />\n                </UFormField>\n              </template>\n\n              <UFormField\n                v-if=\"selectedWebSearchProvider?.supportsCustomApiBase\"\n                :label=\"$t('settings.webSearch.apiBase')\"\n              >\n                <UInput\n                  v-model=\"config.webSearch.apiBase\"\n                  class=\"w-full\"\n                  :placeholder=\"webSearchApiBase\"\n                  :disabled=\"isServerMode\"\n                />\n              </UFormField>\n\n              <template v-if=\"config.webSearch.provider === 'searxng'\">\n                <UFormField label=\"Browserless API URL (Optional)\">\n                  <UInput\n                    v-model=\"config.webSearch.browserlessApiUrl\"\n                    class=\"w-full\"\n                    placeholder=\"http://localhost:3000\"\n                    :disabled=\"isServerMode\"\n                  />\n                </UFormField>\n              </template>\n              <UFormField :label=\"$t('settings.webSearch.queryLanguage')\">\n                <template #help>\n                  <i18n-t\n                    class=\"whitespace-pre-wrap\"\n                    keypath=\"settings.webSearch.queryLanguageHelp\"\n                    tag=\"p\"\n                  />\n                </template>\n                <LangSwitcher\n                  :value=\"config.webSearch.searchLanguage\"\n                  @update=\"config.webSearch.searchLanguage = $event\"\n                  private\n                  :disabled=\"isServerMode\"\n                />\n              </UFormField>\n              <UFormField :label=\"$t('settings.webSearch.concurrencyLimit')\">\n                <template #help>\n                  {{ $t('settings.webSearch.concurrencyLimitHelp') }}\n                </template>\n                <UInput\n                  v-model=\"config.webSearch.concurrencyLimit\"\n                  class=\"w-15\"\n                  type=\"number\"\n                  placeholder=\"2\"\n                  :min=\"1\"\n                  :max=\"5\"\n                  :step=\"1\"\n                  :disabled=\"isServerMode\"\n                />\n              </UFormField>\n\n              <!-- Tavily-specific settings -->\n              <template v-if=\"config.webSearch.provider === 'tavily'\">\n                <UFormField\n                  :label=\"$t('settings.webSearch.providers.tavily.advancedSearch')\"\n                  :help=\"$t('settings.webSearch.providers.tavily.advancedSearchHelp')\"\n                >\n                  <USwitch\n                    v-model=\"config.webSearch.tavilyAdvancedSearch\"\n                    :disabled=\"isServerMode\"\n                  />\n                </UFormField>\n                <UFormField\n                  :label=\"$t('settings.webSearch.providers.tavily.searchTopic')\"\n                  :help=\"$t('settings.webSearch.providers.tavily.searchTopicHelp')\"\n                >\n                  <USelect\n                    v-model=\"config.webSearch.tavilySearchTopic\"\n                    class=\"w-30\"\n                    :items=\"tavilySearchTopicOptions\"\n                    placeholder=\"general\"\n                    :disabled=\"isServerMode\"\n                  />\n                </UFormField>\n              </template>\n            </div>\n          </template>\n        </UAccordion>\n      </template>\n\n      <template #footer>\n        <div class=\"flex items-center justify-between gap-2 w-full\">\n          <p class=\"text-sm text-gray-500\">\n            {{ isServerMode ? $t('serverMode.configNotice') : $t('settings.disclaimer') }}\n          </p>\n          <UButton\n            v-if=\"!isServerMode\"\n            color=\"primary\"\n            icon=\"i-lucide-check\"\n            @click=\"showModal = false\"\n          >\n            {{ $t('settings.save') }}\n          </UButton>\n        </div>\n      </template>\n    </UModal>\n  </div>\n</template>\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 14.0,
      "lines_of_code": 443,
      "number_of_classes": 0,
      "number_of_functions": 2
    },
    "dependencies": [],
    "detailed_description": "ConfigManager.vue是一个前端配置管理组件，主要用于管理AI和网络搜索相关的配置。该组件包含两个主要的配置部分：AI提供商配置和网络搜索提供商配置。在AI配置部分，该组件支持多种AI提供商如OpenAI-compatible、SiliconFlow、302-ai等，并能自动获取可用的AI模型列表，支持自定义AI基础URL、API密钥、选择模型和设置上下文大小。在网络搜索配置部分，该组件提供如Tavily、Firecrawl等多种搜索提供商，并提供额外配置选项如Google PSE ID、浏览器API URL、查询语言、并发限制等。该组件还根据当前提供商显示相关信息和帮助文本，并提供相关链接。组件会根据服务器模式限制某些功能，以防止在服务器模式下修改配置。",
    "interfaces": [
      {
        "description": null,
        "interface_type": "interface",
        "name": "OpenAICompatibleModel",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "id",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "object",
            "param_type": "string"
          }
        ],
        "return_type": null,
        "visibility": "private"
      },
      {
        "description": null,
        "interface_type": "interface",
        "name": "OpenAICompatibleModelsResponse",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "object",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "data",
            "param_type": "OpenAICompatibleModel[]"
          }
        ],
        "return_type": null,
        "visibility": "private"
      }
    ],
    "responsibilities": [
      "管理AI提供商配置",
      "管理网络搜索提供商配置",
      "获取并展示可用的AI模型列表",
      "提供配置界面和交互逻辑"
    ]
  },
  {
    "code_dossier": {
      "code_purpose": "config",
      "description": null,
      "file_path": "app/stores/config.ts",
      "functions": [
        "validateConfig",
        "useConfigStore"
      ],
      "importance_score": 0.6,
      "interfaces": [],
      "name": "config.ts",
      "source_summary": "import { skipHydrate } from 'pinia'\nimport { getApiBase } from '~~/shared/utils/ai-model'\nimport type { Config } from '~~/shared/types/config'\n\nfunction validateConfig(config: Config) {\n  const ai = config.ai\n  if (ai.provider !== 'ollama' && !ai.apiKey) return false\n  if (typeof ai.contextSize !== 'undefined' && ai.contextSize < 0) return false\n\n  const ws = config.webSearch\n  if (ws.provider === 'tavily' && !ws.apiKey) return false\n  // Either apiBase or apiKey is required for firecrawl\n  if (ws.provider === 'firecrawl' && !ws.apiBase && !ws.apiKey) return false\n  if (ws.provider === 'google-pse' && (!ws.apiKey || !ws.googlePseId)) return false // Require API Key and PSE ID\n  if (ws.provider === 'searxng' && !ws.apiBase) return false\n  if (typeof ws.concurrencyLimit !== 'undefined' && ws.concurrencyLimit! < 1) return false\n  return true\n}\n\nexport const useConfigStore = defineStore('config', () => {\n  const runtimeConfig = useRuntimeConfig()\n  const isServerMode = computed(() => runtimeConfig.public.serverMode)\n\n  // Server mode configuration\n  const serverConfig = computed(() => ({\n    aiProvider: runtimeConfig.public.aiProvider,\n    aiModel: runtimeConfig.public.aiModel,\n    aiContextSize: runtimeConfig.public.aiContextSize,\n    webSearchProvider: runtimeConfig.public.webSearchProvider,\n    webSearchConcurrencyLimit: runtimeConfig.public.webSearchConcurrencyLimit,\n    webSearchSearchLanguage: runtimeConfig.public.webSearchSearchLanguage,\n    tavilyAdvancedSearch: runtimeConfig.public.tavilyAdvancedSearch,\n    tavilySearchTopic: runtimeConfig.public.tavilySearchTopic,\n    googlePseId: runtimeConfig.public.googlePseId,\n    browserlessApiUrl: runtimeConfig.public.browserlessApiUrl,\n  }))\n\n  const localConfig = useLocalStorage<Config>('deep-research-config', {\n    ai: {\n      provider: 'openai-compatible',\n      model: '',\n      contextSize: 128_000,\n    },\n    webSearch: {\n      provider: 'tavily',\n      concurrencyLimit: 2,\n    },\n  } satisfies Config)\n\n  const serverConfigRef = computed(\n    () =>\n      ({\n        ai: {\n          provider: serverConfig.value.aiProvider as any,\n          model: serverConfig.value.aiModel,\n          contextSize: serverConfig.value.aiContextSize,\n          apiKey: '******',\n          apiBase: undefined,\n        },\n        webSearch: {\n          provider: serverConfig.value.webSearchProvider as any,\n          concurrencyLimit: serverConfig.value.webSearchConcurrencyLimit,\n          searchLanguage: serverConfig.value.webSearchSearchLanguage as any,\n          tavilyAdvancedSearch: serverConfig.value.tavilyAdvancedSearch,\n          tavilySearchTopic: serverConfig.value.tavilySearchTopic as any,\n          googlePseId: serverConfig.value.googlePseId,\n          browserlessApiUrl: serverConfig.value.browserlessApiUrl,\n          apiKey: '******',\n          apiBase: undefined,\n        },\n      }) satisfies Config,\n  )\n\n  const config = computed(() => {\n    return isServerMode.value ? serverConfigRef.value : localConfig.value\n  })\n  // The version user dismissed the update notification\n  const dismissUpdateVersion = useLocalStorage<string>('dismiss-update-version', '')\n\n  // In server mode, config is always valid since it's handled by the server\n  const isConfigValid = computed(() => {\n    if (isServerMode.value) return true\n    return validateConfig(config.value)\n  })\n\n  const aiApiBase = computed(() => {\n    if (isServerMode.value) return '' // Not used in server mode\n    return getApiBase(config.value.ai)\n  })\n  const webSearchApiBase = computed(() => {\n    if (isServerMode.value) return '' // Not used in server mode\n\n    const { webSearch } = config.value\n    if (webSearch.provider === 'tavily') {\n      return\n    }\n    if (webSearch.provider === 'firecrawl') {\n      return webSearch.apiBase || 'https://api.firecrawl.dev'\n    }\n  })\n\n  const showConfigManager = ref(false)\n\n  return {\n    config: isServerMode.value ? config : skipHydrate(localConfig),\n    isConfigValid,\n    aiApiBase,\n    webSearchApiBase,\n    showConfigManager,\n    dismissUpdateVersion: skipHydrate(dismissUpdateVersion),\n  }\n})\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 14.0,
      "lines_of_code": 112,
      "number_of_classes": 0,
      "number_of_functions": 2
    },
    "dependencies": [
      {
        "dependency_type": "library",
        "is_external": true,
        "line_number": 1,
        "name": "pinia",
        "path": null,
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 2,
        "name": "~~/shared/utils/ai-model",
        "path": "~~/shared/utils/ai-model",
        "version": null
      },
      {
        "dependency_type": "internal",
        "is_external": false,
        "line_number": 3,
        "name": "~~/shared/types/config",
        "path": "~~/shared/types/config",
        "version": null
      }
    ],
    "detailed_description": "该组件是一个Pinia状态管理store，用于管理应用的配置信息。它支持两种配置模式：服务器模式和本地模式。在服务器模式下，配置信息来自运行时配置；在本地模式下，配置信息存储在localStorage中。组件提供了AI和Web搜索相关的配置项，包括AI提供商、模型、上下文大小、Web搜索提供商、并发限制等。它还包含配置验证逻辑，确保配置项的正确性，并提供API基础URL的计算逻辑。",
    "interfaces": [],
    "responsibilities": [
      "管理应用配置状态",
      "验证配置项的有效性",
      "支持服务器模式和本地模式",
      "提供API基础URL计算",
      "处理配置持久化"
    ]
  },
  {
    "code_dossier": {
      "code_purpose": "config",
      "description": null,
      "file_path": "shared/types/config.ts",
      "functions": [],
      "importance_score": 0.6,
      "interfaces": [
        "ConfigAiProvider",
        "ConfigWebSearchProvider",
        "ConfigAi",
        "ConfigWebSearch",
        "Config",
        "ServerRuntimeConfig",
        "PublicRuntimeConfig"
      ],
      "name": "config.ts",
      "source_summary": "export type ConfigAiProvider =\n  | 'openai-compatible'\n  | 'siliconflow'\n  | '302-ai'\n  | 'infiniai'\n  | 'openrouter'\n  | 'deepseek'\n  | 'ollama'\n\nexport type ConfigWebSearchProvider = 'tavily' | 'firecrawl' | 'google-pse' | 'searxng'\n\nexport interface ConfigAi {\n  provider: ConfigAiProvider\n  apiKey?: string\n  apiBase?: string\n  model: string\n  contextSize?: number\n}\n\nexport interface ConfigWebSearch {\n  provider: ConfigWebSearchProvider\n  apiKey?: string\n  /** API base. Currently only works with Firecrawl */\n  apiBase?: string\n  /** Force the LLM to generate serp queries in a certain language */\n  searchLanguage?: string\n  /** Limit the number of concurrent tasks globally */\n  concurrencyLimit?: number\n  /** Tavily: use advanced search to retrieve higher quality results */\n  tavilyAdvancedSearch?: boolean\n  /** Tavily: search topic. Defaults to `general` */\n  tavilySearchTopic?: 'general' | 'news' | 'finance'\n  googlePseId?: string // Google PSE ID\n  searxngApiUrl?: string // Searxng API URL\n  browserlessApiUrl?: string // Browserless API URL\n}\n\nexport interface Config {\n  ai: ConfigAi\n  webSearch: ConfigWebSearch\n}\n\nexport interface ServerRuntimeConfig {\n  aiProvider: ConfigAiProvider\n  aiModel: string\n  aiContextSize: number\n  aiApiKey: string\n  aiApiBase?: string\n  webSearchProvider: ConfigWebSearchProvider\n  webSearchApiKey: string\n  webSearchApiBase?: string\n  webSearchConcurrencyLimit: number\n  webSearchSearchLanguage: string\n  tavilyAdvancedSearch: boolean\n  tavilySearchTopic: 'general' | 'news' | 'finance'\n  googlePseId?: string\n  searxngApiUrl?: string\n  browserlessApiUrl?: string\n}\n\nexport interface PublicRuntimeConfig {\n  serverMode: boolean\n  aiProvider: ConfigAiProvider\n  aiModel: string\n  aiContextSize: number\n  webSearchProvider: ConfigWebSearchProvider\n  webSearchConcurrencyLimit: number\n  webSearchSearchLanguage: string\n  tavilyAdvancedSearch: boolean\n  tavilySearchTopic: 'general' | 'news' | 'finance'\n  googlePseId?: string\n  searxngApiUrl?: string\n  browserlessApiUrl?: string\n}\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 1.0,
      "lines_of_code": 74,
      "number_of_classes": 0,
      "number_of_functions": 0
    },
    "dependencies": [],
    "detailed_description": "这是一个配置类型定义文件，主要定义了AI服务和网络搜索服务的配置接口。代码通过TypeScript的type和interface定义了不同配置的数据结构，包括AI提供者的类型、网络搜索提供者的类型，以及对应的配置接口。包含ConfigAi、ConfigWebSearch、Config、ServerRuntimeConfig和PublicRuntimeConfig等核心接口。ConfigAi定义了AI服务的基本配置参数如提供者、API密钥、基础URL和模型等。ConfigWebSearch定义了网络搜索服务的详细配置参数，包括不同的搜索服务提供者特有选项。ServerRuntimeConfig和PublicRuntimeConfig分别定义了服务端和客户端运行时需要的配置结构，体现了服务端和客户端配置分离的设计理念。",
    "interfaces": [
      {
        "description": "AI提供者类型联合",
        "interface_type": "type",
        "name": "ConfigAiProvider",
        "parameters": [],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "网络搜索提供者类型联合",
        "interface_type": "type",
        "name": "ConfigWebSearchProvider",
        "parameters": [],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "AI配置接口",
        "interface_type": "interface",
        "name": "ConfigAi",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "provider",
            "param_type": "ConfigAiProvider"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "apiKey",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "apiBase",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "model",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "contextSize",
            "param_type": "number"
          }
        ],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "网络搜索配置接口",
        "interface_type": "interface",
        "name": "ConfigWebSearch",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "provider",
            "param_type": "ConfigWebSearchProvider"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "apiKey",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "apiBase",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "searchLanguage",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "concurrencyLimit",
            "param_type": "number"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "tavilyAdvancedSearch",
            "param_type": "boolean"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "tavilySearchTopic",
            "param_type": "'general' | 'news' | 'finance"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "googlePseId",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "searxngApiUrl",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "browserlessApiUrl",
            "param_type": "string"
          }
        ],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "完整配置接口",
        "interface_type": "interface",
        "name": "Config",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "ai",
            "param_type": "ConfigAi"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "webSearch",
            "param_type": "ConfigWebSearch"
          }
        ],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "服务端运行时配置",
        "interface_type": "interface",
        "name": "ServerRuntimeConfig",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "aiProvider",
            "param_type": "ConfigAiProvider"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "aiModel",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "aiContextSize",
            "param_type": "number"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "aiApiKey",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "aiApiBase",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "webSearchProvider",
            "param_type": "ConfigWebSearchProvider"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "webSearchApiKey",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "webSearchApiBase",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "webSearchConcurrencyLimit",
            "param_type": "number"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "webSearchSearchLanguage",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "tavilyAdvancedSearch",
            "param_type": "boolean"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "tavilySearchTopic",
            "param_type": "'general' | 'news' | 'finance"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "googlePseId",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "searxngApiUrl",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "browserlessApiUrl",
            "param_type": "string"
          }
        ],
        "return_type": null,
        "visibility": "public"
      },
      {
        "description": "客户端运行时配置",
        "interface_type": "interface",
        "name": "PublicRuntimeConfig",
        "parameters": [
          {
            "description": null,
            "is_optional": false,
            "name": "serverMode",
            "param_type": "boolean"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "aiProvider",
            "param_type": "ConfigAiProvider"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "aiModel",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "aiContextSize",
            "param_type": "number"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "webSearchProvider",
            "param_type": "ConfigWebSearchProvider"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "webSearchConcurrencyLimit",
            "param_type": "number"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "webSearchSearchLanguage",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "tavilyAdvancedSearch",
            "param_type": "boolean"
          },
          {
            "description": null,
            "is_optional": false,
            "name": "tavilySearchTopic",
            "param_type": "'general' | 'news' | 'finance"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "googlePseId",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "searxngApiUrl",
            "param_type": "string"
          },
          {
            "description": null,
            "is_optional": true,
            "name": "browserlessApiUrl",
            "param_type": "string"
          }
        ],
        "return_type": null,
        "visibility": "public"
      }
    ],
    "responsibilities": [
      "定义AI服务配置的数据结构",
      "定义网络搜索服务配置的数据结构",
      "区分服务端和客户端运行时配置",
      "提供类型安全的配置接口"
    ]
  },
  {
    "code_dossier": {
      "code_purpose": "config",
      "description": null,
      "file_path": "nuxt.config.ts",
      "functions": [],
      "importance_score": 0.6,
      "interfaces": [],
      "name": "nuxt.config.ts",
      "source_summary": "import { version as projVersion } from './public/version.json'\n\n// https://nuxt.com/docs/api/configuration/nuxt-config\nexport default defineNuxtConfig({\n  modules: [\n    '@pinia/nuxt',\n    '@nuxt/ui',\n    '@nuxtjs/color-mode',\n    '@vueuse/nuxt',\n    '@nuxtjs/i18n',\n  ],\n\n  // 禁用自动字体加载\n  fonts: {\n    providers: {\n      google: false,\n      googleicons: false,\n    },\n  },\n\n  // devServer: {\n  //   host: '0.0.0.0',\n  // },\n\n  runtimeConfig: {\n    public: {\n      version: projVersion,\n      serverMode: process.env.NUXT_PUBLIC_SERVER_MODE === 'true',\n      // Server mode configuration - exposed to frontend\n      aiProvider: process.env.NUXT_PUBLIC_AI_PROVIDER || 'openai-compatible',\n      aiModel: process.env.NUXT_PUBLIC_AI_MODEL || 'gpt-4o-mini',\n      aiContextSize: parseInt(process.env.NUXT_PUBLIC_AI_CONTEXT_SIZE || '128000'),\n      webSearchProvider: process.env.NUXT_PUBLIC_WEB_SEARCH_PROVIDER || 'tavily',\n      webSearchConcurrencyLimit: parseInt(process.env.NUXT_PUBLIC_WEB_SEARCH_CONCURRENCY_LIMIT || '2'),\n      webSearchSearchLanguage: process.env.NUXT_PUBLIC_WEB_SEARCH_SEARCH_LANGUAGE || 'en',\n      tavilyAdvancedSearch: process.env.NUXT_PUBLIC_TAVILY_ADVANCED_SEARCH === 'true',\n      tavilySearchTopic: process.env.NUXT_PUBLIC_TAVILY_SEARCH_TOPIC || 'general',\n      googlePseId: process.env.NUXT_PUBLIC_GOOGLE_PSE_ID,\n      searxngApiUrl: process.env.NUXT_PUBLIC_SEARXNG_API_URL,\n      browserlessApiUrl: process.env.NUXT_PUBLIC_BROWSERLESS_API_URL,\n    },\n    // Private server-only configuration\n    aiApiKey: process.env.NUXT_AI_API_KEY,\n    aiApiBase: process.env.NUXT_AI_API_BASE,\n    webSearchApiKey: process.env.NUXT_WEB_SEARCH_API_KEY,\n    webSearchApiBase: process.env.NUXT_WEB_SEARCH_API_BASE,\n  },\n\n  routeRules: {\n    '/version.json': {\n      cors: true,\n      cache: false,\n    },\n  },\n\n  i18n: {\n    vueI18n: './i18n.config.ts',\n    strategy: 'no_prefix',\n    locales: ['en', 'zh', 'nl'],\n    detectBrowserLanguage: {\n      alwaysRedirect: true,\n      useCookie: true,\n      cookieKey: 'i18n_redirected',\n      redirectOn: 'root',\n    },\n  },\n\n  colorMode: {\n    preference: 'system',\n    dataValue: 'theme',\n    classSuffix: '',\n    storage: 'cookie',\n  },\n\n  vite: {\n    build: {\n      rollupOptions: {\n        output: {\n          manualChunks(id) {\n            if (id.includes('js-tiktoken')) {\n              return 'tiktoken'\n            }\n          },\n        },\n      },\n    },\n    // 开发环境允许所有主机访问（适合 CNB 云环境）\n    // server: {\n    //   allowedHosts: 'all'\n    // }\n  },\n\n  nitro: {\n    compressPublicAssets: { brotli: true, gzip: true },\n  },\n\n  typescript: {\n    // Customize app/server TypeScript config\n    tsConfig: {\n      compilerOptions: {\n        strict: true,\n      },\n    },\n    // Customize build-time TypeScript config\n    nodeTsConfig: {\n      compilerOptions: {\n        strict: true,\n      },\n    },\n  },\n\n  css: ['~/assets/css/main.css'],\n  compatibilityDate: '2025-07-29',\n  future: {\n    compatibilityVersion: 4,\n  },\n  devtools: { enabled: true },\n})\n"
    },
    "complexity_metrics": {
      "cyclomatic_complexity": 2.0,
      "lines_of_code": 118,
      "number_of_classes": 0,
      "number_of_functions": 1
    },
    "dependencies": [
      {
        "dependency_type": "import",
        "is_external": false,
        "line_number": 1,
        "name": "./public/version.json",
        "path": "./public/version.json",
        "version": null
      }
    ],
    "detailed_description": "这是一个Nuxt.js项目的配置文件，定义了整个应用的全局配置。该文件配置了多个模块包括状态管理(Pinia)、UI组件库、颜色模式、工具函数库和国际化支持。配置中包含了AI相关的运行时环境变量，如AI提供商、模型选择、上下文大小等，以及网络搜索功能的配置。文件还设置了路由规则、国际化语言检测、颜色模式偏好、构建优化、TypeScript严格模式等。此外，还配置了CSS文件引入、开发工具启用和兼容性日期等基础设置。这个配置文件是整个Nuxt应用的中心配置点，控制着应用的行为和功能。",
    "interfaces": [],
    "responsibilities": [
      "Nuxt应用全局配置管理",
      "模块系统集成配置",
      "运行时环境变量定义",
      "国际化(i18n)配置",
      "构建和部署优化设置"
    ]
  }
]
```

## Memory存储统计

**总存储大小**: 258781 bytes

- **studies_research**: 56981 bytes (22.0%)
- **preprocess**: 112479 bytes (43.5%)
- **timing**: 36 bytes (0.0%)
- **documentation**: 89285 bytes (34.5%)

## 生成文档统计

生成文档数量: 9 个

- 核心模块与组件调研报告_AI服务域
- 核心模块与组件调研报告_核心业务域
- 核心模块与组件调研报告_前端界面域
- 核心流程
- 项目概述
- 核心模块与组件调研报告_网络搜索域
- 核心模块与组件调研报告_配置管理域
- 架构说明
- 边界调用

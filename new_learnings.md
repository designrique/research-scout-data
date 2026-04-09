# Research Scout — Achados Pendentes

Staging area automática. Achados são promovidos semanalmente pelo scout-promote.

## Achados pendentes

<!-- Achados do research-scout serão adicionados aqui automaticamente -->

### 2026-04-04

- **[Microsoft Agent Governance Toolkit](https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/)** — Open-source MIT runtime security framework released April 2, 2026; the first toolkit to cover all 10 OWASP Agentic Top 10 risks (goal hijacking, tool misuse, identity abuse, memory poisoning, cascading failures, rogue agents) with deterministic sub-millisecond policy enforcement; seven-package, framework-agnostic system available in Python, TypeScript, Rust, Go, and .NET; ships with 9,500+ tests and SLSA-compatible build provenance. Domain: AI & LLMs.

- **[Google Jules Tools CLI](https://developers.googleblog.com/en/meet-jules-tools-a-command-line-companion-for-googles-async-coding-agent/)** — Lightweight CLI companion for Google's Jules async coding agent; lets developers spin up tasks, inspect agent progress, and script workflows entirely from the terminal with parallel session support and a built-in diff viewer to confirm changes before applying; Google simultaneously opened the Jules API publicly, enabling integration into existing developer pipelines. Domain: Dev Workflows.

- **[Figma AI Agent File Writing](https://www.figma.com/release-notes/)** — AI agents can now write directly to Figma design files, creating and modifying real components, variables, and tokens using the project's existing library; agents read the design system first to build with what already exists, enabling code-to-design roundtrips from tools like Cursor, Warp, and Augment into editable Figma frames without manual export or re-import. Domain: Design.

### 2026-04-05

- **[Claude Mythos](https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/)** — Anthropic's next flagship model (leaked March 26, 2026), confirmed to be in early access testing with select customers; described as "a step change" and "by far the most powerful AI model we've ever developed," surpassing Claude Opus 4.6 across coding, reasoning, and cybersecurity benchmarks, and capable of autonomously planning and executing multi-step operations across systems without human intervention at each step. Domain: AI & LLMs.

- **[OpenAI acquires Astral](https://openai.com/index/openai-to-acquire-astral/)** — OpenAI announced March 19, 2026 it will acquire Astral, maker of uv (126M+ monthly downloads), Ruff (1,000× faster than traditional Python linters), and ty; founder Charlie Marsh and team join OpenAI's Codex group to accelerate AI-assisted Python development tooling while keeping the open-source projects maintained. Domain: Dev Workflows.

- **[Azure Developer CLI (azd) AI Agent Mode](https://devblogs.microsoft.com/azure-sdk/azure-developer-cli-azd-march-2026/)** — March 2026 update ships a local run-and-debug loop for AI agents (`azd ai agent run` / `azd ai agent invoke`), GitHub Copilot–powered project setup, and Container App Jobs deployment across seven releases; makes iterating on AI agents from the terminal a first-class azd workflow. Domain: Dev Workflows.

- **[Framer Auto Translate](https://www.framer.com/updates)** — Launched March 31, 2026: AI-powered feature that keeps all content in sync across every locale automatically, both on the Canvas and in the CMS, with a selectable model and auto option; eliminates the manual re-translation cycle whenever content changes in any locale. Domain: Design.

- **[Capital One acquires Brex for $5.15B](https://www.cnbc.com/2026/01/22/capital-one-is-buying-startup-brex-for-5point15-billion-in-credit-card-firms-latest-deal.html)** — Announced January 22, 2026 (50% cash / 50% stock); the largest bank-fintech deal on record, well below Brex's $12.3B 2022 peak; Capital One absorbs Brex's AI-native corporate card and expense management platform to pivot from consumer lending toward B2B payments, with Brex co-founder Pedro Franceschi continuing to lead it as a distinct division. Domain: Business.

- **[YouTube Ask Studio](https://routenote.com/blog/youtube-launches-ask-studio-ai-tool/)** — YouTube rolled out Ask Studio, a conversational AI assistant inside YouTube Studio that lets creators query analytics, get content inspiration, and understand audience behavior through natural-language chat; paired with new paid-vs-organic analytics breakdowns and A/B title testing to help creators optimize performance without manually parsing dashboards. Domain: Social Media.

- **[X Grok Imagine text-to-video](https://www.socialmediatoday.com/news/x-formerly-twitter-previews-text-to-video-ai-companion-valentine/753514/)** — X is integrating xAI's Hotshot-powered text-to-video engine as a native platform feature called "Imagine," letting users generate up to 10-second 720p videos from text prompts directly within X posts; currently in preview, with plans to extend to longer durations and higher resolutions. Domain: Social Media.

### 2026-04-06

- **[GPT-5.4](https://techcrunch.com/2026/03/05/openai-launches-gpt-5-4-with-pro-and-thinking-versions/)** — Released March 5, 2026 in Standard, Thinking, and Pro variants; achieves 75% on OSWorld-Verified computer-use (surpassing human baseline of 72.4%), 83% on GDPval knowledge-work tasks, and a 1M-token context window — the largest from OpenAI; introduces dynamic tool loading to shrink token usage in large tool-call workflows; GPT-5.4 mini and nano followed March 17. ⚠️ 57.7% SWE-bench Pro score appears in both this and Gemini 3.1 Pro benchmark reports — treat as unverified per ref_ai_trends.md. Domain: AI & LLMs.

- **[Google Gemma 4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)** — Apache 2.0 open-weight multimodal model family (2B, 4B, 26B, 31B) released April 2–3, 2026; trained on 140+ languages with up to 256K-token context; natively processes images and video, supports multi-step agentic workflows and tool calling, and is built from the same research base as Gemini 3; cumulative Gemma downloads surpassed 400M since the first generation. Domain: AI & LLMs.

- **[Microsoft MAI Models](https://techcrunch.com/2026/04/02/microsoft-takes-on-ai-rivals-with-three-new-foundational-models/)** — Three in-house foundation models launched April 2, 2026 via Microsoft Foundry and the MAI Playground: MAI-Transcribe-1 (25-language speech-to-text, 2.5× faster than Azure Fast), MAI-Voice-1 (60s of audio generated per second, custom-voice cloning), and MAI-Image-2; developed by Mustafa Suleyman's MAI Superintelligence team as cheaper alternatives to OpenAI and Google, reducing Microsoft's dependency on its OpenAI partnership. Domain: AI & LLMs.

- **[shadcn/ui CLI v4](https://ui.shadcn.com/docs/changelog/2026-03-cli-v4)** — March 2026 release elevates the installer into a project-management system: --dry-run and --diff flags let developers audit changes before writing; shadcn/skills supplies AI coding agents with project-specific component API context to cut hallucinations; portable design-system Presets encode full theme configs (colors, fonts, icons, radius) in a single string; first-class init templates added for Vite, TanStack Start, React Router, Astro, and Laravel. Domain: Dev Workflows.

- **[SpaceX confidential IPO filing](https://www.cnbc.com/2026/04/01/spacex-confidentially-files-for-ipo-setting-stage-for-record-offering.html)** — Filed a confidential S-1 with the SEC on April 1, 2026, targeting a Nasdaq listing in June 2026 at a $1.75T valuation with a ~$75B raise target — which would be the largest IPO in history; SpaceX was valued at $1.25T following its February 2026 merger with xAI, meaning the filing values it 40% higher just two months later. Domain: Business.

### 2026-04-07

- **[AutoKernel](https://www.marktechpost.com/2026/04/06/rightnow-ai-releases-autokernel-an-open-source-framework-that-applies-an-autonomous-agent-loop-to-gpu-kernel-optimization-for-arbitrary-pytorch-models/)** — RightNow AI open-source framework (released April 6, 2026) that runs an autonomous LLM agent loop to optimize GPU kernels for arbitrary PyTorch models; uses torch.profiler with Amdahl's law to rank targets, then rewrites Triton kernels iteratively (~90s/cycle); achieves 5.29× over PyTorch eager on RMSNorm and 2.83× over torch.compile on softmax on NVIDIA H100; supports both NVIDIA and AMD GPUs. Domain: AI & LLMs.

- **[Microsoft Agent Framework GA](https://devblogs.microsoft.com/foundry/introducing-microsoft-agent-framework-the-open-source-engine-for-agentic-ai-apps/)** — Unified open-source SDK that merges AutoGen and Semantic Kernel (both entering maintenance mode); RC 1.0 shipped February 19, 2026, GA in Q1 2026; multi-language (Python, C#, Java), graph-based multi-agent orchestration, enterprise features (session state, type safety, telemetry, filters), and deep Azure integration — ending the choice between the two frameworks for new projects. Domain: Dev Workflows.

- **[SaaS Awakening](https://markets.financialcontent.com/stocks/article/marketminute-2026-4-3-the-saas-awakening-of-2026-why-the-death-of-the-seat-is-the-birth-of-a-new-bull-market)** — After the Q1 "SaaSpocalypse" selloff, large-cap SaaS stocks rebounded sharply in early April 2026 as Salesforce and ServiceNow Q4 earnings showed agentic AI monetization working in practice; the old seat-based licensing model is being replaced by "Agentic Work Units" and "Performance Credits" billing tied to outcomes rather than users. Domain: Business.

- **[Instagram Plus](https://embedsocial.com/blog/new-instagram-features-2026/)** — Instagram's new paid subscription tier in regional testing as of April 2026; bundles advanced Story tools including multiple Story audiences, rewatch insights, viewer-list search, Story previews, longer Story expiration, super hearts, and a Spotlight option — separate from the standalone Instagram Edits app, targeting power creators willing to pay for deeper audience insights. Domain: Social Media.

### 2026-04-08

- **[Google LiteRT-LM](https://aitoolly.com/ai-news/article/2026-04-07-google-launches-litert-lm-a-high-performance-production-grade-framework-for-edge-device-llm-deployme)** — Google's open-source production-grade inference framework for deploying LLMs on edge devices, released April 7, 2026; engineered for high-throughput on-device inference on mobile, automotive, and embedded platforms, enabling offline AI without cloud dependency. Domain: AI & LLMs.

- **[Anthropic Bloom](https://www.anthropic.com/research/bloom)** — Open-source agentic framework from Anthropic that automates the generation of behavioral evaluations for frontier AI models; helps safety teams create diverse, reproducible evaluation suites to benchmark model alignment and capability regressions across agentic contexts. Domain: AI & LLMs.

- **[Java 26](https://www.oracle.com/news/announcement/oracle-releases-java-26-2026-03-17/)** — Oracle released Java 26 on March 17, 2026 with developer-productivity improvements, simplified language syntax, and new built-in APIs for AI integration and post-quantum cryptography; ships alongside the Java Verified Portfolio (JVP), a curated set of Oracle-supported tools including commercial JavaFX and Helidon microservices framework. Domain: Dev Workflows.

- **[Google Stitch Redesign](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)** — Google relaunched Stitch from Google Labs in March 2026 with an AI-native infinite canvas, context-aware design agents, and instant prototyping; generates high-fidelity UI from natural-language prompts and can extract a design system from any URL via DESIGN.md — an agent-friendly markdown format for importing/exporting design rules across tools. Domain: Design.

- **[Savvy Games Group acquires Moonton for $6B](https://blog.mean.ceo/top-funded-startups-news-april-2026/)** — Saudi-backed Savvy Games Group announced a planned $6 billion acquisition of ByteDance's mobile gaming platform Moonton (publisher of Mobile Legends: Bang Bang), one of Q1 2026's largest gaming M&A deals targeting Southeast Asian mobile esports audiences. Domain: Business.

- **[Picsart Creator Monetization Program](https://techcrunch.com/2026/04/06/ai-design-platform-picsart-launches-a-creator-monetization-program/)** — AI-powered design platform Picsart launched a monetization program on April 6, 2026 open to all creators with no invite list or minimum audience size; creators make original content using Picsart tools for specific brand campaigns and earn revenue based on audience engagement, expanding creator economy access to smaller accounts. Domain: Social Media.

### 2026-04-09

- **[Meta Llama 5](https://markets.financialcontent.com/stocks/article/marketminute-2026-4-8-meta-unleashes-llama-5-zuckerbergs-open-source-gambit-challenges-proprietary-ai-dominance)** — Mark Zuckerberg officially announced Llama 5 on April 8, 2026 as Meta's open-source flagship model family, directly challenging proprietary frontier models from OpenAI and Google; released under a permissive license and positioned as the open-source counter to closed model dominance. Domain: AI & LLMs.

- **[Meta Muse Spark](https://siliconangle.com/2026/04/08/meta-debuts-muse-spark-multimodal-reasoning-model/)** — First model released by Meta Superintelligence Labs (debuted April 8, 2026); multimodal reasoning model that reportedly outperforms Claude Opus 4.6, Gemini 3.1 Pro, and GPT-5.4 across several benchmarks; features a "Contemplating" mode that spawns multiple parallel agents to decompose complex tasks into substeps and execute them concurrently. Domain: AI & LLMs.

- **[Zhipu AI GLM-5.1](https://whatllm.org/blog/new-ai-models-april-2026)** — MIT-licensed 744B-parameter mixture-of-experts model (40B active per forward pass) with a 200K-token context window released April 2026; claimed to beat Claude Opus 4.6 and GPT-5.4 on SWE-Bench Pro. ⚠️ SWE-Bench Pro scores remain in conflict across multiple models — treat as unverified per ref_ai_trends.md. Domain: AI & LLMs.

- **[Nvidia Agent Toolkit](https://venturebeat.com/technology/nvidia-launches-enterprise-ai-agent-platform-with-adobe-salesforce-sap-among)** — Launched at GTC 2026; Nvidia's enterprise AI agent runtime platform with Adobe, Salesforce, SAP, ServiceNow, Siemens, CrowdStrike, Atlassian, Palantir, and 9 others as founding partners — establishing a shared infrastructure layer for next-generation enterprise AI agents across industries. Domain: Business.

- **[Instagram Your Algo](https://socialbee.com/blog/social-media-news/)** — Instagram rolling out to all English-speaking users a Reels feed personalization tool that lets people directly add or remove interest topics from their recommendation algorithm — the first time Instagram has given users explicit, granular control over what drives their content feed. Domain: Social Media.

# Research Scout — Achados Pendentes

Staging area automática. Achados são promovidos semanalmente pelo scout-promote.

## Achados pendentes

<!-- Achados do research-scout serão adicionados aqui automaticamente -->

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

### 2026-04-11

- **[Meta Muse Spark](https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs-first-model-built-to-prioritize-people/)** — Meta's first proprietary frontier model from Meta Superintelligence Labs (April 8, 2026); natively multimodal reasoning model supporting tool use, visual chain of thought, and multi-agent orchestration; rolling out across Facebook, Instagram, WhatsApp, and Messenger — marks Meta's shift away from its Llama open-source strategy. Domain: AI & LLMs.

- **[Meta Llama 4 Scout & Maverick](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)** — Open-weight multimodal MoE models released April 5, 2026; Maverick (17B active params / 128 experts) and Scout (long-context variant) natively process text, images, and video; available as open-weight downloads on Hugging Face and llama.com; powering Meta AI across WhatsApp, Messenger, Instagram, and meta.ai. Domain: AI & LLMs.

- **[DeepSeek R2](https://www.spheron.network/blog/deploy-deepseek-r2-gpu-cloud/)** — Released March 2026; reasoning-first successor to DeepSeek-R1 achieving 92.7% on AIME 2025 and 89.4% on MATH-500 at ~70% lower cost than comparable Western models; uses extended KV latent compression to efficiently manage 10,000–40,000 token thinking chains during inference. Domain: AI & LLMs.

- **[OpenAI Codex CLI](https://openai.com/index/introducing-codex/)** — Open-source terminal coding agent released April 3, 2026 (GitHub, npm, Homebrew); runs locally with full file read/edit/create access; April 10 update added Windows Sandbox egress networking and a GPT-5.3-Codex-Spark preview model delivering 1,000+ tokens/sec for near-instant in-terminal coding assistance. Domain: Dev Workflows.

- **[OpenAI $122B round at $852B valuation](https://www.cnbc.com/2026/03/31/openai-funding-round-ipo.html)** — Closed March 31, 2026; backed by SoftBank (co-lead), Amazon ($50B), and Nvidia ($30B); generating $2B/month in revenue; company targets a Q4 2026 IPO at ~$1 trillion valuation with $280B revenue goal by 2030. Domain: Business.

- **[Instagram Teleprompter](https://www.socialmediatoday.com/news/instagram-edits-video-app-teleprompter-overlays-update/750386/)** — Instagram added a scrolling Teleprompter to the Edits app for Reels recording; script text displays directly below the front-facing camera with an adjustable speed slider; accessible from the main Reels creation menu alongside audio, effects, and green screen. Domain: Social Media.

### 2026-04-12

- **[LG EXAONE 4.5](https://www.manilatimes.net/2026/04/09/tmt-newswire/pr-newswire/lg-reveals-next-gen-multimodal-ai-exaone-45/2317491)** — LG AI Research's multimodal model (April 9, 2026) that simultaneously understands and reasons across text and images; scores 77.3 average across five STEM benchmarks, outperforming GPT-5-mini (73.5), Claude 4.5 Sonnet (74.6), and Qwen-3 235B (77.0). Domain: AI & LLMs.

- **[Microsoft Agent Governance Toolkit](https://opensource.microsoft.com/blog/2026/04/02/introducing-the-agent-governance-toolkit-open-source-runtime-security-for-ai-agents/)** — MIT-licensed open-source runtime security layer for autonomous AI agents (April 2, 2026); addresses all 10 OWASP agentic AI risks with sub-millisecond policy enforcement; includes Agent Compliance (EU AI Act/HIPAA/SOC2 mapping), Agent Marketplace (Ed25519 plugin signing with trust-tiered capability gating), and Agent Lightning (RL training governance); framework-agnostic hooks for LangChain, CrewAI, and Google ADK. Domain: Dev Workflows.

- **[Lola](https://developers.redhat.com/articles/2026/04/08/manage-ai-context-lola-package-manager)** — Red Hat's universal package manager for AI context (April 8, 2026); distributes "lola modules" — portable packages of prompts, instructions, and context installable across AI assistants — enabling teams to version-control and share context configurations like software dependencies. Domain: Dev Workflows.

- **[Facebook Creator Pay Program](https://techcrunch.com/2026/03/18/facebook-launches-a-new-monetization-program-to-attract-popular-creators-from-tiktok-youtube/)** — Meta launched a direct-payment monetization program (March 18, 2026) offering financial incentives to popular TikTok, YouTube, and Instagram creators to post on Facebook, targeting platform migration with competitive pay structures tied to audience size. Domain: Social Media.

- **[Instagram Reels Affiliate Tagging](https://socialbee.com/blog/instagram-updates/)** — Instagram now lets creators tag affiliate products directly inside Reels with conversion data flowing natively inside Meta; enables in-video commerce tracking without third-party affiliate networks or redirect links, announced by Adam Mosseri in April 2026. Domain: Social Media.

### 2026-04-13

- **[Rider 2026.1](https://blog.jetbrains.com/dotnet/2026/03/30/rider-2026-1-released/)** — Released March 30, 2026; introduces the ACP Registry enabling one-click discovery and installation of AI coding agents (Junie, Claude Agent, Codex, GitHub Copilot, Cursor) directly inside the IDE; AI chat gains native database access for natural-language queries and modifications; expanded Unreal Engine mobile debugging on Android/iOS and a deepened Unity Profiler integration round out the release. Domain: Dev Workflows.

- **[LinkedIn Top Voices Creator Partnerships](https://www.socialmediatoday.com/news/linkedin-adds-new-ways-for-brands-to-tap-into-creator-partnerships/815152/)** — LinkedIn expanded brand sponsorship options in 2026, allowing brands to secure exclusive ad placements alongside hand-selected Top Voices content and to sponsor LinkedIn Shows — exclusive creator and publisher video series; BrandLink placements and Thought Leader Ads are now self-serve in Campaign Manager, making premium creator-adjacent inventory accessible without a managed deal. Domain: Social Media.

- **[Threads Native Podcast Previews](https://www.netinfluencer.com/meta-threads-launches-podcast-previews-to-court-creators-and-their-audiences/)** — Threads launched native in-feed podcast preview clips in 2026, letting creators upload short episode snippets that play directly in the feed without requiring Threads to host the full show; paired with the ability to link podcast profiles to Apple Podcasts, iHeart, and Spotify — positioning Threads as the canonical space for podcast fan discussion rather than a hosting platform. Domain: Social Media.

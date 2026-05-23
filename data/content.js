// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT — edit this file to update everything.
// All links, copy, projects, skills, experience, and social URLs live here.
// ─────────────────────────────────────────────────────────────────────────────

window.CONTENT = {

  // ── Links — change once, updates everywhere ───────────────────────────────
  links: {
    email:      "chprko2001@gmail.com",
    github:     "https://github.com/prasannanjaneyreddychalla",
    linkedin:   "https://www.linkedin.com/in/prasannanjaneyareddychalla/",
    credly:     "https://www.credly.com/users/prasannanjaneyareddy-challa",
    awsbuilder: "https://builder.aws.com/community/@prasanna17",
    resume:     ""
  },

  hero: {
    name:         "Prasannanjaneya Reddy",
    title:        "Software Engineer. Infrastructure. AI. F1 fan.",
    tagline:      "I like figuring out why things break, then making sure they don't.",
    subTagline:   "Graduate assistant at ASU. Ex-engineer at Sears Holdings.",
    location:     "Tempe, AZ",
    availability: "Open to roles in software engineering, backend, infra, and AI/ML"
  },

  about: {
    intro: "I ask a lot of \"why\" questions. Mostly to myself first.",
    note:  "I like digging into a system, building my own understanding, then talking to the right people to see what I missed. That's how I ended up across infrastructure, backend, AI, and data.",
    bio: [
      "Software engineer finishing my Master's at ASU. I build things that are useful, not just interesting.",
      "Huge F1 fan. I think about systems the same way — strategy, tradeoffs, tiny decisions that compound. Minus the carbon fiber.",
      "Looking for early-career roles in software engineering, backend, infra, or AI/ML."
    ]
  },

  experience: [
    {
      company: "Arizona State University",
      role: "Graduate Service Assistant",
      period: "Jan 2026 — Present",
      location: "Tempe, Arizona",
      highlights: [
        "Supporting AI and Robotics research at ASU.",
        "Training ML models on HPC clusters with SLURM.",
        "Working on medical imaging and LLM projects."
      ]
    },
    {
      company: "Sears Holdings India",
      role: "Software Engineer",
      period: "Feb 2025 — Aug 2025",
      location: "Hyderabad, India",
      highlights: [
        "Managed cloud infrastructure across 4,000+ instances on AWS.",
        "Built cost dashboards tracking ~$1.2M monthly spend — helped cut costs by 11–12%.",
        "Automated compliance checks, stale resource cleanup, and deployment workflows.",
        "Maintained PCI DSS network setup across VPCs, load balancers, and databases.",
        "Handled Linux patching and hardening across containers and AMIs."
      ]
    },
    {
      company: "Sears Holdings India",
      role: "Associate Software Engineer",
      period: "Nov 2022 — Jan 2025",
      location: "Hyderabad, India",
      highlights: [
        "Automated reporting across 65,000+ Control-M jobs.",
        "Wrote scripts to find and clean up unused on-prem resources.",
        "Handled access controls, CloudFormation StackSets, and Linux ops.",
        "Turned repetitive support tasks into reusable Python and shell tools.",
        "Got hands-on with Kafka, IBM MQ, ZooKeeper, and AWS CodePipelines."
      ]
    }
  ],

  projects: [
    {
      title: "AutoResearch",
      subtitle: "Multi-Agent Research Pipeline",
      description: "Type a question, get a sourced Markdown report back. It breaks the question down, searches the web, checks its own coverage, and saves a full trace of what happened.",
      outcome: "Every step is logged and inspectable — which is more than most agentic systems can say.",
      tags: ["Python", "LangChain", "Multi-Agent", "RAG", "OpenAI API"],
      github: "https://github.com/prasannanjaneyreddychalla/deepresearch-agentic",
      year: "2026"
    },
    {
      title: "cv-smith",
      subtitle: "AI-Powered CV Generator",
      description: "Paste a job URL, get a tailored CV. Built with FastAPI and LangChain because rewriting your CV for every application is exactly the kind of thing a computer should do.",
      outcome: "Does in seconds what used to take an hour. Structured output, no hallucinated job titles.",
      tags: ["FastAPI", "LangChain", "Python", "Web Scraping"],
      github: "",
      year: "2026"
    },
    {
      title: "Chest X-Ray Diagnosis",
      subtitle: "Deep Learning on Medical Imaging",
      description: "Trained ResNet50, DenseNet, and NODE21 on large chest X-ray datasets on ASU's HPC cluster. Full eval pipeline with ROC/AUC and experiment tracking.",
      outcome: "Reproducible workflows, W&B tracking, and proper classification + localization pipelines.",
      tags: ["PyTorch", "ResNet50", "DenseNet", "NODE21", "SLURM", "W&B"],
      github: "https://github.com/prasannanjaneyreddychalla/Chest-X-Ray-Medical-Diagnosis-with-Deep-Learning",
      year: "2025"
    },
    {
      title: "RepoLens",
      subtitle: "Repository Insights Dashboard",
      description: "A frontend tool that reads a GitHub repo and surfaces what's actually going on — tech stack, complexity signals, modernization ideas, and an Auto-PR preview.",
      outcome: "Useful for understanding a codebase before you have to live in it.",
      tags: ["React", "TypeScript", "GitHub API", "Developer Tooling"],
      github: "https://github.com/prasannanjaneyreddychalla/repo-insights-dashboard",
      year: "2025"
    },
    {
      title: "Local AI Assistant",
      subtitle: "Fully Local RAG System",
      description: "An AI system that runs entirely on your machine — no cloud, no telemetry. Uses Ollama, LangChain, and ChromaDB for document search and infra workflows.",
      outcome: "Fast, private, and actually useful for local document work.",
      tags: ["Ollama", "LangChain", "RAG", "ChromaDB", "Python"],
      github: "",
      year: "2024"
    },
    {
      title: "Deep Agents",
      subtitle: "LangGraph Agent Workflows",
      description: "Hands-on LangGraph implementations — tool use, multi-step reasoning, agent orchestration. Built to understand how these systems actually fail, not just how they work on paper.",
      outcome: "Covers ReAct, ACT, and tool-calling patterns with real benchmarking.",
      tags: ["LangGraph", "LangChain", "ReAct", "Agents", "Python"],
      github: "https://github.com/prasannanjaneyreddychalla/deep-agents",
      year: "2026"
    }
  ],

  skills: [
    { group: "Cloud", items: ["AWS EC2, S3, IAM", "VPC, RDS, CloudFormation", "OpenStack", "Docker", "Kubernetes"] },
    { group: "AI and LLMs", items: ["LangChain", "LangGraph", "Ollama", "ChromaDB", "RAG", "Multi-Agent Systems"] },
    { group: "Machine Learning", items: ["PyTorch", "ResNet50", "DenseNet", "NODE21", "SLURM / HPC", "W&B"] },
    { group: "Data", items: ["PostgreSQL", "DynamoDB", "MongoDB", "MySQL", "Kafka", "ZooKeeper"] },
    { group: "Languages", items: ["Python", "Shell scripting", "SQL", "TypeScript", "FastAPI", "React"] },
    { group: "Systems", items: ["Linux", "AWS Cost Explorer", "BMC Control-M", "Grafana", "VMware", "LDAP"] }
  ],

  education: [
    {
      school: "Arizona State University",
      degree: "Master's in AI and Robotics",
      period: "Aug 2025 — Jul 2027",
      location: "Tempe, Arizona"
    },
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology",
      period: "Jun 2020 — Jul 2023",
      location: "Punjab, India"
    }
  ],

  certifications: [
    {
      name: "AWS Educate Getting Started with Storage",
      issuer: "Amazon Web Services",
      issued: "May 2024",
      badge: "https://images.credly.com/images/3b1b42e6-dfc2-492b-90df-8058096cb93d/blob"
    },
    {
      name: "AWS Educate Getting Started with Cloud Ops",
      issuer: "Amazon Web Services",
      issued: "Apr 2024",
      badge: "https://images.credly.com/images/4251ab91-6d67-47da-801c-855c0bbc6cc3/blob"
    },
    {
      name: "AWS Educate Getting Started with Networking",
      issuer: "Amazon Web Services",
      issued: "Apr 2024",
      badge: "https://images.credly.com/images/f5095707-7683-4886-940c-3e8e4a2085ca/blob"
    },
    {
      name: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      issued: null,
      badge: null
    },
    {
      name: "Introduction to FinOps",
      issuer: "FinOps Foundation",
      issued: null,
      badge: null
    },
    {
      name: "Introduction to LangChain – Python",
      issuer: "LangChain",
      issued: null,
      badge: null
    },
    {
      name: "Linux Server Management and Security",
      issuer: null,
      issued: null,
      badge: null
    }
  ],

  areas: [
    {
      name: "AI and LLM Systems",
      description: "Building AI that's grounded and testable — RAG pipelines, agents, local inference. Not just impressive in a demo.",
      items: ["Multi-Agent Workflows", "RAG / Retrieval", "LangChain / LangGraph", "Local Inference", "Agent Benchmarking"]
    },
    {
      name: "Cloud and Infrastructure",
      description: "AWS at real scale. Cost visibility, compliance, and turning repeated problems into tools so they stop being problems.",
      items: ["AWS EC2, S3, IAM", "Cost Dashboards", "CloudFormation", "Linux Hardening", "Hybrid Cloud"]
    },
    {
      name: "Machine Learning",
      description: "Training models on HPC, evaluating properly, and making experiments reproducible. Medical imaging focus.",
      items: ["Computer Vision", "Medical Imaging", "ResNet / DenseNet", "SLURM / HPC", "W&B Tracking"]
    },
    {
      name: "Backend and Automation",
      description: "FastAPI, Python, shell scripts. If something is repetitive, it should be automated. That's not laziness, that's engineering.",
      items: ["FastAPI", "Python Automation", "Shell Scripting", "Data Pipelines", "Deployment Workflows"]
    }
  ],

  travels: [
    {
      place: "Tempe, Arizona",
      date: "August 2025",
      caption: "Moved here for ASU. Desert heat, good sunsets, completely different pace from Hyderabad. Still adjusting.",
      photos: []
    }
  ],

  thoughts: [
    {
      date: "2026-06-01",
      text: "RAG that can actually be evaluated is rare. It almost always breaks at retrieval, not the model."
    },
    {
      date: "2026-04-10",
      text: "Agentic systems that technically work and ones with useful traces are very different things."
    },
    {
      date: "2025-11-20",
      text: "Every F1 strategy call feels obvious five laps too late. Software is the same."
    },
    {
      date: "2025-09-01",
      text: "The gap between knowing how something works and building it is where the learning actually happens."
    },
    {
      date: "2025-08-14",
      text: "Moving somewhere new shows how much of the old routine was just running on autopilot."
    }
  ],

  f1: {
    favoriteTeam: "Ferrari",
    favoriteDriver: "Lewis Hamilton",
    currentSeason: "2026",
    tagline: "Hamilton / Ferrari / 2026 — the season that shouldn't have been possible."
  }
};

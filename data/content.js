// Portfolio content. Edit this file to update links, copy, projects, skills, experience, and footer details.

window.CONTENT = {

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
    title:        "Software engineer building AI and infrastructure systems.",
    tagline:      "I like finding where systems break, then making them easier to trust.",
    subTagline:   "Graduate service assistant at ASU. Former software engineer at Sears Holdings India.",
    location:     "Tempe, AZ",
    availability: "Open to software engineering, backend, infrastructure, and AI/ML roles"
  },

  about: {
    intro: "I build practical software at the edge of backend systems, cloud infrastructure, and AI.",
    note:  "My favorite work starts with a messy system: unclear logs, repeated manual steps, slow workflows, or models that look good in a demo but fail when you inspect them. I like turning that mess into something reliable.",
    bio: [
      "I am finishing my Master's in AI and Robotics at Arizona State University, where I support AI, robotics, medical imaging, and LLM-related research work.",
      "Before ASU, I worked on production infrastructure at Sears Holdings India. That meant AWS at scale, cost visibility, compliance automation, Linux hardening, deployment workflows, and the usual fun of figuring out why something broke at the worst possible time.",
      "I am looking for early-career software engineering roles where I can work on backend systems, infrastructure, developer tools, or applied AI systems that people actually use."
    ]
  },

  experience: [
    {
      company: "Arizona State University",
      role: "Graduate Service Assistant",
      period: "Jan 2026 - Present",
      location: "Tempe, Arizona",
      highlights: [
        "Support AI and robotics research projects across model training, evaluation, and experimentation.",
        "Train and run machine learning workloads on HPC clusters using SLURM.",
        "Work on medical imaging and LLM projects where reproducibility and clear experiment tracking matter."
      ]
    },
    {
      company: "Sears Holdings India",
      role: "Software Engineer",
      period: "Feb 2025 - Aug 2025",
      location: "Hyderabad, India",
      highlights: [
        "Managed AWS infrastructure across 4,000+ instances and helped teams keep production systems stable.",
        "Built cost dashboards for roughly $1.2M in monthly AWS spend, helping reduce cloud costs by 11-12%.",
        "Automated compliance checks, stale resource cleanup, reporting tasks, and deployment workflows.",
        "Maintained PCI DSS network setups across VPCs, load balancers, databases, and access controls.",
        "Worked on Linux patching, AMI hardening, containers, and cloud operations tasks that needed careful execution."
      ]
    },
    {
      company: "Sears Holdings India",
      role: "Associate Software Engineer",
      period: "Nov 2022 - Jan 2025",
      location: "Hyderabad, India",
      highlights: [
        "Automated reporting across 65,000+ Control-M jobs so teams could find failures and patterns faster.",
        "Wrote Python and shell scripts to identify unused on-prem resources and reduce repetitive support work.",
        "Handled access controls, CloudFormation StackSets, Linux operations, and application support workflows.",
        "Worked with Kafka, IBM MQ, ZooKeeper, AWS CodePipeline, and hybrid infrastructure systems."
      ]
    }
  ],

  projects: [
    {
      title: "AutoResearch",
      subtitle: "Multi-agent research pipeline",
      description: "A research assistant that takes a question, breaks it into smaller tasks, searches for sources, checks coverage, and produces a sourced Markdown report.",
      outcome: "Built for traceability: each step is logged so the final answer can be reviewed instead of blindly trusted.",
      tags: ["Python", "LangChain", "Multi-Agent", "RAG", "OpenAI API"],
      github: "https://github.com/prasannanjaneyreddychalla/deepresearch-agentic",
      year: "2026"
    },
    {
      title: "cv-smith",
      subtitle: "AI-powered CV generator",
      description: "A FastAPI and LangChain app that uses a job posting to generate a tailored CV draft from structured profile data.",
      outcome: "Cuts down the repetitive CV-editing loop while keeping the output grounded in real experience and role requirements.",
      tags: ["FastAPI", "LangChain", "Python", "Web Scraping"],
      github: "https://github.com/prasannanjaneyreddychalla/cv-smith",
      year: "2026"
    },
    {
      title: "Chest X-Ray Diagnosis",
      subtitle: "Deep learning for medical imaging",
      description: "Trained and evaluated ResNet50, DenseNet, and NODE21-based workflows on chest X-ray datasets using ASU HPC resources.",
      outcome: "Focused on reproducible training, ROC/AUC evaluation, experiment tracking, and classification plus localization workflows.",
      tags: ["PyTorch", "ResNet50", "DenseNet", "NODE21", "SLURM", "W&B"],
      github: "https://github.com/prasannanjaneyreddychalla/Chest-X-Ray-Medical-Diagnosis-with-Deep-Learning",
      year: "2025"
    },
    {
      title: "RepoLens",
      subtitle: "Repository insights dashboard",
      description: "A frontend tool for quickly understanding a GitHub repository: tech stack, complexity signals, modernization ideas, and possible cleanup work.",
      outcome: "Designed to help developers get context before they spend hours digging through a new codebase.",
      tags: ["React", "TypeScript", "GitHub API", "Developer Tooling"],
      github: "https://github.com/prasannanjaneyreddychalla/repo-insights-dashboard",
      year: "2025"
    },
    {
      title: "Local AI Assistant",
      subtitle: "Private local RAG system",
      description: "A local document assistant built with Ollama, LangChain, and ChromaDB for search and question answering without sending files to the cloud.",
      outcome: "Useful for private document workflows where control, speed, and local execution matter more than flashy demos.",
      tags: ["Ollama", "LangChain", "RAG", "ChromaDB", "Python"],
      github: "",
      year: "2024"
    },
    {
      title: "Deep Agents",
      subtitle: "LangGraph agent workflows",
      description: "Hands-on implementations of agent patterns, tool use, multi-step workflows, and benchmarking experiments with LangGraph and LangChain.",
      outcome: "Built to understand where agents fail in practice, not just how they look in tutorials.",
      tags: ["LangGraph", "LangChain", "ReAct", "Agents", "Python"],
      github: "https://github.com/prasannanjaneyreddychalla/deep-agents",
      year: "2026"
    }
  ],

  skills: [
    { group: "Backend and Automation", items: ["Python", "FastAPI", "Shell scripting", "SQL", "REST APIs", "Workflow automation"] },
    { group: "Cloud and Infrastructure", items: ["AWS EC2, S3, IAM", "VPC, RDS, CloudFormation", "Docker", "Kubernetes", "OpenStack", "Linux"] },
    { group: "AI and LLM Systems", items: ["LangChain", "LangGraph", "RAG", "ChromaDB", "Ollama", "Agent workflows"] },
    { group: "Machine Learning", items: ["PyTorch", "ResNet50", "DenseNet", "SLURM / HPC", "W&B", "Model evaluation"] },
    { group: "Data and Messaging", items: ["PostgreSQL", "DynamoDB", "MongoDB", "MySQL", "Kafka", "ZooKeeper"] },
    { group: "Operations", items: ["AWS Cost Explorer", "BMC Control-M", "Grafana", "CloudFormation StackSets", "LDAP", "PCI DSS workflows"] }
  ],

  education: [
    {
      school: "Arizona State University",
      degree: "Master's in AI and Robotics",
      period: "Aug 2025 - Jul 2027",
      location: "Tempe, Arizona"
    },
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology",
      period: "Jun 2020 - Jul 2023",
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
      name: "Introduction to LangChain - Python",
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
      name: "Backend and infrastructure",
      description: "I like work where reliability matters: APIs, automation, cloud services, Linux systems, and the glue code that keeps teams moving.",
      items: ["FastAPI", "Python", "AWS", "Linux", "Automation"]
    },
    {
      name: "Applied AI systems",
      description: "I am interested in AI systems that can be inspected, evaluated, and improved instead of treated like magic boxes.",
      items: ["RAG", "Agents", "Evaluation", "LangChain", "LangGraph"]
    },
    {
      name: "Machine learning workflows",
      description: "I have worked with model training, HPC jobs, experiment tracking, and medical imaging pipelines where the process matters as much as the model.",
      items: ["PyTorch", "SLURM", "W&B", "Medical imaging", "Evaluation"]
    },
    {
      name: "Developer tools",
      description: "I enjoy building tools that remove busywork: dashboards, scripts, cleanup jobs, repo analysis, and small systems that make larger systems easier to manage.",
      items: ["Dashboards", "Scripts", "GitHub API", "Cost visibility", "Ops tooling"]
    }
  ],

  travels: [
    {
      place: "Tempe, Arizona",
      date: "August 2025",
      caption: "Moved here for ASU. The desert heat was not subtle, but the sunsets made a strong argument.",
      photos: []
    }
  ],

  thoughts: [
    {
      date: "2026-06-01",
      text: "RAG systems usually fail before the model answers. Retrieval quality decides more than people admit."
    },
    {
      date: "2026-04-10",
      text: "Agent traces matter. If you cannot inspect the steps, you are mostly trusting the demo."
    },
    {
      date: "2025-11-20",
      text: "F1 strategy calls look obvious five laps later. Debugging production systems has the same energy."
    },
    {
      date: "2025-09-01",
      text: "The gap between understanding a system and building one is where the useful learning happens."
    },
    {
      date: "2025-08-14",
      text: "Moving to a new place makes you notice which parts of your routine were actually holding things together."
    }
  ],

  f1: {
    favoriteTeam: "Ferrari",
    favoriteDriver: "Lewis Hamilton",
    currentSeason: "2026",
    tagline: "F1 fan. Mostly Ferrari, which builds character whether you ask for it or not."
  }
};
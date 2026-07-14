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
    title:        "Software engineer working across backend, cloud infrastructure, and applied AI.",
    tagline:      "I care about building useful software, writing clear code, and being the kind of teammate people can count on.",
    subTagline:   "Graduate student at Arizona State University. Former software engineer at Sears Holdings India.",
    location:     "Tempe, AZ",
    availability: "Open to software engineering, backend, cloud, infrastructure, and applied AI roles"
  },

  about: {
    intro: "I am a software engineer who likes practical work: backend systems, cloud infrastructure, automation, and applied AI.",
    note:  "I work best when I can understand the goal, learn the system, and then build something that makes life easier for the people using it. I try to keep things clear, reliable, and useful.",
    bio: [
      "I am currently pursuing my Master's in AI and Robotics at Arizona State University, where I support research work involving AI, robotics, medical imaging, and LLM-based systems.",
      "Before ASU, I worked at Sears Holdings India on AWS infrastructure, automation, Linux operations, cost dashboards, compliance workflows, and production support. A lot of that work taught me how important small, careful engineering decisions are when real teams depend on the system.",
      "I am looking for early-career software engineering roles where I can contribute to backend systems, infrastructure, developer tools, or applied AI products with a team that values ownership and clear thinking."
    ]
  },

  experience: [
    {
      company: "Arizona State University",
      role: "Graduate Service Assistant",
      period: "Jan 2026 - Present",
      location: "Tempe, Arizona",
      highlights: [
        "Support AI and robotics research projects through model training, evaluation, and experiment setup.",
        "Run machine learning workloads on HPC clusters using SLURM and help keep experiments organized and reproducible.",
        "Work with medical imaging and LLM-related research tasks where clear evaluation and careful documentation matter."
      ]
    },
    {
      company: "Sears Holdings India",
      role: "Software Engineer",
      period: "Feb 2025 - Aug 2025",
      location: "Hyderabad, India",
      highlights: [
        "Worked on AWS infrastructure across 4,000+ instances, supporting production systems used by multiple teams.",
        "Built dashboards for roughly $1.2M in monthly AWS spend, helping teams understand usage and reduce cloud costs by 11-12%.",
        "Automated compliance checks, cleanup workflows, reporting tasks, and deployment support work to reduce repetitive manual effort.",
        "Supported PCI DSS network setups across VPCs, load balancers, databases, and access controls.",
        "Handled Linux patching, AMI hardening, containers, and cloud operations work that required careful planning and follow-through."
      ]
    },
    {
      company: "Sears Holdings India",
      role: "Associate Software Engineer",
      period: "Nov 2022 - Jan 2025",
      location: "Hyderabad, India",
      highlights: [
        "Automated reporting across 65,000+ Control-M jobs so teams could identify failures and patterns faster.",
        "Wrote Python and shell scripts to reduce repeated support work and clean up unused on-prem resources.",
        "Worked on access controls, CloudFormation StackSets, Linux operations, and application support workflows.",
        "Used tools and systems including Kafka, IBM MQ, ZooKeeper, AWS CodePipeline, and hybrid infrastructure environments."
      ]
    }
  ],

  projects: [
    {
      title: "cv-smith",
      subtitle: "AI-assisted CV generator",
      description: "A FastAPI and LangChain app that helps create a tailored CV draft from a job posting and structured profile data.",
      outcome: "Built to reduce repetitive editing while keeping the content tied to real experience and the actual role.",
      tags: ["FastAPI", "LangChain", "Python", "Web Scraping"],
      github: "https://github.com/prasannanjaneyreddychalla/cv-smith",
      year: "2026"
    },
    {
      title: "AutoResearch",
      subtitle: "Research report assistant",
      description: "A research workflow that takes a question, breaks it into smaller steps, gathers sources, checks coverage, and produces a Markdown report.",
      outcome: "Focused on making the process easy to inspect so the result is not just a black-box answer.",
      tags: ["Python", "LangChain", "Multi-Agent", "RAG", "OpenAI API"],
      github: "https://github.com/prasannanjaneyreddychalla/deepresearch-agentic",
      year: "2026"
    },
    {
      title: "Chest X-Ray Diagnosis",
      subtitle: "Deep learning for medical imaging",
      description: "Trained and evaluated ResNet50, DenseNet, and NODE21-based workflows on chest X-ray datasets using ASU HPC resources.",
      outcome: "Worked on reproducible training, ROC/AUC evaluation, experiment tracking, and classification plus localization workflows.",
      tags: ["PyTorch", "ResNet50", "DenseNet", "NODE21", "SLURM", "W&B"],
      github: "https://github.com/prasannanjaneyreddychalla/Chest-X-Ray-Medical-Diagnosis-with-Deep-Learning",
      year: "2025"
    },
    {
      title: "RepoLens",
      subtitle: "Repository insights dashboard",
      description: "A frontend tool for quickly understanding a GitHub repository: tech stack, complexity signals, modernization ideas, and possible cleanup work.",
      outcome: "Designed to help developers get context before spending hours reading through a new codebase.",
      tags: ["React", "TypeScript", "GitHub API", "Developer Tooling"],
      github: "https://github.com/prasannanjaneyreddychalla/repo-insights-dashboard",
      year: "2025"
    },
    {
      title: "Local AI Assistant",
      subtitle: "Private local document assistant",
      description: "A local document assistant built with Ollama, LangChain, and ChromaDB for search and question answering without sending files to the cloud.",
      outcome: "Useful for private document workflows where local execution and control matter.",
      tags: ["Ollama", "LangChain", "RAG", "ChromaDB", "Python"],
      github: "",
      year: "2024"
    },
    {
      title: "Deep Agents",
      subtitle: "LangGraph workflow experiments",
      description: "Hands-on implementations of agent patterns, tool use, multi-step workflows, and benchmarking experiments with LangGraph and LangChain.",
      outcome: "A learning-focused project for understanding how agent workflows behave in practice.",
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
      name: "Backend and automation",
      description: "I enjoy building APIs, scripts, dashboards, and workflows that help teams move faster with less manual work.",
      items: ["FastAPI", "Python", "SQL", "Automation", "Developer tools"]
    },
    {
      name: "Cloud and infrastructure",
      description: "I have hands-on experience with AWS, Linux systems, cost visibility, compliance workflows, and day-to-day production support.",
      items: ["AWS", "Linux", "CloudFormation", "Cost dashboards", "Operations"]
    },
    {
      name: "Applied AI",
      description: "I like AI work that has a clear use case, a clear evaluation path, and a real person or team who benefits from it.",
      items: ["RAG", "LangChain", "LangGraph", "Evaluation", "Local AI"]
    },
    {
      name: "Machine learning workflows",
      description: "I have worked with model training, HPC jobs, experiment tracking, and medical imaging pipelines where organization matters as much as the model.",
      items: ["PyTorch", "SLURM", "W&B", "Medical imaging", "Evaluation"]
    }
  ],

  travels: [
    {
      place: "Tempe, Arizona",
      date: "August 2025",
      caption: "Moved here for ASU. Still getting used to the desert heat, but the sunsets help.",
      photos: []
    }
  ],

  thoughts: [
    {
      date: "2026-06-01",
      text: "I like software that is easy to explain. If a system needs too much hand-waving, something probably needs to be made clearer."
    },
    {
      date: "2026-04-10",
      text: "Good tools are usually quiet. They save a few minutes, remove a repeated step, or make the next person's work easier."
    },
    {
      date: "2025-11-20",
      text: "Production work taught me to respect small details: naming, logs, permissions, cleanup, and the boring checks that prevent bigger issues later."
    },
    {
      date: "2025-09-01",
      text: "I learn best by building, then going back and understanding what I missed the first time."
    },
    {
      date: "2025-08-14",
      text: "Moving to a new country for grad school has made me more patient, more independent, and a lot better at asking for help when it matters."
    }
  ],

  f1: {
    favoriteTeam: "Ferrari",
    favoriteDriver: "Lewis Hamilton",
    currentSeason: "2026",
    tagline: "Also an F1 fan, usually optimistic before race weekends and slightly wiser after them."
  }
};

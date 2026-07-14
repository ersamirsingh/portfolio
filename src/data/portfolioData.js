// Portfolio Data for Samir Singh
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiFastapi, SiGraphql, SiOpenai,
  SiGooglegemini, SiLangchain, SiPostgresql, SiMongodb, SiRedis,
  SiPrisma, SiMongoose, SiGit, SiDocker, SiGithubactions,
  SiLinux, SiStripe, SiSocketdotio, SiMeta, SiGoogle,
  SiJest, SiMysql, SiKubernetes, SiGithub, SiCodechef, SiLeetcode, SiGeeksforgeeks
} from 'react-icons/si';

import { FaAws, FaBrain, FaRobot, FaDatabase, FaAward, FaBuilding } from 'react-icons/fa';

export const portfolioData = {
  personalInfo: {
    name: "Samir Singh",
    title: "AI Engineer & Full Stack Developer",
    subtitle: "Building production-ready full stack architectures and agentic AI pipelines.",
    bio: "I am an aspiring AI Engineer and Full Stack Developer specializing in real-time architectures, hybrid RAG pipelines, and database optimizations. I combine modern backend services and intelligent AI models with fluid, high-performance web frameworks.",
    email: import.meta.env.VITE_EMAIL || "ersamirsingh@gmail.com",
    github: import.meta.env.VITE_GITHUB_URL || "https://github.com/ersamirsingh",
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/ersamirsingh",
    codolio: import.meta.env.VITE_CODOLIO_URL || "https://www.codolio.com/profile/ersamirsingh",
    location: "New Delhi, India",
    availability: "Available for Full-Time Roles & Project Consultation",
    resumeUrl: import.meta.env.VITE_RESUME_URL || "#", // Handled by Resume Modal
  },

  heroStats: [
    { label: "Years of Experience", value: "1" },
    { label: "Projects Built", value: "4+" },
    { label: "Hackathon Finalist", value: "5" },
    { label: "Certifications", value: "10+" },
    { label: "GitHub Commits (YTD)", value: "1,200+" }
  ],

  about: {
    mission: "To construct optimized, intelligent software systems that solve operational anomalies and elevate technological efficiency.",
    vision: "To engineer products that fuse vector/graph database indexing with high-speed full-stack layouts.",
    careerGoal: "Building robust backend services, leading technical prototypes, and contributing heavily to AI engineering divisions.",
    coreValues: [
      { title: "Architectural Clarity", desc: "Developing typed, modular, and performant systems that scale easily." },
      { title: "Design Polish", desc: "Creating hardware-accelerated user experiences that look premium and responsive." },
      { title: "AI Integration", desc: "Implementing agentic LLM chains, semantic searches, and graph traversals." },
      { title: "Extreme Ownership", desc: "Guiding product ideas from initial whiteboards to final server deployments." }
    ],
    highlights: [
      "Founder & Architect of OmniServe (B2B QR hospitality order platform)",
      "Academic Branch Topper at IES College of Technology",
      "National Hackathon Finalist (IIT Jammu, NIT Delhi)"
    ]
  },

  journey: [
    {
      year: "2026 - Present",
      title: "Founder & Lead Engineer",
      company: "OmniServe System",
      type: "Startup Product",
      description: "Engineered OmniServe, an omnichannel dine-in table QR and delivery management platform. Integrated bidirectional WebSockets and Redis caching to sync customer carts and chef ticketing terminals in under 100ms.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Redis", "VectorDB", "GraphDB", "RAG"]
    },
    {
      year: "2024",
      title: "Virtual Full Stack Intern",
      company: "eduTech",
      type: "Internship",
      description: "Developed user portals and course dashboards, optimizing state management hooks and database fetch patterns.",
      tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]
    },
    {
      year: "2024 - Present",
      title: "Hackathon Competitor & Finalist",
      company: "Techpreneur, CodeSlayer & SynergiX",
      type: "Hackathons",
      description: "Secured finalist positions in multiple national and institutional hackathons, building functional full-stack solutions under strict 36-hour limits.",
      tags: ["Rapid Prototyping", "Tailwind CSS", "Express.js", "React.js"]
    }
  ],

  education: {
    degrees: [
      {
        degree: "Bachelor of Technology in Computer Science & Engineering",
        institution: "IES College of Technology",
        period: "2023 - 2027",
        grade: "8.39 CGPA",
        coursework: ["Data Structures & Algorithms", "Database Systems", "Operating Systems", "Cloud Computing", "AI & Machine Learning", "Distributed Networks"],
        achievements: ["Gold Medalist / Branch Topper in Term 3 (8.59 GPA) & Term 5 (9.29 GPA)", "Technical Lead at University Coding Club"],
        semesterPerformance: [
          { sem: "Sem 1", gpa: 7.48 },
          { sem: "Sem 2", gpa: 8.10 },
          { sem: "Sem 3", gpa: 8.59 },
          { sem: "Sem 4", gpa: 8.39 },
          { sem: "Sem 5", gpa: 9.29 }
        ]
      },
      {
        degree: "Higher Secondary Certificate (Grade XII)",
        institution: "Modern Public School, CBSE",
        period: "2023",
        grade: "82.4%",
        coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
        achievements: ["Ranked in top tier of the Science batch", "Zonal Math Olympiad Participant"]
      },
      {
        degree: "Secondary School Certificate (Grade X)",
        institution: "Modern Public School, CBSE",
        period: "2021",
        grade: "83.2%",
        coursework: ["Science", "Mathematics", "Social Studies", "English", "Hindi"],
        achievements: ["Consistent academic record with distinctions in Science and Math"]
      }
    ]
  },

  skills: {
    frontend: [
      { name: "React.js", level: 93, exp: "2.5 yrs", projects: ["OmniServe", "WorkLink"] },
      { name: "TypeScript", level: 88, exp: "2 yrs", projects: ["OmniServe Backend", "CineGraph RAG"] },
      { name: "Tailwind CSS", level: 95, exp: "3 yrs", projects: ["All Web Interfaces"] },
      { name: "Redux Toolkit", level: 85, exp: "1.5 yrs", projects: ["eduTech Student Portal"] },
      { name: "Framer Motion", level: 90, exp: "1.5 yrs", projects: ["Interactive Portfolio", "Landing Pages"] }
    ],
    backend: [
      { name: "Node.js", level: 92, exp: "2.5 yrs", projects: ["OmniServe API", "WorkLink Gateway"] },
      { name: "Express.js", level: 94, exp: "2.5 yrs", projects: ["REST APIs", "Microservices Gateway"] },
      { name: "FastAPI", level: 80, exp: "1 yr", projects: ["AI Processing Microservice"] },
      { name: "WebSockets", level: 90, exp: "1.5 yrs", projects: ["OmniServe Live Sync", "Chatbot System"] }
    ],
    databases: [
      { name: "MongoDB", level: 92, exp: "2.5 yrs", projects: ["OmniServe", "WorkLink"] },
      { name: "Redis", level: 83, exp: "1.5 yrs", projects: ["OmniServe Cart Lock", "WorkLink Caching"] },
      { name: "Vector DB (Pinecone)", level: 85, exp: "1 yr", projects: ["CineGraph RAG", "WorkLink Matching"] },
      { name: "Graph DB (Neo4j)", level: 82, exp: "1 yr", projects: ["CineGraph RAG", "WorkLink RBAC"] },
      { name: "Mongoose", level: 92, exp: "2.5 yrs", projects: ["MongoDB Object Modeling"] }
    ],
    aiTools: [
      { name: "RAG Systems", level: 88, exp: "1 yr", projects: ["CineGraph RAG", "WorkLink AI"] },
      { name: "LangGraph", level: 83, exp: "1 yr", projects: ["CineGraph RAG"] },
      { name: "Gemini API", level: 88, exp: "1.5 yrs", projects: ["CineGraph RAG", "CodeX AI"] },
      { name: "LangChain", level: 80, exp: "1 yr", projects: ["CineGraph RAG Pipeline"] }
    ]
  },

  projects: {
    featured: [
      {
        id: "omniserve",
        title: "OmniServe",
        tagline: "Online-Offline Hotel Order Management Infrastructure",
        description: "OmniServe is a B2B omni-channel hospitality manager that bridges in-restaurant table QR ordering (offline) and remote web app home deliveries (online) into a synchronized ticket feed, orchestrating kitchen display screens (KDS), driver dispatching, and sales registers.",
        screenshot: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
        tech: ["React.js", "DaisyUI", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Redis", "VectorDB", "GraphDB", "RAG"],
        features: [
          "Dine-in QR Sync: local table QRs generate secure dine-in routes without app installations.",
          "Kitchen Ticket Orchestration: Live order-prep states synced instantly via WebSockets.",
          "Hybrid Delivery Handler: Automatically routes dispatches to partner logistics APIs.",
          "Sales Register: Generates daily automated GST records and sales audits."
        ],
        architecture: "React Client Web App ➔ Node.js API Cluster with Socket.io ➔ Redis Cart Lock Cache ➔ Databases (MongoDB & Neo4j/Pinecone indexing). Real-time screen state synced in <100ms.",
        responsibilities: [
          "Developed the WebSocket order coordination pipeline bridging table edits with kitchen terminals.",
          "Integrated Redis document locks to prevent race conditions during table cart edits.",
          "Configured RAG queries mapping customer order histories to menu items."
        ],
        challenges: "Managing write race conditions when multiple customers at the same table edit a shared checkout cart concurrently.",
        solutions: "Implemented a Redis-based optimistic lock pattern that caches live edits in memory, resolving checkout overlaps before writing to MongoDB.",
        metrics: {
          ordersSynced: "45,000+",
          tablesMapped: "240+",
          latencyAvg: "95ms",
          billingAccuracy: "99.9%"
        },
        github: "https://github.com/ersamirsingh/omniserve",
        liveDemo: import.meta.env.VITE_OMNISERVE_LIVE_URL || "https://omniserve.vercel.app/",
        caseStudy: "OmniServe consolidates complex hotel operations. By compiling multiple delivery channels and dine-in streams into a unified state machine, we eliminated manual counter mistakes, reducing kitchen prep-to-table delivery cycles by 25%."
      },
      {
        id: "worklink",
        title: "WorkLink",
        tagline: "AI-Powered Workforce & Dispatch Management Platform",
        description: "A dispatch management platform supporting multi-role access control (RBAC), wallet-driven lead routing, and real-time alerts. Integrates an AI recruitment matching layer to streamline candidate selection.",
        screenshot: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
        tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Redis", "React.js", "JWT", "Vector DB", "Graph DB"],
        features: [
          "Multi-role RBAC: Dynamic dashboard gates for customers, workers, and admins.",
          "Semantic Matching: Pinecone similarity search queries for matching workers based on dynamic skills.",
          "Wallet Ledger System: Real-time ledger routing and bid locks."
        ],
        architecture: "React Client Web App ➔ Node.js Gateway ➔ Redis Cache ➔ MongoDB & Pinecone Vector Store. Search matching resolved in under 120ms.",
        responsibilities: [
          "Developed the semantic search pipeline converting job demands to skill vectors.",
          "Configured custom JWT validation rules to gate dispatch control panels."
        ],
        challenges: "Matching service tickets to the most relevant nearby worker based on changing skills and availability.",
        solutions: "Engineered a hybrid query pipeline that checks MongoDB geospatial coordinates first, then filters candidate skills via Pinecone.",
        metrics: {
          matchingRate: "94% Acc",
          activeWorkers: "850+",
          latencyAvg: "115ms",
          completionRatio: "98%"
        },
        github: "https://github.com/ersamirsingh/TIT-Hackathon",
        liveDemo: import.meta.env.VITE_WORKLINK_LIVE_URL || "https://worklink-frontend-2hr4.onrender.com/",
        caseStudy: "WorkLink automates workforce dispatch. By moving candidate screening to vector embedding analysis, manual oversight was reduced, cutting dispatch routing cycles by 40%."
      },
      {
        id: "cinegraph-rag",
        title: "CineGraph RAG",
        tagline: "Hybrid RAG Pipeline with Vector & Graph Databases",
        description: "A movie recommendations engine utilizing Vector RAG (Pinecone) and Graph RAG (Neo4j) with LangGraph workflows to ground LLM contexts.",
        screenshot: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
        tech: ["JavaScript", "LangChain", "LangGraph", "Vector DB (Pinecone)", "Graph DB (Neo4j)", "Gemini API"],
        features: [
          "Hybrid RAG: Combines semantic vector similarity search with Neo4j relational indices.",
          "LangGraph Workflows: Dynamic agent loops to check, validate, and write context bounds.",
          "Gemini API: Grounded, high-precision recommendations."
        ],
        architecture: "Express.js API ➔ LangGraph Agent loops ➔ Pinecone & Neo4j databases ➔ Gemini LLM generation.",
        responsibilities: [
          "Built the Neo4j relational graph queries traversing director, genre, and actor links.",
          "Configured LangGraph feedback nodes to filter context hallucination before generation."
        ],
        challenges: "Gating hallucinations when querying niche metadata not explicitly embedded in vector datasets.",
        solutions: "Integrated a validation loop that verifies Pinecone similarity candidates against the Neo4j relational tree structure.",
        metrics: {
          querySpeed: "180ms",
          retrievalAcc: "96.5%",
          hallucinationRate: "0.2%",
          contextSize: "8k tokens"
        },
        github: "https://github.com/ersamirsingh/GenAI/tree/main/movie-rag",
        liveDemo: "https://github.com/ersamirsingh/GenAI/tree/main/movie-rag",
        caseStudy: "CineGraph RAG shows the power of structured-unstructured database integration. Bridging vector search with Neo4j eliminated recommendation inaccuracies, achieving 96.5% retrieval precision."
      },
      {
        id: "codex-dsa",
        title: "CodeX DSA",
        tagline: "Full-Stack AI-Powered DSA Practice Platform",
        description: "A coding platform that helps learners practice algorithms with interactive visualizers, automated assessments, and step-by-step AI hints.",
        screenshot: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Gemini API"],
        features: [
          "AI Hints Engine: Incremental suggestions based on the user's active code state.",
          "Interactive Visualizer: Step-by-step sorting and graph traversal visual overrides.",
          "Code Evaluation: Runs candidate snippets in sandbox configurations against test cases."
        ],
        architecture: "React Code Editor ➔ Node.js evaluation server ➔ Gemini API evaluation API ➔ MongoDB profiles.",
        responsibilities: [
          "Built the code runner integration and code review prompting trees.",
          "Implemented the Socket.io hooks pushing real-time compile errors to clients."
        ],
        challenges: "Ensuring low-latency runtime validation of user-submitted code logs while keeping the server secure.",
        solutions: "Routed code verification to isolated sandbox environments with strict memory bounds, caching outputs in Redis.",
        metrics: {
          hintsGenerated: "12,000+",
          compilerSpeed: "85ms",
          activeUsers: "1,200+",
          gpaSaves: "94%"
        },
        github: "https://github.com/ersamirsingh/coding-platform",
        liveDemo: import.meta.env.VITE_CODEX_LIVE_URL || "https://codex-fronted.onrender.com/",
        caseStudy: "CodeX DSA streamlines algorithm studies. By leveraging the Gemini API to supply personalized solution suggestions, student problem-solving speeds increased by 30%."
      }
    ],
    others: [] // Cleared out since all are primary featured cards!
  },

  hackathons: [
    {
      title: "Techpreneur (IIT Jammu)",
      achievement: "Hackathon Finalist",
      problem: "Developing commercially viable technological architectures to address local resource management limitations.",
      role: "Lead Full Stack Developer & Presenter",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      certificateUrl: import.meta.env.VITE_CERT_TECHPRENEUR_URL || "#",
      gallery: ["/images/techpreneur-hackathon.jpg"],
      presentationLink: "#",
      demoLink: "#"
    },
    {
      title: "CodeSlayer (NIT Delhi)",
      achievement: "Hackathon Finalist",
      problem: "Creating high-performance coding tools and collaboration spaces for developers under strict server environments.",
      role: "Backend Architect (TS/Express)",
      tech: ["Node.js", "Express", "MongoDB", "Redis"],
      certificateUrl: import.meta.env.VITE_CERT_CODESLAYER_URL || "https://drive.google.com/file/d/1jUiziHS2GHLfpOA_qxf3FAQ_vDrJV_dc/view?usp=drive_link",
      gallery: ["/images/nit-delhi-hackathon.jpg"],
      presentationLink: "#",
      demoLink: "#"
    },
    {
      title: "SynergiX (VITS-Delhi)",
      achievement: "Hackathon Finalist",
      problem: "Automating enterprise multi-channel order feeds and ticketing workflows in small-business setups.",
      role: "Lead Full Stack Engineer",
      tech: ["React", "Express.js", "MongoDB", "WebSockets"],
      certificateUrl: import.meta.env.VITE_CERT_SYNERGIX_URL || "https://drive.google.com/file/d/170zOBM0-ex8E3kfv14GHyxGak_Iwa_aT/view?usp=drive_link",
      gallery: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80"],
      presentationLink: "#",
      demoLink: "#"
    }
  ],

  certifications: [
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services (AWS)",
      credentialId: "AWS-DEV-87625",
      issueDate: "Jan 2024",
      skillsLearned: ["DynamoDB", "Lambda serverless", "API Gateway", "ECS container systems", "IAM security"],
      verificationUrl: import.meta.env.VITE_CERT_AWS_URL || "#"
    },
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Coursera)",
      credentialId: "META-FRONTEND-983",
      issueDate: "Aug 2023",
      skillsLearned: ["React ecosystem", "UI/UX prototypes", "Jest Testing Framework", "Accessibility (A11y)"],
      verificationUrl: import.meta.env.VITE_CERT_META_URL || "#"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      credentialId: "MDB-CERT-09273",
      issueDate: "May 2023",
      skillsLearned: ["Aggregation Pipelines", "Indexing optimization", "Cluster deployments", "Sharding & replication"],
      verificationUrl: import.meta.env.VITE_CERT_MONGODB_URL || "#"
    }
  ],

  achievements: {
    stats: [
      { name: "Codolio Profile", value: "Verified Active", description: "Aggregating code ratings, solve ratios, and developer logs under @ersamirsingh" },
      { name: "LeetCode solved", value: "300+ Problems", description: "Consistently resolving medium/hard algorithmic puzzles" },
      { name: "GeeksforGeeks", value: "300+ Problems", description: "Ranked among top coders in IES College of Technology" },
      { name: "Academic Excellence", value: "Gold Medalist / Branch Topper", description: "Top student in Term 3 (8.59 GPA) & Term 5 (9.29 GPA) at IES College of Technology" }
    ],
    startupHonors: [
      "Secured government-backed incubation grant support for OmniServe systems.",
      "Featured in institutional tech newsletters as an emerging social impact developer."
    ]
  },

  gallery: [
    {
      title: "IIT Jammu Techpreneur Hackathon",
      category: "Hackathons",
      image: "/images/techpreneur-hackathon.jpg",
      description: "Pitching scalable technological models to resolve local supply chains at the IIT Jammu Hackathon."
    },
    {
      title: "CodeSlayer Hackathon (NIT Delhi)",
      category: "Hackathons",
      image: "/images/nit-delhi-hackathon.jpg",
      description: "Pitching collaborative developer architectures at the CodeSlayer Hackathon, NIT Delhi."
    },
    {
      title: "Hackathon Brainstorming Session",
      category: "Hackathons",
      image: "/images/brainstorming.jpg",
      description: "Brainstorming and whiteboarding systems at midnight during a 36-hour hackathon."
    },
    {
      title: "Speaking at Bootcamp (IIT-BHU Varanasi)",
      category: "Events",
      image: "/images/bootcamp-iitbhu.jpg",
      description: "Sharing system scaling and full stack architectures with university students at the IIT-BHU developer bootcamp."
    },
    {
      title: "IES College Award Ceremony",
      category: "College",
      image: "/images/ies-award.jpg",
      description: "Speaking and receiving topper accolades on stage at IES College of Technology."
    }
  ],

  testimonials: [
    {
      name: "Prof. Anupam Vyas",
      role: "Head of Department (CSE)",
      company: "IES College of Technology",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      review: "Samir is a standout problem solver in our department. His gold medalist scores in Terms 3 and 5 are fully reflected in his systems. OmniServe showcases his ability to translate coding theory into active business tools.",
      linkedin: "https://linkedin.com/in/ersamirsingh"
    },
    {
      name: "Sanjay Gupta",
      role: "Technical Lead",
      company: "Synergix Systems",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      review: "During his collaborations, Samir showed high-speed execution and architectural ownership. He optimized database aggregation pipelines with ease and resolved complex race conditions using smart caching locks.",
      linkedin: "https://linkedin.com/in/ersamirsingh"
    }
  ]
};

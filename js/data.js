/**
 * SNR NEST — Centralized Data Source
 * Powers Job Board, Manpower Sourcing, Website Packages, Internships, and Training Catalog
 */

const SNR_DATA = {
  // Brand Info
  brand: {
    name: "SNR NEST",
    tagline: "Building Careers. Empowering Businesses. Creating Opportunities.",
    eyebrow: "TALENT • TECHNOLOGY • CAREERS",
    description: "SNR NEST is a premier multi-service organization delivering high-impact BPO hiring, specialized manpower sourcing, cutting-edge website solutions, practical internships, and end-to-end training & placement services.",
    email: "contact@snrnest.com",
    phone: "+91 80 4123 8899 / +91 91234 56789",
    locations: [
      {
        city: "Bangalore",
        isHQ: true,
        address: "SNR Tower, 4th Floor, Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103",
        phone: "+91 80 4123 8899",
        email: "blr@snrnest.com"
      },
      {
        city: "Hyderabad",
        isHQ: false,
        address: "Cyber Gateway, Hitech City, Madhapur, Hyderabad, Telangana 500081",
        phone: "+91 40 6789 2244",
        email: "hyd@snrnest.com"
      }
    ],
    stats: {
      candidates: "500+",
      hiringRequirements: "100+",
      studentsTrained: "50+",
      websitesDelivered: "25+",
      partners: "50+"
    }
  },

  // Client Marquee (Tata Elxsi, Concentrix, KreditBee, Stable Money, Axis Bank)
  clients: [
    { name: "Tata Elxsi", logoText: "TATA ELXSI", category: "Technology & Engineering" },
    { name: "Concentrix", logoText: "CONCENTRIX", category: "Customer Experience & BPO" },
    { name: "KreditBee", logoText: "KreditBee", category: "FinTech Lending" },
    { name: "Stable Money", logoText: "stable money", category: "WealthTech & Banking" },
    { name: "Axis Bank", logoText: "AXIS BANK", category: "Banking & Financial Services" },
    { name: "Infosys BPM", logoText: "Infosys BPM", category: "Business Process Management" },
    { name: "Wipro Gallagher", logoText: "WIPRO", category: "Global Enterprise Services" },
    { name: "Teleperformance", logoText: "Teleperformance", category: "Digital Business Services" }
  ],

  // 1. BPO Hiring Vertical
  bpo: {
    title: "BPO Hiring",
    subtitle: "Find the right opportunity. Start your career.",
    description: "We connect candidates with premier BPO & BPM organizations for voice, non-voice, customer support, and strategic operations roles.",
    roleChips: ["Voice Process", "Non-Voice Process", "Customer Support", "Back Office", "Telecalling", "Operations", "Team Lead", "Quality Analyst"],
    hiringProcess: [
      { step: "01", title: "Registration", desc: "Submit your profile and choose your preferred process (Voice/Non-Voice)." },
      { step: "02", title: "Screening", desc: "Initial evaluation of communication, language fluency, and aptitude." },
      { step: "03", title: "Interview", desc: "Direct rounds with top partner corporate interview panels." },
      { step: "04", title: "Selection", desc: "Fast-tracked offer letter rollout with transparent salary breakdown." },
      { step: "05", title: "Joining", desc: "Smooth onboarding, corporate orientation, and day-1 induction support." }
    ],
    jobs: [
      {
        id: "bpo-001",
        title: "Senior Voice Process Specialist",
        company: "Concentrix",
        clientLogo: "CONCENTRIX",
        location: "Bangalore (Bellandur)",
        type: "Full-Time",
        mode: "On-site / Hybrid",
        processType: "Voice",
        experience: "0 - 2 Years",
        salary: "₹3.2 - ₹4.8 LPA + Incentives",
        skills: ["English Fluency", "Active Listening", "Customer Handling", "CRM Tools"],
        description: "Engage with international clients to resolve queries, provide first-call resolution, and uphold world-class CSAT benchmarks.",
        openings: 18,
        urgent: true
      },
      {
        id: "bpo-002",
        title: "Non-Voice / Chat Support Executive",
        company: "KreditBee",
        clientLogo: "KreditBee",
        location: "Bangalore (HSR Layout)",
        type: "Full-Time",
        mode: "Day Shift",
        processType: "Non-Voice",
        experience: "Freshers / 0 - 1 Year",
        salary: "₹2.8 - ₹3.8 LPA",
        skills: ["Typing Speed (35+ WPM)", "Written English", "Email Etiquette", "Problem Solving"],
        description: "Handle inbound digital chats and email tickets assisting users with loan verification, documentation, and app assistance.",
        openings: 25,
        urgent: false
      },
      {
        id: "bpo-003",
        title: "FinTech Customer Relationship Officer",
        company: "Stable Money",
        clientLogo: "stable money",
        location: "Bangalore / Hyderabad",
        type: "Full-Time",
        mode: "Hybrid",
        processType: "Voice",
        experience: "1 - 3 Years",
        salary: "₹4.0 - ₹5.5 LPA + Performance Bonus",
        skills: ["Banking Basics", "Relationship Management", "Hindi / English Fluency", "Investment Knowledge"],
        description: "Guide premium wealth clients through fixed-income product setups, KYC verifications, and investment inquiries.",
        openings: 12,
        urgent: true
      },
      {
        id: "bpo-004",
        title: "Operations & Back Office Analyst",
        company: "Tata Elxsi",
        clientLogo: "TATA ELXSI",
        location: "Bangalore (Hoodi)",
        type: "Full-Time",
        mode: "On-site",
        processType: "Back Office",
        experience: "0 - 3 Years",
        salary: "₹3.5 - ₹4.5 LPA",
        skills: ["Advanced Excel", "Data Reconciliation", "Documentation", "MIS Reporting"],
        description: "Manage enterprise document workflows, internal auditing validations, and operational compliance reports.",
        openings: 8,
        urgent: false
      },
      {
        id: "bpo-005",
        title: "Banking Customer Support Representative",
        company: "Axis Bank Partner Group",
        clientLogo: "AXIS BANK",
        location: "Hyderabad (Gachibowli)",
        type: "Full-Time",
        mode: "Rotational Shifts",
        processType: "Voice",
        experience: "Freshers Welcome",
        salary: "₹2.6 - ₹3.6 LPA + Night Shift Allowances",
        skills: ["Customer Empathy", "Multi-lingual (English/Hindi/Telugu)", "Conflict Resolution"],
        description: "Handle incoming customer banking queries regarding cards, transactions, and account management with prompt solutions.",
        openings: 30,
        urgent: true
      },
      {
        id: "bpo-006",
        title: "Telecalling & Sales Conversion Specialist",
        company: "Global Business Services",
        clientLogo: "SNR PARTNER",
        location: "Bangalore (Koramangala)",
        type: "Full-Time",
        mode: "Day Shift",
        processType: "Telecalling",
        experience: "0 - 2 Years",
        salary: "₹2.4 - ₹3.5 LPA + High Incentives",
        skills: ["Persuasive Communication", "Lead Follow-up", "Target Driven", "CRM Software"],
        description: "Connect with pre-qualified inbound leads, explain service features, and drive successful customer onboarding.",
        openings: 15,
        urgent: false
      }
    ]
  },

  // 2. Manpower Sourcing Vertical
  manpower: {
    title: "Manpower Sourcing",
    subtitle: "The right workforce for the right business.",
    description: "We help enterprises, logistics leaders, retail chains, and dark store operators find, screen, and deploy dependable blue-collar and mid-management personnel.",
    solutions: [
      {
        title: "Picking & Packing Operations",
        badge: "Warehouse & Fulfillment",
        desc: "Skilled warehouse associates trained in barcode scanning, fast SKU picking, fragile item packaging, and dispatch sorting.",
        skills: ["Order Picking", "Barcode Scanners", "Inventory Auditing", "Safety Standards"]
      },
      {
        title: "Dark Store Manager",
        badge: "Quick Commerce (Q-Commerce)",
        desc: "End-to-end management of micro-fulfillment hubs, stock replenishment, rider turnaround times, and shift rosters.",
        skills: ["Store Operations", "Inventory SLA", "Team Leadership", "Loss Prevention"]
      },
      {
        title: "Shift In-Charge / Supervisor",
        badge: "Floor Operations",
        desc: "Floor leadership managing hourly dispatch targets, attendance, worker safety, and real-time operational bottlenecks.",
        skills: ["Shift Planning", "Target SLA Monitoring", "Conflict Handling", "Process Optimization"]
      },
      {
        title: "Management Team Lead",
        badge: "Operational Leadership",
        desc: "High-caliber leads driving cross-functional coordination between supply chain, customer support, and ground fleet.",
        skills: ["KPI Tracking", "Escalation Matrix", "MIS & Reporting", "Vendor Coordination"]
      },
      {
        title: "Logistics & Fleet Coordinators",
        badge: "Supply Chain",
        desc: "Route planners, driver dispatchers, and last-mile delivery coordinators ensuring on-time delivery metrics.",
        skills: ["Route Optimization", "Driver Management", "GPS Tracking", "Proof of Delivery"]
      },
      {
        title: "Retail & Front-End Staff",
        badge: "Modern Trade & Showrooms",
        desc: "Polished customer-facing associates, cashiers, shelf merchandisers, and store greeters.",
        skills: ["POS Billing", "Visual Merchandising", "Customer Assistance", "Cash Reconciliation"]
      }
    ],
    targetIndustries: [
      { name: "Quick Commerce & Dark Stores", icon: "zap", desc: "Instant grocery & 10-minute delivery hubs needing rapid shift scaling." },
      { name: "E-Commerce & Warehouses", icon: "box", desc: "Large fulfillment centers requiring 100+ vetted pickers, packers, and leads." },
      { name: "Logistics & Supply Chain", icon: "truck", desc: "3PL & 4PL logistics providers needing dock supervisors and freight handlers." },
      { name: "Retail & Supermarket Chains", icon: "shopping-bag", desc: "Hypermarkets and brand outlets needing store staff and floor managers." },
      { name: "BPO & Corporate Facilities", icon: "building", desc: "Enterprise office campuses needing support staff and operational personnel." },
      { name: "SMEs & High-Growth Startups", icon: "trending-up", desc: "Fast-moving businesses scaling operational headcounts with minimal friction." }
    ],
    workflow: [
      { step: "01", title: "Requirement", desc: "Employer shares headcounts, job roles, shift hours, and timeline." },
      { step: "02", title: "Sourcing", desc: "Deep talent pooling across verified local networks and pre-vetted databases." },
      { step: "03", title: "Screening", desc: "Background verification, identity KYC, and basic skill assessment." },
      { step: "04", title: "Selection", desc: "Direct client interviews or SNR-managed batch shortlist sign-off." },
      { step: "05", title: "Deployment", desc: "Uniform issue, shift onboarding, and compliance deployment on day 1." }
    ]
  },

  // 3. Website Solutions Vertical
  website: {
    title: "Website Solutions",
    subtitle: "Turn your business into a digital experience.",
    description: "We design and engineer bespoke, high-conversion, ultra-responsive digital websites and web platforms that elevate your brand and drive business growth.",
    services: [
      {
        id: "ws-1",
        title: "High-Impact Business Websites",
        desc: "Custom corporate web platforms engineered with modern UI/UX, responsive fluid layouts, and lightning-fast load times.",
        deliverables: ["Custom UI/UX Design", "Mobile Responsive", "Lead Capture Forms", "Analytics & SEO"]
      },
      {
        id: "ws-2",
        title: "Conversion-Focused Landing Pages",
        desc: "Sleek, high-converting single-page experiences built to maximize ad ROI, product launches, and lead generation campaigns.",
        deliverables: ["A/B Ready Sections", "Micro-Interactions", "Instant Load Speed", "CRM Integration"]
      },
      {
        id: "ws-3",
        title: "Corporate & Enterprise Portals",
        desc: "Robust multi-page websites featuring career portals, investor pages, interactive service catalogs, and CMS integrations.",
        deliverables: ["Dynamic CMS", "Multi-Language Support", "Role-based Access", "SOC2 Compliant Code"]
      },
      {
        id: "ws-4",
        title: "E-Commerce & Catalog Websites",
        desc: "Modern digital storefronts with seamless checkout flows, inventory management integrations, and secure payment gateways.",
        deliverables: ["Payment Gateways", "Product Filter Matrix", "Cart Optimization", "Order Management"]
      },
      {
        id: "ws-5",
        title: "Website Redesign & Modernization",
        desc: "Transform outdated legacy websites into modern, sleek, high-performing web platforms with refreshed brand identity.",
        deliverables: ["Architecture Audit", "Brand Refresh", "Performance Boost", "SEO Migration"]
      },
      {
        id: "ws-6",
        title: "Full Website Maintenance & SEO",
        desc: "Continuous technical maintenance, security patches, uptime monitoring, monthly speed audits, and organic search ranking boosts.",
        deliverables: ["24/7 Uptime Monitor", "Schema Markup", "Technical SEO", "Monthly Updates"]
      }
    ],
    techStack: [
      { name: "Next.js", category: "Framework", tag: "Enterprise React" },
      { name: "React", category: "UI Library", tag: "Dynamic Interfaces" },
      { name: "TypeScript", category: "Language", tag: "Type-Safe Robustness" },
      { name: "Tailwind CSS", category: "Styling", tag: "Modern Design Tokens" },
      { name: "Node.js", category: "Backend", tag: "High-Performance APIs" },
      { name: "PostgreSQL", category: "Database", tag: "Scalable Data" }
    ],
    process: [
      { step: "01", title: "Discover", desc: "Understanding brand objectives, target audience personas, and technical scope." },
      { step: "02", title: "Design", desc: "Crafting wireframes, design systems, and high-fidelity interactive Figma prototypes." },
      { step: "03", title: "Develop", desc: "Writing clean, semantic, responsive, and performance-optimized code." },
      { step: "04", title: "Launch", desc: "Deploying to ultra-fast CDN edge servers with comprehensive SEO and analytics." }
    ]
  },

  // 4. Internship Vertical
  internship: {
    title: "Internship Programs",
    subtitle: "Learn by building. Grow through experience.",
    description: "Industry-oriented corporate and operational internship programs designed to help students, fresh graduates, and career switchers acquire hands-on project experience.",
    journey: [
      { step: "01", title: "Internship", desc: "Immerse in real enterprise workflows under senior mentor guidance." },
      { step: "02", title: "Live Projects", desc: "Deliver hands-on project deliverables with tangible business impact." },
      { step: "03", title: "Certificate", desc: "Earn verified SNR NEST credentials and formal letters of recommendation." },
      { step: "04", title: "Career Launch", desc: "Direct transition into full-time hiring pipelines or partner placements." }
    ],
    tracks: [
      {
        id: "int-01",
        title: "HR & Recruitment Intern",
        domain: "Human Resources",
        duration: "3 - 6 Months",
        mode: "Hybrid / Bangalore Office",
        eligibility: "BBA / MBA / Any Graduate (2023 - 2026)",
        skills: ["Resume Screening", "Job Portals (Naukri/LinkedIn)", "Candidate Coordination", "HR Analytics"],
        projects: "End-to-end recruitment drives for 100+ enterprise candidate cohorts and interview schedule coordination.",
        certificate: "Verified Experience Certificate & Letter of Recommendation",
        featured: true
      },
      {
        id: "int-02",
        title: "Talent Acquisition Specialist Intern",
        domain: "Talent Acquisition",
        duration: "3 - 6 Months",
        mode: "On-site / Bangalore",
        eligibility: "Graduates / Post Graduates with strong communication",
        skills: ["Talent Sourcing", "Boolean Search", "Headhunting", "Interview Debriefs"],
        projects: "Sourcing high-volume tech and non-tech talent pipelines for Fortune 500 partner companies.",
        certificate: "Industry Credential + Performance Bonus",
        featured: true
      },
      {
        id: "int-03",
        title: "Manpower Sourcing Operations Intern",
        domain: "Operations & Staffing",
        duration: "2 - 4 Months",
        mode: "Hybrid",
        eligibility: "Any Degree / Diploma with interest in supply chain & ops",
        skills: ["Vendor Management", "Ground Sourcing", "Roster Management", "KYC Verification"],
        projects: "Managing on-ground workforce mobilization for dark store and retail fulfillment centers.",
        certificate: "Operations Leadership Certificate",
        featured: false
      },
      {
        id: "int-04",
        title: "Staffing & Deployment Intern",
        domain: "Operations & Staffing",
        duration: "3 Months",
        mode: "Bangalore / Hyderabad",
        eligibility: "Any Graduate with analytical & organizational skills",
        skills: ["Shift Planning", "Attendance Tracking", "Deployment Logistics", "MIS Dashboards"],
        projects: "Coordinating multi-shift manpower deployment and compliance paperwork for e-commerce hubs.",
        certificate: "Verified Internship Certificate",
        featured: false
      },
      {
        id: "int-05",
        title: "BPO Hiring Support Intern",
        domain: "Customer Operations",
        duration: "3 Months",
        mode: "On-site",
        eligibility: "Graduates with fluent English & active communication",
        skills: ["Voice Assessment", "Mock Telephonic Rounds", "CRM Pipeline", "Candidate Follow-up"],
        projects: "Facilitating candidate pre-screening and mock voice drills for top BPO clients.",
        certificate: "BPO Recruitment Specialist Certificate",
        featured: true
      },
      {
        id: "int-06",
        title: "Workforce Coordination Intern",
        domain: "Operations & Staffing",
        duration: "3 - 6 Months",
        mode: "Bangalore",
        eligibility: "B.Com / BBA / B.Sc / BA",
        skills: ["Spreadsheets & MIS", "Field Communication", "Problem Escalation", "Resource Allocation"],
        projects: "Daily workforce availability mapping and incident reporting for partner dark stores.",
        certificate: "Experience Letter + Stipend Based",
        featured: false
      },
      {
        id: "int-07",
        title: "Digital Marketing & Branding Intern",
        domain: "Marketing & Growth",
        duration: "3 Months",
        mode: "Hybrid",
        eligibility: "Students interested in Social Media, SEO, and Content",
        skills: ["Canva / Figma Basics", "LinkedIn Organic Growth", "Content Writing", "Campaign Analytics"],
        projects: "Designing recruitment social banners, employer branding campaigns, and student engagement posts.",
        certificate: "Digital Growth Internship Certificate",
        featured: true
      },
      {
        id: "int-08",
        title: "Business Operations & Strategy Intern",
        domain: "Business Operations",
        duration: "3 - 6 Months",
        mode: "Bangalore Office",
        eligibility: "BBA / MBA / Engineering Grads",
        skills: ["Process Flow Mapping", "Client Presentations", "Data Synthesis", "Operational KPIs"],
        projects: "Assisting SNR NEST leadership in scaling new service verticals and optimizing operational bottlenecks.",
        certificate: "Leadership Recommendation & Pre-Placement Offer (PPO) Track",
        featured: true
      }
    ]
  },

  // 5. Training & Placement Vertical
  training: {
    title: "Training & Placement",
    subtitle: "Learn the skills. Become industry-ready. Get placed.",
    description: "We combine structured curriculum training with real-world hands-on project labs, aptitude coaching, mock interviews, and dedicated placement assistance.",
    stages: [
      {
        num: "01",
        title: "Technical Training",
        subtitle: "Learn Industry Skills",
        desc: "Master high-demand tech and operational disciplines through live mentor-led sessions, practical code labs, and capstone project builds.",
        items: ["Live Expert Lectures", "Hands-on Code Projects", "Git & Portfolio Building", "Industry Best Practices"]
      },
      {
        num: "02",
        title: "Career Preparation",
        subtitle: "Bridge the Industry Gap",
        desc: "Transform into a confident professional with comprehensive soft-skill, communication, aptitude, and mock technical interview drills.",
        items: ["ATS-Optimized Resume Crafting", "1-on-1 Mock Interviews", "Communication & Accent Coaching", "Aptitude & Logical Drills"]
      },
      {
        num: "03",
        title: "Placement Support",
        subtitle: "Land Your Dream Role",
        desc: "Gain direct access to exclusive hiring drives, top MNC partner interviews, and round-the-clock placement assistance until you get placed.",
        items: ["Direct Interview Referrals", "50+ Corporate Partners", "Salary Negotiation Guidance", "Day-1 Joining Assistance"]
      }
    ],
    courses: [
      {
        id: "course-1",
        name: "Full Stack Web Development",
        category: "Software Development",
        duration: "16 Weeks",
        mode: "Live Interactive (Online / Classroom)",
        level: "Beginner to Advanced",
        skills: ["HTML5", "Tailwind CSS", "JavaScript ES6+", "React", "Node.js", "Express", "MongoDB", "Git"],
        projects: "3 Full Stack Real-world Apps (E-Commerce Platform, Job Board System, SaaS Dashboard)",
        certification: "SNR NEST Certified Full Stack Engineer",
        placementSupport: "100% Placement Assistance & Unlimited Interview Rounds",
        featured: true
      },
      {
        id: "course-2",
        name: "AI & Machine Learning Foundations",
        category: "Data Science & AI",
        duration: "18 Weeks",
        mode: "Live Interactive Hybrid",
        level: "Intermediate",
        skills: ["Python", "NumPy & Pandas", "Scikit-Learn", "TensorFlow / PyTorch", "Model Deployment", "Prompt Engineering"],
        projects: "Predictive Analytics Model, NLP Sentiment Engine, Computer Vision Object Detector",
        certification: "Certified AI & ML Practitioner",
        placementSupport: "Dedicated Tech Placement Pipeline with Partner Startups",
        featured: true
      },
      {
        id: "course-3",
        name: "Python & Data Analytics Mastery",
        category: "Data Analytics",
        duration: "12 Weeks",
        mode: "Online / Weekend Batches",
        level: "All Levels Welcome",
        skills: ["Python Programming", "SQL Queries", "Power BI / Tableau", "Excel Mastery", "Data Storytelling"],
        projects: "Financial Health Dashboard, Customer Retention Analysis, Retail Sales Predictor",
        certification: "Certified Data Analytics Specialist",
        placementSupport: "Corporate Analyst Hiring Referrals",
        featured: true
      },
      {
        id: "course-4",
        name: "BPO Leadership & Operations Specialist",
        category: "Operations & Management",
        duration: "6 Weeks",
        mode: "Classroom (Bangalore / Hyderabad)",
        level: "Job-Ready Fast-Track",
        skills: ["Voice Modulation & Accent", "Customer Psychology", "SLA & CSAT Metrics", "Email & Chat Etiquette", "CRM Workflows"],
        projects: "Live Simulated Customer Escalation Drills & Multi-channel Case Handling",
        certification: "Certified Customer Experience Professional",
        placementSupport: "Direct Placement Drive with Top BPO Partners (Concentrix, KreditBee, etc.)",
        featured: false
      },
      {
        id: "course-5",
        name: "Software Testing & QA Automation",
        category: "Software Development",
        duration: "10 Weeks",
        mode: "Live Online",
        level: "Beginner to Intermediate",
        skills: ["Manual Testing Concepts", "Selenium WebDriver", "Java / Python QA", "Postman API Testing", "Jira & Agile"],
        projects: "End-to-end Test Automation Suite for Banking & E-Commerce Web Apps",
        certification: "Certified QA Automation Engineer",
        placementSupport: "Exclusive QA Hiring Drives",
        featured: false
      },
      {
        id: "course-6",
        name: "Digital Marketing & Brand Growth",
        category: "Digital Skills",
        duration: "8 Weeks",
        mode: "Hybrid",
        level: "Beginner Friendly",
        skills: ["SEO Mastery", "Google Ads", "Meta Advertising", "Content Strategy", "Google Analytics 4"],
        projects: "Live Ad Campaign Execution with Real Budget Allocation",
        certification: "Certified Digital Growth Strategist",
        placementSupport: "Agency & Corporate Marketing Placements",
        featured: false
      }
    ]
  },

  // "Coming Soon / We Are Expanding" Section (Highlighted prominently in Wireframe 2)
  expanding: [
    {
      title: "Cloud Infrastructure & DevOps Academy",
      timeline: "Q3 Launch",
      category: "Cloud Engineering",
      desc: "Specialized enterprise training on AWS, Azure, Docker, Kubernetes, CI/CD pipelines, and Infrastructure as Code.",
      badge: "Expanding Domain"
    },
    {
      title: "Generative AI & Enterprise Automation",
      timeline: "Q4 Launch",
      category: "AI & Innovation",
      desc: "Autonomous workflow agents, LLM fine-tuning, retrieval augmented generation (RAG), and business process automation.",
      badge: "Cutting-Edge"
    },
    {
      title: "FinTech Risk & Banking Compliance",
      timeline: "Q4 Launch",
      category: "Banking & Operations",
      desc: "AML, KYC verification, credit underwriting operations, and fraud detection training pipelines for leading FinTechs.",
      badge: "Industry Focus"
    },
    {
      title: "Global Offshore Staffing Hub",
      timeline: "Next Phase",
      category: "International Expansion",
      desc: "Connecting Indian talent with international tech and support requirements across North America, UK, and Middle East.",
      badge: "Global Reach"
    }
  ],

  // 6 Why SNR NEST Advantages
  advantages: [
    {
      title: "Industry Connections",
      desc: "Deep-rooted hiring and project partnerships with leading enterprise organizations, MNCs, fast-growing FinTechs, and tech giants.",
      icon: "network"
    },
    {
      title: "Practical Experience",
      desc: "Real-world project simulations, dark store floor exposure, live client codebases, and verified hands-on learning.",
      icon: "briefcase"
    },
    {
      title: "Career Support",
      desc: "Comprehensive guidance from day one: ATS resume optimization, 1-on-1 mock interviews, confidence drills, and continuous mentoring.",
      icon: "compass"
    },
    {
      title: "Business-Focused Solutions",
      desc: "Tailored workforce staffing, rapid blue-collar mobilization, and conversion-engineered digital websites designed to hit business ROI.",
      icon: "target"
    },
    {
      title: "Technology Expertise",
      desc: "Modern digital engineering stack (React, Next.js, TypeScript, Cloud) delivering future-proof, lightning-fast digital assets.",
      icon: "cpu"
    },
    {
      title: "End-to-End Support",
      desc: "From initial consultation or enrollment to final deployment, launch, and post-placement tracking — we stand by your side.",
      icon: "shield-check"
    }
  ]
};

// Expose globally
window.SNR_DATA = SNR_DATA;

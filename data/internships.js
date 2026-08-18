/* =====================================================================
   SNR NEST — internships.js
   Internship + manpower data (preserved from original project)
   ===================================================================== */
window.SNR_DATA = window.SNR_DATA || {};

window.SNR_DATA.internship = {
  title: "Internship Programs",
  subtitle: "Learn by building. Grow through experience.",
  description: "Industry-oriented corporate and operational internship programs designed to help students, fresh graduates, and career switchers acquire hands-on project experience.",
  journey: [
    { step: "01", title: "Discover", desc: "Identify your track and align with a real-world domain." },
    { step: "02", title: "Learn", desc: "Structured mentorship under senior SNR NEST leads." },
    { step: "03", title: "Build", desc: "Deliver hands-on project work with measurable impact." },
    { step: "04", title: "Certify", desc: "Earn verified SNR NEST credentials and recommendation letters." },
    { step: "05", title: "Grow", desc: "Transition into hiring pipelines or partner placements." }
  ],
  tracks: [
    { id: "int-01", title: "HR & Recruitment Intern", domain: "Human Resources", duration: "3 – 6 Months", mode: "Hybrid / Bangalore Office", eligibility: "BBA / MBA / Any Graduate (2023 – 2026)", skills: ["Resume Screening","Job Portals (Naukri/LinkedIn)","Candidate Coordination","HR Analytics"], projects: "End-to-end recruitment drives for 100+ enterprise candidate cohorts and interview schedule coordination.", certificate: "Verified Experience Certificate & Letter of Recommendation", featured: true },
    { id: "int-02", title: "Talent Acquisition Specialist Intern", domain: "Talent Acquisition", duration: "3 – 6 Months", mode: "On-site / Bangalore", eligibility: "Graduates / Post Graduates with strong communication", skills: ["Talent Sourcing","Boolean Search","Headhunting","Interview Debriefs"], projects: "Sourcing high-volume tech and non-tech talent pipelines for Fortune 500 partner companies.", certificate: "Industry Credential + Performance Bonus", featured: true },
    { id: "int-03", title: "Manpower Sourcing Operations Intern", domain: "Operations & Staffing", duration: "2 – 4 Months", mode: "Hybrid", eligibility: "Any Degree / Diploma with interest in supply chain & ops", skills: ["Vendor Management","Ground Sourcing","Roster Management","KYC Verification"], projects: "Managing on-ground workforce mobilization for dark store and retail fulfillment centers.", certificate: "Operations Leadership Certificate", featured: false },
    { id: "int-04", title: "Staffing & Deployment Intern", domain: "Operations & Staffing", duration: "3 Months", mode: "Bangalore / Hyderabad", eligibility: "Any Graduate with analytical & organizational skills", skills: ["Shift Planning","Attendance Tracking","Deployment Logistics","MIS Dashboards"], projects: "Coordinating multi-shift manpower deployment and compliance paperwork for e-commerce hubs.", certificate: "Verified Internship Certificate", featured: false },
    { id: "int-05", title: "BPO Hiring Support Intern", domain: "Customer Operations", duration: "3 Months", mode: "On-site", eligibility: "Graduates with fluent English & active communication", skills: ["Voice Assessment","Mock Telephonic Rounds","CRM Pipeline","Candidate Follow-up"], projects: "Facilitating candidate pre-screening and mock voice drills for top BPO clients.", certificate: "BPO Recruitment Specialist Certificate", featured: true },
    { id: "int-06", title: "Workforce Coordination Intern", domain: "Operations & Staffing", duration: "3 – 6 Months", mode: "Bangalore", eligibility: "B.Com / BBA / B.Sc / BA", skills: ["Spreadsheets & MIS","Field Communication","Problem Escalation","Resource Allocation"], projects: "Daily workforce availability mapping and incident reporting for partner dark stores.", certificate: "Experience Letter + Stipend Based", featured: false },
    { id: "int-07", title: "Digital Marketing & Branding Intern", domain: "Marketing & Growth", duration: "3 Months", mode: "Hybrid", eligibility: "Students interested in Social Media, SEO, and Content", skills: ["Canva / Figma Basics","LinkedIn Organic Growth","Content Writing","Campaign Analytics"], projects: "Designing recruitment social banners, employer branding campaigns, and student engagement posts.", certificate: "Digital Growth Internship Certificate", featured: true },
    { id: "int-08", title: "Business Operations & Strategy Intern", domain: "Business Operations", duration: "3 – 6 Months", mode: "Bangalore Office", eligibility: "BBA / MBA / Engineering Grads", skills: ["Process Flow Mapping","Client Presentations","Data Synthesis","Operational KPIs"], projects: "Assisting SNR NEST leadership in scaling new service verticals and optimizing operational bottlenecks.", certificate: "Leadership Recommendation & Pre-Placement Offer (PPO) Track", featured: true }
  ]
};

window.SNR_DATA.manpower = {
  title: "Manpower Sourcing",
  subtitle: "The right workforce for the right business.",
  description: "We help enterprises, logistics leaders, retail chains, and dark store operators find, screen, and deploy dependable blue-collar and mid-management personnel.",
  solutions: [
    { title: "Picking & Packing Operations", badge: "Warehouse & Fulfillment", desc: "Skilled warehouse associates trained in barcode scanning, fast SKU picking, fragile item packaging, and dispatch sorting.", skills: ["Order Picking","Barcode Scanners","Inventory Auditing","Safety Standards"] },
    { title: "Dark Store Manager", badge: "Quick Commerce (Q-Commerce)", desc: "End-to-end management of micro-fulfillment hubs, stock replenishment, rider turnaround times, and shift rosters.", skills: ["Store Operations","Inventory SLA","Team Leadership","Loss Prevention"] },
    { title: "Shift In-Charge / Supervisor", badge: "Floor Operations", desc: "Floor leadership managing hourly dispatch targets, attendance, worker safety, and real-time operational bottlenecks.", skills: ["Shift Planning","Target SLA Monitoring","Conflict Handling","Process Optimization"] },
    { title: "Management Team Lead", badge: "Operational Leadership", desc: "High-caliber leads driving cross-functional coordination between supply chain, customer support, and ground fleet.", skills: ["KPI Tracking","Escalation Matrix","MIS & Reporting","Vendor Coordination"] },
    { title: "Logistics & Fleet Coordinators", badge: "Supply Chain", desc: "Route planners, driver dispatchers, and last-mile delivery coordinators ensuring on-time delivery metrics.", skills: ["Route Optimization","Driver Management","GPS Tracking","Proof of Delivery"] },
    { title: "Retail & Front-End Staff", badge: "Modern Trade & Showrooms", desc: "Polished customer-facing associates, cashiers, shelf merchandisers, and store greeters.", skills: ["POS Billing","Visual Merchandising","Customer Assistance","Cash Reconciliation"] }
  ],
  targetIndustries: [
    { name: "Quick Commerce & Dark Stores", desc: "Instant grocery & 10-minute delivery hubs needing rapid shift scaling." },
    { name: "E-Commerce & Warehouses", desc: "Large fulfillment centers requiring 100+ vetted pickers, packers, and leads." },
    { name: "Logistics & Supply Chain", desc: "3PL & 4PL logistics providers needing dock supervisors and freight handlers." },
    { name: "Retail & Supermarket Chains", desc: "Hypermarkets and brand outlets needing store staff and floor managers." },
    { name: "BPO & Corporate Facilities", desc: "Enterprise office campuses needing support staff and operational personnel." },
    { name: "SMEs & High-Growth Startups", desc: "Fast-moving businesses scaling operational headcounts with minimal friction." }
  ],
  workflow: [
    { step: "01", title: "Requirement", desc: "Employer shares headcounts, job roles, shift hours, and timeline." },
    { step: "02", title: "Sourcing", desc: "Deep talent pooling across verified local networks and pre-vetted databases." },
    { step: "03", title: "Screening", desc: "Background verification, identity KYC, and basic skill assessment." },
    { step: "04", title: "Selection", desc: "Direct client interviews or SNR-managed batch shortlist sign-off." },
    { step: "05", title: "Deployment", desc: "Uniform issue, shift onboarding, and compliance deployment on day 1." }
  ]
};

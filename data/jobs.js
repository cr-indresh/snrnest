/* =====================================================================
   SNR NEST — jobs.js
   Job + client data (preserved from original project)
   ===================================================================== */
window.SNR_DATA = window.SNR_DATA || {};

window.SNR_DATA.brand = {
  name: "SNR NEST",
  tagline: "Building Careers. Empowering Businesses. Creating Opportunities.",
  eyebrow: "TALENT  •  TECHNOLOGY  •  CAREERS",
  description: "SNR NEST is a multi-service organization delivering BPO hiring, specialized manpower sourcing, website solutions, practical internships, and end-to-end training & placement services.",
  email: "praveen@snrnest.in",
  altEmail: "rangapraveend4@gmail.com",
  phone: "+91 80 4123 8899  /  +91 91234 56789",
  locations: [
    {
      city: "Bangalore",
      isHQ: true,
      address: "SNR Tower, 4th Floor, Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103",
      phone: "+91 80 4123 8899",
      email: "praveen@snrnest.in"
    },
    {
      city: "Hyderabad",
      isHQ: false,
      address: "Cyber Gateway, Hitech City, Madhapur, Hyderabad, Telangana 500081",
      phone: "+91 40 6789 2244",
      email: "praveen@snrnest.in"
    }
  ],
  stats: {
    candidates: 500,
    hiringRequirements: 100,
    studentsTrained: 50,
    websitesDelivered: 25,
    partners: 50
  }
};

window.SNR_DATA.clients = [
  { id: "client-concentrix", name: "Concentrix", badge: "CX", category: "Customer Experience & BPO", domain: "Global CX & Omnichannel Support", locations: "Bangalore, Hyderabad", roles: ["Voice Process Specialist","Technical Support","Chat Executive"], experience: "0 – 3 Years", packageRange: "₹3.2 – ₹5.0 LPA + Incentives", workMode: "Hybrid / 5-Day Week", perks: ["Cab Pickup / Drop","Health Cover","Global MNC Culture","Monthly Incentives"], description: "Global CX leader operating omnichannel customer experience programs across international markets." },
  { id: "client-kreditbee", name: "KreditBee", badge: "KB", category: "FinTech Lending", domain: "Digital Finance & Micro-Credit", locations: "Bangalore (HSR Layout)", roles: ["Non-Voice Chat Support","Loan Verification Officer","Email Operations"], experience: "Freshers / 0 – 2 Years", packageRange: "₹2.8 – ₹4.0 LPA", workMode: "Day Shift / On-site", perks: ["Fixed Day Shifts","Free Meals","Fast Promotion Tracks","PF + Medical"], description: "Digital lending platform serving instant credit to verified borrowers across India." },
  { id: "client-stablemoney", name: "Stable Money", badge: "SM", category: "WealthTech & Banking", domain: "Wealth Management & Fixed Deposits", locations: "Bangalore, Hyderabad", roles: ["Customer Relationship Officer","Wealth Advisory Desk","KYC Verification"], experience: "1 – 3 Years", packageRange: "₹4.0 – ₹6.0 LPA + Bonus", workMode: "Hybrid / Day Shifts", perks: ["Performance Bonuses","WealthTech Mentorship","Health Insurance","Work-Life Balance"], description: "WealthTech platform helping customers diversify savings into fixed-income instruments." },
  { id: "client-tataelxsi", name: "Tata Elxsi", badge: "TE", category: "Technology & Engineering", domain: "Design & Technology Services", locations: "Bangalore (Hoodi / Whitefield)", roles: ["Operations & Back Office Analyst","MIS Specialist","Data Reconciliation"], experience: "0 – 3 Years", packageRange: "₹3.5 – ₹5.2 LPA", workMode: "Corporate Campus / On-site", perks: ["Tata Brand Pedigree","Campus Transport","Annual Appraisals","Learning Access"], description: "Tata Group design & technology services company serving global engineering clients." },
  { id: "client-axis", name: "Axis Bank Partner Group", badge: "AX", category: "Banking & Financial Services", domain: "Retail Banking Operations", locations: "Hyderabad (Gachibowli), Bangalore", roles: ["Banking Customer Support","Card Operations Specialist","Inbound Helpdesk"], experience: "Freshers Welcome (0 – 2 Years)", packageRange: "₹2.8 – ₹4.2 LPA + Allowances", workMode: "Rotational / Day Shifts", perks: ["Banking Certifications","Shift Allowances","Health Insurance","Internal Growth"], description: "Retail banking operations supporting Axis Bank's nationwide customer base." }
];

window.SNR_DATA.bpo = {
  title: "BPO Hiring",
  subtitle: "Find the right opportunity. Start your career.",
  description: "We connect candidates with premier BPO & BPM organizations for voice, non-voice, customer support, and strategic operations roles.",
  roleChips: ["Voice Process","Non-Voice Process","Customer Support","Back Office","Telecalling","Operations","Team Lead","Quality Analyst"],
  hiringProcess: [
    { step: "01", title: "Registration", desc: "Submit your profile and choose your preferred process (Voice / Non-Voice)." },
    { step: "02", title: "Screening", desc: "Initial evaluation of communication, language fluency, and aptitude." },
    { step: "03", title: "Interview", desc: "Direct rounds with top partner corporate interview panels." },
    { step: "04", title: "Selection", desc: "Fast-tracked offer letter rollout with transparent salary breakdown." },
    { step: "05", title: "Joining", desc: "Smooth onboarding, corporate orientation, and day-1 induction support." }
  ],
  jobs: [
    { id: "bpo-001", title: "Senior Voice Process Specialist", company: "Concentrix", clientLogo: "CONCENTRIX", location: "Bangalore (Bellandur)", type: "Full-Time", mode: "On-site / Hybrid", processType: "Voice", experience: "0 – 2 Years", salary: "₹3.2 – ₹4.8 LPA + Incentives", skills: ["English Fluency","Active Listening","Customer Handling","CRM Tools"], description: "Engage with international clients to resolve queries, provide first-call resolution, and uphold world-class CSAT benchmarks.", openings: 18, urgent: true },
    { id: "bpo-002", title: "Non-Voice / Chat Support Executive", company: "KreditBee", clientLogo: "KreditBee", location: "Bangalore (HSR Layout)", type: "Full-Time", mode: "Day Shift", processType: "Non-Voice", experience: "Freshers / 0 – 1 Year", salary: "₹2.8 – ₹3.8 LPA", skills: ["Typing Speed 35+ WPM","Written English","Email Etiquette","Problem Solving"], description: "Handle inbound digital chats and email tickets assisting users with loan verification, documentation, and app assistance.", openings: 25, urgent: false },
    { id: "bpo-003", title: "FinTech Customer Relationship Officer", company: "Stable Money", clientLogo: "stable money", location: "Bangalore / Hyderabad", type: "Full-Time", mode: "Hybrid", processType: "Voice", experience: "1 – 3 Years", salary: "₹4.0 – ₹5.5 LPA + Bonus", skills: ["Banking Basics","Relationship Management","Hindi / English Fluency","Investment Knowledge"], description: "Guide premium wealth clients through fixed-income product setups, KYC verifications, and investment inquiries.", openings: 12, urgent: true },
    { id: "bpo-004", title: "Operations & Back Office Analyst", company: "Tata Elxsi", clientLogo: "TATA ELXSI", location: "Bangalore (Hoodi)", type: "Full-Time", mode: "On-site", processType: "Back Office", experience: "0 – 3 Years", salary: "₹3.5 – ₹4.5 LPA", skills: ["Advanced Excel","Data Reconciliation","Documentation","MIS Reporting"], description: "Manage enterprise document workflows, internal auditing validations, and operational compliance reports.", openings: 8, urgent: false },
    { id: "bpo-005", title: "Banking Customer Support Representative", company: "Axis Bank Partner Group", clientLogo: "AXIS BANK", location: "Hyderabad (Gachibowli)", type: "Full-Time", mode: "Rotational Shifts", processType: "Voice", experience: "Freshers Welcome", salary: "₹2.6 – ₹3.6 LPA + Allowances", skills: ["Customer Empathy","Multi-lingual","Conflict Resolution"], description: "Handle incoming customer banking queries regarding cards, transactions, and account management with prompt solutions.", openings: 30, urgent: true },
    { id: "bpo-006", title: "Telecalling & Sales Conversion Specialist", company: "Global Business Services", clientLogo: "SNR PARTNER", location: "Bangalore (Koramangala)", type: "Full-Time", mode: "Day Shift", processType: "Telecalling", experience: "0 – 2 Years", salary: "₹2.4 – ₹3.5 LPA + Incentives", skills: ["Persuasive Communication","Lead Follow-up","Target Driven","CRM Software"], description: "Connect with pre-qualified inbound leads, explain service features, and drive successful customer onboarding.", openings: 15, urgent: false }
  ]
};

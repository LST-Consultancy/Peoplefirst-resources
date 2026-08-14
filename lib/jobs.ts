export type Job = {
  slug: string;
  title: string;
  location: string;
  type: "Contract" | "Contract-to-Hire" | "Direct Hire" | "Temporary";
  category: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    slug: "senior-java-developer-dallas-tx",
    title: "Senior Java Developer",
    location: "Dallas, TX (Hybrid)",
    type: "Contract-to-Hire",
    category: "Information Technology",
    description:
      "Our client, a growing fintech company, is looking for a Senior Java Developer to help build and scale their core payments platform.",
    responsibilities: [
      "Design and develop backend services using Java/Spring Boot",
      "Collaborate with product and QA teams in an Agile environment",
      "Participate in code reviews and mentor junior engineers",
    ],
    requirements: [
      "5+ years of professional Java development experience",
      "Experience with Spring Boot, REST APIs, and microservices",
      "Must be authorized to work in the United States",
    ],
  },
  {
    slug: "administrative-assistant-chicago-il",
    title: "Administrative Assistant",
    location: "Chicago, IL (On-site)",
    type: "Temporary",
    category: "Administrative & Clerical",
    description:
      "A well-established logistics firm needs a detail-oriented Administrative Assistant to support day-to-day office operations during a seasonal peak.",
    responsibilities: [
      "Manage calendars, correspondence, and office supplies",
      "Greet visitors and answer incoming calls",
      "Assist with data entry and document preparation",
    ],
    requirements: [
      "1+ years of administrative/office experience",
      "Strong organizational and communication skills",
      "Proficiency with Microsoft Office",
    ],
  },
  {
    slug: "warehouse-associate-columbus-oh",
    title: "Warehouse Associate",
    location: "Columbus, OH (On-site)",
    type: "Temporary",
    category: "Light Industrial",
    description:
      "Immediate openings for reliable Warehouse Associates supporting a regional distribution center ahead of the holiday season.",
    responsibilities: [
      "Pick, pack, and stage orders for shipment",
      "Operate pallet jacks and other warehouse equipment",
      "Maintain a clean and safe work area",
    ],
    requirements: [
      "Able to lift up to 50 lbs and stand for extended periods",
      "Prior warehouse or manufacturing experience a plus",
      "Reliable transportation to job site",
    ],
  },
  {
    slug: "accounts-payable-specialist-atlanta-ga",
    title: "Accounts Payable Specialist",
    location: "Atlanta, GA (Hybrid)",
    type: "Direct Hire",
    category: "Accounting & Finance",
    description:
      "A healthcare services company is hiring an Accounts Payable Specialist to join their growing finance team on a permanent basis.",
    responsibilities: [
      "Process high-volume vendor invoices and payment runs",
      "Reconcile vendor statements and resolve discrepancies",
      "Support month-end close for the AP function",
    ],
    requirements: [
      "2+ years of accounts payable experience",
      "Experience with ERP systems (NetSuite, SAP, or similar)",
      "High attention to detail and accuracy",
    ],
  },
  {
    slug: "registered-nurse-med-surg-phoenix-az",
    title: "Registered Nurse – Med/Surg",
    location: "Phoenix, AZ (On-site)",
    type: "Contract",
    category: "Healthcare",
    description:
      "13-week travel contract supporting a busy Med/Surg unit at a regional hospital system.",
    responsibilities: [
      "Provide direct patient care per unit protocols",
      "Coordinate with physicians and interdisciplinary team",
      "Maintain accurate patient documentation",
    ],
    requirements: [
      "Active RN license (or compact license) in Arizona",
      "1+ years of recent Med/Surg experience",
      "BLS/ACLS certification required",
    ],
  },
  {
    slug: "customer-support-representative-remote-us",
    title: "Customer Support Representative",
    location: "Remote (U.S.)",
    type: "Contract-to-Hire",
    category: "Customer Service",
    description:
      "Remote customer support role for a SaaS company looking to expand their support coverage across U.S. time zones.",
    responsibilities: [
      "Respond to customer inquiries via chat, email, and phone",
      "Troubleshoot product issues and escalate as needed",
      "Document interactions in the CRM/ticketing system",
    ],
    requirements: [
      "1+ years in a customer-facing support role",
      "Excellent written and verbal communication skills",
      "Reliable home internet connection and quiet workspace",
    ],
  },
];

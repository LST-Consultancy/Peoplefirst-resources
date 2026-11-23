import type { Faq } from "@/components/content/FaqList";

export type ServiceSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  /** Short name for nav, cards and breadcrumbs. */
  name: string;
  /** One line for the services hub and related-service cards. */
  summary: string;
  /** Primary keyword the page is built around (from Ubersuggest research). */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  tasksHeading: string;
  tasks: { title: string; description: string }[];
  sections: ServiceSection[];
  faqs: Faq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "recruitment-process-outsourcing",
    name: "Recruitment Process Outsourcing (RPO)",
    summary:
      "Full-cycle, partial, or project-based RPO delivered by a dedicated offshore team that works inside your process.",
    keyword: "recruitment process outsourcing",
    metaTitle: "Recruitment Process Outsourcing (RPO) for Staffing Firms",
    metaDescription:
      "Recruitment process outsourcing built for U.S. staffing firms. Full-cycle, partial, or project RPO from a dedicated offshore team that works in your ATS and process.",
    eyebrow: "RPO Services",
    h1: "Recruitment Process Outsourcing (RPO) Built for Staffing Firms",
    intro: [
      "Most RPO providers are built for corporate HR teams filling their own roles. PeopleFirst Resources is built for a different buyer: U.S. staffing firms that recruit for their clients and need more recruiting capacity without adding U.S. headcount.",
      "We provide dedicated offshore recruiters and sourcers from India who work inside your ATS, follow your recruiting process, and keep your hours. You decide how much of the recruitment process to hand over, and how many people you need. We provide the people, tools, infrastructure, and day-to-day management.",
    ],
    tasksHeading: "What your RPO team can handle",
    tasks: [
      {
        title: "Sourcing",
        description:
          "Searching job boards, LinkedIn, and your own database to build qualified pipelines for each open requirement.",
      },
      {
        title: "Screening",
        description:
          "Reviewing resumes against your requirements and qualifying candidates on skills, availability, rate, and location.",
      },
      {
        title: "Candidate engagement",
        description:
          "Reaching out, following up, and keeping candidates warm from first contact through submission.",
      },
      {
        title: "Submissions",
        description:
          "Preparing candidate profiles and submittals in the format your account managers and clients expect.",
      },
      {
        title: "ATS & database work",
        description:
          "Logging activity, updating candidate records, and keeping your ATS clean so your data stays useful.",
      },
      {
        title: "Recruiting coordination",
        description:
          "Scheduling, follow-ups, and the coordination work that slows your U.S. recruiters down.",
      },
    ],
    sections: [
      {
        heading: "Three ways to use RPO",
        body: [
          "There is no single RPO model that fits every staffing firm. We support three, and many firms move between them as their needs change.",
        ],
        bullets: [
          "Full-cycle RPO: a dedicated offshore team covers the recruiting lifecycle, from sourcing and screening through candidate engagement, submissions, and follow-up.",
          "Partial / hybrid RPO: we take on specific stages, such as sourcing or screening, while your internal recruiters keep the rest.",
          "Project & high-volume RPO: extra capacity for a new account, a hiring surge, or a time-bound project, scaled back when the work ends.",
        ],
      },
      {
        heading: "Why staffing firms outsource recruiting offshore",
        body: [
          "Staffing margins depend on how many qualified candidates your team can put in front of clients, and how quickly. When requirements outpace your recruiters, you either lose deals or hire more recruiters in the U.S., which is slow and expensive.",
          "Offshore RPO adds capacity faster and at a lower cost than building the same team in-house. Because the team works in your systems and to your process, your account managers see the same workflow, just with more people behind it.",
        ],
      },
      {
        heading: "Your process stays yours",
        body: [
          "We do not replace your way of recruiting with ours. Your offshore team follows your recruiting process, communication style, and expectations, and works the hours you need to overlap with your U.S. team.",
          "A dedicated manager on our side handles day-to-day coordination, continuity, and performance visibility, so you are not managing an offshore team on top of your own job. Performance is measured against recruiting KPIs we agree with you up front.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is recruitment process outsourcing (RPO)?",
        answer:
          "Recruitment process outsourcing is when a company hands all or part of its recruiting work to an outside provider. For staffing firms, that usually means an external team handles sourcing, screening, candidate engagement, and submission support while the firm keeps client relationships and final decisions.",
      },
      {
        question: "How is your RPO different from a typical RPO provider?",
        answer:
          "Most RPO providers serve corporate employers filling their own jobs. We work only with staffing firms, and our recruiters work as an extension of your team: in your ATS, on your process, and during your hours.",
      },
      {
        question: "Do we have to outsource the entire recruiting process?",
        answer:
          "No. You can start with a single stage, such as sourcing or screening, and expand later. Partial RPO is a common way to start.",
      },
      {
        question: "How many recruiters do we need to start?",
        answer:
          "You can start with one dedicated recruiter or sourcer and scale the team as your recruiting volume grows.",
      },
      {
        question: "Who provides the tools and infrastructure?",
        answer:
          "We do. PeopleFirst Resources provides the tools, infrastructure, and working environment your offshore team needs, so you do not have to build an offshore setup yourself.",
      },
    ],
    related: ["offshore-recruiters", "offshore-sourcers", "it-staffing-recruiters"],
  },
  {
    slug: "offshore-recruiters",
    name: "Offshore Recruiters",
    summary:
      "Dedicated offshore recruiters who work as an extension of your staffing team, in your ATS and on your hours.",
    keyword: "offshore recruiters",
    metaTitle: "Dedicated Offshore Recruiters for U.S. Staffing Firms",
    metaDescription:
      "Hire dedicated offshore recruiters from India for your U.S. staffing firm. Start with one recruiter, keep your process and ATS, and scale when you need to.",
    eyebrow: "Offshore Recruiters",
    h1: "Dedicated Offshore Recruiters for U.S. Staffing Firms",
    intro: [
      "An offshore recruiter from PeopleFirst Resources works for your staffing firm and nobody else's. They learn your clients' requirements, use your ATS, follow your recruiting process, and keep hours that overlap with your U.S. team.",
      "You can start with one recruiter and add more as requirements grow. We handle selection, tools, infrastructure, and day-to-day management, so adding recruiting capacity does not mean building an offshore operation yourself.",
    ],
    tasksHeading: "What a dedicated offshore recruiter does",
    tasks: [
      {
        title: "Works your open requirements",
        description:
          "Takes requirements from your account managers and works them to your priorities and deadlines.",
      },
      {
        title: "Sources and screens",
        description:
          "Finds candidates on job boards, LinkedIn, and your database, then qualifies them against the job.",
      },
      {
        title: "Talks to candidates",
        description:
          "Handles outreach, initial conversations, and follow-up to keep your pipeline moving.",
      },
      {
        title: "Prepares submissions",
        description:
          "Puts together candidate profiles and submittals in the format your team and clients expect.",
      },
      {
        title: "Keeps your ATS current",
        description:
          "Logs every activity and keeps candidate records up to date in the systems you already use.",
      },
      {
        title: "Reports on activity",
        description:
          "Tracks the recruiting KPIs you agree with us, so you can see what is being done each day.",
      },
    ],
    sections: [
      {
        heading: "Dedicated, not shared",
        body: [
          "Some offshore vendors split one recruiter across several clients. Ours are dedicated to your business, your roles, and your recruiting priorities. That focus is what lets an offshore recruiter learn your clients and produce candidates your account managers trust.",
        ],
      },
      {
        heading: "Built around your working hours",
        body: [
          "Offshore only works if your teams can talk to each other. Your recruiters align with the working hours you need, so they are available for requirement calls, quick questions, and same-day turnarounds with your U.S. team.",
        ],
      },
      {
        heading: "Offshore recruiter, sourcer, or both?",
        body: [
          "If your U.S. recruiters are strong at closing but short on pipeline, a dedicated sourcer may be the better first hire. If you need someone to own requirements end to end, start with a recruiter. Many firms combine the two in a recruiter-plus-sourcer pair, or build a full recruiting pod.",
        ],
        bullets: [
          "One dedicated recruiter: add recruiting capacity quickly.",
          "Recruiter + sourcer: one builds pipeline, one works it.",
          "Complete recruiting pod: recruiters and sourcers working together as an extension of your operation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I hire just one offshore recruiter?",
        answer:
          "Yes. You can start with a single dedicated recruiter and scale the team as your recruiting needs grow.",
      },
      {
        question: "Will the recruiter work in our ATS?",
        answer:
          "Yes. Your recruiters work within your ATS and follow the systems and recruiting workflow you already use.",
      },
      {
        question: "What hours do offshore recruiters work?",
        answer:
          "Your recruiting team can align with your required working hours so they can collaborate with your U.S. team.",
      },
      {
        question: "Who manages the offshore recruiter day to day?",
        answer:
          "You direct the work, and a dedicated manager on our side handles coordination, continuity, and performance visibility, so the team does not become extra management work for you.",
      },
      {
        question: "Where are your offshore recruiters based?",
        answer: "Our recruiting professionals are based in India.",
      },
    ],
    related: ["offshore-sourcers", "recruitment-process-outsourcing", "it-staffing-recruiters"],
  },
  {
    slug: "offshore-sourcers",
    name: "Offshore Talent Sourcers",
    summary:
      "Dedicated sourcers who build qualified candidate pipelines so your recruiters spend their time closing.",
    keyword: "offshore sourcers",
    metaTitle: "Offshore Talent Sourcers for Staffing Firms",
    metaDescription:
      "Dedicated offshore talent sourcers who build qualified candidate pipelines for your staffing firm, so your U.S. recruiters spend more time talking to candidates.",
    eyebrow: "Talent Sourcing",
    h1: "Offshore Talent Sourcers Who Keep Your Pipeline Full",
    intro: [
      "Your best recruiters should spend their day talking to candidates and clients, not running Boolean searches. A dedicated offshore sourcer from PeopleFirst Resources takes the search work off their plate and hands them qualified candidates to work.",
      "Sourcers work your open requirements inside your systems, to your criteria, during hours that overlap with your team. You get a fuller pipeline without adding another U.S. recruiter.",
    ],
    tasksHeading: "What a dedicated sourcer does",
    tasks: [
      {
        title: "Searches every channel",
        description:
          "Job boards, LinkedIn, and your own database, using searches built around each requirement.",
      },
      {
        title: "Researches the market",
        description:
          "Maps where the right candidates are and finds talent your competitors are not reaching.",
      },
      {
        title: "Qualifies against your criteria",
        description:
          "Checks skills, experience, location, and availability before a candidate reaches your recruiter.",
      },
      {
        title: "Makes first contact",
        description:
          "Handles initial outreach and follow-up so your recruiters talk to interested candidates.",
      },
      {
        title: "Mines your database",
        description:
          "Re-engages candidates you already have, which is often the fastest source of a placement.",
      },
      {
        title: "Logs everything in your ATS",
        description:
          "Keeps candidate records and activity current, so the pipeline stays visible to your whole team.",
      },
    ],
    sections: [
      {
        heading: "Why sourcing is the easiest place to start offshore",
        body: [
          "Sourcing is well-defined, measurable, and easy to hand off. Your recruiter defines the requirement, the sourcer returns qualified candidates, and the results are visible in your ATS. That makes it a low-risk first step for firms new to offshore recruiting.",
        ],
      },
      {
        heading: "Sourcer or hybrid?",
        body: [
          "If you want one person to both build pipeline and carry candidates further, a hybrid recruiter-sourcer covers both, depending on what your team needs that week. If your recruiters are overloaded with search work, a dedicated sourcer gives them the most time back.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between a sourcer and a recruiter?",
        answer:
          "A sourcer finds and qualifies candidates and builds the pipeline. A recruiter works that pipeline: interviewing, submitting, and managing candidates through to placement. Many firms pair the two.",
      },
      {
        question: "Can a sourcer work in our ATS and job board accounts?",
        answer:
          "Yes. Sourcers work within your ATS and follow the systems and workflow you use.",
      },
      {
        question: "Can we start with one sourcer?",
        answer:
          "Yes. You can start with a single dedicated sourcer and add recruiters or more sourcers later.",
      },
      {
        question: "How do you measure sourcer performance?",
        answer:
          "Against recruiting KPIs we agree with you up front, based on the activities and outcomes that matter to your business.",
      },
    ],
    related: ["offshore-recruiters", "recruitment-process-outsourcing", "healthcare-staffing-recruiters"],
  },
  {
    slug: "it-staffing-recruiters",
    name: "IT Staffing Recruiters",
    summary:
      "Offshore IT recruiters and sourcers for IT staffing firms filling technical contract and full-time roles.",
    keyword: "offshore IT recruiters",
    metaTitle: "Offshore IT Recruiters for IT Staffing Firms",
    metaDescription:
      "Dedicated offshore IT recruiters and sourcers for U.S. IT staffing firms. Source, screen, and submit technical candidates inside your ATS and process.",
    eyebrow: "IT Staffing",
    h1: "Offshore IT Recruiters for U.S. IT Staffing Firms",
    intro: [
      "IT staffing moves fast. Requirements land with tight deadlines, the same candidates get submitted by several vendors, and the firm that gets a qualified profile to the client first often wins. More recruiting capacity is a direct advantage.",
      "PeopleFirst Resources provides dedicated offshore IT recruiters and sourcers who work your technical requirements inside your ATS and on your hours, so you can respond to more requirements without adding U.S. headcount.",
    ],
    tasksHeading: "How offshore IT recruiters support your desk",
    tasks: [
      {
        title: "Technical sourcing",
        description:
          "Searching job boards, LinkedIn, and your database for candidates who match the skills in each requirement.",
      },
      {
        title: "Skills screening",
        description:
          "Checking technologies, experience, location, work authorization, and rate against your requirements.",
      },
      {
        title: "Fast submissions",
        description:
          "Preparing candidate profiles and submittals quickly, in the format your clients expect.",
      },
      {
        title: "Contract and full-time roles",
        description:
          "Supporting the mix of contract, contract-to-hire, and full-time requirements your desk works.",
      },
      {
        title: "Candidate follow-up",
        description:
          "Keeping candidates engaged through interviews so fewer drop out late in the process.",
      },
      {
        title: "Database re-engagement",
        description:
          "Working your existing database first, where many of your fastest placements already sit.",
      },
    ],
    sections: [
      {
        heading: "Built for the pace of IT staffing",
        body: [
          "When your team overlaps with the U.S. workday, requirements that arrive in the afternoon can be worked right away. Your offshore recruiters align with the hours you need, so they are part of the same day as your account managers, not a handoff that waits until tomorrow.",
        ],
      },
      {
        heading: "Your clients, your process",
        body: [
          "Every IT staffing firm has its own submission format, client rules, and quality bar. Your offshore team learns and follows yours. A dedicated manager on our side keeps the work coordinated and visible, and performance is tracked against KPIs we agree with you.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can offshore recruiters handle technical IT requirements?",
        answer:
          "Yes. We match recruiters to your required experience and recruiting needs during selection, and they work your requirements to your process and quality bar.",
      },
      {
        question: "Do you support both IT and non-IT staffing?",
        answer:
          "Yes. We support IT and a range of non-IT staffing verticals, including healthcare, life sciences, finance, engineering, and professional staffing.",
      },
      {
        question: "Will the team work U.S. hours?",
        answer:
          "Your offshore team can align with your required working hours so they can collaborate with your U.S. team in real time.",
      },
      {
        question: "How fast can we add recruiters?",
        answer:
          "Team size can be adjusted as your recruiting volume and business needs change. Talk to us about your timeline and we will tell you what is realistic.",
      },
    ],
    related: ["offshore-recruiters", "offshore-sourcers", "recruitment-process-outsourcing"],
  },
  {
    slug: "healthcare-staffing-recruiters",
    name: "Healthcare Staffing Recruiters",
    summary:
      "Offshore recruiters and sourcers who help healthcare staffing firms build pipelines for clinical and non-clinical roles.",
    keyword: "healthcare recruitment process outsourcing",
    metaTitle: "Offshore Healthcare Recruiters for Staffing Firms",
    metaDescription:
      "Dedicated offshore recruiters and sourcers for U.S. healthcare staffing firms. Build pipelines for nursing, allied health, and non-clinical roles in your ATS.",
    eyebrow: "Healthcare Staffing",
    h1: "Offshore Recruiters for Healthcare Staffing Firms",
    intro: [
      "Healthcare staffing runs on volume and speed. Shifts and assignments need filling quickly, candidates are approached by many agencies at once, and keeping a pipeline full takes constant outreach.",
      "PeopleFirst Resources provides dedicated offshore recruiters and sourcers who build and work that pipeline inside your ATS and to your process, so your U.S. recruiters can focus on the conversations that close placements.",
    ],
    tasksHeading: "How offshore recruiters support a healthcare desk",
    tasks: [
      {
        title: "Pipeline building",
        description:
          "Sourcing candidates for nursing, allied health, and non-clinical roles across job boards and your database.",
      },
      {
        title: "Requirement matching",
        description:
          "Screening candidates against the specialty, shift, location, and other criteria you set.",
      },
      {
        title: "Candidate outreach",
        description:
          "Consistent outreach and follow-up, which matters in a market where candidates hear from many agencies.",
      },
      {
        title: "Information gathering",
        description:
          "Collecting and organizing the candidate details and documents your team asks for before submission.",
      },
      {
        title: "Database re-engagement",
        description:
          "Re-contacting past candidates whose availability or preferences may have changed.",
      },
      {
        title: "ATS upkeep",
        description:
          "Logging activity and keeping candidate records current so nothing falls through the cracks.",
      },
    ],
    sections: [
      {
        heading: "You stay in control of compliance",
        body: [
          "Healthcare placements come with licensing and credentialing requirements. Your offshore team works to your process and gathers the information you ask for, while credentialing and compliance decisions stay with your team.",
        ],
      },
      {
        heading: "Scale with demand",
        body: [
          "Healthcare demand rises and falls. You can start with one recruiter or sourcer, add capacity for a new contract or busy season, and adjust the team as your volume changes.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you support healthcare staffing firms?",
        answer:
          "Yes. Healthcare is one of the staffing verticals we support, along with IT, life sciences, finance, engineering, and professional staffing.",
      },
      {
        question: "Who handles credentialing?",
        answer:
          "Credentialing and compliance decisions stay with your team. Our recruiters follow your process and gather the candidate information you ask for.",
      },
      {
        question: "Can we start small?",
        answer:
          "Yes. You can start with a single dedicated recruiter or sourcer and scale the team as your needs grow.",
      },
      {
        question: "Will the recruiters use our ATS?",
        answer:
          "Yes. Your recruiters work within your ATS and follow the systems and workflow you use.",
      },
    ],
    related: ["offshore-sourcers", "offshore-recruiters", "recruitment-process-outsourcing"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

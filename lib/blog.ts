import type { ComponentType } from "react";
import type { Faq } from "@/components/content/FaqList";
import WhatIsRpo, { faqs as whatIsRpoFaqs } from "@/content/blog/what-is-recruitment-process-outsourcing";
import FullCycleVsPartial from "@/content/blog/full-cycle-vs-partial-rpo";
import OffshoreVsInHouseCost from "@/content/blog/offshore-vs-in-house-recruiter-cost";

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  /** Primary keyword the post is written around (from Ubersuggest research). */
  keyword: string;
  published: string; // ISO date
  updated?: string;
  readingMinutes: number;
  Body: ComponentType;
  faqs?: Faq[];
};

// Newest first.
export const posts: Post[] = [
  {
    slug: "what-is-recruitment-process-outsourcing",
    title: "What Is Recruitment Process Outsourcing (RPO)? A Guide for Staffing Firms",
    metaTitle: "What Is Recruitment Process Outsourcing (RPO)? Guide",
    description:
      "What recruitment process outsourcing is, how RPO works, the main RPO models, how it compares with agencies and in-house teams, and how staffing firms use it.",
    keyword: "what is recruitment process outsourcing",
    published: "2026-11-23",
    readingMinutes: 8,
    Body: WhatIsRpo,
    faqs: whatIsRpoFaqs,
  },
  {
    slug: "full-cycle-vs-partial-rpo",
    title: "Full-Cycle vs. Partial RPO: Which Model Fits Your Staffing Firm?",
    metaTitle: "Full-Cycle vs. Partial RPO: Which Model Fits You?",
    description:
      "Compare full-cycle, partial, and project RPO models for staffing firms: what each covers, how much control you keep, and how to choose where to start.",
    keyword: "recruitment process outsourcing model",
    published: "2026-11-23",
    readingMinutes: 6,
    Body: FullCycleVsPartial,
  },
  {
    slug: "offshore-vs-in-house-recruiter-cost",
    title: "Offshore vs. In-House Recruiters: How to Compare the True Cost",
    metaTitle: "Offshore vs. In-House Recruiter Cost: A Framework",
    description:
      "Salary is only part of what a recruiter costs. A worksheet for staffing firms to compare the full cost of in-house and offshore recruiters, and the metric that matters.",
    keyword: "offshore recruitment cost",
    published: "2026-11-23",
    readingMinutes: 7,
    Body: OffshoreVsInHouseCost,
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

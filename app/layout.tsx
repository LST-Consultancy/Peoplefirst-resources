import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Offshore RPO Solutions for U.S. Staffing Firms | PeopleFirst Resources",
  description:
    "PeopleFirst Resources provides dedicated offshore recruiters, sourcers, and RPO solutions for U.S. staffing firms. Build your recruiting team from India with the people, tools, and support you need.",
  keywords: [
    "offshore RPO",
    "offshore RPO services",
    "recruitment process outsourcing",
    "offshore recruiters",
    "offshore recruitment services",
    "offshore recruiters for U.S. staffing firms",
    "offshore recruiters for staffing agencies",
    "RPO services for staffing companies",
    "recruitment outsourcing for staffing firms",
    "dedicated offshore recruiters",
    "offshore sourcers",
    "offshore recruiters from India",
    "IT staffing recruiters",
    "recruitment staffing services",
    "remote recruitment team",
  ],
  openGraph: {
    title: "Offshore RPO Solutions for U.S. Staffing Firms | PeopleFirst Resources",
    description:
      "Dedicated offshore recruiters, sourcers, and RPO solutions for U.S. staffing firms. You choose the team size; we provide the people, tools, infrastructure, and support.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <CustomCursor />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

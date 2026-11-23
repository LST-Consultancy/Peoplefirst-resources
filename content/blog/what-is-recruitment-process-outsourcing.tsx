import Link from "next/link";
import type { Faq } from "@/components/content/FaqList";

export const faqs: Faq[] = [
  {
    question: "What does RPO stand for?",
    answer: "RPO stands for recruitment process outsourcing.",
  },
  {
    question: "Is RPO the same as a staffing agency?",
    answer:
      "No. A staffing agency fills individual roles and is usually paid per placement or by markup on a contractor's rate. An RPO provider runs all or part of the recruiting process itself, usually as a dedicated team on an ongoing engagement.",
  },
  {
    question: "Can a staffing firm use RPO?",
    answer:
      "Yes. Staffing firms use RPO to add recruiting capacity: an outside team handles sourcing, screening, candidate engagement, or submissions while the firm keeps its client relationships.",
  },
  {
    question: "What is offshore RPO?",
    answer:
      "Offshore RPO is recruitment process outsourcing delivered by a team based in another country, often working hours that overlap with the client's team. It is usually chosen to add recruiting capacity at a lower cost than hiring locally.",
  },
];

export default function Body() {
  return (
    <>
      <p className="lead">
        <strong>Recruitment process outsourcing (RPO)</strong> is when a company hands all or
        part of its recruiting work to an outside provider. The provider supplies the
        recruiters, and often the tools and process, to source, screen, and engage candidates on
        the company&apos;s behalf, usually as an ongoing engagement rather than a fee per hire.
      </p>
      <p>
        That is the textbook definition. In practice, RPO looks different depending on who is
        buying it. A corporate HR team uses RPO to fill its own jobs. A staffing firm uses it to
        add recruiting capacity behind the jobs it fills for clients. This guide covers both,
        with a focus on the second.
      </p>

      <h2>How RPO works</h2>
      <p>
        An RPO provider takes responsibility for some or all of the steps in the recruiting
        process. The usual stages are:
      </p>
      <ol>
        <li>
          <strong>Sourcing:</strong> finding candidates on job boards, LinkedIn, referrals, and
          existing databases.
        </li>
        <li>
          <strong>Screening:</strong> checking resumes and qualifying candidates against the
          role&apos;s requirements.
        </li>
        <li>
          <strong>Candidate engagement:</strong> outreach, conversations, and follow-up to keep
          candidates interested.
        </li>
        <li>
          <strong>Submission or interview coordination:</strong> preparing candidate profiles
          and scheduling interviews.
        </li>
        <li>
          <strong>Reporting:</strong> tracking activity and results against agreed metrics.
        </li>
      </ol>
      <p>
        The company keeps the decisions: which candidates move forward, who gets hired, and
        (for a staffing firm) how the client relationship is managed.
      </p>

      <h2>The main RPO models</h2>
      <h3>Full-cycle RPO</h3>
      <p>
        The provider runs the whole recruiting lifecycle, from sourcing through submission or
        offer support. It suits companies that need a lot of capacity and want one team
        accountable for the process.
      </p>
      <h3>Partial or hybrid RPO</h3>
      <p>
        The provider handles specific stages, most often sourcing and screening, while the
        company&apos;s own recruiters do the rest. This is the most common starting point
        because it is easy to measure and keeps the company in control of candidate
        relationships.
      </p>
      <h3>Project RPO</h3>
      <p>
        A defined burst of recruiting for a set period: a new client, a product launch, a hiring
        surge. Capacity is added for the project and released when it ends.
      </p>
      <p>
        We compare these in more detail in{" "}
        <Link href="/blog/full-cycle-vs-partial-rpo">Full-Cycle vs. Partial RPO</Link>.
      </p>

      <h2>RPO vs. staffing agency vs. in-house recruiting</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>In-house recruiters</th>
              <th>Staffing agency</th>
              <th>RPO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Who does the recruiting</th>
              <td>Your employees</td>
              <td>The agency&apos;s recruiters</td>
              <td>The provider&apos;s dedicated team</td>
            </tr>
            <tr>
              <th>Scope</th>
              <td>Everything</td>
              <td>Individual roles</td>
              <td>All or part of the process</td>
            </tr>
            <tr>
              <th>Typical pricing</th>
              <td>Salaries, benefits, tools</td>
              <td>Per placement or rate markup</td>
              <td>Ongoing fee for the team</td>
            </tr>
            <tr>
              <th>Control over process</th>
              <td>Full</td>
              <td>Low</td>
              <td>High: the team follows your process</td>
            </tr>
            <tr>
              <th>Speed to add capacity</th>
              <td>Slow (hire and ramp)</td>
              <td>Fast, per role</td>
              <td>Fast, for ongoing volume</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Why staffing firms use RPO</h2>
      <p>
        It sounds odd at first: staffing firms <em>are</em> recruiters. But that is exactly why
        RPO works for them. A staffing firm&apos;s revenue depends on how many qualified
        candidates its team can put in front of clients, and how fast. When requirements pile
        up faster than recruiters can work them, the firm loses deals.
      </p>
      <p>
        Hiring more U.S. recruiters is slow and expensive, and the work is uneven: busy one
        quarter, quiet the next. RPO lets a staffing firm add recruiting capacity behind its
        existing desk, often offshore, so the same account managers can respond to more
        requirements. The firm keeps its clients, brand, and process. The RPO team adds hands.
      </p>
      <p>
        For staffing firms, the most useful form of RPO is usually a{" "}
        <Link href="/services/offshore-recruiters">dedicated offshore recruiter</Link> or{" "}
        <Link href="/services/offshore-sourcers">sourcer</Link> who works inside the firm&apos;s
        ATS, follows its process, and keeps overlapping hours, rather than a separate vendor
        working at arm&apos;s length.
      </p>

      <h2>What to look for in an RPO provider</h2>
      <ul>
        <li>
          <strong>Dedicated people.</strong> Ask whether your recruiters will work only for you
          or be shared across clients.
        </li>
        <li>
          <strong>Your process, not theirs.</strong> The team should work in your ATS and follow
          your workflow.
        </li>
        <li>
          <strong>Time-zone overlap.</strong> Real-time collaboration matters more than almost
          anything else in offshore recruiting.
        </li>
        <li>
          <strong>Management included.</strong> Someone on the provider&apos;s side should own
          coordination, continuity, and performance, or the team becomes your management
          problem.
        </li>
        <li>
          <strong>Agreed KPIs.</strong> Define what good looks like before you start, and get
          regular reporting against it.
        </li>
        <li>
          <strong>Flexible size.</strong> You should be able to start small and scale up or
          down.
        </li>
        <li>
          <strong>Industry fit.</strong> A provider that understands staffing will ramp faster
          than one built for corporate HR.
        </li>
      </ul>

      <h2>When RPO is not the right fit</h2>
      <p>
        RPO is not a fix for every recruiting problem. If you only hire a handful of people a
        year, a per-placement agency or a single in-house recruiter is simpler. If your process
        is undefined, an outside team will struggle to follow it, so document the process
        first. And if you are not willing to spend time onboarding the team in the first few
        weeks, results will be slow, whoever you choose.
      </p>

      <h2>The short version</h2>
      <p>
        Recruitment process outsourcing means an outside team runs all or part of your
        recruiting. For staffing firms, it is a way to add recruiting capacity without adding
        U.S. headcount, as long as the team is dedicated, works inside your process, and
        overlaps with your hours.
      </p>
      <p>
        If you want to see how this works for your desk, read about our{" "}
        <Link href="/services/recruitment-process-outsourcing">
          RPO services for staffing firms
        </Link>
        .
      </p>
    </>
  );
}

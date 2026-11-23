import Link from "next/link";

export default function Body() {
  return (
    <>
      <p className="lead">
        <strong>Full-cycle RPO</strong> hands the whole recruiting process to an outside team.{" "}
        <strong>Partial RPO</strong> hands over specific stages, usually sourcing and
        screening, while your own recruiters keep the rest. Most staffing firms are better off
        starting partial and expanding once the team has proven itself.
      </p>
      <p>
        Here is how the models differ, and how to tell which one your firm needs right now.
      </p>

      <h2>What full-cycle RPO covers</h2>
      <p>
        In full-cycle RPO, a dedicated team takes a requirement from your account manager and
        works it end to end:
      </p>
      <ul>
        <li>Sourcing candidates across job boards, LinkedIn, and your database</li>
        <li>Screening and qualifying them against the requirement</li>
        <li>Candidate conversations, engagement, and follow-up</li>
        <li>Preparing and sending submissions</li>
        <li>Coordinating next steps and keeping the ATS current</li>
      </ul>
      <p>
        Your team keeps the client relationship and final decisions. The RPO team does the
        recruiting.
      </p>

      <h2>What partial RPO covers</h2>
      <p>
        Partial (or hybrid) RPO picks the stages where your recruiters lose the most time and
        hands those off. Common splits:
      </p>
      <ul>
        <li>
          <strong>Sourcing only:</strong> the RPO team builds the pipeline; your recruiters work
          it.
        </li>
        <li>
          <strong>Sourcing and screening:</strong> your recruiters only talk to pre-qualified
          candidates.
        </li>
        <li>
          <strong>Admin and coordination:</strong> ATS updates, scheduling, and follow-ups move
          offshore so your recruiters can stay on the phone.
        </li>
      </ul>

      <h2>Side-by-side comparison</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Partial RPO</th>
              <th>Full-cycle RPO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>What you hand off</th>
              <td>One or two stages</td>
              <td>The whole process</td>
            </tr>
            <tr>
              <th>Candidate relationship</th>
              <td>Mostly stays with your recruiters</td>
              <td>Shared with the RPO team</td>
            </tr>
            <tr>
              <th>Onboarding effort</th>
              <td>Lower: one stage to teach</td>
              <td>Higher: your full process and client rules</td>
            </tr>
            <tr>
              <th>Capacity added</th>
              <td>Frees up your existing recruiters</td>
              <td>Adds whole new recruiting capacity</td>
            </tr>
            <tr>
              <th>Easiest to measure</th>
              <td>Yes: pipeline volume and quality</td>
              <td>Yes, but more metrics to agree</td>
            </tr>
            <tr>
              <th>Best for</th>
              <td>Firms new to RPO, or with strong closers short on pipeline</td>
              <td>Firms with more requirements than recruiters</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Signs partial RPO is the right start</h2>
      <ul>
        <li>Your recruiters spend more time searching than talking to candidates.</li>
        <li>You have never worked with an offshore team and want a low-risk first step.</li>
        <li>Your recruiters are good at closing but run out of candidates.</li>
        <li>Your process is not fully documented yet. A single stage is easier to teach.</li>
      </ul>

      <h2>Signs you need full-cycle RPO</h2>
      <ul>
        <li>Requirements are going unworked because nobody has time to touch them.</li>
        <li>You are adding a new client or vertical and need a team behind it fast.</li>
        <li>Your process is documented and your account managers can brief requirements clearly.</li>
        <li>You want new capacity, not just more time for the recruiters you have.</li>
      </ul>

      <h2>Where project RPO fits</h2>
      <p>
        Project RPO is either model, time-boxed. It is useful when you win a new account, face
        a high-volume hiring push, or have an urgent deadline. You add capacity for the project
        and scale back when it ends. The work you put into onboarding is not wasted: the same
        team can often be brought back for the next project.
      </p>

      <h2>How to start without betting the desk</h2>
      <ol>
        <li>
          <strong>Pick one stage or one desk.</strong> Sourcing for your busiest vertical is a
          common first choice.
        </li>
        <li>
          <strong>Agree on KPIs before day one.</strong> Decide what you will measure, such as
          qualified candidates delivered, submissions, or interviews.
        </li>
        <li>
          <strong>Invest in the first few weeks.</strong> Walk the team through your clients,
          submission format, and quality bar. This is where most results are won or lost.
        </li>
        <li>
          <strong>Review, then expand.</strong> Once the first stage works, add the next one, or
          add people.
        </li>
      </ol>
      <p>
        You do not have to choose a model forever. Plenty of firms start with a single{" "}
        <Link href="/services/offshore-sourcers">dedicated sourcer</Link>, add a recruiter, and
        end up running a full recruiting pod.
      </p>

      <h2>Questions to ask any RPO provider</h2>
      <ul>
        <li>Will my team be dedicated to my firm, or shared?</li>
        <li>Will they work in my ATS and follow my process?</li>
        <li>What hours will they work, and how much overlap will I get with my team?</li>
        <li>Who manages them day to day, and who do I call when something is off?</li>
        <li>Can I start with one person and scale up or down?</li>
      </ul>
      <p>
        If you are weighing the options, see how{" "}
        <Link href="/services/recruitment-process-outsourcing">
          our full-cycle, partial, and project RPO
        </Link>{" "}
        works for staffing firms, or read{" "}
        <Link href="/blog/what-is-recruitment-process-outsourcing">
          what recruitment process outsourcing is
        </Link>{" "}
        if you are new to RPO.
      </p>
    </>
  );
}

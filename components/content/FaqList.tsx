export type Faq = { question: string; answer: string };

/*
 * Native <details> keeps every answer in the server HTML (unlike an
 * animated accordion that only mounts the open answer), so search engines
 * read all of them and it works without JavaScript.
 */
export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {faqs.map((faq) => (
        <details key={faq.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink-800 [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span
              aria-hidden
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-ink-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

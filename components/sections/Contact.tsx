import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-alt py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
            Contact Us
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Let&apos;s Build Your Recruiting Team
          </h2>
          <p className="mt-6 text-base leading-7 text-ink-600">
            Tell us about your staffing business, your recruiting needs, and where your team
            needs additional capacity. Let&apos;s build an offshore RPO solution that fits your
            business.
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={0.1}>
          <div className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-10">
            <h3 className="text-xl font-bold text-ink-800">
              Tell Us About Your Recruiting Needs
            </h3>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

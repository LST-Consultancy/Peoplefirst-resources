export default function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="dot-grid-dark absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="blob-a absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-blue-500), transparent 70%)" }}
      />
      <div
        className="blob-b absolute -right-24 top-10 h-[24rem] w-[24rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-green-500), transparent 70%)" }}
      />
      <div
        className="blob-a absolute bottom-[-10rem] left-1/3 h-[26rem] w-[26rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-amber-500), transparent 70%)", animationDelay: "-6s" }}
      />
    </div>
  );
}

export default function Section({ title, gray, cols, children }) {
  return (
    <section className={`${gray ? 'bg-bg-light' : ''} mb-24`}>
      <div className={`max-w-[1200px] mx-auto px-6 py-15 grid gap-8 ${cols > 1 ? `md:grid-cols-${cols}` : ''}`}>
        <h2 className="text-[2rem] font-bold leading-[1.2] tracking-tight font-inter text-center text-brand mb-10">{title}</h2>
        {children}
      </div>
    </section>
  );
}

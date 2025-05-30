export default function BenefitCard({ emoji, title, desc }) {
  return (
    <div className="bg-white rounded-[16px] shadow-md p-6 text-center">
      <h3 className="text-[1.25rem] font-semibold leading-[1.4] tracking-normal font-inter mb-2">{emoji} {title}</h3>
      <p className="text-base font-normal leading-[1.5] tracking-normal font-inter">{desc}</p>
    </div>
  );
}

asetge-codex/alterar-layout-da-herosection-para-dois-blocos
export default function HeroSection({
  title,
  subtitle,
  buttonLink,
  buttonText,
  image,
  imageAlt = ''
}) {
  return (
    <section className="bg-[#7A8AD6] px-6 py-15 grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h1 className="text-[2.5rem] font-bold leading-[1.2] tracking-tight font-inter mb-4 text-[#333333]">
          {title}
        </h1>
        <p className="text-lg font-normal leading-[1.5] tracking-normal font-inter mb-6 text-[#333333]">
          {subtitle}
        </p>
        <a
          href={buttonLink}
          className="text-base font-semibold leading-[1.4] tracking-tight font-inter px-8 py-4 rounded-[16px] bg-[#FF6600] text-[#333333] inline-block"
        >
          {buttonText}
export default function HeroSection({ title, subtitle, buttonLink, image, imageAlt="" }) {
  return (
    <section className="bg-brand text-white px-6 py-15 grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h1 className="text-[2.5rem] font-bold leading-[1.2] tracking-tight font-inter mb-4">{title}</h1>
        <p className="text-lg font-normal leading-[1.5] tracking-normal font-inter mb-6">{subtitle}</p>
        <a href={buttonLink} className="text-base font-semibold leading-[1.4] tracking-tight font-inter px-8 py-4 rounded-[16px] bg-white text-brand inline-block">
          WhatsApp: Saiba como é feito na prática
          main
        </a>
      </div>
      <div>
        <img src={image} alt={imageAlt} className="w-full rounded-[16px]" />
      </div>
    </section>
  );
}

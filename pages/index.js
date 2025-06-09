import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import WaButton from '../components/WaButton';
import BenefitCard from '../components/BenefitCard';
import Accordion from '../components/Accordion';

export default function Home() {
  const CTA = "https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais";
  return (
    <>
      <Header />
      <HeroSection
        title="Título do Produto"
        subtitle="Subtítulo explicativo que convida o visitante"
        buttonLink={CTA}
        image="/ilustracao.png"
      />
      <Section title="Terapia Quântica: Como Funciona" cols={2}>{/*...*/}</Section>
      <Section title="Benefícios da Energia Quântica" gray cols={3}>{/*...*/}</Section>
      <Section title="Perguntas Frequentes (FAQ)" gray><Accordion items={[]} /></Section>
      <WaButton href={CTA} />
    </>
  );
}

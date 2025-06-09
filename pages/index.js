import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Section from '../components/Section';
import WaButton from '../components/WaButton';
import BenefitCard from '../components/BenefitCard';
import Accordion from '../components/Accordion';

export default function Home() {
  const CTA =
    "https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia";
  return (
    <>
      <Header />
      <HeroSection
        title="Medicina Quântica Segura Com Tecnologia de Ponta"
        subtitle="Terapia Quântica não invasiva, reconhecida na Europa e aplicada com precisão por profissional experiente."
        buttonLink={CTA}
        image="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp"
      />
      <Section title="Terapia Quântica: Como Funciona" cols={2}>{/*...*/}</Section>
      <Section title="Benefícios da Energia Quântica" gray cols={3}>{/*...*/}</Section>
      <Section title="Perguntas Frequentes (FAQ)" gray><Accordion items={[]} /></Section>
      <WaButton href={CTA} />
    </>
  );
}

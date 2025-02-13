import HeroSlider from '@/components/HeroSlider';
import Section2 from './(main)/Section2';
import SectionBreak from '@/components/SectionBreak';
import MostRead from './(main)/MostRead';
import CategorySection from './(main)/CategorySection';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Section2 />
      <SectionBreak />
      <MostRead />
      <SectionBreak />
      <CategorySection />
    </main>
  );
}

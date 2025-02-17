import HeroSlider from '@/components/HeroSlider';
import Section2 from './(main)/Section2';
import SectionBreak from '@/components/SectionBreak';
import MostRead from './(main)/MostRead';
import CategorySection from './(main)/CategorySection';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <HeroSlider />
        <Section2 />
        <SectionBreak />
        <MostRead />
        <SectionBreak />
        <CategorySection />
      </main>
    </Layout>
  );
}

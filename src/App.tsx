import HeroIntro from './sections/HeroIntro';
import CriteriaCheckup from './sections/CriteriaCheckup';
import ContentCompetency from './sections/ContentCompetency';
import ContextTonality from './sections/ContextTonality';
import Categorization from './sections/Categorization';
import ConstructionAuthor from './sections/ConstructionAuthor';

export default function App() {
  return (
    <main className="w-full min-h-screen">
      <HeroIntro />
      <CriteriaCheckup />
      <ContentCompetency />
      <ContextTonality />
      <Categorization />
      <ConstructionAuthor />
    </main>
  );
}

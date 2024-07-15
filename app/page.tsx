import About from '@/components/about';
import Header from '@/components/header';
import Resume from '@/components/resume';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      {/* We'll add more sections here later */}
    </div>
  );
}
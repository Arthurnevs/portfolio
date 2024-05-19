import './App.css';
import Header from './components/header/index.tsx';
import HeroSection from './sections/hero-section/index.tsx';
import Skills from './sections/skills/index.tsx';

function App() {
  return (
    <div>
      <Header/>
      <div className='flex flex-col py-8 px-8 lg:px-56 gap-12 pt-32'>
        <section> <HeroSection/> </section>
        <section> <Skills/> </section>
      </div>
    </div>
  );
}

export default App;

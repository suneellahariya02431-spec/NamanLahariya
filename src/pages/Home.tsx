import Hero from '../components/Hero';
import About from '../components/About';
import Journey from '../components/Journey';
import Projects from '../components/Projects';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <BlogSection />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

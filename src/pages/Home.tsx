import Hero from '../components/Hero';
import About from '../components/About';
import Journey from '../components/Journey';
import Projects from '../components/Projects';
import BlogSection from '../components/BlogSection';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Certifications from '../components/Certifications';
import BackToTop from '../components/BackToTop';
import { Helmet } from 'react-helmet-async';
import { useSiteData } from '../context/SiteContext';

export default function Home() {
  const { siteData } = useSiteData();
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-accent selection:text-black">
      <Helmet>
        <title>{siteData.name} | Portfolio</title>
        <meta name="description" content={siteData.bio} />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Certifications />
        <BlogSection />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

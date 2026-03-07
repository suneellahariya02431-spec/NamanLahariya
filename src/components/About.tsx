import Section from './Section';
import { Code2, Database, Layout, Terminal, Cpu, Brain } from 'lucide-react';
import { ReactNode } from 'react';

export default function About() {
  return (
    <Section id="about" className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
          Where Code Meets <span className="text-accent italic">Intelligence</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I build efficient, scalable digital solutions that matter. With a strong foundation in Mathematics and Computing, I approach problems with analytical precision and creative flair.
        </p>
      </div>
    </Section>
  );
}

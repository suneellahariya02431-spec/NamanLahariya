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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard 
          title="Languages" 
          icon={<Code2 className="text-accent" size={24} />}
          skills={['C++', 'JavaScript', 'Java', 'Python']}
        />
        <SkillCard 
          title="Frontend" 
          icon={<Layout className="text-blue-400" size={24} />}
          skills={['HTML5', 'CSS3', 'React', 'Tailwind CSS']}
        />
        <SkillCard 
          title="Backend" 
          icon={<Database className="text-green-400" size={24} />}
          skills={['Node.js', 'Express', 'SQL', 'MongoDB']}
        />
        <SkillCard 
          title="Tools" 
          icon={<Terminal className="text-purple-400" size={24} />}
          skills={['Git', 'GitHub', 'VS Code', 'Postman']}
        />
        <SkillCard 
          title="Core Concepts" 
          icon={<Cpu className="text-red-400" size={24} />}
          skills={['Data Structures', 'Algorithms', 'OOPs', 'DBMS']}
        />
        <SkillCard 
          title="Specialization" 
          icon={<Brain className="text-yellow-600" size={24} />}
          skills={['Mathematics', 'Computing', 'Optimization', 'Problem Solving']}
        />
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-serif font-bold mb-8 text-center">My Journey</h3>
        <div className="relative border-l border-white/10 ml-4 md:ml-1/2 md:-translate-x-px space-y-12">
          <TimelineItem 
            year="2026 - Present"
            title="Campus Ambassador"
            company="INTERSHALA"
            description="Leading campus initiatives and promoting student opportunities."
            side="left"
          />
          <TimelineItem 
            year="2025"
            title="Digital Marketing Intern"
            company="Corizo Edutech Pvt. Ltd."
            description="Managed digital campaigns and analyzed engagement metrics."
            side="right"
          />
          <TimelineItem 
            year="2025 - 2029"
            title="B.Tech, Mathematics and Computing"
            company="Madhav Institute of Technology and Science"
            description="Pursuing undergraduate degree with a focus on computational mathematics."
            side="left"
          />
        </div>
      </div>
    </Section>
  );
}

function SkillCard({ title, icon, skills }: { title: string; icon: ReactNode; skills: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-accent/30 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
          {icon}
        </div>
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/5">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ year, title, company, description, side }: { year: string; title: string; company: string; description: string; side: 'left' | 'right' }) {
  return (
    <div className={`relative pl-8 md:pl-0 ${side === 'left' ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:text-left md:ml-auto md:mr-0'} md:w-1/2`}>
      <div className="absolute top-0 left-0 md:left-auto md:right-0 w-3 h-3 -translate-x-[5px] md:translate-x-1/2 rounded-full bg-accent border-4 border-[#050505]" 
           style={side === 'right' ? { left: '-1px', right: 'auto' } : {}} 
      />
      <span className="text-accent text-sm font-mono mb-1 block">{year}</span>
      <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
      <h5 className="text-gray-400 text-sm mb-2">{company}</h5>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

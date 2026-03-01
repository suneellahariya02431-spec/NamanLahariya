import { motion } from 'motion/react';
import Section from './Section';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import useSoundEffects from '../hooks/useSoundEffects';

const education = [
  {
    id: 1,
    title: "B.Tech, Mathematics and Computing",
    institution: "MADHAV INSTITUTE OF TECHNOLOGY AND SCIENCE GWALIOR",
    period: "2025 - 2029",
    description: "Pursuing Bachelor of Technology in Mathematics and Computing."
  },
  {
    id: 2,
    title: "Senior Secondary (XII), MPBSE",
    institution: "BRIGHT CONVENT HR. SEC. SCHOOL",
    period: "2025",
    description: "Stream: Science. Percentage: 68.00%"
  },
  {
    id: 3,
    title: "Secondary (X), CBSE",
    institution: "The Radient Higher Secondary School, Gwalior",
    period: "2023",
    description: "Percentage: 71.00%"
  }
];

const experience = [
  {
    id: 1,
    title: "Campus Ambassador • Internship",
    company: "INTERSHALA, Virtual",
    period: "Jan 2026 - Present",
    description: "Representing Intershala on campus, promoting internships and training programs to students."
  },
  {
    id: 2,
    title: "Digital Marketing • Internship",
    company: "Corizo Edutech Pvt. Ltd., Virtual",
    period: "Sep 2025 - Nov 2025",
    description: "Gained experience in digital marketing strategies and execution."
  }
];

export default function Journey() {
  const { playHover, playAppear } = useSoundEffects();

  return (
    <Section id="journey" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-accent/10 text-accent border border-accent/20">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Education <span className="text-accent italic">Journey</span>
            </h2>
          </div>

          <div className="space-y-12 border-l border-white/10 ml-4 pl-8 relative">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onViewportEnter={() => setTimeout(playAppear, index * 200)}
                className="relative group"
                onMouseEnter={playHover}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-accent group-hover:scale-125 transition-all duration-300" />
                
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-xs font-mono text-accent tracking-wider uppercase">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-400">
                    {item.institution}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Briefcase size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Work <span className="text-blue-400 italic">Experience</span>
            </h2>
          </div>

          <div className="space-y-12 border-l border-white/10 ml-4 pl-8 relative">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onViewportEnter={() => setTimeout(playAppear, index * 200)}
                className="relative group"
                onMouseEnter={playHover}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-blue-400 group-hover:scale-125 transition-all duration-300" />
                
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-xs font-mono text-blue-400 tracking-wider uppercase">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-400">
                    {item.company}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

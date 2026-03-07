import Section from './Section';
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface JourneyItemData {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function Journey() {
  const [education, setEducation] = useState<JourneyItemData[]>([]);
  const [experience, setExperience] = useState<JourneyItemData[]>([]);

  useEffect(() => {
    fetch('/api/journey')
      .then(res => res.json())
      .then(data => {
        setEducation(data.education);
        setExperience(data.experience);
      })
      .catch(err => console.error('Failed to fetch journey:', err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <Section id="journey">
      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-center">
        My <span className="text-accent italic">Journey</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-accent" size={32} />
            <h3 className="text-2xl font-bold">Education Journey</h3>
          </div>
          <div className="space-y-8 border-l border-white/10 ml-3 pl-8 relative">
            {education.map((item) => (
              <JourneyItem 
                key={item.id}
                variants={itemVariants}
                year={item.year}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
              />
            ))}
          </div>
        </motion.div>

        {/* Work Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-accent" size={32} />
            <h3 className="text-2xl font-bold">Work Journey</h3>
          </div>
          <div className="space-y-8 border-l border-white/10 ml-3 pl-8 relative">
            {experience.map((item) => (
              <JourneyItem 
                key={item.id}
                variants={itemVariants}
                year={item.year}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function JourneyItem({ year, title, subtitle, description, variants }: { year: string; title: string; subtitle: string; description: string; variants?: any }) {
  return (
    <motion.div variants={variants} className="relative">
      <div className="absolute top-0 -left-[37px] w-4 h-4 rounded-full bg-[#050505] border-2 border-accent" />
      <span className="text-accent text-sm font-mono mb-1 block">{year}</span>
      <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
      <h5 className="text-gray-400 text-sm mb-2">{subtitle}</h5>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

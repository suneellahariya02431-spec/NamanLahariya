import Section from './Section';
import { Code2, Database, Layout, Terminal, Cpu, Brain } from 'lucide-react';
import { ReactNode } from 'react';
import { motion } from 'motion/react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Section id="about" className="relative">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
          Where Code Meets <span className="text-accent italic">Intelligence</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I build efficient, scalable digital solutions that matter. With a strong foundation in Mathematics and Computing, I approach problems with analytical precision and creative flair.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <SkillCard 
          variants={itemVariants}
          title="Languages" 
          icon={<Code2 className="text-accent" size={24} />}
          skills={['C++', 'JavaScript', 'Java', 'Python']}
        />
        <SkillCard 
          variants={itemVariants}
          title="Frontend" 
          icon={<Layout className="text-blue-400" size={24} />}
          skills={['HTML5', 'CSS3', 'React', 'Tailwind CSS']}
        />
        <SkillCard 
          variants={itemVariants}
          title="Backend" 
          icon={<Database className="text-green-400" size={24} />}
          skills={['Node.js', 'Express', 'SQL', 'MongoDB']}
        />
        <SkillCard 
          variants={itemVariants}
          title="Tools" 
          icon={<Terminal className="text-purple-400" size={24} />}
          skills={['Git', 'GitHub', 'VS Code', 'Postman']}
        />
        <SkillCard 
          variants={itemVariants}
          title="Core Concepts" 
          icon={<Cpu className="text-red-400" size={24} />}
          skills={['Data Structures', 'Algorithms', 'OOPs', 'DBMS']}
        />
        <SkillCard 
          variants={itemVariants}
          title="Specialization" 
          icon={<Brain className="text-yellow-600" size={24} />}
          skills={['Mathematics', 'Computing', 'Optimization', 'Problem Solving']}
        />
      </motion.div>
    </Section>
  );
}

function SkillCard({ title, icon, skills, variants }: { title: string; icon: ReactNode; skills: string[]; variants?: any }) {
  return (
    <motion.div 
      variants={variants}
      className="p-6 rounded-2xl bg-[#121212] border border-white/5 hover:border-accent/30 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div 
          className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ 
            scale: [0.8, 1.2, 1], 
            opacity: 1,
            transition: { 
              duration: 0.6, 
              ease: "easeOut",
              delay: 0.2 
            } 
          }}
          viewport={{ once: true }}
        >
          {icon}
        </motion.div>
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/5">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

import Section from './Section';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Github, Linkedin, Lock, Unlock } from 'lucide-react';
import { useState, FormEvent, ChangeEvent, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSiteData } from '../context/SiteContext';
import EditableField from './EditableField';

export default function Contact() {
  const { siteData, isLoggedIn, login, logout } = useSiteData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    const emailAddress = siteData.email.replace('mailto:', '');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: formData.subject || `New message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <Section id="contact" className="pb-32">
      <div className="bg-[#121212] rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Let's Turn Ideas Into <br />
              <span className="text-accent italic">Reality Together</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Whether you have a project in mind or just want to say hi, I'm always open to discussing new opportunities and ideas.
            </p>

            <div className="space-y-6">
              <ContactItem 
                icon={<Mail size={20} />}
                label="Email"
                value={<EditableField field="email">{siteData.email.replace('mailto:', '')}</EditableField>}
                href={siteData.email}
              />
              <ContactItem 
                icon={<MapPin size={20} />}
                label="Location"
                value={<EditableField field="location">{siteData.location}</EditableField>}
              />
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 bg-white/5 rounded-2xl border border-accent/20"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase">Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-[#050505] border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</span>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-500 uppercase">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-[#050505] border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</span>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase">Message *</label>
                    <textarea 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-[#050505] border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-white/10'}`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</span>}
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-black font-bold py-4 rounded-lg hover:bg-accent-dim transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center text-gray-600 text-sm flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <a href={siteData.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all duration-300">
            <Github size={20} />
          </a>
          <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all duration-300">
            <Linkedin size={20} />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <p>© {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
          <button 
            onClick={() => {
              if (isLoggedIn) {
                logout();
              } else {
                const pwd = prompt('Enter admin password (hint: admin):');
                if (pwd) {
                  if (!login(pwd)) alert('Incorrect password');
                }
              }
            }}
            className="text-gray-600 hover:text-accent transition-colors ml-2"
            title={isLoggedIn ? "Logout" : "Admin Login"}
          >
            {isLoggedIn ? <Unlock size={14} /> : <Lock size={14} />}
          </button>
        </div>
      </footer>
    </Section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: ReactNode; label: string; value: ReactNode; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-accent group-hover:bg-white/10 transition-all">
        {icon}
      </div>
      <div>
        <p className="text-xs font-mono text-gray-500 uppercase mb-0.5">{label}</p>
        <div className="text-white font-medium group-hover:text-accent transition-colors">{value}</div>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

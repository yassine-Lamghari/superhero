import Image from "next/image";
import Link from "next/link";
import { Mail, ExternalLink, Code2, Server, Globe2, ChevronRight, GraduationCap, Briefcase, Bot, Database } from "lucide-react";
import { projectsData } from "../data/projects";

const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-indigo-500/30">
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10 container mx-auto px-6 py-12 md:py-24 max-w-6xl">
        
        {/* HERO SECTION */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-32 pt-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-2">
              <Bot className="w-4 h-4" /> Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
              Yassine Lamghari
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-neutral-400">
              <span className="text-indigo-400 font-medium">AI Engineer</span> & Data Enthusiast
            </h2>
            <p className="text-lg text-neutral-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Building intelligent backend systems, fine-tuning LLMs, and leveraging Machine Learning to solve real-world problems.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <a href="#projects" className="group px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-300 flex items-center gap-2">
                View My Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 ml-4">
                <a href="https://github.com/yassine-Lamghari" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/yassine-lamghari-61b70b330/" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-[#0a66c2] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:yassine.lamghari14@gmail.com" className="text-neutral-500 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            {/* Profile Picture Container effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            <div className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-3xl bg-neutral-900 border-2 border-neutral-800 overflow-hidden flex items-center justify-center">
               <Image 
                 src="/profile.jpeg" 
                 alt="Yassine Lamghari - Profile Picture" 
                 fill 
                 className="object-cover object-top hover:scale-105 transition-transform duration-500" 
                 priority
               />
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mb-32 space-y-12">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Code2 className="text-indigo-400" /> Technical Arsenal
            </h3>
            <div className="w-20 h-1 bg-indigo-500/50 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Skill Category */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500/50 transition-colors">
              <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
                <Bot className="text-indigo-400" /> AI & ML
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "NLP", "LLMs", "LangChain", "LlamaIndex", "RAG", "CNN", "LSTM"].map(skill => (
                  <span key={skill} className="px-3 py-1 text-sm bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Category */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 transition-colors">
              <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
                <Database className="text-blue-400" /> Data & Analysis
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Data Processing", "Time Series"].map(skill => (
                  <span key={skill} className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skill Category */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-teal-500/50 transition-colors">
              <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
                <Server className="text-teal-400" /> Tools & Backend
              </h4>
              <div className="flex flex-wrap gap-2">
                {["FastAPI", "Docker", "Git", "GitHub", "Django", "Pytest", "Jupyter", "Web Services"].map(skill => (
                  <span key={skill} className="px-3 py-1 text-sm bg-teal-500/10 text-teal-300 border border-teal-500/20 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          
          <section className="space-y-8">
            <div className="space-y-2 mb-8">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Briefcase className="text-indigo-400" /> Experience
              </h3>
              <div className="w-20 h-1 bg-indigo-500/50 rounded-full" />
            </div>

            <div className="relative border-l border-neutral-800 pl-8 space-y-10">
              <div className="relative">
                <div className="absolute -left-[39px] w-4 h-4 bg-indigo-500 rounded-full ring-4 ring-neutral-950" />
                <h4 className="text-xl font-semibold text-white">AI Orchestrator Backend Developer</h4>
                <p className="text-indigo-400 text-sm mb-3 font-mono">Arimayi (France) • Sept 2025 – 2026</p>
                <ul className="text-neutral-400 space-y-2 text-sm">
                  <li className="flex gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Designed and developed an orchestration backend in Python (FastAPI) to coordinate and chain AI services (sentiment analysis, translation, summarization, OCR).</li>
                  <li className="flex gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Managed asynchronous communication between the central API and microservices, integrating external LLM models (Groq) and ensuring database management.</li>
                  <li className="flex gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Implemented containerization with Docker and Docker Compose to simplify deployment and ensured application reliability via rigorous testing (unit, integration, e2e with Pytest).</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[39px] w-4 h-4 bg-neutral-700 rounded-full ring-4 ring-neutral-950" />
                <h4 className="text-xl font-semibold text-white">Medical AI Decision System Intern</h4>
                <p className="text-indigo-400 text-sm mb-3 font-mono">CHU Fès • June 2025 – Sept 2025</p>
                <ul className="text-neutral-400 space-y-2 text-sm">
                  <li className="flex gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-neutral-500 flex-shrink-0" /> Developed an automatic disease detection module (diabetes, hypertension) by analyzing patient data.</li>
                  <li className="flex gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-neutral-500 flex-shrink-0" /> Implemented a personalized treatment recommendation system based on similar patient cases analysis.</li>
                  <li className="flex gap-2"><ChevronRight className="w-4 h-4 mt-0.5 text-neutral-500 flex-shrink-0" /> Integrated a medical chatbot to answer user questions and guide them toward appointment booking or medical follow-up.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="space-y-2 mb-8">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <GraduationCap className="text-indigo-400" /> Education
              </h3>
              <div className="w-20 h-1 bg-indigo-500/50 rounded-full" />
            </div>

            <div className="relative border-l border-neutral-800 pl-8 space-y-10">
              <div className="relative">
                <div className="absolute -left-[39px] w-4 h-4 bg-indigo-500 rounded-full ring-4 ring-neutral-950" />
                <h4 className="text-xl font-semibold text-white">Engineering Degree: AI & Data Technologies</h4>
                <p className="text-indigo-400 text-sm mb-2 font-mono">ENSAM Meknès • 2023 – 2027</p>
                <p className="text-neutral-400 text-sm">Advanced computer science, machine learning architectures, and scalable data engineering systems.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[39px] w-4 h-4 bg-neutral-700 rounded-full ring-4 ring-neutral-950" />
                <h4 className="text-xl font-semibold text-white">Preparatory Cycle</h4>
                <p className="text-indigo-400 text-sm mb-2 font-mono">ENSAM Meknès • 2022 – 2023</p>
                <p className="text-neutral-400 text-sm">Intensive mathematics, physics, and fundamental engineering sciences.</p>
              </div>

               <div className="relative">
                <div className="absolute -left-[39px] w-4 h-4 bg-neutral-700 rounded-full ring-4 ring-neutral-950" />
                <h4 className="text-xl font-semibold text-white">Baccalaureate in Physics</h4>
                <p className="text-indigo-400 text-sm mb-2 font-mono">Lycée El Mourabitine • 2021 – 2022</p>
              </div>
            </div>
          </section>

        </div>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-32">
          <div className="space-y-2 mb-12">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Globe2 className="text-indigo-400" /> Featured Projects
            </h3>
            <div className="w-20 h-1 bg-indigo-500/50 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="group relative p-[1px] rounded-2xl bg-neutral-800 hover:bg-gradient-to-br hover:from-indigo-500 hover:to-blue-500 transition-all duration-500">
                  <div className="relative flex flex-col h-full bg-neutral-950 p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg">
                        <Icon className="w-6 h-6 text-neutral-300" />
                      </div>
                      <a href={`https://github.com/${p.repo}`} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{p.title}</h4>
                    <p className="text-neutral-400 text-sm flex-grow mb-2">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        

        {/* CERTIFICATIONS & LANGUAGES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 text-sm">
           <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-indigo-400">🏆</span> Certifications
              </h3>
              <ul className="space-y-4 text-neutral-400">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> IBM Python for Data Science</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Machine Learning (SVM, Decision Trees, Random Forests)</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> SQL Standard Certifications</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Jupyter Notebook Advanced Environments</li>
              </ul>
           </div>
           
           <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-indigo-400">🌍</span> Languages
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-300">Arabic</span>
                  <span className="text-indigo-400 font-mono text-xs">Native</span>
                </div>
                <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden"><div className="w-full h-full bg-indigo-500" /></div>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-neutral-300">French</span>
                  <span className="text-indigo-400 font-mono text-xs">Fluent</span>
                </div>
                <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden"><div className="w-[90%] h-full bg-indigo-500" /></div>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-neutral-300">English</span>
                  <span className="text-indigo-400 font-mono text-xs">Fluent</span>
                </div>
                <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-indigo-500" /></div>
              </div>
           </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="mt-32 max-w-2xl mx-auto text-center bg-neutral-900/50 border border-neutral-800 rounded-3xl p-10 md:p-16">
          <Bot className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s build something intelligent.</h3>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Whether it&apos;s fine-tuning LLMs or building scalable backends, I&apos;m ready to contribute to impactful projects.
          </p>
          <a href="mailto:yassine.lamghari14@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors">
            <Mail className="w-5 h-5" /> Say Hello
          </a>
        </section>

      </main>

      <footer className="border-t border-neutral-800 bg-neutral-950 mt-24">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Yassine Lamghari. Designed for the Future.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="https://github.com/yassine-Lamghari" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
               <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://linkedin.com/in/yassine-lamghari-61b70b330/" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2">
               <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
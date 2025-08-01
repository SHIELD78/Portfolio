"use client";

import { useState, useEffect } from "react";
import {
  Shield,
  Terminal,
  Lock,
  Eye,
  Bug,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Zap,
  Server,
  Database,
  MapPin,
  Phone,
} from "lucide-react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import TypingEffect from "./TypingEffect";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const skillGroups = [
    {
      category: "Programming Languages",
      icon: Terminal,
      skills: ["C++", "Java", "JavaScript", "Dart"],
      color: "from-blue-600 to-blue-400",
    },
    {
      category: "Tools & Technologies",
      icon: Zap,
      skills: ["Git", "Postman", "Wireshark", "ELK Stack", "MongoDB"],
      color: "from-green-600 to-green-400",
    },
    {
      category: "Frameworks",
      icon: Server,
      skills: ["Flutter", "Express.js", "React"],
      color: "from-purple-600 to-purple-400",
    },
    {
      category: "Platforms & OS",
      icon: Shield,
      skills: ["Ubuntu", "Kali Linux", "VirtualBox", "Clerk Auth"],
      color: "from-red-600 to-red-400",
    },
  ];

  const projects = [
    {
      title: "VTour – Virtual Campus Tour App",
      description:
        "Built a mobile app to guide students through virtual campus tours using Flutter. Designed intuitive UI/UX for a smooth and interactive navigation experience. Provided students with easy access to campus maps, departments, and facility information.",
      tech: ["Flutter", "Firebase", "UI/UX", "Android Development"],
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/SHIELD78/VTOUR",
    },
    {
      title: "SSH Honeypot with ELK Stack",
      description:
        "Deployed Cowrie honeypot on Ubuntu to simulate an SSH server for logging unauthorised access attempts. Integrated with ELK Stack to visualise attacker logs and analyse malicious activity patterns. Developed understanding of network security, log analysis, and real-time threat monitoring.",
      tech: ["Cybersecurity", "Cowrie", "Ubuntu", "ELK", "Virtual Machines"],
      icon: Bug,
      color: "from-red-500 to-pink-500",
      demo: "https://youtu.be/6NElUW4gqSc",
    },
    {
      title: "🎯 Organizo – Task Management Web App",
      description:
        "A modern Kanban-style task management platform designed for individuals and teams to organize, track, and manage tasks efficiently. Features secure authentication, board & task management, drag-and-drop functionality, full CRUD operations, team collaboration support, and fully responsive UI.",
      tech: ["React", "Express.js", "MongoDB", "Clerk Auth"],
      icon: Terminal,
      color: "from-purple-500 to-violet-500",
      github: "https://github.com/SHIELD78/web-project",
    },
  ];

  const experiences = [
    {
      type: "Education",
      title: "B.Tech in Computer Science and Engineering",
      organization: "Vellore Institute of Technology (VIT), Vellore",
      period: "Expected Graduation: 2027",
      description:
        "Currently pursuing Bachelor of Technology in Computer Science and Engineering with focus on cybersecurity, software development, and mobile application development.",
      icon: Database,
      color: "border-blue-500",
    },
    {
      type: "Internship",
      title: "Cyber Security Analyst Intern",
      organization: "IBM (IBM Career Education Program) – Remote",
      period: "May 2025 – June 2025",
      description:
        "Analysed simulated cyber threats and applied defensive strategies to secure system environments. Utilised industry-standard tools to monitor, detect, and report vulnerabilities in network infrastructures. Collaborated in virtual labs powered by IBM Developer Skills Network to solve real-world cybersecurity challenges. Gained hands-on experience with malware analysis, threat intelligence, and penetration testing basics.",
      icon: Shield,
      color: "border-green-500",
    },
    {
      type: "Education",
      title: "Senior Secondary (PCM + Computer Science)",
      organization: "Kendriya Vidyalaya",
      period: "Graduated: 2023",
      description:
        "Completed senior secondary education with Physics, Chemistry, Mathematics, and Computer Science. Built strong foundation in programming and analytical thinking.",
      icon: Server,
      color: "border-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Matrix Background Effect */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-cyan-900/20" />
        <div
          className="matrix-bg absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300ff41' fillOpacity='0.1'%3E%3Ctext x='10' y='20' fontFamily='monospace' fontSize='12'%3E1%3C/text%3E%3Ctext x='30' y='40' fontFamily='monospace' fontSize='12'%3E0%3C/text%3E%3Ctext x='50' y='15' fontFamily='monospace' fontSize='12'%3E1%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="bg-gray-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full px-8 py-3">
          <div className="flex space-x-8">
            {[
              { icon: Shield, label: "Home", target: "home" },
              { icon: Zap, label: "Skills", target: "skills" },
              { icon: Terminal, label: "Experience", target: "experience" },
              { icon: Bug, label: "Projects", target: "projects" },
              { icon: Mail, label: "Contact", target: "contact" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.target)}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-all duration-200 font-mono text-sm cursor-pointer"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Introduction */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="space-y-2">
                <p className="text-cyan-400 font-mono text-lg flex items-center animate-fade-in">
                  <Terminal className="mr-2 h-5 w-5" />
                  Welcome to my digital portfolio
                </p>

                <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4 hover:animate-pulse">
                  Hello
                </h1>

                <h2 className="text-4xl lg:text-6xl font-bold">
                  I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 animate-gradient font-black uppercase tracking-wider">
                    RITIK ROUSHAN RANA
                  </span>
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-lg">
                  <Badge
                    variant="outline"
                    className="border-green-500 text-green-400 bg-green-500/10 hover:bg-green-500/20 transition-colors"
                  >
                    IBM Cyber Security Analyst
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
                  >
                    VIT CSE Student
                  </Badge>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed font-mono">
                  <TypingEffect
                    text="Detail-oriented and motivated Computer Science and Engineering undergraduate at VIT Vellore with hands-on experience in cybersecurity through an internship at IBM as a Cyber Security Analyst."
                    speed={30}
                  />
                </p>
                <div className="flex flex-col space-y-2 text-gray-400 font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-cyan-400" />
                    <span>New Delhi, 110055</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-400" />
                    <span>+91 8660405653</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => handleNavClick("projects")}
                  className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-black font-semibold border-0 hover:scale-105 transition-transform"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleNavClick("contact")}
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent hover:scale-105 transition-transform"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </div>

              <div className="flex space-x-6">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/SHIELD78",
                    color: "hover:text-white",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/ritik-roushan-rana-b6a89528a/",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: Mail,
                    href: "mailto:ritikrana8596@gmail.com",
                    color: "hover:text-green-400",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? "_self" : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? ""
                        : "noopener noreferrer"
                    }
                    className={`text-gray-400 ${social.color} transition-all duration-200 hover:scale-125 hover:rotate-12`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Photo with Cyber Effects */}
            <div
              className={`relative flex justify-center transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <div className="relative">
                {/* Outer rotating ring */}
                <div
                  className="absolute -inset-6 rounded-full border-2 border-cyan-500/30 animate-spin"
                  style={{ animationDuration: "20s" }}
                />

                {/* Middle pulsing ring */}
                <div className="absolute -inset-4 rounded-full border border-green-500/50 bg-green-500/5 animate-pulse" />

                {/* Secondary rotating ring */}
                <div
                  className="absolute -inset-2 rounded-full border border-cyan-400/20 animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                />

                {/* Inner glowing border */}
                <div className="relative w-96 h-96 rounded-full overflow-hidden border-2 border-cyan-400 shadow-2xl shadow-cyan-500/50">
                  {/* Scanning line effect */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan" />

                  {/* Profile Image - Using your actual photo */}
                  <img
                    src="/images/profile-photo.jpeg"
                    alt="Ritik Roushan Rana - Cybersecurity Analyst"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: "center 20%" }}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Corner brackets for tech aesthetic */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400 animate-pulse" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400 animate-pulse" />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400 animate-pulse" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400 animate-pulse" />

                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2 flex items-center space-x-1 bg-gray-900 border border-green-500 rounded-full px-3 py-2 animate-pulse">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  <span className="text-green-400 text-sm font-mono">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -top-12 -right-6 bg-gray-900/80 border border-red-500/50 rounded-lg px-3 py-2 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-sm font-mono">IBM</span>
                </div>
              </div>

              <div
                className="absolute -bottom-12 -left-6 bg-gray-900/80 border border-blue-500/50 rounded-lg px-3 py-2 animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-2">
                  <Bug className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-mono">VIT</span>
                </div>
              </div>

              <div
                className="absolute top-4 -left-8 bg-gray-900/80 border border-green-500/50 rounded-lg px-3 py-2 animate-bounce"
                style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
              >
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-mono">CSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">&gt;</span> Skills
            </h2>
            <p className="text-xl text-gray-400 font-mono">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((skillGroup, index) => (
              <div
                key={index}
                className="relative group hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 h-full hover:border-cyan-500/50 transition-all duration-300">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-lg mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <skillGroup.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4 font-mono">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <Badge
                          variant="outline"
                          className="border-gray-600 text-gray-300 bg-gray-800/50 hover:border-cyan-500 hover:text-cyan-400 transition-colors font-mono text-xs"
                        >
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-green-400">&gt;</span> Projects
            </h2>
            <p className="text-xl text-gray-400 font-mono">
              Featured development and technical projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative hover:-translate-y-2 hover:scale-105 transition-all duration-300"
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform`}
                      >
                        <project.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-white font-mono text-lg font-semibold">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-gray-600 text-gray-300 bg-gray-800/50 font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      {/* Show Code button unless it's the ELK project */}
                      {project.title !== "SSH Honeypot + ELK + Wireshark" &&
                        project.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 font-mono bg-transparent hover:scale-105 transition-all"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                          >
                            <Github className="mr-2 h-3 w-3" />
                            Code
                          </Button>
                        )}

                      {/* Always show Demo button if available */}
                      {project.demo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 font-mono bg-transparent hover:scale-105 transition-all"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-red-400">&gt;</span> Experience & Education
            </h2>
            <p className="text-xl text-gray-400 font-mono">
              My professional and academic background
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border-l-4 ${item.color} hover:bg-gray-800/50 hover:translate-x-2 transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-white font-mono">
                      {item.title}
                    </h3>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-gray-600 text-gray-300 bg-gray-800/50 font-mono w-fit"
                  >
                    {item.period}
                  </Badge>
                </div>
                <p className="text-cyan-400 font-medium mb-2 font-mono">
                  {item.organization}
                </p>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              <span className="text-cyan-400">&gt;</span> Let's Connect &
              Collaborate
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-mono">
              Ready to discuss projects, opportunities, or just connect? Let's
              build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-black font-semibold font-mono hover:scale-105 transition-transform"
                onClick={() =>
                  window.open("mailto:ritikrana8596@gmail.com", "_self")
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                ritikrana8596@gmail.com
              </Button>
              <a
                href="https://drive.google.com/file/d/1Zn-sQgsQgNKLpSg0k7fljaOu_FfU9U5W/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-mono bg-transparent hover:scale-105 transition-transform text-sm rounded-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 font-mono">
            &copy; 2024 Ritik Roushan Rana. Building the future, one line of
            code at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}

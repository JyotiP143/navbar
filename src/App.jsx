'use client';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const App = ({ Portfolio }) => {
  const projects = [
    { title: "Project One", description: "Description of Project One" },
    { title: "Project Two", description: "Description of Project Two" },
  ];

  const categories = [
    { title: "Category One", image: "/path-to-image1.jpg" },
    { title: "Category Two", image: "/path-to-image2.jpg" },
  ];

  <Portfolio projects={projects} categories={categories} />;

  const [activeSkill, setActiveSkill] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const skills = [
    { name: "HTML", percentage: 95, color: "from-orange-400 to-red-500" },
    { name: "CSS", percentage: 90, color: "from-blue-400 to-indigo-500" },
    { name: "JavaScript", percentage: 85, color: "from-yellow-400 to-yellow-600" },
    { name: "React", percentage: 80, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", percentage: 75, color: "from-gray-600 to-gray-800" },
    { name: "SEO", percentage: 70, color: "from-green-400 to-emerald-600" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)];
      setActiveSkill(randomSkill.name);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">Jyoti Patil</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-purple-600 transition-colors">
              Skillshi
            </a>
            <a href="#experience" className="hover:text-purple-600 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-purple-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">
              Contact
            </a>
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-2">
            <a href="#about" className="block py-2 px-4 hover:bg-purple-100" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" className="block py-2 px-4 hover:bg-purple-100" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#experience" className="block py-2 px-4 hover:bg-purple-100" onClick={toggleMenu}>
              Experience
            </a>
            <a href="#projects" className="block py-2 px-4 hover:bg-purple-100" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#contact" className="block py-2 px-4 hover:bg-purple-100" onClick={toggleMenu}>
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <div className="min-h-screen w-full bg-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-300 to-yellow-200 opacity-50 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Top right decoration */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-yellow-300" />
            ))}
          </div>
          <h2 className="text-xl font-bold">Portfolio 2025</h2>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Welcome to My Portfolio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Frontend Developer | SEO Specialist
              </p>
            </div>

            <div className="flex items-center gap-4 max-w-md">
              <input
                type="text"
                placeholder="Get in Touch"
                className="flex-grow text-lg py-3 px-4 border border-purple-200 rounded-md focus:outline-none focus:border-purple-400"
              />
              <button className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-yellow-300" />
              ))}
            </div>
          </div>

          <div className="relative flex-1 flex justify-center items-center">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden relative">
              {/* bg-gradient-to-br from-purple-300 to-yellow-200 */}
              <div className="absolute inset-0  border-2  opacity-50 rounded-full" />
              <img
                src="Image/Untitled design(4).png"
                alt="Portfolio"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute top-0 right-0 w-32 md:w-48 h-full bg-purple-300" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen bg-white p-4 md:p-8 lg:p-12">
        {/* Decorative dots */}
        <div className="flex justify-end mb-4">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-200"></div>
            <div className="w-2 h-2 rounded-full bg-blue-200"></div>
            <div className="w-2 h-2 rounded-full bg-blue-200"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image Section */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Main circle with image */}
              <div className="absolute inset-0 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src="Image/img2.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative outer circle */}
              <div className="absolute -inset-4 rounded-full border-2 border-green-300"></div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-black"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-green-300"></div>
            </div>
            {/* Bottom dots */}
            <div className="flex gap-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-blue-200"></div>
              <div className="w-2 h-2 rounded-full bg-blue-200"></div>
              <div className="w-2 h-2 rounded-full bg-blue-200"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* About Me Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">About Me</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Hello! I'm Jyoti Patil, a passionate frontend developer with 1 year
                  of experience in creating beautiful and functional web
                  applications. I specialize in modern web technologies and have a
                  keen eye for design and user experience.
                </p>
                <p>
                  My journey in web development has been exciting, and I'm always
                  eager to learn new technologies and improve my skills. When I'm not
                  coding, you can find me exploring the latest web design trends or
                  working on personal projects.
                </p>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="space-y-4">
              <div className="inline-block bg-green-300 px-6 py-2 rounded-lg">
                <h2 className="text-xl font-bold text-gray-800">Work Experience</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-light text-green-400">2022</span>
                  <div className="h-px flex-1 bg-green-200"></div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-light text-green-400">2023</span>
                  <div className="h-px flex-1 bg-green-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="min-h-screen w-full bg-gray-900 text-white font-sans md:p-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0" />

        {/* Glassmorphism container */}
        <div className="relative z-10 max-w-6xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-white/30 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                <img
                  src="Image/img3.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out" />
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{skill.name}</span>
                    <span className="text-lg font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full relative overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: `${activeSkill === skill.name ? skill.percentage : 0}%`,
                        opacity: activeSkill === skill.name ? 1 : 0.7,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 left-20 w-20 h-20 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

        {/* Footer */}
        <div className="absolute bottom-4 left-4 text-xl font-bold text-white/80">
          Portfolio 2025
        </div>
      </div>
      {/* Experience Section */}
      <div className=" bg-black text-white p-8 relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-[#7fffd4]/20 blur-3xl" />

        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-[8vw] md:text-[3vw] font-bold tracking-tight">
            Work Experience
          </h1>
          <span className="md:text-[1.2vw] text-[4] font-medium">Portfolio 2025</span>
        </div>

        {/* Experience Grid */}
        <div className="md:grid md:gap-24 relative">
          {/* Connecting Line */}
          <div className="absolute left-[140px] top-0 bottom-0 md:w-0.5 bg-[#7fffd4]/20" />

          {/* Experience Items */}
          <div className="relative md:grid grid-cols-[280px_1fr] items-center gap-8">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-[#7fffd4] absolute -right-8 top-1/2 -translate-y-1/2 md:block hidden" />
              <h3 className="text-2xl font-semibold">Portstay</h3>
            </div>
            <div className="bg-[#7fffd4]/5 backdrop-blur-sm rounded-2xl p-8 md:w-full w-[80vw]">
              <h4 className="text-xl font-medium mb-4">Frontend Developer</h4>
              <div className="h-0.5 md:w-24  bg-[#7fffd4]/40 mb-4" />
            </div>
          </div>

        </div>

        {/* Bottom Decorative Circle */}
        <div className="absolute -right-40 -bottom-40 w-[600px] h-[600px] rounded-full bg-[#7fffd4]/10 blur-3xl" />
      </div>

      {/* Contact Section */}
      <div className="min-h-screen bg-[#201c44] text-white p-4 md:p-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#97E8E8]/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#97E8E8]/10 blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-8">Get in Touch</h1>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/5 rounded-lg border border-white/10 focus:border-[#97E8E8] focus:outline-none focus:ring-1 focus:ring-[#97E8E8] transition-colors placeholder:text-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/5 rounded-lg border border-white/10 focus:border-[#97E8E8] focus:outline-none focus:ring-1 focus:ring-[#97E8E8] transition-colors placeholder:text-white/50"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-6 py-4 bg-white/5 rounded-lg border border-white/10 focus:border-[#97E8E8] focus:outline-none focus:ring-1 focus:ring-[#97E8E8] transition-colors placeholder:text-white/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-black border-2 border-[#97E8E8] text-[#97E8E8] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#97E8E8] hover:text-black"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-[#97E8E8] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-6">
                  Connect with me on social media:
                </h2>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {/* Social Icons */}
                  {["#", "#", "#", "#"].map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#97E8E8] text-[#97E8E8] hover:bg-[#97E8E8] hover:text-black transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="...SVG SPECIFIC PATH Here" />
                      </svg>
                    </a>))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Jyoti Patil. All rights reserved.</p>
        </div>
      </footer>
    </div >
  );
}
export default App

import { useState } from 'react';
import { FileText, Layers, Target, User, Menu, X, Download } from 'lucide-react';
import WritingSamples from '@/app/components/WritingSamples';
import InfoArchitecture from '@/app/components/InfoArchitecture';
import ContentStrategy from '@/app/components/ContentStrategy';
import Resume from '@/app/components/Resume';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('home')}
              className="font-semibold text-xl text-gray-900 hover:text-blue-600 transition-colors"
            >
              Chris Peterson
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('samples')}
                className={`flex items-center gap-2 transition-colors ${activeSection === 'samples' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <FileText className="w-4 h-4" />
                <span>Writing Samples</span>
              </button>
              <button
                onClick={() => scrollToSection('architecture')}
                className={`flex items-center gap-2 transition-colors ${activeSection === 'architecture' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <Layers className="w-4 h-4" />
                <span>Info Architecture</span>
              </button>
              <button
                onClick={() => scrollToSection('strategy')}
                className={`flex items-center gap-2 transition-colors ${activeSection === 'strategy' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <Target className="w-4 h-4" />
                <span>Content Strategy</span>
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className={`flex items-center gap-2 transition-colors ${activeSection === 'resume' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <User className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <button
                onClick={() => scrollToSection('samples')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 w-full"
              >
                <FileText className="w-4 h-4" />
                <span>Writing Samples</span>
              </button>
              <button
                onClick={() => scrollToSection('architecture')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 w-full"
              >
                <Layers className="w-4 h-4" />
                <span>Info Architecture</span>
              </button>
              <button
                onClick={() => scrollToSection('strategy')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 w-full"
              >
                <Target className="w-4 h-4" />
                <span>Content Strategy</span>
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 w-full"
              >
                <User className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-6">
                Technical Writer & Content Strategist
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Transforming Complex Ideas into Clear Documentation
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I specialize in creating user-centered documentation, information architecture,
                and content strategies that make technical products accessible and engaging.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('samples')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('resume')}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
                  alt="Technical writing workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Samples Section */}
      <section id="samples" className="py-20 px-6 bg-gray-50">
        <WritingSamples />
      </section>

      {/* Info Architecture Section */}
      <section id="architecture" className="py-20 px-6">
        <InfoArchitecture />
      </section>

      {/* Content Strategy Section */}
      <section id="strategy" className="py-20 px-6 bg-gray-50">
        <ContentStrategy />
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6">
        <Resume />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-gray-400 mb-6">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="mailto:sarah.chen@example.com" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 Sarah Chen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

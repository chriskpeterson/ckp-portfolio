import React from 'react';
import { Download, Briefcase, GraduationCap, Code, Layout, Users, Wrench, Globe } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
    alert('Resume download would start here. In a production app, this would download a PDF file.');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          12+ years of experience driving content strategy and system migrations for enterprise hardware and software.
        </p>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg cursor-pointer border-none"
        >
          <Download className="w-5 h-5" />
          Download PDF Resume
        </button>
      </div>

      <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">Chris Peterson</h1>
          <p className="text-xl mb-4 text-orange-400">Strategic Documentation Leader</p>
          <div className="flex flex-wrap gap-6 text-sm">
            <span>📧 chriskpeterson@gmail.com</span>
            <span>📱 (713) 344-4988</span>
            <span>🌐 linkedin.com/in/chrispeterson</span>
            <span>📍 Austin, TX</span>
          </div>
        </div>

        <div className="p-8">
          {/* Summary */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Strategic Documentation Leader with over 12 years of experience driving content strategy,
              information architecture, and system migrations for enterprise hardware and software.
              Specialist in Information Architecture (IA), structured content, and cross-functional team leadership.
              Proven track record of improving content discoverability and reducing video-related support volume
              by ~10%. Experienced in managing budgets, mentoring teams, and preparing content ecosystems for
              modern tooling and automation.
            </p>
          </section>

          {/* Skills (Moved up for impact) */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-orange-600" />
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" /> Strategy
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Information Architecture', 'Taxonomy Design', 'Content Strategy', 'Localization Management'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" /> Leadership
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Team Mentorship (6+ writers)', 'Agile/Scrum', 'Vendor Management', 'Project Planning'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm border border-purple-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Layout className="w-4 h-4 text-green-600" /> Technical
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['DITA XML', 'Markdown', 'GitHub', 'HTML/CSS', 'REST API Docs', 'Jira', 'Confluence'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm border border-green-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-orange-600" /> Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['SDL Tridion Docs', 'Oxygen XML', 'Zoomin', 'Adobe CC', 'SharePoint'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm border border-orange-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-orange-600" />
              Professional Experience
            </h3>

            <div className="space-y-8">
              {/* Job 1 */}
              <div className="border-l-4 border-orange-500 pl-6 relative">
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[10px] top-2"></div>
                <div className="flex justify-between items-start mb-2 flex-col md:flex-row">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Staff Technical Writer & Documentation Lead</h4>
                    <p className="text-orange-600 font-semibold">HP / POLY | Austin, TX</p>
                  </div>
                  <span className="text-gray-500 text-sm font-medium bg-gray-100 px-2 py-1 rounded">Apr 2022 – Present</span>
                </div>
                <p className="text-sm text-gray-600 italic mb-3">
                  Acting as the operational lead for the HP/Google partnership documentation. Managing strategy, deliverables, and a team of 6 writers.
                </p>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ml-4">
                  <li><strong>Strategy:</strong> Developed a solution-focused content strategy shifting from product specs to user outcomes.</li>
                  <li><strong>Support Impact:</strong> Designed a widely referenced compatibility matrix contributing to a ~10% reduction in video-related support queries.</li>
                  <li><strong>Leadership:</strong> Manage a team of four permanent and two contingent writers (workloads, editorial review, mentoring).</li>
                  <li><strong>Knowledge Mgmt:</strong> Built Confluence-based internal knowledge wiki to eliminate institutional gaps.</li>
                  <li><strong>Execution:</strong> Lead documentation for 7 major hardware launches and software updates (Admin Guides, API content).</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-4 border-blue-500 pl-6 relative">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[10px] top-2"></div>
                <div className="flex justify-between items-start mb-2 flex-col md:flex-row">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Senior Technical Writer</h4>
                    <p className="text-blue-600 font-semibold">POLY (Plantronics) | Austin, TX</p>
                  </div>
                  <span className="text-gray-500 text-sm font-medium bg-gray-100 px-2 py-1 rounded">Oct 2019 – Apr 2022</span>
                </div>
                <p className="text-sm text-gray-600 italic mb-3">
                  Key architect for the migration to structured content systems while leading documentation for the CCX portfolio.
                </p>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ml-4">
                  <li><strong>Architecture:</strong> Key contributor to SDL implementation; designed taxonomy for migration from Vasont.</li>
                  <li><strong>Automation:</strong> Reduced time-to-publish by hours by implementing XSL transform automation for Zoomin.</li>
                  <li><strong>UX:</strong> Led initiatives to improve portal experience by refining metadata structures and search filtering.</li>
                  <li><strong>Mentorship:</strong> Trained new writers on reusable, task-based authoring models.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="border-l-4 border-green-500 pl-6 relative">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[10px] top-2"></div>
                <div className="flex justify-between items-start mb-2 flex-col md:flex-row">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">Information Developer</h4>
                    <p className="text-green-600 font-semibold">HEWLETT PACKARD ENTERPRISE | Houston, TX</p>
                  </div>
                  <span className="text-gray-500 text-sm font-medium bg-gray-100 px-2 py-1 rounded">Jun 2013 – Oct 2019</span>
                </div>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ml-4">
                  <li>Lead writer for Synergy, OneView, and Converged Systems across product lifecycles.</li>
                  <li>Led migrations to structured content; trained writers in DITA and CCMS tools.</li>
                  <li>Created visual assets including cabling diagrams, onboarding guides, and AR overlays.</li>
                  <li>Contributed to global Information Architecture initiatives (DTDs, writing guidelines).</li>
                </ul>
              </div>

              {/* Early Career */}
              <div className="border-l-4 border-gray-300 pl-6 relative">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[10px] top-2"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-lg text-gray-700">Early Career</h4>
                  </div>
                  <span className="text-gray-500 text-sm">2003 - 2013</span>
                </div>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li><strong>University of Houston (2010-13):</strong> Produced outreach materials for STEM events.</li>
                  <li><strong>Guy Carpenter (2003-08):</strong> Managed 16-person operations team; reduced spend by $300k.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-orange-600" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-gray-800 pl-6">
                <h4 className="font-bold text-lg text-gray-900">B.S., Industrial Design</h4>
                <p className="text-gray-600 font-semibold">University of Houston</p>
              </div>
              <div className="border-l-4 border-gray-800 pl-6">
                <h4 className="font-bold text-lg text-gray-900">B.A., English</h4>
                <p className="text-gray-600 font-semibold">University of Houston</p>
                <p className="text-gray-500 text-sm">Minor: Studio Arts</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Additional CTA */}
      <div className="mt-8 text-center pb-12">
        <p className="text-gray-600 mb-4">Ready to discuss documentation strategy?</p>
        <a
          href="mailto:chriskpeterson@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-semibold no-underline"
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </a>
      </div>
    </div>
  );
}
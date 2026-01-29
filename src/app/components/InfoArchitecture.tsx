import { useState } from 'react';
import { Layers, GitBranch, Database, Layout, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Knowledge Base Restructure",
    client: "SaaS Company",
    challenge: "Users couldn't find information across 500+ scattered articles. High support ticket volume due to poor discoverability.",
    solution: "Implemented hub-and-spoke IA model with topic clusters, created intuitive navigation hierarchy, and established content tagging taxonomy.",
    outcomes: [
      "40% reduction in support tickets",
      "65% improvement in content findability",
      "Reduced time-to-information from 8 min to 2 min"
    ],
    icon: <Database className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Multi-Product Documentation Portal",
    client: "Tech Startup",
    challenge: "Three product lines with separate docs created confusion. No clear user journey across products.",
    solution: "Designed unified documentation architecture with role-based navigation, cross-product search, and progressive disclosure patterns.",
    outcomes: [
      "Unified 3 documentation sites into 1 portal",
      "User satisfaction score increased to 4.6/5",
      "30% increase in documentation engagement"
    ],
    icon: <Layout className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Developer Documentation IA Redesign",
    client: "API Platform",
    challenge: "Developer docs lacked clear learning paths. New users struggled with complex API concepts without proper scaffolding.",
    solution: "Created tiered IA structure: Getting Started → Guides → Reference → Advanced. Added contextual linking and use-case based navigation.",
    outcomes: [
      "Developer onboarding time reduced by 50%",
      "API integration success rate up 35%",
      "Documentation NPS increased from 42 to 71"
    ],
    icon: <GitBranch className="w-6 h-6" />
  }
];

export default function InfoArchitecture() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Information Architecture</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Strategic organization of content to create intuitive, user-centered information experiences
        </p>
      </div>

      {/* Skills Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Content Modeling</h3>
          <p className="text-sm text-gray-600">Structuring information for scalability and reuse</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <GitBranch className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Navigation Design</h3>
          <p className="text-sm text-gray-600">Creating intuitive pathways through content</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Database className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Taxonomy Design</h3>
          <p className="text-sm text-gray-600">Building classification systems and metadata</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Layout className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">User Research</h3>
          <p className="text-sm text-gray-600">Card sorting, tree testing, and usability studies</p>
        </div>
      </div>

      {/* Project Case Studies */}
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.client}</p>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className="px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  {expandedId === project.id ? 'Show Less' : 'View Details'}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Challenge
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Solution
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {expandedId === project.id && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                    Key Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Methods */}
      <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
        <h3 className="font-bold text-2xl mb-6">Tools & Methods</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-blue-300">Research Tools</h4>
            <p className="text-gray-300 text-sm">Card sorting, tree testing, user interviews, analytics review</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-purple-300">Design Tools</h4>
            <p className="text-gray-300 text-sm">Figma, Miro, Lucidchart, site mapping tools</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-green-300">Documentation</h4>
            <p className="text-gray-300 text-sm">Confluence, Notion, content inventories, IA blueprints</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { FileText, ExternalLink, Filter } from 'lucide-react';
import DocViewer from '@/app/components/DocViewer';

interface Sample {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
  excerpt: string;
}

const samples: Sample[] = [
  {
    id: 1,
    title: "API Documentation: Payment Gateway Integration",
    category: "API Documentation",
    description: "Comprehensive REST API documentation for a payment processing system",
    tags: ["API", "REST", "Technical", "Integration"],
    link: "#",
    excerpt: "Complete guide to integrating payment endpoints, including authentication, request/response formats, error handling, and webhook configuration."
  },
  {
    id: 2,
    title: "User Guide: Cloud Storage Platform",
    category: "User Guides",
    description: "End-user documentation for a cloud-based file management system",
    tags: ["User Guide", "Tutorial", "Cloud"],
    link: "#",
    excerpt: "Step-by-step instructions for uploading, sharing, and managing files in the cloud, with screenshots and best practices for organization."
  },
  {
    id: 3,
    title: "Technical Specification: Authentication System",
    category: "Technical Specs",
    description: "Detailed technical specification for OAuth 2.0 implementation",
    tags: ["Technical", "Security", "Specification"],
    link: "#",
    excerpt: "Architecture overview, security considerations, token management, and implementation guidelines for enterprise authentication systems."
  },
  {
    id: 4,
    title: "Release Notes: Mobile App v3.2",
    category: "Release Notes",
    description: "Quarterly release notes highlighting new features and improvements",
    tags: ["Release Notes", "Mobile", "Updates"],
    link: "#",
    excerpt: "New features include dark mode, offline sync capabilities, enhanced search, bug fixes, and performance improvements. Migration guide included."
  },
  {
    id: 5,
    title: "Developer Tutorial: Getting Started with SDK",
    category: "Tutorials",
    description: "Onboarding tutorial for developers using the analytics SDK",
    tags: ["Tutorial", "SDK", "Developer"],
    link: "#",
    excerpt: "Learn to integrate our analytics SDK in 15 minutes. Covers installation, basic tracking, custom events, and troubleshooting common issues."
  },
  {
    id: 6,
    title: "Process Documentation: QA Testing Workflow",
    category: "Process Docs",
    description: "Internal documentation for quality assurance procedures",
    tags: ["Process", "QA", "Internal"],
    link: "#",
    excerpt: "Standard operating procedures for testing cycles, bug triage, regression testing, and deployment verification with team collaboration guidelines."
  }
];

const categories = ["All", "API Documentation", "User Guides", "Technical Specs", "Release Notes", "Tutorials", "Process Docs"];

export default function WritingSamples() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [viewingDoc, setViewingDoc] = useState<number | null>(null);

  const filteredSamples = selectedCategory === "All" 
    ? samples 
    : samples.filter(sample => sample.category === selectedCategory);

  return (
    <>
      {viewingDoc && (
        <DocViewer 
          sampleId={viewingDoc} 
          onClose={() => setViewingDoc(null)} 
        />
      )}
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Writing Samples</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of documentation projects showcasing various formats and technical writing styles
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-700">Filter by type:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Samples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSamples.map((sample) => (
            <div
              key={sample.id}
              onMouseEnter={() => setHoveredId(sample.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`bg-white rounded-xl border-2 border-gray-200 p-6 transition-all duration-300 cursor-pointer ${
                hoveredId === sample.id ? 'shadow-xl border-blue-400 -translate-y-2' : 'shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {sample.category}
                </span>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {sample.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {sample.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {sample.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={sample.link}
                onClick={(e) => {
                  e.preventDefault();
                  setViewingDoc(sample.id);
                }}
                className={`inline-flex items-center gap-2 text-blue-600 font-semibold text-sm transition-all ${
                  hoveredId === sample.id ? 'gap-3' : ''
                }`}
              >
                View Sample
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {filteredSamples.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No samples found in this category.</p>
          </div>
        )}
      </div>
    </>
  );
}
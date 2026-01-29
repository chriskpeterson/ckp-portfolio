import { useState } from 'react';
import { Target, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

interface Strategy {
  id: number;
  title: string;
  scope: string;
  objective: string;
  approach: string[];
  metrics: {
    label: string;
    value: string;
    trend: string;
  }[];
}

const strategies: Strategy[] = [
  {
    id: 1,
    title: "Developer-First Content Strategy",
    scope: "B2B API Platform",
    objective: "Transform documentation into a growth driver by creating content that helps developers succeed faster",
    approach: [
      "Conducted developer persona research to identify pain points and learning preferences",
      "Established content pillars: Quick Start, Core Concepts, Use Cases, API Reference",
      "Implemented docs-as-code workflow with version control and automated testing",
      "Created content metrics dashboard to track engagement and identify gaps"
    ],
    metrics: [
      { label: "Developer Activation", value: "+58%", trend: "up" },
      { label: "Time to First API Call", value: "-42%", trend: "down" },
      { label: "Documentation NPS", value: "+29 pts", trend: "up" }
    ]
  },
  {
    id: 2,
    title: "Multi-Channel Content Ecosystem",
    scope: "SaaS Product Launch",
    objective: "Create cohesive content experience across docs, blog, videos, and in-app messaging",
    approach: [
      "Mapped customer journey to identify content needs at each touchpoint",
      "Built content hub strategy with centralized content repository",
      "Established style guide and content governance framework",
      "Coordinated cross-functional content calendar with marketing and product teams"
    ],
    metrics: [
      { label: "Content Reuse", value: "65%", trend: "up" },
      { label: "Publishing Velocity", value: "+3x", trend: "up" },
      { label: "Brand Consistency", value: "92%", trend: "up" }
    ]
  },
  {
    id: 3,
    title: "Self-Service Support Content",
    scope: "Enterprise Software",
    objective: "Reduce support costs by empowering users to solve problems independently",
    approach: [
      "Analyzed top 100 support tickets to identify documentation gaps",
      "Created video tutorials and interactive guides for complex workflows",
      "Implemented AI-powered search and contextual help within product",
      "Established content feedback loop with support team"
    ],
    metrics: [
      { label: "Support Deflection", value: "47%", trend: "up" },
      { label: "Self-Service Resolution", value: "71%", trend: "up" },
      { label: "Support Cost Savings", value: "$340K/yr", trend: "down" }
    ]
  }
];

export default function ContentStrategy() {
  const [activeStrategy, setActiveStrategy] = useState(1);

  const currentStrategy = strategies.find(s => s.id === activeStrategy) || strategies[0];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Content Strategy</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Strategic approaches to content that drive business goals and user success
        </p>
      </div>

      {/* Strategy Selector */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {strategies.map((strategy) => (
          <button
            key={strategy.id}
            onClick={() => setActiveStrategy(strategy.id)}
            className={`p-6 rounded-xl text-left transition-all duration-300 ${
              activeStrategy === strategy.id
                ? 'bg-blue-600 text-white shadow-xl scale-105'
                : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Target className={`w-5 h-5 ${activeStrategy === strategy.id ? 'text-white' : 'text-blue-600'}`} />
              <span className="font-bold">{strategy.title}</span>
            </div>
            <p className={`text-sm ${activeStrategy === strategy.id ? 'text-blue-100' : 'text-gray-600'}`}>
              {strategy.scope}
            </p>
          </button>
        ))}
      </div>

      {/* Strategy Details */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-xl p-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4">
            <Target className="w-4 h-4" />
            <span className="font-semibold">{currentStrategy.scope}</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentStrategy.title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{currentStrategy.objective}</p>
        </div>

        {/* Approach */}
        <div className="mb-8">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Strategic Approach
          </h4>
          <div className="space-y-3">
            {currentStrategy.approach.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div>
          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Impact Metrics
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {currentStrategy.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center"
              >
                <div className={`text-3xl font-bold mb-2 ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
          <h3 className="font-bold text-2xl text-gray-900 mb-6">Strategic Capabilities</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Content Audits & Analysis</div>
                <div className="text-sm text-gray-600">Evaluating existing content for gaps and opportunities</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">User Research & Personas</div>
                <div className="text-sm text-gray-600">Understanding audience needs and behaviors</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Content Governance</div>
                <div className="text-sm text-gray-600">Establishing standards, workflows, and ownership</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Metrics & Optimization</div>
                <div className="text-sm text-gray-600">Measuring content performance and iterating</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
          <h3 className="font-bold text-2xl text-gray-900 mb-6">Content Types</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-1">Technical</div>
              <div className="text-sm text-gray-600">API docs, SDKs, specs</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-1">Educational</div>
              <div className="text-sm text-gray-600">Guides, tutorials, courses</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-1">Support</div>
              <div className="text-sm text-gray-600">Help centers, FAQs, KB</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-1">Marketing</div>
              <div className="text-sm text-gray-600">Product docs, case studies</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-1">Internal</div>
              <div className="text-sm text-gray-600">Processes, onboarding</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-900 mb-1">Video</div>
              <div className="text-sm text-gray-600">Screencasts, demos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

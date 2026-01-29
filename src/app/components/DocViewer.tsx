import { useState } from 'react';
import { X, Menu, ChevronRight, Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface DocViewerProps {
  sampleId: number;
  onClose: () => void;
}

interface DocSection {
  id: string;
  title: string;
  level: number;
}

export default function DocViewer({ sampleId, onClose }: DocViewerProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Get documentation content based on sampleId
  const getDocContent = () => {
    switch (sampleId) {
      case 1:
        return <APIDocumentation onCopy={handleCopyCode} copiedCode={copiedCode} />;
      case 2:
        return <UserGuideContent onCopy={handleCopyCode} copiedCode={copiedCode} />;
      case 3:
        return <TechnicalSpecContent onCopy={handleCopyCode} copiedCode={copiedCode} />;
      case 4:
        return <ReleaseNotesContent />;
      case 5:
        return <TutorialContent onCopy={handleCopyCode} copiedCode={copiedCode} />;
      case 6:
        return <ProcessDocContent />;
      default:
        return <APIDocumentation onCopy={handleCopyCode} copiedCode={copiedCode} />;
    }
  };

  const sections: DocSection[] = getSections(sampleId);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-gray-50 border-r border-gray-200 transition-all duration-300 overflow-hidden flex-shrink-0`}
      >
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Table of Contents</h3>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-140px)]">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-200 rounded transition-colors ${
                section.level === 1 ? 'font-semibold' : 'pl-6 text-gray-600'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Documentation</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Sample #{sampleId}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Documentation Content */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto px-8 py-12">
            {getDocContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get sections for TOC
function getSections(sampleId: number): DocSection[] {
  switch (sampleId) {
    case 1:
      return [
        { id: 'api-overview', title: 'Overview', level: 1 },
        { id: 'api-auth', title: 'Authentication', level: 1 },
        { id: 'api-endpoints', title: 'Endpoints', level: 1 },
        { id: 'api-create-payment', title: 'Create Payment', level: 2 },
        { id: 'api-get-payment', title: 'Get Payment Status', level: 2 },
        { id: 'api-errors', title: 'Error Handling', level: 1 },
        { id: 'api-webhooks', title: 'Webhooks', level: 1 },
      ];
    case 2:
      return [
        { id: 'ug-intro', title: 'Introduction', level: 1 },
        { id: 'ug-getting-started', title: 'Getting Started', level: 1 },
        { id: 'ug-upload', title: 'Uploading Files', level: 1 },
        { id: 'ug-organize', title: 'Organizing Files', level: 1 },
        { id: 'ug-share', title: 'Sharing Files', level: 1 },
      ];
    case 3:
      return [
        { id: 'spec-overview', title: 'Overview', level: 1 },
        { id: 'spec-architecture', title: 'System Architecture', level: 1 },
        { id: 'spec-auth-flow', title: 'Authentication Flow', level: 1 },
        { id: 'spec-security', title: 'Security Considerations', level: 1 },
      ];
    case 5:
      return [
        { id: 'tut-intro', title: 'Introduction', level: 1 },
        { id: 'tut-install', title: 'Installation', level: 1 },
        { id: 'tut-basic', title: 'Basic Usage', level: 1 },
        { id: 'tut-advanced', title: 'Advanced Features', level: 1 },
      ];
    default:
      return [{ id: 'section-1', title: 'Documentation', level: 1 }];
  }
}

// API Documentation Component
function APIDocumentation({ onCopy, copiedCode }: { onCopy: (code: string, id: string) => void; copiedCode: string | null }) {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 id="api-overview">Payment Gateway API Documentation</h1>
      <p className="text-xl text-gray-600">
        Complete guide to integrating our payment processing endpoints into your application.
      </p>

      <h2 id="api-auth">Authentication</h2>
      <p>
        All API requests require authentication using an API key. Include your API key in the
        <code>Authorization</code> header:
      </p>
      
      <CodeBlock
        id="auth-example"
        language="bash"
        code={`curl https://api.example.com/v1/payments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
        onCopy={onCopy}
        copied={copiedCode === 'auth-example'}
      />

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
        <p className="text-sm text-blue-900 m-0">
          <strong>Note:</strong> Never expose your API key in client-side code. Always make API requests from your server.
        </p>
      </div>

      <h2 id="api-endpoints">Endpoints</h2>
      
      <h3 id="api-create-payment">Create Payment</h3>
      <p>Creates a new payment intent.</p>
      
      <div className="bg-gray-100 rounded p-3 my-4">
        <code className="text-green-600 font-semibold">POST</code>{' '}
        <code>/v1/payments</code>
      </div>

      <h4>Request Body</h4>
      <CodeBlock
        id="create-payment-request"
        language="json"
        code={`{
  "amount": 1000,
  "currency": "usd",
  "payment_method": "card",
  "description": "Order #12345",
  "metadata": {
    "order_id": "12345",
    "customer_id": "cust_789"
  }
}`}
        onCopy={onCopy}
        copied={copiedCode === 'create-payment-request'}
      />

      <h4>Response</h4>
      <CodeBlock
        id="create-payment-response"
        language="json"
        code={`{
  "id": "pay_1234567890",
  "object": "payment",
  "amount": 1000,
  "currency": "usd",
  "status": "pending",
  "created": 1640000000,
  "client_secret": "pay_1234567890_secret_xyz"
}`}
        onCopy={onCopy}
        copied={copiedCode === 'create-payment-response'}
      />

      <h3 id="api-get-payment">Get Payment Status</h3>
      <p>Retrieves the current status of a payment.</p>
      
      <div className="bg-gray-100 rounded p-3 my-4">
        <code className="text-blue-600 font-semibold">GET</code>{' '}
        <code>/v1/payments/:id</code>
      </div>

      <CodeBlock
        id="get-payment-example"
        language="bash"
        code={`curl https://api.example.com/v1/payments/pay_1234567890 \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
        onCopy={onCopy}
        copied={copiedCode === 'get-payment-example'}
      />

      <h2 id="api-errors">Error Handling</h2>
      <p>The API uses standard HTTP status codes:</p>
      
      <table className="min-w-full divide-y divide-gray-200 my-6">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-3"><code>200</code></td>
            <td className="px-4 py-3">Success</td>
          </tr>
          <tr>
            <td className="px-4 py-3"><code>400</code></td>
            <td className="px-4 py-3">Bad Request - Invalid parameters</td>
          </tr>
          <tr>
            <td className="px-4 py-3"><code>401</code></td>
            <td className="px-4 py-3">Unauthorized - Invalid API key</td>
          </tr>
          <tr>
            <td className="px-4 py-3"><code>404</code></td>
            <td className="px-4 py-3">Not Found - Resource doesn't exist</td>
          </tr>
          <tr>
            <td className="px-4 py-3"><code>500</code></td>
            <td className="px-4 py-3">Server Error - Contact support</td>
          </tr>
        </tbody>
      </table>

      <h2 id="api-webhooks">Webhooks</h2>
      <p>
        Configure webhook endpoints to receive real-time notifications about payment events.
      </p>
      
      <CodeBlock
        id="webhook-example"
        language="json"
        code={`{
  "id": "evt_1234567890",
  "type": "payment.succeeded",
  "data": {
    "object": {
      "id": "pay_1234567890",
      "amount": 1000,
      "status": "succeeded"
    }
  },
  "created": 1640000000
}`}
        onCopy={onCopy}
        copied={copiedCode === 'webhook-example'}
      />
    </div>
  );
}

// User Guide Component
function UserGuideContent({ onCopy, copiedCode }: { onCopy: (code: string, id: string) => void; copiedCode: string | null }) {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 id="ug-intro">Cloud Storage User Guide</h1>
      <p className="text-xl text-gray-600">
        Learn how to upload, organize, and share your files securely in the cloud.
      </p>

      <h2 id="ug-getting-started">Getting Started</h2>
      <p>
        Welcome to CloudStore! This guide will walk you through all the features available
        to help you manage your files effectively.
      </p>

      <ol>
        <li>Create your account or sign in</li>
        <li>Download the desktop app (optional)</li>
        <li>Start uploading files</li>
      </ol>

      <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
        <p className="text-sm text-green-900 m-0">
          <strong>Tip:</strong> New users get 15GB of free storage to start!
        </p>
      </div>

      <h2 id="ug-upload">Uploading Files</h2>
      <p>There are several ways to upload files to your CloudStore account:</p>

      <h3>Method 1: Drag and Drop</h3>
      <ol>
        <li>Open your CloudStore folder</li>
        <li>Drag files from your computer</li>
        <li>Drop them into the browser window</li>
        <li>Wait for the upload to complete</li>
      </ol>

      <h3>Method 2: Upload Button</h3>
      <ol>
        <li>Click the <strong>Upload</strong> button in the top right</li>
        <li>Select files or folders from your computer</li>
        <li>Click <strong>Open</strong> to begin uploading</li>
      </ol>

      <h2 id="ug-organize">Organizing Files</h2>
      <p>Keep your files organized with folders and tags:</p>

      <h3>Creating Folders</h3>
      <ol>
        <li>Click <strong>New Folder</strong></li>
        <li>Enter a name for your folder</li>
        <li>Press Enter or click Create</li>
      </ol>

      <h3>Moving Files</h3>
      <p>To move files between folders:</p>
      <ol>
        <li>Select one or more files</li>
        <li>Click <strong>Move to...</strong></li>
        <li>Choose the destination folder</li>
        <li>Click <strong>Move</strong></li>
      </ol>

      <h2 id="ug-share">Sharing Files</h2>
      <p>Share files and folders with others securely:</p>

      <h3>Creating a Share Link</h3>
      <ol>
        <li>Right-click on a file or folder</li>
        <li>Select <strong>Share</strong></li>
        <li>Click <strong>Create link</strong></li>
        <li>Copy the link and send it to recipients</li>
      </ol>

      <div className="bg-amber-50 border-l-4 border-amber-600 p-4 my-6">
        <p className="text-sm text-amber-900 m-0">
          <strong>Security:</strong> You can set expiration dates and password protection on shared links.
        </p>
      </div>
    </div>
  );
}

// Technical Spec Component
function TechnicalSpecContent({ onCopy, copiedCode }: { onCopy: (code: string, id: string) => void; copiedCode: string | null }) {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 id="spec-overview">OAuth 2.0 Authentication System</h1>
      <p className="text-xl text-gray-600">
        Technical specification for implementing OAuth 2.0 authentication.
      </p>

      <h2 id="spec-architecture">System Architecture</h2>
      <p>
        The authentication system is built on the OAuth 2.0 authorization framework,
        providing secure delegated access to protected resources.
      </p>

      <h3>Components</h3>
      <ul>
        <li><strong>Authorization Server</strong> - Issues access tokens after authentication</li>
        <li><strong>Resource Server</strong> - Hosts protected resources</li>
        <li><strong>Client Application</strong> - Requests access on behalf of users</li>
        <li><strong>Token Store</strong> - Redis-based token management</li>
      </ul>

      <h2 id="spec-auth-flow">Authentication Flow</h2>
      <p>The system implements the Authorization Code flow with PKCE:</p>

      <CodeBlock
        id="auth-flow"
        language="typescript"
        code={`// Step 1: Generate code verifier and challenge
const codeVerifier = generateRandomString(128);
const codeChallenge = await sha256(codeVerifier);

// Step 2: Authorization request
const authUrl = \`\${AUTH_SERVER}/authorize?\${new URLSearchParams({
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  response_type: 'code',
  code_challenge: codeChallenge,
  code_challenge_method: 'S256',
  scope: 'read write'
})}\`;

// Step 3: Exchange code for token
const tokenResponse = await fetch(\`\${AUTH_SERVER}/token\`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    grant_type: 'authorization_code',
    code: authorizationCode,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    code_verifier: codeVerifier
  })
});`}
        onCopy={onCopy}
        copied={copiedCode === 'auth-flow'}
      />

      <h2 id="spec-security">Security Considerations</h2>

      <h3>Token Storage</h3>
      <ul>
        <li>Access tokens: 1-hour expiration</li>
        <li>Refresh tokens: 30-day expiration with rotation</li>
        <li>Tokens stored in Redis with automatic expiry</li>
      </ul>

      <h3>PKCE Implementation</h3>
      <p>
        Proof Key for Code Exchange (PKCE) prevents authorization code interception attacks
        by using dynamically generated code verifiers.
      </p>

      <CodeBlock
        id="pkce-impl"
        language="typescript"
        code={`function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

async function sha256(plain: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return base64urlencode(hash);
}`}
        onCopy={onCopy}
        copied={copiedCode === 'pkce-impl'}
      />
    </div>
  );
}

// Release Notes Component
function ReleaseNotesContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>Mobile App v3.2 - Release Notes</h1>
      <p className="text-xl text-gray-600">January 2026</p>

      <h2>New Features</h2>
      
      <h3>🌙 Dark Mode</h3>
      <p>
        Our most requested feature is here! Switch between light and dark themes
        in Settings → Appearance. The app automatically adapts to your system preferences.
      </p>

      <h3>📱 Offline Sync</h3>
      <p>
        Access your recently viewed files even without an internet connection.
        Changes made offline will automatically sync when you're back online.
      </p>
      <ul>
        <li>Last 100 viewed files cached locally</li>
        <li>Automatic conflict resolution</li>
        <li>Sync status indicators</li>
      </ul>

      <h3>🔍 Enhanced Search</h3>
      <p>Find what you need faster with improved search capabilities:</p>
      <ul>
        <li>Search within file contents</li>
        <li>Filter by file type and date</li>
        <li>Recent search history</li>
        <li>Search suggestions</li>
      </ul>

      <h2>Improvements</h2>
      <ul>
        <li>30% faster app launch time</li>
        <li>Reduced memory usage by 20%</li>
        <li>Smoother scrolling in large folders</li>
        <li>Better error messages</li>
        <li>Improved accessibility for screen readers</li>
      </ul>

      <h2>Bug Fixes</h2>
      <ul>
        <li>Fixed crash when uploading very large files</li>
        <li>Resolved issue with file name special characters</li>
        <li>Fixed notification badge not clearing</li>
        <li>Corrected file size display for files over 1GB</li>
      </ul>

      <h2>Migration Guide</h2>
      <p>
        This update is compatible with all existing data. No action required.
        For users with custom themes, please review the new dark mode settings.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
        <p className="text-sm text-blue-900 m-0">
          <strong>Note:</strong> Users on iOS 14 or Android 9 and below should update their OS for the best experience.
        </p>
      </div>
    </div>
  );
}

// Tutorial Component
function TutorialContent({ onCopy, copiedCode }: { onCopy: (code: string, id: string) => void; copiedCode: string | null }) {
  return (
    <div className="prose prose-slate max-w-none">
      <h1 id="tut-intro">Getting Started with Analytics SDK</h1>
      <p className="text-xl text-gray-600">
        Learn to integrate our analytics SDK in just 15 minutes.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
        <p className="text-sm text-blue-900 m-0">
          <strong>Prerequisites:</strong> Node.js 16+, Basic JavaScript knowledge
        </p>
      </div>

      <h2 id="tut-install">Installation</h2>
      <p>Install the SDK using npm or yarn:</p>

      <CodeBlock
        id="install-npm"
        language="bash"
        code="npm install @example/analytics-sdk"
        onCopy={onCopy}
        copied={copiedCode === 'install-npm'}
      />

      <h2 id="tut-basic">Basic Usage</h2>
      <p>Initialize the SDK in your application:</p>

      <CodeBlock
        id="basic-init"
        language="typescript"
        code={`import Analytics from '@example/analytics-sdk';

// Initialize with your API key
const analytics = new Analytics({
  apiKey: 'YOUR_API_KEY',
  environment: 'production'
});

// Track a page view
analytics.page({
  name: 'Homepage',
  category: 'Marketing'
});

// Track a custom event
analytics.track('Button Clicked', {
  buttonId: 'cta-signup',
  location: 'header'
});`}
        onCopy={onCopy}
        copied={copiedCode === 'basic-init'}
      />

      <h3>Identifying Users</h3>
      <p>Associate events with specific users:</p>

      <CodeBlock
        id="identify-user"
        language="typescript"
        code={`analytics.identify('user123', {
  email: 'user@example.com',
  name: 'John Doe',
  plan: 'premium'
});`}
        onCopy={onCopy}
        copied={copiedCode === 'identify-user'}
      />

      <h2 id="tut-advanced">Advanced Features</h2>

      <h3>Custom Event Properties</h3>
      <p>Add rich context to your events:</p>

      <CodeBlock
        id="custom-props"
        language="typescript"
        code={`analytics.track('Purchase Completed', {
  orderId: 'ORD-12345',
  revenue: 99.99,
  currency: 'USD',
  products: [
    { id: 'PROD-1', name: 'Widget', price: 49.99 },
    { id: 'PROD-2', name: 'Gadget', price: 50.00 }
  ],
  paymentMethod: 'credit_card'
});`}
        onCopy={onCopy}
        copied={copiedCode === 'custom-props'}
      />

      <h3>Error Handling</h3>
      <p>Handle tracking failures gracefully:</p>

      <CodeBlock
        id="error-handling"
        language="typescript"
        code={`analytics.on('error', (error) => {
  console.error('Analytics error:', error);
});

// Optional: Wait for events to be sent
await analytics.track('Event Name', properties);`}
        onCopy={onCopy}
        copied={copiedCode === 'error-handling'}
      />

      <div className="bg-green-50 border-l-4 border-green-600 p-4 my-6">
        <p className="text-sm text-green-900 m-0">
          <strong>Next Steps:</strong> Check out our <a href="#">Event Catalog</a> for recommended events to track.
        </p>
      </div>
    </div>
  );
}

// Process Doc Component
function ProcessDocContent() {
  return (
    <div className="prose prose-slate max-w-none">
      <h1>QA Testing Workflow</h1>
      <p className="text-xl text-gray-600">
        Standard operating procedures for quality assurance testing cycles.
      </p>

      <h2>Overview</h2>
      <p>
        This document outlines the QA process for all feature releases, ensuring
        consistent quality standards across the organization.
      </p>

      <h2>Testing Cycle Phases</h2>

      <h3>Phase 1: Test Planning</h3>
      <ol>
        <li>Review feature requirements and acceptance criteria</li>
        <li>Create test plan document</li>
        <li>Identify test scenarios and edge cases</li>
        <li>Set up test environment</li>
      </ol>

      <h3>Phase 2: Test Execution</h3>
      <ol>
        <li>Execute manual test cases</li>
        <li>Run automated test suite</li>
        <li>Perform exploratory testing</li>
        <li>Document all findings in JIRA</li>
      </ol>

      <h3>Phase 3: Bug Triage</h3>
      <table className="min-w-full divide-y divide-gray-200 my-6">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Severity</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Criteria</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Response Time</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-semibold">Critical</span></td>
            <td className="px-4 py-3">System crash, data loss, security vulnerability</td>
            <td className="px-4 py-3">4 hours</td>
          </tr>
          <tr>
            <td className="px-4 py-3"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-semibold">High</span></td>
            <td className="px-4 py-3">Major feature broken, no workaround</td>
            <td className="px-4 py-3">24 hours</td>
          </tr>
          <tr>
            <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-semibold">Medium</span></td>
            <td className="px-4 py-3">Feature impaired, workaround available</td>
            <td className="px-4 py-3">3 days</td>
          </tr>
          <tr>
            <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">Low</span></td>
            <td className="px-4 py-3">Minor issue, cosmetic defect</td>
            <td className="px-4 py-3">Next sprint</td>
          </tr>
        </tbody>
      </table>

      <h3>Phase 4: Regression Testing</h3>
      <ul>
        <li>Run full regression suite after bug fixes</li>
        <li>Verify all critical user flows</li>
        <li>Check for unintended side effects</li>
        <li>Validate across supported browsers/devices</li>
      </ul>

      <h2>Sign-off Criteria</h2>
      <p>Before a release can be approved, the following must be met:</p>
      <ul>
        <li>✅ All Critical and High severity bugs resolved</li>
        <li>✅ 100% of automated tests passing</li>
        <li>✅ Manual testing completed with no blockers</li>
        <li>✅ Performance benchmarks met</li>
        <li>✅ Security scan completed with no issues</li>
        <li>✅ Documentation updated</li>
      </ul>

      <div className="bg-purple-50 border-l-4 border-purple-600 p-4 my-6">
        <p className="text-sm text-purple-900 m-0">
          <strong>Escalation:</strong> Contact QA Lead for exceptions to the sign-off criteria.
        </p>
      </div>
    </div>
  );
}

// Code Block Component with Copy functionality
function CodeBlock({ id, language, code, onCopy, copied }: {
  id: string;
  language: string;
  code: string;
  onCopy: (code: string, id: string) => void;
  copied: boolean;
}) {
  return (
    <div className="relative my-6 group">
      <button
        onClick={() => onCopy(code, id)}
        className="absolute right-3 top-3 p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors opacity-0 group-hover:opacity-100"
        title="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-300" />
        )}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '0.5rem',
          padding: '1.5rem',
          fontSize: '0.875rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

// Helper to generate sparkline data
function generateSparkline(baseValue: number, volatility: number = 0.15, days: number = 30): number[] {
  const data: number[] = [];
  let value = baseValue * (1 - volatility);
  for (let i = 0; i < days; i++) {
    const change = (Math.random() - 0.4) * volatility * baseValue;
    value = Math.max(baseValue * 0.3, Math.min(baseValue * 1.5, value + change));
    data.push(Math.round(value));
  }
  return data;
}

export const stats = {
  totalVolume: {
    value: "$2.4M",
    change: "+12.3%",
    positive: true,
  },
  transactions24h: {
    value: "142K",
    change: "+8.7%",
    positive: true,
  },
  facilitators: {
    value: "12",
    change: "+2",
    positive: true,
  },
};

export interface Facilitator {
  id: string;
  name: string;
  volume: string;
  volumeNum: number;
  transactions: string;
  fee: string;
  currencies: string[];
  status: "online" | "degraded" | "offline";
  sparkline: number[];
  description: string;
}

export const facilitators: Facilitator[] = [
  {
    id: "coinbase",
    name: "Coinbase Facilitator",
    volume: "$1.2M",
    volumeNum: 1200000,
    transactions: "67K",
    fee: "0.3%",
    currencies: ["USDC", "ETH", "BASE", "SOL"],
    status: "online",
    sparkline: generateSparkline(67000, 0.12),
    description: "Official Coinbase facilitator with deep liquidity and low fees.",
  },
  {
    id: "openfacilitator",
    name: "OpenFacilitator",
    volume: "$892K",
    volumeNum: 892000,
    transactions: "48K",
    fee: "0.5%",
    currencies: ["USDC", "ETH", "BASE"],
    status: "online",
    sparkline: generateSparkline(48000, 0.18),
    description: "Open-source facilitator for permissionless payments.",
  },
  {
    id: "meridian",
    name: "Meridian",
    volume: "$284K",
    volumeNum: 284000,
    transactions: "13K",
    fee: "0.8%",
    currencies: ["USDC", "ETH", "MATIC", "ARB"],
    status: "online",
    sparkline: generateSparkline(13000, 0.2),
    description: "Multi-chain facilitator with broad network support.",
  },
];

export interface Server {
  id: string;
  name: string;
  description: string;
  resources: number;
  calls: string;
  callsNum: number;
  revenue: string;
  sparkline: number[];
}

export const servers: Server[] = [
  {
    id: "agentcloud",
    name: "AgentCloud",
    description: "AI inference and model hosting platform",
    resources: 128,
    calls: "892K",
    callsNum: 892000,
    revenue: "$298K",
    sparkline: generateSparkline(30000, 0.15),
  },
  {
    id: "datamesh",
    name: "DataMesh",
    description: "Real-time data feeds and scraping infrastructure",
    resources: 89,
    calls: "1.2M",
    callsNum: 1200000,
    revenue: "$187K",
    sparkline: generateSparkline(40000, 0.12),
  },
  {
    id: "x402jobs",
    name: "x402jobs",
    description: "Workflow execution and job scheduling",
    resources: 47,
    calls: "285K",
    callsNum: 285000,
    revenue: "$142K",
    sparkline: generateSparkline(9500, 0.2),
  },
];

export interface Resource {
  id: string;
  name: string;
  server: string;
  category: string;
  price: string;
  priceNum: number;
  calls: string;
  callsNum: number;
  sparkline: number[];
}

export const resources: Resource[] = [
  {
    id: "stock-data",
    name: "Stock Data Feed",
    server: "DataMesh",
    category: "Financial",
    price: "$0.0005/call",
    priceNum: 0.0005,
    calls: "2.8M",
    callsNum: 2800000,
    sparkline: generateSparkline(93000, 0.1),
  },
  {
    id: "web-scraper",
    name: "Web Scraper Pro",
    server: "DataMesh",
    category: "Data",
    price: "$0.001/call",
    priceNum: 0.001,
    calls: "892K",
    callsNum: 892000,
    sparkline: generateSparkline(30000, 0.15),
  },
  {
    id: "gpt4-turbo",
    name: "GPT-4 Turbo",
    server: "AgentCloud",
    category: "AI Inference",
    price: "$0.002/call",
    priceNum: 0.002,
    calls: "483K",
    callsNum: 483000,
    sparkline: generateSparkline(16000, 0.18),
  },
  {
    id: "image-gen",
    name: "Image Generator",
    server: "AgentCloud",
    category: "AI Inference",
    price: "$0.01/call",
    priceNum: 0.01,
    calls: "127K",
    callsNum: 127000,
    sparkline: generateSparkline(4200, 0.22),
  },
  {
    id: "workflow",
    name: "Workflow Executor",
    server: "x402jobs",
    category: "Infrastructure",
    price: "$0.005/call",
    priceNum: 0.005,
    calls: "48K",
    callsNum: 48000,
    sparkline: generateSparkline(1600, 0.25),
  },
];

export interface EcosystemProject {
  name: string;
  description: string;
  url: string;
}

export interface EcosystemCategory {
  title: string;
  items: EcosystemProject[];
}

export const ecosystem: EcosystemCategory[] = [
  {
    title: "Client-Side Integrations",
    items: [
      {
        name: "x402-fetch",
        description: "Drop-in fetch wrapper with automatic 402 handling",
        url: "https://github.com/anthropics/x402-fetch",
      },
      {
        name: "LangChain x402",
        description: "LangChain integration for paid tool calls",
        url: "https://github.com/langchain-ai/langchain-x402",
      },
      {
        name: "AgentKit",
        description: "Coinbase's toolkit for building payment-enabled agents",
        url: "https://github.com/coinbase/agentkit",
      },
    ],
  },
  {
    title: "Services & Endpoints",
    items: [
      {
        name: "x402jobs",
        description: "Marketplace for paid agent tasks and workflows",
        url: "https://x402jobs.com",
      },
      {
        name: "Memeputer",
        description: "AI-generated memes as a paid service",
        url: "https://memeputer.com",
      },
      {
        name: "AgentCloud",
        description: "Hosted AI inference with x402 billing",
        url: "https://agentcloud.dev",
      },
    ],
  },
  {
    title: "Infrastructure & Tooling",
    items: [
      {
        name: "OpenFacilitator",
        description: "Open-source payment facilitator implementation",
        url: "https://github.com/anthropics/openfacilitator",
      },
      {
        name: "x402-server",
        description: "Express middleware for adding 402 to any API",
        url: "https://github.com/anthropics/x402-server",
      },
      {
        name: "x402scan",
        description: "Block explorer for x402 transactions",
        url: "https://x402scan.com",
      },
    ],
  },
  {
    title: "Learning & Community",
    items: [
      {
        name: "x402.org",
        description: "Official specification and documentation",
        url: "https://x402.org",
      },
      {
        name: "Agent Builders Club",
        description: "Community of developers building with x402",
        url: "https://agentbuilders.club",
      },
      {
        name: "Whitepaper",
        description: "The original x402 protocol specification",
        url: "https://www.x402.org/x402-whitepaper.pdf",
      },
    ],
  },
  {
    title: "Facilitators",
    items: [
      {
        name: "Coinbase Facilitator",
        description: "Enterprise-grade facilitator by Coinbase",
        url: "https://coinbase.com/x402",
      },
      {
        name: "OpenFacilitator",
        description: "Permissionless community facilitator",
        url: "https://openfacilitator.xyz",
      },
      {
        name: "Meridian",
        description: "Multi-chain facilitator for L2 networks",
        url: "https://meridian.finance",
      },
    ],
  },
];

export const educationalContent = {
  whatIsX402: {
    title: "What is x402?",
    content: `x402 is a protocol that enables AI agents to autonomously pay for resources and services on the internet. It extends HTTP with a standardized payment flow using the 402 Payment Required status code.

When an agent requests a paid resource, the server responds with a 402 status and payment requirements. The agent's payment facilitator handles the transaction, and the request is retried with proof of payment.

This creates a seamless "pay-per-use" internet where agents can access any resource without pre-negotiated API keys or subscriptions.`,
  },
  whatIsResource: {
    title: "What is a Resource?",
    content: `A resource is any API endpoint, data feed, or service that accepts x402 payments. Resources are hosted on servers and priced per-call or per-unit.

Examples include:
• AI model inference (GPT-4, Claude, image generation)
• Data feeds (stock prices, weather, news)
• Compute services (web scraping, workflow execution)
• Storage and retrieval services

Servers can host multiple resources, each with its own pricing and access policies.`,
  },
  whatIsServer: {
    title: "What is a Server?",
    content: `A server in the x402 ecosystem is any web service that implements the x402 protocol to monetize its APIs. Servers define which resources are available, their prices, and which payment currencies they accept.

Servers use middleware (like x402-server) to wrap existing APIs with payment requirements. When a request comes in, the middleware checks for valid payment proofs before forwarding to the underlying service.

Popular servers include AgentCloud (AI inference), DataMesh (data feeds), and x402jobs (workflow execution).`,
  },
  whatIsFacilitator: {
    title: "What is a Facilitator?",
    content: `A facilitator is the payment layer that sits between agents and servers. When an agent encounters a 402 response, its facilitator:

1. Reads the payment requirements (amount, currency, recipient)
2. Signs and submits the payment transaction
3. Returns a payment proof to the agent
4. The agent retries the request with the proof attached

Facilitators abstract away the complexity of different blockchains and payment methods. They can be custodial (like Coinbase Facilitator) or non-custodial (like OpenFacilitator).`,
  },
  whyShouldICare: {
    title: "Why Should I Care?",
    content: `x402 represents a fundamental shift in how the internet economy works. Instead of humans subscribing to services, agents will pay-per-use for exactly what they need.

For developers: Monetize any API instantly without building billing infrastructure.

For businesses: Reduce friction in B2B transactions with instant, programmable payments.

For the internet: Create a sustainable model where AI agents become economic participants, funding the resources they consume.

The bet: In five years, more economic activity will happen between machines than between humans and machines.`,
  },
};

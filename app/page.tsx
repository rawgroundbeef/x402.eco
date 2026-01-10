"use client";

import { useState } from "react";
import { Sparkline } from "@/components/Sparkline";
import { FacilitatorChart } from "@/components/FacilitatorChart";
import { EducationalDialog } from "@/components/EducationalDialog";
import { InfoButton } from "@/components/InfoButton";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import {
  stats,
  facilitators,
  servers,
  resources,
  ecosystem,
  educationalContent,
  type Facilitator,
} from "@/lib/data";

type DialogType = keyof typeof educationalContent | null;

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState<DialogType>(null);
  const [featuredFacilitator, setFeaturedFacilitator] = useState<Facilitator>(
    facilitators[0]
  );

  const openDialog = (type: DialogType) => setDialogOpen(type);
  const closeDialog = () => setDialogOpen(null);

  return (
    <main className="min-h-screen bg-background text-text">
      {/* Educational Dialog */}
      {dialogOpen && (
        <EducationalDialog
          isOpen={!!dialogOpen}
          onClose={closeDialog}
          title={educationalContent[dialogOpen].title}
          content={educationalContent[dialogOpen].content}
        />
      )}

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-header">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-xl font-serif text-text">x402</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#servers" className="text-sm text-text-muted hover:text-text transition-colors">
                Servers
              </a>
              <a href="#facilitators" className="text-sm text-text-muted hover:text-text transition-colors">
                Facilitators
              </a>
              <a href="#ecosystem" className="text-sm text-text-muted hover:text-text transition-colors">
                Ecosystem
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* SECTION 1: HERO */}
      {/* ============================================ */}
      <section className="relative overflow-hidden noise-texture">
        <div className="max-w-6xl mx-auto px-4 md:px-8 pt-12 pb-20 md:pt-16 md:pb-28">

          {/* Hero Content */}
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-text mb-6">
                The Payment Layer
                <br />
                for AI Agents
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 text-balance">
                x402 enables AI agents to autonomously pay for resources and
                services across the internet. No API keys. No subscriptions.
                Just seamless, pay-per-use access to any monetized endpoint.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                <InfoButton
                  label="What is x402?"
                  onClick={() => openDialog("whatIsX402")}
                />
                <span className="text-border">|</span>
                <InfoButton
                  label="What's a resource?"
                  onClick={() => openDialog("whatIsResource")}
                />
                <span className="text-border">|</span>
                <InfoButton
                  label="What's a facilitator?"
                  onClick={() => openDialog("whatIsFacilitator")}
                />
              </div>
            </FadeIn>
          </div>

          {/* Stats Row */}
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { label: "Total Volume", ...stats.totalVolume },
              { label: "Active Resources", ...stats.activeResources },
              { label: "Transactions (24h)", ...stats.transactions24h },
              { label: "Facilitators", ...stats.facilitators },
            ].map((stat) => (
              <FadeInStaggerItem
                key={stat.label}
                className="bg-card border border-border rounded-xl p-4 md:p-6 card-hover"
              >
                <p className="text-xs md:text-sm text-text-muted uppercase tracking-wide mb-1">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-serif text-text">
                    {stat.value}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      stat.positive ? "text-success" : "text-warning"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: RESOURCES & SERVERS */}
      {/* ============================================ */}
      <section id="servers" className="py-16 md:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl text-text mb-3">
                  Servers and Resources
                </h2>
                <p className="text-text-muted max-w-xl">
                  Resources are monetized API endpoints. Servers host and manage
                  collections of resources. Together, they form the supply side of
                  the x402 economy.
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3">
                <InfoButton
                  label="What's a resource?"
                  onClick={() => openDialog("whatIsResource")}
                />
                <InfoButton
                  label="What's a server?"
                  onClick={() => openDialog("whatIsServer")}
                />
              </div>
            </div>
          </FadeIn>

          {/* Top Servers */}
          <FadeIn delay={0.1}>
            <div className="mb-12">
              <h3 className="text-lg font-medium text-text mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                  />
                </svg>
                Top Servers
              </h3>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-xs uppercase tracking-wide text-text-muted font-medium">
                        Server
                      </th>
                      <th className="text-left p-4 text-xs uppercase tracking-wide text-text-muted font-medium hidden md:table-cell">
                        Description
                      </th>
                      <th className="text-right p-4 text-xs uppercase tracking-wide text-text-muted font-medium">
                        Resources
                      </th>
                      <th className="text-right p-4 text-xs uppercase tracking-wide text-text-muted font-medium">
                        Calls
                      </th>
                      <th className="text-right p-4 text-xs uppercase tracking-wide text-text-muted font-medium">
                        Revenue
                      </th>
                      <th className="text-right p-4 text-xs uppercase tracking-wide text-text-muted font-medium hidden sm:table-cell">
                        Trend
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {servers.map((server) => (
                      <tr key={server.id} className="table-row-hover border-b border-border last:border-0">
                        <td className="p-4">
                          <span className="font-medium text-text">
                            {server.name}
                          </span>
                        </td>
                        <td className="p-4 text-text-muted text-sm hidden md:table-cell">
                          {server.description}
                        </td>
                        <td className="p-4 text-right text-text">
                          {server.resources}
                        </td>
                        <td className="p-4 text-right text-text">
                          {server.calls}
                        </td>
                        <td className="p-4 text-right text-accent font-medium">
                          {server.revenue}
                        </td>
                        <td className="p-4 text-right hidden sm:table-cell">
                          <div className="inline-block">
                            <Sparkline data={server.sparkline} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </FadeIn>

          {/* Top Resources */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-lg font-medium text-text mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Top Resources
              </h3>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-xs uppercase tracking-wide text-text-muted font-medium">
                        Resource
                      </th>
                      <th className="text-left p-4 text-xs uppercase tracking-wide text-text-muted font-medium hidden md:table-cell">
                        Server
                      </th>
                      <th className="text-left p-4 text-xs uppercase tracking-wide text-text-muted font-medium hidden sm:table-cell">
                        Category
                      </th>
                      <th className="text-right p-4 text-xs uppercase tracking-wide text-text-muted font-medium">
                        Price
                      </th>
                      <th className="text-right p-4 text-xs uppercase tracking-wide text-text-muted font-medium">
                        Calls (30d)
                      </th>
                      <th className="text-right p-4 text-xs uppercase tracking-wide text-text-muted font-medium hidden sm:table-cell">
                        Trend
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {resources.map((resource) => (
                      <tr key={resource.id} className="table-row-hover border-b border-border last:border-0">
                        <td className="p-4">
                          <span className="font-medium text-text">
                            {resource.name}
                          </span>
                        </td>
                        <td className="p-4 text-text-muted text-sm hidden md:table-cell">
                          {resource.server}
                        </td>
                        <td className="p-4 hidden sm:table-cell">
                          <span className="inline-block px-2 py-1 text-xs bg-border/50 text-text-muted rounded">
                            {resource.category}
                          </span>
                        </td>
                        <td className="p-4 text-right text-text font-mono text-sm">
                          {resource.price}
                        </td>
                        <td className="p-4 text-right text-text">
                          {resource.calls}
                        </td>
                        <td className="p-4 text-right hidden sm:table-cell">
                          <div className="inline-block">
                            <Sparkline data={resource.sparkline} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: FACILITATORS */}
      {/* ============================================ */}
      <section id="facilitators" className="py-16 md:py-24 bg-card/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl text-text mb-3">
                  Payment Facilitators
                </h2>
                <p className="text-text-muted max-w-xl">
                  Facilitators handle the payment flow between agents and servers.
                  They abstract away blockchain complexity and provide instant,
                  verifiable payments.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <InfoButton
                  label="How facilitation works"
                  onClick={() => openDialog("whatIsFacilitator")}
                />
              </div>
            </div>
          </FadeIn>

          {/* Featured Facilitator Chart */}
          <FadeIn delay={0.1}>
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-serif text-text">
                    {featuredFacilitator.name}
                  </h3>
                  <p className="text-sm text-text-muted">
                    Transaction volume over 30 days
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-3 sm:mt-0">
                  <div className="text-right">
                    <p className="text-2xl font-serif text-text">
                      {featuredFacilitator.volume}
                    </p>
                    <p className="text-xs text-text-muted">Total Volume</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-serif text-accent">
                      {featuredFacilitator.transactions}
                    </p>
                    <p className="text-xs text-text-muted">Transactions</p>
                  </div>
                </div>
              </div>
              <FacilitatorChart facilitator={featuredFacilitator} />
            </div>
          </FadeIn>

          {/* Facilitator Cards */}
          <FadeInStagger className="grid md:grid-cols-3 gap-4 items-stretch" staggerDelay={0.1}>
            {facilitators.map((facilitator) => (
              <FadeInStaggerItem key={facilitator.id} className="h-full">
                <button
                  onClick={() => setFeaturedFacilitator(facilitator)}
                  className={`w-full h-full text-left p-5 rounded-xl border transition-all outline-none focus:ring-2 focus:ring-accent/50 flex flex-col ${
                    featuredFacilitator.id === facilitator.id
                      ? "bg-card border-accent shadow-lg shadow-accent/10"
                      : "bg-card/50 border-border hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-text">{facilitator.name}</h4>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        facilitator.status === "online"
                          ? "status-online"
                          : "status-degraded"
                      }`}
                    >
                      {facilitator.status}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted mb-4 flex-grow">
                    {facilitator.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4 mt-auto">
                    <div>
                      <p className="text-lg font-serif text-text">
                        {facilitator.volume}
                      </p>
                      <p className="text-xs text-text-muted">Volume</p>
                    </div>
                    <div>
                      <p className="text-lg font-serif text-text">
                        {facilitator.transactions}
                      </p>
                      <p className="text-xs text-text-muted">Txns</p>
                    </div>
                    <div>
                      <p className="text-lg font-serif text-accent">
                        {facilitator.fee}
                      </p>
                      <p className="text-xs text-text-muted">Fee</p>
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {facilitator.currencies.slice(0, 3).map((c) => (
                          <span
                            key={c}
                            className="text-xs bg-border/50 text-text-muted px-1.5 py-0.5 rounded"
                          >
                            {c}
                          </span>
                        ))}
                        {facilitator.currencies.length > 3 && (
                          <span className="text-xs text-text-muted">
                            +{facilitator.currencies.length - 3}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-muted mt-1">Currencies</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border w-full">
                    <Sparkline data={facilitator.sparkline} width="100%" height={28} />
                  </div>
                </button>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: ECOSYSTEM */}
      {/* ============================================ */}
      <section id="ecosystem" className="py-16 md:py-24 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl text-text mb-3">
                Who&apos;s Building
              </h2>
              <p className="text-text-muted max-w-xl">
                A growing ecosystem of tools, services, and infrastructure
                enabling the x402 economy.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {ecosystem.map((category) => (
              <FadeInStaggerItem key={category.title}>
                <h3 className="text-sm font-medium text-text-muted uppercase tracking-wide mb-4">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-card border border-border rounded-xl card-hover group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-text group-hover:text-accent transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-sm text-text-muted mt-1">
                            {item.description}
                          </p>
                        </div>
                        <svg
                          className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.3}>
            <div className="mt-10 text-center">
              <a
                href="https://x402.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
              >
                View Full Directory
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
              </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: THESIS */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-text mb-8">
              Why This Matters
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="prose prose-lg mx-auto text-text-muted">
              <p className="text-lg leading-relaxed mb-6">
                The internet was built for humans. Pages, forms, subscriptions,
                API keys—all designed for people to navigate and negotiate. But
                AI agents don&apos;t work like that. They need to access resources
                programmatically, instantly, and at massive scale.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                x402 creates a new primitive: the ability for any software agent
                to pay for any resource, in real-time, with no pre-negotiation.
                It&apos;s HTTP extended with native payments.
              </p>
              <p className="text-xl leading-relaxed mb-8 text-text font-serif italic">
                &ldquo;In five years, more economic activity will happen between
                machines than between humans and machines.&rdquo;
              </p>
              <p className="text-lg leading-relaxed">
                x402 is the infrastructure that makes this possible. It&apos;s how
                agents will pay for compute, data, inference, and every other
                resource they need to be useful.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <InfoButton
                label="Why should I care?"
                onClick={() => openDialog("whyShouldICare")}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: GET STARTED */}
      {/* ============================================ */}
      <section id="get-started" className="py-16 md:py-24 bg-dark-bg text-white relative overflow-hidden scroll-mt-16">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-3">Get Started</h2>
              <p className="text-white/60">Three paths into the x402 ecosystem</p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {/* Build with x402 */}
            <FadeInStaggerItem>
              <div className="bg-dark-card rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Build with x402</h3>
              <p className="text-white/60 text-sm mb-6">
                Add payment capabilities to your AI agents with our SDKs and
                tooling.
              </p>
              <div className="space-y-3">
                <a
                  href="https://x402.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                >
                  <span>Documentation</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/anthropics/x402-fetch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                >
                  <span>x402-fetch SDK</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/coinbase/agentkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                >
                  <span>AgentKit</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                </div>
              </div>
            </FadeInStaggerItem>

            {/* Monetize Your API */}
            <FadeInStaggerItem>
              <div className="bg-dark-card rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-2">Monetize Your API</h3>
              <p className="text-white/60 text-sm mb-6">
                Turn any API into a paid resource with our server middleware
                and facilitator integrations.
              </p>
              <div className="space-y-3">
                <a
                  href="https://github.com/anthropics/x402-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                >
                  <span>Server SDK</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="https://x402jobs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                >
                  <span>List on x402jobs</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="https://openfacilitator.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                >
                  <span>OpenFacilitator</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeInStaggerItem>

            {/* Join the Community */}
            <FadeInStaggerItem>
              <div className="bg-dark-card rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif mb-2">Join the Community</h3>
                <p className="text-white/60 text-sm mb-6">
                  Connect with builders, learn from experts, and shape the future
                  of agent payments.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://agentbuilders.club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                  >
                    <span>Agent Builders Club</span>
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/x402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                >
                  <span>Discord</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/x402protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                >
                  <span>Twitter</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeInStaggerItem>
          </FadeInStagger>

          {/* Footer */}
          <FadeIn delay={0.3}>
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Logo size="sm" />
                <span className="text-white/60 text-sm">
                  x402.eco — The Payment Layer for AI Agents
                </span>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="https://www.x402.org/x402-whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Whitepaper
                </a>
                <a
                  href="https://x402.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  x402.org
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

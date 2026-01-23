"use client";

import { useState } from "react";
import { FacilitatorChart } from "@/components/FacilitatorChart";
import { EducationalDialog } from "@/components/EducationalDialog";
import { InfoButton } from "@/components/InfoButton";
import { Sparkline } from "@/components/Sparkline";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/FadeIn";
import { type Facilitator, educationalContent } from "@/lib/data";

type DialogType = keyof typeof educationalContent | null;

interface HomeClientProps {
  facilitators: Facilitator[];
  educationalContent: typeof import("@/lib/data").educationalContent;
}

/**
 * HomeClient - Client Component
 *
 * Handles all interactive state for the home page:
 * - Educational dialogs
 * - Hero info buttons
 * - Facilitator selection and chart
 */
export function HomeClient({ facilitators, educationalContent }: HomeClientProps) {
  const [dialogOpen, setDialogOpen] = useState<DialogType>(null);
  const [featuredFacilitator, setFeaturedFacilitator] = useState<Facilitator>(
    facilitators[0]
  );

  const openDialog = (type: DialogType) => setDialogOpen(type);
  const closeDialog = () => setDialogOpen(null);

  return (
    <>
      {/* Educational Dialog */}
      {dialogOpen && (
        <EducationalDialog
          isOpen={!!dialogOpen}
          onClose={closeDialog}
          title={educationalContent[dialogOpen].title}
          content={educationalContent[dialogOpen].content}
        />
      )}

      {/* Hero Info Buttons */}
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

      {/* Servers Section Info Buttons */}
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

      {/* Thesis Section Info Button */}
      <FadeIn delay={0.2}>
        <div className="mt-10">
          <InfoButton
            label="Why should I care?"
            onClick={() => openDialog("whyShouldICare")}
          />
        </div>
      </FadeIn>
    </>
  );
}

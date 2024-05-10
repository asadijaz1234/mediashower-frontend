"use client";

import dynamic from "next/dynamic";

import { MainLayout } from "~/components/main-layout";
import { PricingHeroSection } from "./pricing-hero-section";
import { PricingPlanSection } from "./pricing-plan-section";

const PricingSignupSection = dynamic(() =>
  import("./pricing-signup-section").then(
    (module) => module.PricingSignupSection
  )
);

export const PricingPage = () => {
  return (
    <MainLayout>
      <PricingHeroSection />
      <PricingPlanSection />
      <PricingSignupSection />
    </MainLayout>
  );
};

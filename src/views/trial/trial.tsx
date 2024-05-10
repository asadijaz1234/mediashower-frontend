"use client";
import { MainLayout } from "~/components/main-layout";
import { TrialHeroSection } from "./trial-hero-section";
import { TrialFeaturesSection } from "./trial-features-section";
import { TrialActionSection } from "./trial-action-section";

export const TrialPage = () => {
  return (
    <MainLayout>
      <TrialHeroSection />
      <TrialFeaturesSection />
      <TrialActionSection/>
    </MainLayout>
  );
};

"use client";

import dynamic from "next/dynamic";
import { MainLayout } from "~/components/main-layout";
import { SubscriptionHeroSection } from "./subscription-hero-section";
import { SubscriptionPricingSection } from "./subscription-pricing-section";

const SubscriptionNewsletterSection = dynamic(
  () => import("./subscription-newsletter-section").then((module) => module.SubscriptionNewsletterSection),
  {
    ssr: false,
  }
);

export const SubscriptionPage = () => {
  return (
    <MainLayout>
      <SubscriptionHeroSection />
      <SubscriptionPricingSection />
      <SubscriptionNewsletterSection />
    </MainLayout>
  );
};

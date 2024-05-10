"use client";

import dynamic from "next/dynamic";

import { MainLayout } from "~/components/main-layout";
import { PlatformHeroSection } from "./platform-hero-section";
import { PlatformInActionSection } from "./platform-in-action-section";
import { PlatformPeopleSection } from "./platform-people-section";
import { PlatformMarketingSection } from "./platform-marketing-section";

const PlatformSignupSection = dynamic(() =>
  import("./platform-signup-section").then((module) => module.PlatformSignupSection)
);

//Component
export const PlatformPage = () => {
  return (
    <MainLayout>
      <PlatformHeroSection />
      <PlatformInActionSection />
      <PlatformMarketingSection />
      <PlatformPeopleSection />
      <PlatformSignupSection />
    </MainLayout>
  );
};

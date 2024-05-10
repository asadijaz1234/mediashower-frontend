"use client";

import dynamic from "next/dynamic";

import { MainLayout } from "~/components/main-layout";
import { AboutHeroSection } from "./about-hero-section";

const AboutSignupSection = dynamic(() =>
  import("./about-signup-section").then((module) => module.AboutSignupSection)
);

//Component
export const AboutPage = () => {
  return (
    <MainLayout>
      <AboutHeroSection />
      <AboutSignupSection />
    </MainLayout>
  );
};

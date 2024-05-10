"use client";

import { useMemo } from "react";

import dynamic from "next/dynamic";

import { MainLayout } from "~/components/main-layout";
import { HomeHeroSection, HomeHeroSectionProps } from "./home-hero-section";
import { HomeOffersSection } from "./home-offers-section";
import { HomePrimaryFeaturesSection } from "./home-primary-features-section";
import { HomeLatestPostsSection, HomeLatestPostsSectionProps } from "./home-latest-posts-section";
import { HomeDemoSection } from "./home-demo-section";
import { HomeBrandsSection } from "./home-brands-section";
import { HomePromoSection } from "./home-promo-section";

const HomeNewsletterSection = dynamic(
  () => import("./home-newsletter-section").then((module) => module.HomeNewsletterSection),
  {
    ssr: false,
  }
);

interface HomePageProps {
  activeIndex?: HomeHeroSectionProps["activeIndex"];
  posts?: HomeLatestPostsSectionProps["items"];
}

// Component
export const HomePage = (props: HomePageProps) => {
  const { activeIndex, posts } = props;

  return useMemo(() => {
    return (
      <MainLayout>
        <HomeHeroSection activeIndex={activeIndex} />
        <HomePrimaryFeaturesSection />
        <HomeBrandsSection />
        <HomeOffersSection />
        <HomeDemoSection />
        <HomePromoSection />
        <HomeLatestPostsSection items={posts} />
        <HomeNewsletterSection />
      </MainLayout>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

"use client";

import dynamic from "next/dynamic";

import { MainLayout } from "~/components/main-layout";
import { ProductsHeroSection } from "./products-hero-section";
import { ProductsBlogsSection } from "./products-blogs-section";
import { ProductsLandingPagesSection } from "./products-landing-pages-section";
import { ProductsPostsSection } from "./products-posts-section";
import { ProductsVideosSection } from "./products-videos-section";
import { ProductsEbooksSection } from "./products-ebooks-section";
import { ProductsSalesSection } from "./products-sales-section";

const ProductsSignupSection = dynamic(() =>
  import("./products-signup-section").then(
    (module) => module.ProductsSignupSection
  )
);

//Component
export const ProductsPage = () => {
  return (
    <MainLayout>
      <ProductsHeroSection />
      <ProductsBlogsSection />
      <ProductsLandingPagesSection />
      <ProductsEbooksSection />
      <ProductsSalesSection />
      <ProductsPostsSection />
      <ProductsVideosSection />
      <ProductsSignupSection />
    </MainLayout>
  );
};

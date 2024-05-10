import { PricingLabel, PricingPlan } from "~/components/pricing";

// Configs
export const pricingLabels: PricingLabel[] = [
  {
    id: "al-marketing-assistant",
    label: "AI Marketing Assistant",
  },
  {
    id: "marketing-communication-strategy",
    label: "Marketing Communication Strategy",
  },
  {
    id: "seo-keyword-strategy",
    label: "SEO Keyword Strategy",
  },
  {
    id: "content-calendar",
    label: "Content calendar",
  },
  {
    id: "content-creation-credits",
    label: "Content Creation Credits",
  },
  {
    id: "dedicated-content-team",
    label: "Dedicated Content Team",
  },
  {
    id: "sme-interviews",
    label: "Subject Matter Expert (SME) Interviews",
  },
  {
    id: "blog-publishing-team",
    label: "Blog Publishing Team",
  },
  {
    id: "social-media-promotion",
    label: "Social Media Promotion",
  },
  {
    id: "roi-reporting",
    label: "ROI Reporting",
  },
  {
    id: "monthly-progress-calls",
    label: "Monthly Progress Calls",
  },
  {
    id: "monthly-seo-optimization",
    label: "Monthly SEO Optimization",
  },
  {
    id: "monthly-video-production",
    label: "Monthly Video Production",
  },
];

export const pricingPlanBeginner: PricingPlan = {
  title: "Beginner",
  summary: {
    label: "Monthly pricing",
    value: "$99/mo",
  },
  items: [
    {
      id: "al-marketing-assistant",
      value: "Included",
    },
    {
      id: "marketing-communication-strategy",
      value: "AI only",
    },
    {
      id: "seo-keyword-strategy",
      value: "AI only",
    },
    {
      id: "content-calendar",
      value: "AI only",
    },
  ],
};

export const pricingPlanBudget: PricingPlan = {
  title: "Budget",
  summary: {
    label: "Monthly pricing",
    value: "$2.5K/mo",
  },
  items: [
    {
      id: "al-marketing-assistant",
      value: "Included",
    },
    {
      id: "marketing-communication-strategy",
      value: "AI + humans",
    },
    {
      id: "seo-keyword-strategy",
      value: "AI + humans",
    },
    {
      id: "content-calendar",
      value: "AI + humans",
    },
    {
      id: "content-creation-credits",
      value: "8/month",
    },
    {
      id: "dedicated-content-team",
      value: "Included",
    },
    {
      id: "blog-publishing-team",
      value: "Included",
    },
    {
      id: "roi-reporting",
      value: "Included",
    },
    {
      id: "monthly-progress-calls",
      value: "Included",
    },
  ],
};

export const pricingPlanBasic: PricingPlan = {
  title: "Basic",
  summary: {
    label: "Monthly pricing",
    value: "$5K/mo",
  },
  items: [
    {
      id: "al-marketing-assistant",
      value: "Included",
    },
    {
      id: "marketing-communication-strategy",
      value: "AI + humans",
    },
    {
      id: "seo-keyword-strategy",
      value: "AI + humans",
    },
    {
      id: "content-calendar",
      value: "AI + humans",
    },
    {
      id: "content-creation-credits",
      value: "20/month",
    },
    {
      id: "dedicated-content-team",
      value: "Included",
    },
    {
      id: "sme-interviews",
      value: "Included",
    },
    {
      id: "blog-publishing-team",
      value: "Included",
    },
    {
      id: "social-media-promotion",
      value: "Included",
    },
    {
      id: "roi-reporting",
      value: "Included",
    },
    {
      id: "monthly-progress-calls",
      value: "Included",
    },
  ],
};

export const pricingPlanBetter: PricingPlan = {
  title: "Better",
  summary: {
    label: "Monthly pricing",
    value: "$10K/mo",
  },
  items: [
    {
      id: "al-marketing-assistant",
      value: "Included",
    },
    {
      id: "marketing-communication-strategy",
      value: "AI + humans",
    },
    {
      id: "seo-keyword-strategy",
      value: "AI + humans",
    },
    {
      id: "content-calendar",
      value: "AI + humans",
    },
    {
      id: "content-creation-credits",
      value: "50/month",
    },
    {
      id: "dedicated-content-team",
      value: "Included",
    },
    {
      id: "sme-interviews",
      value: "Included",
    },
    {
      id: "blog-publishing-team",
      value: "Included",
    },
    {
      id: "social-media-promotion",
      value: "Included",
    },
    {
      id: "roi-reporting",
      value: "Included",
    },
    {
      id: "monthly-progress-calls",
      value: "Included",
    },
    {
      id: "monthly-seo-optimization",
      value: "Included",
    },
    {
      id: "monthly-video-production",
      value: "Included",
    },
  ],
};

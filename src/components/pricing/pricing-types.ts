export interface PricingLabel {
  id: string;
  label: string;
}

export interface PricingPlan {
  title: string;
  summary: {
    label: string;
    value: string;
  };
  items: Array<{
    id: PricingLabel["id"];
    value?: string | number | boolean;
  }>;
}

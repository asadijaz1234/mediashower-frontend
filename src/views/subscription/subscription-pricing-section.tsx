import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { PageSection, PageSectionProps } from "~/components/page-section";
import { PricingCard, PricingTable } from "~/components/pricing";
import {
  pricingLabels,    
  pricingPlanBasic,
  pricingPlanBeginner,
  pricingPlanBetter,
  pricingPlanBudget,
} from "./subscription-pricing.config";

//Interfaces
export interface SubscriptionPricingSectionProps extends PageSectionProps {}

//Styles
export const SubscriptionPricingSectionStyles = styled((props: PageSectionProps) => (
  <PageSection disablePadding {...props} />
))(({ theme }) => {
  return {};
});

const PricingCardBasicStyles = styled(PricingCard)(({ theme }) => {
  return {
    "& .PricingCardLabel-root": {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
    },

    "& .PricingCardItem-root": {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightMedium,
    },
  };
});

const BeginnerPlanCardStyles = styled(PricingCardBasicStyles)(({ theme }) => {
  return {
    "& .PricingCardPlan-body": {
      backgroundColor: "#FF9100",
      color: "#fff",

      "& .MuiDivider-root": {
        borderColor: "#fff",
        opacity: 0.5,
      },

      "& .PricingCardSummary-root": {
        backgroundColor: "rgba(0,0,0, .1)",
      },
    },
  };
});

const BudgetPlanCardStyles = styled(PricingCardBasicStyles)(({ theme }) => {
  return {
    "& .PricingCardPlan-body": {
      "& .PricingCardSummary-root": {
        backgroundColor: "#78B5FF",
        color: "#fff",
      },
    },
  };
});

const BasicPlanCardStyles = styled(PricingCardBasicStyles)(({ theme }) => {
  return {
    "& .PricingCardPlan-body": {
      "& .PricingCardSummary-root": {
        backgroundColor: "#0ACF83",
        color: "#fff",
      },
    },
  };
});

const BetterPlanCardStyles = styled(PricingCardBasicStyles)(({ theme }) => {
  return {
    "& .PricingCardPlan-body": {
      "& .PricingCardSummary-root": {
        backgroundColor: "#F8928C",
        color: "#fff",
      },
    },
  };
});

//Component
export const SubscriptionPricingSection = (props: SubscriptionPricingSectionProps) => {
  return (
    <SubscriptionPricingSectionStyles>
      <Container maxWidth="xxl">
        <PricingTable>
          <BeginnerPlanCardStyles
            labels={pricingLabels}
            data={pricingPlanBeginner}
            fbar={
              <Button color="secondary" fullWidth href="/products/subscription/add/8">
                Sign up
              </Button>
            }
          />
          <BudgetPlanCardStyles
            labels={pricingLabels}
            data={pricingPlanBudget}
            fbar={
              <Button color="inherit" fullWidth href="/products/subscription/add/9">
                Sign up
              </Button>
            }
          />
          <BasicPlanCardStyles
            labels={pricingLabels}
            data={pricingPlanBasic}
            fbar={
              <Button color="inherit" fullWidth href="/products/subscription/add/10">
                Sign up
              </Button>
            }
          />
          <BetterPlanCardStyles
            labels={pricingLabels}
            data={pricingPlanBetter}
            fbar={
              <Button color="inherit" fullWidth href="/products/subscription/add/11">
                Sign up
              </Button>
            }
          />
        </PricingTable>
      </Container>
    </SubscriptionPricingSectionStyles>
  );
};

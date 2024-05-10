import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import { PageSection, PageSectionProps, PageSectionSubtitle, PageSectionTitle } from "~/components/page-section";
import {
  pricingLabels,
  pricingPlanBasic,
  pricingPlanBetter,
  pricingPlanBudget,
  pricingPlanBeginner,
} from "./pricing.config";
import { PricingCard, PricingTable } from "~/components/pricing";

//Interfaces
export interface PricingPlanSectionProps extends PageSectionProps {}

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




//Styles
const BeginnerCardStyles = styled(PricingCardBasicStyles)(({ theme }) => {
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

const SectionStyles = styled((props) => <PageSection disableMargin {...props} />)(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey["100"],
  };
});

//Component
export const PricingPlanSection = (props: PricingPlanSectionProps) => {
  return (
    <SectionStyles {...props}>
      <Container maxWidth="xxl">
        <PageSectionTitle gutterBottom>Four Times (or More Times) Cheaper.</PageSectionTitle>
        <PageSectionSubtitle gutterBottom>
          Over 500 cost-saving clients agree that Media Shower delivers better results, at a fraction of the price.
        </PageSectionSubtitle>
        <PricingTable>
          <BeginnerCardStyles labels={pricingLabels} data={pricingPlanBeginner} />
          <BudgetPlanCardStyles labels={pricingLabels} data={pricingPlanBudget} />
          <BasicPlanCardStyles labels={pricingLabels} data={pricingPlanBasic} />
          <BetterPlanCardStyles labels={pricingLabels} data={pricingPlanBetter} />
        </PricingTable>
      </Container>
    </SectionStyles>
  );
};

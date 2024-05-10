import { styled } from "@mui/material/styles";

import { PageSection, PageSectionProps } from "~/components/page-section";
import { SignupSection } from "~/components/signup";

//Interfaces
export interface PricingSignupSectionProps extends PageSectionProps {}

//Styles
export const PricingSignupSectionStyles = styled((props) => (
  <PageSection disableMargin disablePadding {...props} />
))(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey["100"],
    padding: theme.spacing(0, 0, 8, 0),

    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(0, 0, 6, 0),
    },
  };
});

//Component
export const PricingSignupSection = (props: PricingSignupSectionProps) => {
  return (
    <PricingSignupSectionStyles {...props}>
      <SignupSection />
    </PricingSignupSectionStyles>
  );
};

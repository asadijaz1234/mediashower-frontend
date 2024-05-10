import { styled } from "@mui/material/styles";

import { PageSection, PageSectionProps } from "~/components/page-section";
import { SignupSection } from "~/components/signup";

//Interfaces
export interface PlatformSignupSectionProps extends PageSectionProps {}

//Styles
export const PlatformSignupSectionStyles = styled((props) => (
  <PageSection disableMargin disablePadding {...props} />
))(({ theme }) => {
  return {
    padding: theme.spacing(0, 0, 8, 0),

    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(0, 0, 6, 0),
    },
  };
});

//Component
export const PlatformSignupSection = (props: PlatformSignupSectionProps) => {
  return (
    <PlatformSignupSectionStyles {...props}>
      <SignupSection />
    </PlatformSignupSectionStyles>
  );
};

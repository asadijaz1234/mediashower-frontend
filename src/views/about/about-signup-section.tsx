import { styled } from "@mui/material/styles";

import { PageSection, PageSectionProps } from "~/components/page-section";
import { SignupSection } from "~/components/signup";

//Interfaces
export interface AboutSignupSectionProps extends PageSectionProps {}

//Styles
export const AboutSignupSectionStyles = styled((props) => (
  <PageSection disableMargin disablePadding {...props} />
))(({ theme }) => {
  return {
    backgroundColor: "#FF9100",
  };
});

//Component
export const AboutSignupSection = (props: AboutSignupSectionProps) => {
  return (
    <AboutSignupSectionStyles {...props}>
      <SignupSection />
    </AboutSignupSectionStyles>
  );
};

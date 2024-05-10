import { styled } from "@mui/material/styles";

import { PageSection, PageSectionProps } from "~/components/page-section";
import { SignupSection } from "~/components/signup";

//Interfaces
export interface ProductsSignupSectionProps extends PageSectionProps {}

//Styles
export const ProductsSignupSectionStyles = styled(PageSection)(({ theme }) => {
  return {};
});

//Component
export const ProductsSignupSection = (props: ProductsSignupSectionProps) => {
  return (
    <ProductsSignupSectionStyles disablePadding {...props}>
      <SignupSection />
    </ProductsSignupSectionStyles>
  );
};

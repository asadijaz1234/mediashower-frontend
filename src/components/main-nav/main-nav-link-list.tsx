import { styled } from "@mui/material/styles";

import { MainNavLink } from "./main-nav-link";

//Interfaces
export interface MainNavLinkListProps extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
export const MainNavLinkListStyles = styled("div")(({ theme }) => {
  return {};
});

//Component
export const MainNavLinkList = (props: MainNavLinkListProps) => {
  return (
    <MainNavLinkListStyles {...props}>
      <MainNavLink href="/platform">Platform</MainNavLink>
      <MainNavLink href="/products">Products</MainNavLink>
      <MainNavLink href="/pricing">Pricing</MainNavLink>
      <MainNavLink href="/blog/better-communication">Resources</MainNavLink>
      <MainNavLink href="/blog">Blog</MainNavLink>
      <MainNavLink href="/about">About</MainNavLink>
    </MainNavLinkListStyles>
  );
};

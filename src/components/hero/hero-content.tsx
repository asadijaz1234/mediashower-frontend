import { styled } from "@mui/material/styles";

//Interfaces
export interface HeroContentProps extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
export const HeroContentStyles = styled("div", {
  target: "HeroContent-root",
})(() => {
  return {};
});

//Component
export const HeroContent = (props: HeroContentProps) => {
  return <HeroContentStyles {...props} />;
};

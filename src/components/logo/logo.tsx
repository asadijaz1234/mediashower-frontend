import { styled } from "@mui/material/styles";

import { LogoSvg } from "~/assets/svg-icons";

//Interfaces
export interface LogoProps extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
export const LogoStyles = styled("div")(({ theme }) => {
  return {
    display: "flex",
    justifyContent: "stretch",
    alignItems: "stretch",
    width: 150,
    height: 40,

    [theme.breakpoints.down("lg")]: {
      width: 128,
      height: 34,
    },
  };
});

//Component
export const Logo = (props: LogoProps) => {
  return (
    <LogoStyles {...props}>
      <LogoSvg />
    </LogoStyles>
  );
};

import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

//Interfaces
export interface HeroTextProps extends TypographyProps {}

//Styles
const HeroTextStyles = styled((props: TypographyProps) => <Typography variant="h6" {...props} />, {
  target: "HeroText-root",
})(({ theme, gutterBottom }) => {
  return {
    color: "inherit",

    ...(gutterBottom && {
      marginBottom: theme.spacing(2.5),
    }),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(16),
    },
  };
});

//Component
export const HeroText = (props: HeroTextProps) => {
  return <HeroTextStyles {...props} />;
};

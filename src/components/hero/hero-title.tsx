import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

//Interfaces
export interface HeroTitleProps extends TypographyProps {}

//Styles
const HeroTitleStyles = styled((props: TypographyProps) => <Typography variant="h2" {...props} />, {
  target: "HeroTitle-root",
})(({ theme, gutterBottom }) => {
  return {
    color: "inherit",

    ...(gutterBottom && {
      marginBottom: theme.spacing(3),
    }),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(35),
    },
  };
});

//Component
export const HeroTitle = (props: HeroTitleProps) => {
  return <HeroTitleStyles {...props} />;
};

import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

//Interfaces
export interface PageSectionTitleProps extends TypographyProps {}

//Styles
export const PageSectionTitleStyles = styled(
  (props: TypographyProps) => <Typography variant="h4" {...props} />,
  {
    target: "PageSectionTitle-root",
  }
)(({ theme, gutterBottom }) => {
  return {
    textAlign: "center",
    lineHeight: 1.2,
    margin: "0 auto",

    ...(gutterBottom && {
      marginBottom: theme.spacing(2.5),
    }),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(32),
    },
  };
});

//Component
export const PageSectionTitle = (props: PageSectionTitleProps) => {
  return <PageSectionTitleStyles {...props} />;
};

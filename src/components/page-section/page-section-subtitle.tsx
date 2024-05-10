import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";

//Interfaces
export interface PageSectionSubtitleProps extends TypographyProps {}

//Styles
export const PageSectionSubtitleStyles = styled(
  (props: TypographyProps) => <Typography variant="h6" {...props} />,
  {
    target: "PageSectionSubtitle-root",
  }
)(({ theme, gutterBottom }) => {
  return {
    textAlign: "center",
    fontSize: theme.typography.pxToRem(19),
    lineHeight: 1.3,
    margin: "0 auto",

    ...(gutterBottom && {
      marginBottom: theme.spacing(5),
    }),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  };
});

//Component
export const PageSectionSubtitle = (props: PageSectionSubtitleProps) => {
  return <PageSectionSubtitleStyles {...props} />;
};

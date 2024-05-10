import { styled } from "@mui/material/styles";

import Typography, { TypographyProps } from "@mui/material/Typography";

//Interfaces
export interface NewsletterHeaderProps extends Omit<React.ComponentPropsWithoutRef<"header">, "title"> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

//Styles
const TitleStyles = styled((props: TypographyProps) => <Typography variant="h4" {...props} />, {
  target: "Newsletter-title",
})(({ theme }) => {
  return {
    marginBottom: theme.spacing(3),
    textAlign: "center",

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(32),
    },
  };
});

const SubTitleStyles = styled((props: TypographyProps) => <Typography variant="h6" {...props} />, {
  target: "Newsletter-subtitle",
})(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(20),
    textAlign: "center",
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.pxToRem(18),
    },
  };
});

const HeaderStyles = styled("header", {
  target: "Newsletter-header",
})(({ theme }) => {
  return {};
});

//Component
export const NewsletterHeader = (props: NewsletterHeaderProps) => {
  const { title, subtitle, ...other } = props;

  return (
    <HeaderStyles {...other}>
      {title && <TitleStyles>{title}</TitleStyles>}
      {subtitle && <SubTitleStyles>{subtitle}</SubTitleStyles>}
    </HeaderStyles>
  );
};

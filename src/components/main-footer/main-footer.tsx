import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MainNavLink } from "../main-nav/main-nav-link";

//Interfaces
export interface MainFooterProps extends React.ComponentPropsWithoutRef<"footer"> {}

//Styles
export const FooterAddressStyles = styled(Typography)(({ theme }) => {
  return {
    maxWidth: 300,
  };
});

export const FooterContactsContainerStyles = styled("div")(({ theme }) => {
  return {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: theme.spacing(8),
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      gridAutoFlow: "row",
      gridGap: theme.spacing(1.5),
    },
  };
});

export const FooterLinksContainerStyles = styled("div")(({ theme }) => {
  return {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: theme.spacing(8),
    alignItems: "center",

    [theme.breakpoints.down("lg")]: {
      marginTop: theme.spacing(3),
      justifyItems: "center",
    },

    [theme.breakpoints.down("md")]: {
      gridAutoFlow: "row",
      gridGap: theme.spacing(1.5),
      justifyItems: "start",
      marginTop: theme.spacing(4.5),
    },
  };
});

export const FooterLinkStyles = styled(MainNavLink)(({ theme }) => {
  return {
    fontSize: "inherit",
    fontWeight: theme.typography.fontWeightRegular,
  };
});

export const MainFooterStyles = styled("footer")(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    backgroundColor: theme.palette.grey["800"],
    color: theme.palette.common.white,
    fontSize: theme.typography.body2.fontSize,
    minHeight: 89,

    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(4.5, 0),
      minHeight: "auto",
    },

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(7, 0),
    },

    "& .MuiContainer-root": {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      alignItems: "center",

      [theme.breakpoints.down("lg")]: {
        flexFlow: "column wrap",
        justifyContent: "stretch",
        alignItems: "center",

        "& > *": {
          width: "100%",
          maxWidth: 420,
        },
      },

      [theme.breakpoints.down("md")]: {
        alignItems: "flex-start",
      },
    },
  };
});

//Component
export const MainFooter = (props: MainFooterProps) => {
  return (
    <MainFooterStyles>
      <Container>
        <FooterContactsContainerStyles>
          <FooterAddressStyles variant="inherit">399 Boylston Street, Boston MA 02116</FooterAddressStyles>
          <Typography variant="inherit">+1-617-564-3443</Typography>
        </FooterContactsContainerStyles>
        <FooterLinksContainerStyles>
          <FooterLinkStyles href="/privacy.html">Privacy Policy</FooterLinkStyles>
          <FooterLinkStyles href="/terms.html">Terms and Conditions</FooterLinkStyles>
          <FooterLinkStyles href="/contact">Contact</FooterLinkStyles>
        </FooterLinksContainerStyles>
      </Container>
    </MainFooterStyles>
  );
};

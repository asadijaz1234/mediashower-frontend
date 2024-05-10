"use client";

import { useScrollTrigger } from "@mui/material";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import { alpha, styled } from "@mui/material/styles";

import { RoundMenuSvg } from "~/assets/svg-icons";
import { Logo } from "~/components/logo";
import { MainNavActions } from "~/components/main-nav/main-nav-actions";
import { MainNavLinkList } from "~/components/main-nav/main-nav-link-list";
import { useMainLayout } from "../main-layout/main-layout.context";

//Interfaces
export interface MainHeaderProps
  extends React.ComponentPropsWithoutRef<"header"> {}

interface MainHeaderStylesProps {
  ownerState: {
    elevatation?: boolean;
  };
}

//Styles
const MainHeaderMobileMenuButtonStyles = styled(IconButton)(({ theme }) => {
  return {
    color: theme.palette.secondary.main,

    [theme.breakpoints.up("lg")]: {
      display: "none",
    },

    "& .MuiIcon-root": {
      fontSize: theme.typography.pxToRem(32),
    },
  };
});

const MainHeaderLogoStyles = styled(Logo)(({ theme }) => {
  return {
    marginBottom: 20,
    marginRight: 78,

    [theme.breakpoints.down("lg")]: {
      marginBottom: 0,
    },

    [theme.breakpoints.down("xl")]: {
      marginRight: 0,
    },
  };
});

const MainHeaderNavLinkListStyles = styled(MainNavLinkList)(({ theme }) => {
  return {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: theme.spacing(6),
    margin: theme.spacing(0, 2.5),

    [theme.breakpoints.down("lg")]: {
      display: "none",
    },

    [theme.breakpoints.down("xl")]: {
      gridGap: theme.spacing(4),
    },
  };
});

const MainHeaderNavActionsStyles = styled(MainNavActions)(({ theme }) => {
  return {
    display: "grid",
    gridAutoFlow: "column",
    gridGap: theme.spacing(2),

    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  };
});

const MainHeaderContainerStyles = styled(Container)(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  };
});

const MainHeaderGutterStyles = styled("div")(({ theme }) => {
  return {
    width: "100%",
    minHeight: 80,

    [theme.breakpoints.down("lg")]: {
      minHeight: 70,
    },
  };
});

const MainHeaderStyles = styled("header")<MainHeaderStylesProps>(
  ({ theme, ownerState }) => {
    const { elevatation } = ownerState || {};

    return {
      position: "fixed",
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "center",
      backgroundColor: theme.palette.grey["800"],
      width: "100%",
      minHeight: 80,

      zIndex: theme.zIndex.appBar,

      ...(elevatation && {
        backgroundColor: alpha(theme.palette.grey["800"], 0.9),
        backdropFilter: "blur(4px)",
        boxShadow: theme.shadows[3],
        transition: theme.transitions.create(
          ["background-color", "box-shadow"],
          {
            duration: theme.transitions.duration.shorter,
          }
        ),
      }),

      [theme.breakpoints.down("lg")]: {
        minHeight: 70,
      },
    };
  }
);

//Component
export const MainHeader = (props: MainHeaderProps) => {
  const { openMobileDrawer } = useMainLayout();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  return (
    <>
      <MainHeaderStyles {...props} ownerState={{ elevatation: scrollTrigger }}>
        <MainHeaderContainerStyles maxWidth="xl">
          <a href="/">
            <MainHeaderLogoStyles />
          </a>
          <MainHeaderNavLinkListStyles />
          <MainHeaderNavActionsStyles />

          <MainHeaderMobileMenuButtonStyles onClick={openMobileDrawer}>
            <Icon>
              <RoundMenuSvg />
            </Icon>
          </MainHeaderMobileMenuButtonStyles>
        </MainHeaderContainerStyles>
      </MainHeaderStyles>
      <MainHeaderGutterStyles />
    </>
  );
};

"use client";

import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";

import { Logo } from "~/components/logo";
import { RoundCrossSvg } from "~/assets/svg-icons";
import { MainNavActions } from "~/components/main-nav";
import { useMainLayout } from "~/components/main-layout/main-layout.context";

//Interfaces
export interface MainMobileDrawerProps {}

//Styles
const MobileCloseButtonStyles = styled(IconButton)(({ theme }) => {
  return {
    color: theme.palette.secondary.main,

    "& .MuiIcon-root": {
      fontSize: theme.typography.pxToRem(32),
    },
  };
});

const MobileHeaderStyles = styled("header")(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.grey["800"],
    minHeight: 70,
    padding: theme.spacing(0, 2.5),
  };
});

const MobileNavListStyles = styled("div")(({ theme }) => {
  return {
    display: "grid",
    gridAutoFlow: "row",
    alignContent: "center",
    width: "100%",
    flex: 1,
    overflowY: "auto",

    "& .MuiListItemButton-root": {
      justifyContent: "center",
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightMedium,
      color: "#fff",
      minHeight: 50,
    },

    "@media (max-height: 534px)": {
      alignContent: "start",
    },
  };
});

const MobileFooterActionsStyles = styled(MainNavActions)(({ theme }) => {
  return {
    display: "grid",
    justifyItems: "center",
    gridGap: theme.spacing(2),
    padding: theme.spacing(2, 2.5, 4, 2.5),

    "& .MuiButton-root": {
      width: "100%",
      maxWidth: 426,
    },
  };
});

export const MainMobileDrawerStyles = styled(Drawer)(({ theme }) => {
  return {
    width: "100%",
    flexShrink: 0,

    [theme.breakpoints.up("lg")]: {
      display: "none",
    },

    "& .MuiPaper-root": {
      display: "flex",
      flexFlow: "column nowrap",
      width: "100%",
      backgroundColor: theme.palette.primary.dark,
      border: 0,
      minHeight: 0,
      overflow: "hidden",
    },
  };
});

//Component
export const MainMobileDrawer = () => {
  const { isMobileDrawerOpen, closeMobileDrawer } = useMainLayout();

  return (
    <MainMobileDrawerStyles
      open={isMobileDrawerOpen}
      anchor="right"
      hideBackdrop
      ModalProps={{ keepMounted: true }}
      onClose={closeMobileDrawer}
    >
      <MobileHeaderStyles>
        <Logo />
        <MobileCloseButtonStyles onClick={closeMobileDrawer}>
          <Icon>
            <RoundCrossSvg />
          </Icon>
        </MobileCloseButtonStyles>
      </MobileHeaderStyles>
      <MobileNavListStyles onClick={closeMobileDrawer}>
        <ListItemButton href="/platform">
          Platform
        </ListItemButton>
        <ListItemButton href="/products">
          Products
        </ListItemButton>
        <ListItemButton href="/pricing">
          Pricing
        </ListItemButton>
        <ListItemButton  href="/blog/better-communication">
          Resources
        </ListItemButton>
        <ListItemButton href="/blog">
          Blog
        </ListItemButton>
        <ListItemButton href="/about">
          About
        </ListItemButton>
      </MobileNavListStyles>
      <MobileFooterActionsStyles onClick={closeMobileDrawer} />
    </MainMobileDrawerStyles>
  );
};

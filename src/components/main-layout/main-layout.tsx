"use client";

import { useCallback, useMemo, useState } from "react";

import dynamic from "next/dynamic";
import { styled } from "@mui/material/styles";

import { MainHeader } from "~/components/main-header";
import { MainFooter } from "~/components/main-footer";
import {
  MainLayoutContext,
  MainLayoutContextValue,
} from "./main-layout.context";

const MainMobileDrawer = dynamic(
  () =>
    import("~/components/main-mobile-drawer").then(
      (module) => module.MainMobileDrawer
    ),
  {
    ssr: false,
  }
);

//Interfaces
export interface MainLayoutProps
  extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
export const MainLayoutContentStyles = styled("main")(({ theme }) => {
  return {
    flex: 1,
  };
});

export const MainLayoutStyles = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "column nowrap",
    height: "100%",
  };
});

//Component
export const MainLayout = (props: MainLayoutProps) => {
  const { children, ...other } = props;

  const [isMobileDrawerOpen, setOpenMobileDrawer] = useState(false);

  const handleOpenMobileDrawer = useCallback(() => {
    setOpenMobileDrawer(true);
  }, []);

  const handleCloseMobileDrawer = useCallback(() => {
    setOpenMobileDrawer(false);
  }, []);

  const contextValue = useMemo<MainLayoutContextValue>(() => {
    return {
      isMobileDrawerOpen,
      openMobileDrawer: handleOpenMobileDrawer,
      closeMobileDrawer: handleCloseMobileDrawer,
    };
  }, [isMobileDrawerOpen, handleCloseMobileDrawer, handleOpenMobileDrawer]);

  return (
    <MainLayoutContext.Provider value={contextValue}>
      <MainLayoutStyles {...other}>
        <MainMobileDrawer />
        <MainHeader />
        <MainLayoutContentStyles>{children}</MainLayoutContentStyles>
        <MainFooter />
      </MainLayoutStyles>
    </MainLayoutContext.Provider>
  );
};

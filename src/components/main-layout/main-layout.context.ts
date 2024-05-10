"use client";

import { createContext } from "~/utils";

export interface MainLayoutContextValue {
  isMobileDrawerOpen: boolean;
  openMobileDrawer: () => void;
  closeMobileDrawer: () => void;
}

export const MainLayoutContext = createContext<MainLayoutContextValue>();
export const useMainLayout = MainLayoutContext.useContext;

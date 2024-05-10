import { BreakpointsOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    "sm-dense": true;
    sm: true;
    md: true;
    lg: true;
    "xl-dense": true;
    xl: true;
    xxl: true;
  }
}

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    "sm-dense": 460,
    sm: 600,
    md: 768,
    lg: 992,
    "xl-dense": 1130,
    xl: 1182,
    xxl: 1400,
  },
};

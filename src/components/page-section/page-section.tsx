import { styled } from "@mui/material/styles";

//Interfaces
export interface PageSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {
  disablePadding?: boolean;
  disableMargin?: boolean;
}

interface PageSectionStylesProps {
  ownerState?: {
    disablePadding?: PageSectionProps["disablePadding"];
    disableMargin?: PageSectionProps["disableMargin"];
  };
}

//Styles
export const PageSectionStyles = styled("section", {
  target: "PageSection-root",
})<PageSectionStylesProps>(({ theme, ownerState }) => {
  const { disablePadding, disableMargin } = ownerState || {};

  return {
    ...(!disableMargin && {
      margin: theme.spacing(7, 0, 9, 0),
    }),
    ...(!disablePadding && {
      padding: theme.spacing(7, 0, 9, 0),
    }),

    [theme.breakpoints.down("lg")]: {
      ...(!disableMargin && {
        margin: theme.spacing(6, 0),
      }),
      ...(!disablePadding && {
        padding: theme.spacing(6, 0),
      }),
    },
  };
});

//Component
export const PageSection = (props: PageSectionProps) => {
  const { disablePadding, disableMargin, ...other } = props;

  return (
    <PageSectionStyles
      {...other}
      ownerState={{ disablePadding, disableMargin }}
    />
  );
};

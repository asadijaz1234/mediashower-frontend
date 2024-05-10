import { styled } from "@mui/material/styles";

//Interfaces
export interface PricingTableProps extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
export const PricingTableStyles = styled("div", {
  target: "PricingTable-root",
})(({ theme }) => {
  return {
    display: "grid",
    gridTemplateColumns: `minmax(max-content, 449px) repeat(3, minmax(max-content, min(100%, 251px)))`,
    justifyContent: "center",
    gridGap: theme.spacing(2.5),
    paddingTop: theme.spacing(2),

    "& .PricingCard-root": {
      width: "100%",

      "& .PricingCardPlan-root": {
        width: "100%",
        maxWidth: 251,
      },

      "&:not(:first-of-type)": {
        "& .PricingCardLabels-root": {
          display: "none",
        },

        [theme.breakpoints.down("xl-dense")]: {
          "& .PricingCardLabels-root": {
            display: "block",
          },
        },
      },
    },

    [theme.breakpoints.down("xl-dense")]: {
      gridTemplateColumns: "min(100%, 498px)",
      gridGap: theme.spacing(4.5),

      "& .PricingCard-root": {
        "& .PricingCardPlan-root": {
          maxWidth: 300,
        },
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& .PricingCardPlan-root": {
        minWidth: 220,
      },

      "& .PricingCardPlan-content": {
        padding: theme.spacing(0, 2),
      },

      "& .PricingCardPlan-fbar": {
        marginTop: theme.spacing(2),
      },

      "& .PricingCardLabels-root": {
        minWidth: 120,
        marginRight: theme.spacing(1),
      },

      "& .PricingCardLabel-root": {
        fontSize: theme.typography.pxToRem(14),
      },
    },
  };
});

//Component
export const PricingTable = (props: PricingTableProps) => {
  return <PricingTableStyles {...props} />;
};

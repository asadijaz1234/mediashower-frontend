import React, { useMemo } from "react";

import { styled } from "@mui/material/styles";
import { BoxProps } from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography, { TypographyProps } from "@mui/material/Typography";

import { PricingLabel, PricingPlan } from "./pricing-types";

//Interfaces
export interface PricingCardProps {
  labels: PricingLabel[];
  data: PricingPlan;
  sx?: BoxProps["sx"];
  fbar?: React.ReactNode;
}

//Styles
const ItemStyles = styled("div", {
  target: "PricingCardItem-root",
})(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    padding: theme.spacing(1.5, 0),

    height: 54,
    overflow: "hidden",
  };
});

const TitleStyles = styled((props: TypographyProps) => <Typography variant="h5" {...props} />, {
  target: "PricingCardTitle-root",
})(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: "center",
  };
});

const HeaderStyles = styled("header", {
  target: "PricingCardHeader-root",
})(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    height: 64,
  };
});

const SummaryLabelStyles = styled("span", {
  target: "PricingCardSummary-label",
})(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(14),
    marginBottom: theme.spacing(1),
  };
});

const SummaryValueStyles = styled("span", {
  target: "PricingCardSummary-value",
})(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(21),
    fontWeight: theme.typography.fontWeightMedium,
  };
});

const SummayStyles = styled("div", {
  target: "PricingCardSummary-root",
})(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(2),
    height: 98,
  };
});

const LabelStyles = styled(ItemStyles, {
  target: "PricingCardLabel-root",
})(({ theme }) => {
  return {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.3,
    color: "#404041",
    textAlign: "left",
  };
});

const LabelsContentStyles = styled("div", {
  target: "PricingCardLabels-content",
})(({ theme }) => {
  return {};
});

const LabelsStyles = styled("div", {
  target: "PricingCardLabels-root",
})(({ theme }) => {
  return {
    flex: 1,
    maxWidth: 178,
    minWidth: 160,
    marginRight: theme.spacing(2.5),

    "& .MuiDivider-root": {
      marginRight: theme.spacing(1),
    },
  };
});

const PlanContentStyles = styled("div", {
  target: "PricingCardPlan-content",
})(({ theme }) => {
  return {
    padding: theme.spacing(0, 2),

    "& .PricingCardItem-root": {
      justifyContent: "center",
      textAlign: "center",
    },

    "& .MuiDivider-root": {
      margin: theme.spacing(0, 1),
    },
  };
});

const PlanBodyStyles = styled("div", {
  target: "PricingCardPlan-body",
})(({ theme }) => {
  return {
    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0px 0px 44px 0px rgba(0,0,0, .1)",
    overflow: "hidden",
  };
});

const PlanFbarStyles = styled("div", {
  target: "PricingCardPlan-fbar",
})(({ theme }) => {
  return {
    marginTop: theme.spacing(3),
  };
});

const PlanStyles = styled("div", {
  target: "PricingCardPlan-root",
})(({ theme }) => {
  return {
    flex: 1,
    maxWidth: 250,
  };
});

const PricingCardStyles = styled("div", {
  target: "PricingCard-root",
})(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "row nowrap",

    "& .MuiDivider-root": {
      borderColor: "#D9D9D9",
    },
  };
});

//Component
export const PricingCard = (props: PricingCardProps) => {
  const { labels, data, fbar, ...other } = props;

  const labelsElement = useMemo(() => {
    const items = labels.map((item, index) => {
      const isLastItem = index === labels.length - 1;

      return (
        <React.Fragment key={item.id}>
          <LabelStyles>{item.label}</LabelStyles>
          {!isLastItem && <Divider />}
        </React.Fragment>
      );
    });

    return (
      <LabelsStyles>
        <HeaderStyles />
        <LabelsContentStyles>{items}</LabelsContentStyles>
        <SummayStyles />
      </LabelsStyles>
    );
  }, [labels]);

  const planElement = useMemo(() => {
    const items = labels.map((labelItem, index) => {
      const foundItem = data.items.find((item) => item.id === labelItem.id);
      const value = foundItem ? foundItem.value : "--";
      const isLastItem = index === labels.length - 1;

      return (
        <React.Fragment key={labelItem.id}>
          <ItemStyles>{value}</ItemStyles>
          {!isLastItem && <Divider />}
        </React.Fragment>
      );
    });

    return (
      <PlanStyles>
        <PlanBodyStyles>
          <HeaderStyles>
            <TitleStyles>{data.title}</TitleStyles>
          </HeaderStyles>
          <PlanContentStyles>{items}</PlanContentStyles>
          <SummayStyles>
            <SummaryLabelStyles>{data.summary.label}</SummaryLabelStyles>
            <SummaryValueStyles>{data.summary.value}</SummaryValueStyles>
          </SummayStyles>
        </PlanBodyStyles>
        {fbar && <PlanFbarStyles>{fbar}</PlanFbarStyles>}
      </PlanStyles>
    );
  }, [data, labels, fbar]);

  return (
    <PricingCardStyles {...other}>
      {labelsElement}
      {planElement}
    </PricingCardStyles>
  );
};

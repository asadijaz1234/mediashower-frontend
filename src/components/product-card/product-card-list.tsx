import { styled } from "@mui/material/styles";

//Interfaces
export interface ProductCardListProps
  extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
const ProductCardListStyles = styled("div", {
  target: "ProductCardList-root",
})(({ theme }) => {
  const itemSize = "min(280px, 100%)";

  return {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${itemSize}, 1fr))`,
    justifyContent: "center",
    gridGap: theme.spacing(4.5),

    [theme.breakpoints.down("xl-dense")]: {
      gridGap: theme.spacing(3),
    },

    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: `minmax(${itemSize}, 532px)`,
    },
  };
});

//Component
export const ProductCardList = (props: ProductCardListProps) => {
  return <ProductCardListStyles {...props} />;
};

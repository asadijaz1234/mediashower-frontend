import { styled } from "@mui/material/styles";

//Interfaces
export interface CarouselItemProps
  extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
export const CarouselItemStyles = styled("div", {
  target: "CarouselItem-root",
})(({ theme }) => {
  return {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
  };
});

//Component
export const CarouselItem = (props: CarouselItemProps) => {
  const { style, ...other } = props;

  return <CarouselItemStyles {...other} />;
};

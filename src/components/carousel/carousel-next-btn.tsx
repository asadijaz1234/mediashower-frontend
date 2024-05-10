import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

//Interfaces
export interface CarouselNextBtnProps
  extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
const CarouselNextBtnStyles = styled(IconButton)(({ theme }) => {
  return {
    right: "-25%",
  };
});

const CarouselNextContainerStyles = styled("div")(({ theme }) => {
  return {
    right: 0,
  };
});

//Component
export const CarouselNextBtn = (props: CarouselNextBtnProps) => {
  const { style, onClick, ...other } = props;

  return (
    <CarouselNextContainerStyles {...other}>
      <CarouselNextBtnStyles edge="end" onClick={onClick as any}>
        <ArrowForwardIosRoundedIcon />
      </CarouselNextBtnStyles>
    </CarouselNextContainerStyles>
  );
};

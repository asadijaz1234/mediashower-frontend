import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

//Interfaces
export interface CarouselPrevBtnProps
  extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
const CarouselPrevBtnStyles = styled(IconButton)(({ theme }) => {
  return {};
});

const CarouselPrevContainerStyles = styled("div")(({ theme }) => {
  return {
    left: 0,
  };
});

//Component
export const CarouselPrevBtn = (props: CarouselPrevBtnProps) => {
  const { style, onClick, ...other } = props;

  return (
    <CarouselPrevContainerStyles {...other}>
      <CarouselPrevBtnStyles edge="start" onClick={onClick as any}>
        <ArrowBackIosNewRoundedIcon />
      </CarouselPrevBtnStyles>
    </CarouselPrevContainerStyles>
  );
};

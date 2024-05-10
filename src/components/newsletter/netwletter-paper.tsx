import { styled } from "@mui/material/styles";
import Paper, { PaperProps } from "@mui/material/Paper";

//Interfaces
export interface NewslatterSectionProps extends PaperProps {}

//Styles
const PaperStyles = styled((props: PaperProps) => <Paper {...props} elevation={0} />, {
  target: "Newslatter-paper",
})(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    padding: theme.spacing(6, 3, 8, 3),
  };
});

//Component
export const NewslatterPaper = (props: NewslatterSectionProps) => {
  return <PaperStyles {...props} />;
};

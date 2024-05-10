import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

//Interfaces
export interface MainNavActionsProps extends React.ComponentPropsWithoutRef<"div"> {}

//Styles
export const MainNavActionsStyles = styled("div")(({ theme }) => {
  return {};
});

//Component
export const MainNavActions = (props: MainNavActionsProps) => {
  return (
    <MainNavActionsStyles {...props}>
      <Button color="primary" href="/user/login">
        Login
      </Button>
      <Button color="secondary" href="/user/free_trial" sx={{ minWidth: 118 }}>
        Free Trial
      </Button>
    </MainNavActionsStyles>
  );
};

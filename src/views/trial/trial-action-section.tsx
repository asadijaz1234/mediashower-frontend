import { Check } from "@mui/icons-material";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

//Interfaces
export interface TrialActionSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {}

//Styles

const Title = styled((props: TypographyProps) => (
  <Typography variant="h6" {...props} />
))(({ theme }) => {
  return {
    textAlign: "center",
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightMedium,

    [theme.breakpoints.down("lg")]: {
      maxWidth: 250,
      fontSize: theme.typography.body1.fontSize,
    },
  };
});

const HeaderStyles = styled("header")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",

    [theme.breakpoints.down("lg")]: {
      margin: "0 auto",
    },
  };
});

const SectionStyles = styled("div")(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey["150"],
    padding: theme.spacing(2, 10),
    // margin: theme.spacing(9, 0),
    width: "100%",

    [theme.breakpoints.down("lg")]: {
      //   margin: theme.spacing(8, 0),
      padding: theme.spacing(8, 0),
      
    },
  };
});

const ButtonStyles = styled(Button)(({ theme }) => {

  return {
    minWidth: 288,
    [theme.breakpoints.down("md")]: {
      maxWidth: "250px",
      minWidth: "120px",
      
    },
  };
});

//Component
export const TrialActionSection = (props: TrialActionSectionProps) => {
  return (
    <SectionStyles>
      <Container>
        <HeaderStyles>
          <Title>Upgrade today and watch your marketing get better.</Title>
          <ButtonStyles color="secondary" href="/products/subscription/add/8">Click to Upgrade</ButtonStyles>
          <Typography
            marginTop={1}
            style={{
              color: "#404041",
            }}
          >
            (all projects will be saved)
          </Typography>
        </HeaderStyles>
      </Container>
    </SectionStyles>
  );
};

import Container from "@mui/material/Container";
import Paper, { PaperProps } from "@mui/material/Paper";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { trialFeatures } from "./trial.config";
import { Check } from "@mui/icons-material";
import { IconProps } from "@mui/material";

//Interfaces
export interface TrialFeaturesSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {}

//Styles

const SubtitleStyles = styled((props: TypographyProps) => (
  <Typography variant="h6" {...props} />
))(({ theme }) => {
  return {
    textAlign: "left",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down("lg")]: {

      width: "100%",
    },


    [theme.breakpoints.down("md")]: {

      fontSize: 12,
    },
  };
});

const ItemTitle = styled((props: TypographyProps) => (
  <Typography variant="h6" fontWeight={600} {...props} />
))(({ theme }) => {
  return {
    [theme.breakpoints.down("lg")]: {
      fontSize: 12,
    },
  };
});

const ItemSubTitle = styled((props: TypographyProps) => (
  <Typography variant="body1" marginTop={0.5} {...props} />
))(({ theme }) => {
  return {
    [theme.breakpoints.down("lg")]: {
      fontSize: 10,
   
    },
  };
});

const HeaderStyles = styled("header")(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "start",
    justifyContent: "flex-start",

    [theme.breakpoints.down("lg")]: {
      margin: "0 auto",
      width: "100%",
    },

    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
    },
  };
});

const ListStyles = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const SectionStyles = styled("div")(({ theme }) => {
  return {
    backgroundColor: theme.palette.grey["150"],
    padding: theme.spacing(6, 48, 2, 48),
    // margin: theme.spacing(9, 0),
    width: "100%",

    [theme.breakpoints.down("xl")]: {
      //   margin: theme.spacing(8, 0),
      padding: theme.spacing(6, 24, 2, 24),
      
    },

    [theme.breakpoints.down("lg")]: {
      //   margin: theme.spacing(8, 0),
      padding: theme.spacing(6, 0, 2, 0),
      
    },
  };
});

const ItemStyles = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
});

const ItemColumnStyles = styled("div")(({ theme }) => {
  return {
    padding: theme.spacing(1, 1, 1, 3),
  };
});

const ItemHead = styled("div")(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `2.5px solid ${theme.palette.secondary.main}`,
    width: "36px",
    height: "38px",
    borderRadius: theme.shape.borderRadius,

    [theme.breakpoints.down("lg")]: {
      width: "24px",
      height: "26px",
    },
  };
});

const ItemIcon = styled((props: any) => <Check {...props} color="secondary" />)(
  ({ theme }) => {
    return {
      fontSize: "30px",

      [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
      },
    };
  }
);

//Component
export const TrialFeaturesSection = (props: TrialFeaturesSectionProps) => {
  return (
    <SectionStyles>
      <Container>
        <HeaderStyles>
          <SubtitleStyles>
            You’ve tasted the power of the Media Shower platform: it’s like
            having a marketing agency in your pocket. Upgrade now and get:
          </SubtitleStyles>
        </HeaderStyles>
        <ListStyles>
          {trialFeatures.map((item) => {
            return (
              <ItemStyles key={item.id}>
                <ItemHead>
                  <ItemIcon />
                </ItemHead>

                <ItemColumnStyles>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemSubTitle>{item.description}</ItemSubTitle>
                </ItemColumnStyles>
              </ItemStyles>
            );
          })}
        </ListStyles>
      </Container>
    </SectionStyles>
  );
};

"use client";

import React, { useCallback, useRef, useState } from "react";
import NextLink from "next/link";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack, { StackProps } from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button, { ButtonProps } from "@mui/material/Button";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import FormControlLabel from "@mui/material/FormControlLabel";
import CircularProgress from "@mui/material/CircularProgress";

//Interfaces
export interface SignupSectionProps extends React.ComponentPropsWithoutRef<"section"> {
  disableContainer?: boolean;
}

//Styles
const TitlePrimaryStyles = styled((props: TypographyProps) => <Typography variant="h4" {...props} />)(({ theme }) => {
  return {
    marginBottom: theme.spacing(2),
    lineHeight: 1.1,

    [theme.breakpoints.down("lg")]: {
      fontSize: 32,
    },

    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
  };
});

const TitleSecondaryStyles = styled((props: TypographyProps<"div">) => (
  <Typography variant="body1" component="div" {...props} />
))(({ theme }) => {
  return {
    [theme.breakpoints.down("lg")]: {
      lineHeight: 1.2,
    },
  };
});

const HeaderStyles = styled("header")(({ theme }) => {
  return {
    textAlign: "center",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(3),
  };
});

const SubmitBtnStyles = styled((props: ButtonProps) => <Button color="inherit" fullWidth {...props} />, {
  target: "SignupSectionSubmitBtn-root",
})(({ theme }) => {
  return {
    maxWidth: 258,
  };
});

const HelperTextStyles = styled(FormHelperText)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    color: theme.palette.common.white,
    marginTop: 0,

    "& .MuiSvgIcon-root": {
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(16),
      marginRight: theme.spacing(1),
    },
  };
});

const FormStyles = styled("form")(({ theme }) => {
  return {
    display: "block",
    maxWidth: 532,
    width: "100%",

    "& .MuiFormControl-root": {
      "& .MuiOutlinedInput-root": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.secondary.light,
        },

        "&:hover, &.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
      },

      "& .MuiInputBase-input": {
        backgroundColor: theme.palette.secondary.light,
      },
    },

    "& .MuiFormControlLabel-root": {
      color: theme.palette.common.white,

      "& .MuiCheckbox-root": {
        padding: 0,
        marginRight: theme.spacing(1),
      },

      "& .MuiFormControlLabel-label": {
        fontSize: theme.typography.pxToRem(14),

        "& .MuiLink-root": {
          margin: theme.spacing(0, 1),
        },
      },
    },
  };
});

const ActionBarStyles = styled((props: StackProps) => <Stack direction="column" spacing={2} {...props} />)(
  ({ theme }) => {
    return {
      alignItems: "center",
      marginTop: theme.spacing(2),

      [theme.breakpoints.down("md")]: {
        alignItems: "flex-start",

        "& .SignupSectionSubmitBtn-root": {
          maxWidth: "none",
        },
      },
    };
  }
);

const SectionStyles = styled("div", {
  target: "SignupSection-root",
})(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(5, 3),
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",

    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(8, 3),
    },
  };
});

//Component
export const SignupSection = (props: SignupSectionProps) => {
  const { disableContainer, ...other } = props;

  const [isCheckedAgreement, setCheckedAgreement] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const ContainerComponent = useCallback(
    (containerProps: { children: React.ReactNode }) => {
      if (disableContainer) {
        return <React.Fragment {...containerProps} />;
      }

      return <Container {...containerProps} />;
    },
    [disableContainer]
  );

  const handleSubmit = useCallback(
    async (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();

      if (!executeRecaptcha || !formRef.current) {
        return;
      }

      try {
        setSubmitting(true);
        const token = await executeRecaptcha("signup");

        formRef.current.submit();
      } catch (e) {
        console.log("Error:", e);
      } finally {
        setSubmitting(false);
      }
    },
    [executeRecaptcha]
  );

  const handleChangeAgreement = useCallback((ev: React.SyntheticEvent<Element>, checked: boolean) => {
    setCheckedAgreement(checked);
  }, []);

  return (
    <ContainerComponent>
      <SectionStyles {...other}>
        <HeaderStyles>
          <TitlePrimaryStyles>Try the Platform for Yourself.</TitlePrimaryStyles>
          <TitleSecondaryStyles>
            Create an account, give us a few details about your company project, and we&apos;ll get you started.
          </TitleSecondaryStyles>
        </HeaderStyles>
        <FormStyles
          method="post"
          action="https://mediashower.com/user/free_trial"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={1.5}>
            <Grid item xs={12} md={6}>
              <TextField
                style={{ display: "none" }}
                placeholder="First Name"
                type="hidden"
                fullWidth
                name="ppc_keyword"
                id="form_ppc_keyword"
              />
              <TextField
                style={{ display: "none" }}
                placeholder="First Name"
                type="hidden"
                fullWidth
                name="register"
                id="register"
                value="Start free trial"
              />
              <TextField placeholder="First Name" fullWidth name="first_name" id="first_name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField placeholder="Last Name" fullWidth name="last_name" id="last_name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="email_address"
                type="email"
                placeholder="Enter your email address here"
                autoComplete="newEmail"
                id="email_address"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="password"
                name="password"
                autoComplete="newPassword"
                placeholder="Password"
                id="password"
                fullWidth
              />
            </Grid>
          </Grid>

          <ActionBarStyles>
            {/* <HelperTextStyles>
              <CheckCircleOutlineRoundedIcon />
              <span>By signing up, I agree to the Terms and Conditions.</span>
            </HelperTextStyles> */}

            <FormControlLabel
              checked={!!isCheckedAgreement}
              control={<Checkbox color="default" disableRipple />}
              label={[
                "By signing up, I agree to the",
                <Link key="terms" color="inherit" href="/terms.html">
                  Terms and Conditions.
                </Link>,
              ]}
              onChange={handleChangeAgreement}
            />

            <SubmitBtnStyles type="submit" disabled={submitting || !isCheckedAgreement}>
              {submitting ? <CircularProgress color="inherit" size={20} /> : "Try it out"}
            </SubmitBtnStyles>
          </ActionBarStyles>
        </FormStyles>
      </SectionStyles>
    </ContainerComponent>
  );
};

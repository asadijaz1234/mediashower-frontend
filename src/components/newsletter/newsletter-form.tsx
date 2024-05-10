"use client";

import { useState, useCallback, useMemo } from "react";

import Script from "next/script";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import $ from "jquery";

import { observeDomElementMutation } from "~/utils";

//Interfaces
export interface NewsletterFormProps
  extends React.ComponentPropsWithoutRef<"form"> {}

//Styles

const NewslatterFormStyles = styled("form", {
  target: "Newslatter-form",
})(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",

    "& .MuiFormControl-root": {
      maxWidth: 340,
      width: "100%",

      "& .MuiOutlinedInput-root": {
        "&.Mui-error": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.error.main,
          },
        },

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.secondary.light,
        },

        "&:hover:not(.Mui-error):not(.Mui-disabled), &.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
      },

      "& .MuiInputBase-input": {
        backgroundColor: theme.palette.secondary.light,
      },

      "& .MuiFormHelperText-root": {
        color: theme.palette.text.primary,
        margin: theme.spacing(0.5),
      },
    },

    "& .MuiButton-root": {
      marginLeft: theme.spacing(2),
      minWidth: 164,
    },

    [theme.breakpoints.down("md")]: {
      flexFlow: "column nowrap",

      "& .MuiFormControl-root": {
        maxWidth: "none",
      },

      "& .MuiButton-root": {
        marginLeft: 0,
        marginTop: theme.spacing(1),
        width: "100%",
      },
    },
  };
});

// Helpers
const validateEmail = (email: string) => {
  return /^[a-zA-Z0-9._\-\+]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
};

//Component
export const NewsletterForm = (props: NewsletterFormProps) => {
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSignUpScriptLoad = useCallback(() => {
    setTimeout(() => {
      if (document.getElementsByClassName("ctct-inline-form")[0] != undefined) {
        (
          document.getElementsByClassName("ctct-inline-form")[0] as any
        ).style.display = "none";
      }
    }, 100);
  }, []);

  const handleEmailFieldChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = ev.target.value;

      setEmailError("");
      setNewsLetterEmail(newValue);
    },
    []
  );

  const handleSubmit = useCallback(() => {
    if (submitting) {
      return;
    }

    if (validateEmail(newsLetterEmail)) {
      setEmailError("");
      setSubmitting(true);

      $("#email_address_0").val(newsLetterEmail);
      $(".ctct-form-button").click();

      const btnObserver = observeDomElementMutation(
        ".ctct-form-button",
        {
          attributes: true,
          attributeOldValue: true,
        },
        () => {
          setSubmitting(false);
          btnObserver.disconnect();
        }
      );

      const messageObserver = observeDomElementMutation(
        "#success_message_0",
        {
          attributes: true,
          attributeFilter: ["style"],
          attributeOldValue: true,
        },
        () => {
          setSignupSuccess(true);
          setNewsLetterEmail("");
          messageObserver.disconnect();
        }
      );
    } else {
      setEmailError("Sorry, we don't recognize that email address.");
    }
  }, [newsLetterEmail, submitting]);

  const handleFormKeyDown = useCallback(
    (ev: React.KeyboardEvent<HTMLElement>) => {
      if (ev.key === "Enter") {
        ev.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  // Render
  const btnContent = useMemo(() => {
    if (submitting) {
      return <CircularProgress color="inherit" size={20} />;
    }

    return signupSuccess ? "Thanks You" : "Contact Us";
  }, [signupSuccess, submitting]);

  return (
    <>
      {/* Init Constant Contact Sign Up Form Scripts */}
      <Script id="ctc-script-1" key="ctc-script-1" strategy="lazyOnload">
        {'var _ctct_m = "449731ee68351d57da73a057893bde42";'}
      </Script>
      <Script
        id="signupScript"
        key="singupScript"
        src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
        strategy="lazyOnload"
        onLoad={handleSignUpScriptLoad}
      />
      <NewslatterFormStyles onKeyDown={handleFormKeyDown}>
        <TextField
          type="email"
          value={newsLetterEmail}
          color="secondary"
          disabled={signupSuccess}
          error={!!emailError}
          helperText={emailError}
          placeholder="Enter your email address here"
          size="small"
          fullWidth
          onChange={handleEmailFieldChange}
        />

        <Button
          color="inherit"
          disabled={signupSuccess || submitting}
          onClick={handleSubmit}
        >
          {btnContent}
        </Button>
      </NewslatterFormStyles>

      {/* Wrapper for Constant Contact Form */}
      <div
        className="ctct-inline-form"
        data-form-id="a3993dc4-bddc-4277-82c6-1b2611becbe1"
        key="a3993dc4-bddc-4277-82c6-1b2611becbe1"
        style={{ visibility: "hidden" }}
      ></div>
    </>
  );
};

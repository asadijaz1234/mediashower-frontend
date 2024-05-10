"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

//Interfaces
export interface RecaptchaProviderProps {
  children?: React.ReactNode;
}

//Component
const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

export const RecaptchaProvider = (props: RecaptchaProviderProps) => {
  const { children } = props;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaSiteKey}
      scriptProps={{
        defer: true,
        appendTo: "head",
        id: "mediashower-recaptcha-script",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

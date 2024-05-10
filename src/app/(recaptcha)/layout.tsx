import { RecaptchaProvider } from "~/components/recaptcha";

export default function RecaptchaLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return <RecaptchaProvider>{children}</RecaptchaProvider>;
}

import { ThemeProvider } from "~/components/theme";
import { GooglePTSansFont } from "./fonts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  //Testing Comment
  return (
    <html lang="en">
      <body className={GooglePTSansFont.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

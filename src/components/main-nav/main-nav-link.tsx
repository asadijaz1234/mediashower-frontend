import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { styled } from "@mui/material/styles";
import Link, { LinkProps } from "@mui/material/Link";

//Interfaces
type CombinedProps = LinkProps<typeof NextLink>;

export interface MainNavLinkProps extends Omit<CombinedProps, "href"> {
  href: NextLinkProps["href"];
  component?: React.ElementType;
}

//Styles
export const MainNavLinkStyles = styled((props) => (
  <Link {...props} underline="hover" />
))(({ theme }) => {
  return {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.common.white,
    textUnderlineOffset: 2,
    letterSpacing: 0.4,
  };
}) as typeof Link;

//Component
export const MainNavLink = (props: MainNavLinkProps) => {
  const { component = NextLink, href, ...other } = props;

  return (
    <MainNavLinkStyles {...other} component={component} href={href as string} />
  );
};

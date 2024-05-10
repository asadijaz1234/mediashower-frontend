import { styled } from "@mui/material/styles";

export interface ProductCardProps
  extends React.ComponentPropsWithoutRef<"div"> {
  shadowed?: boolean | "hover";
  component?: React.ElementType;
}

export interface ProductCardProps
  extends Pick<
    React.ComponentPropsWithoutRef<"a">,
    "href" | "target" | "rel"
  > {}

interface CardStylesProps {
  ownerState?: {
    shadowed?: ProductCardProps["shadowed"];
  };
}

// Styles
const ProductCardStyles = styled(
  (props: ProductCardProps) => {
    const { component: Component, ...other } = props;

    if (Component) {
      return <Component {...other} />;
    }

    return <div {...other} />;
  },
  {
    target: "ProductCard-root",
  }
)<CardStylesProps>(({ theme, ownerState }) => {
  const { shadowed } = ownerState || {};

  return {
    position: "relative",
    backgroundColor: theme.palette.grey[150],
    minHeight: 340,
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",

    "& img": {
      objectFit: "cover",
      objectPosition: "center top",
      zIndex: 0,
    },

    "& .ProductCard-text": {
      display: "block",
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: "100%",
      transform: "translate3d(-50%, 100%, 0)",
      marginBottom: theme.spacing(5),
      opacity: 0,
      transition: theme.transitions.create(["opacity", "transform"], {
        duration: theme.transitions.duration.short,
      }),
      zIndex: 2,

      ...(shadowed === true && {
        transform: "translate(-50%, 0)",
        opacity: 1,
      }),
    },

    "&::after": {
      position: "absolute",
      content: "''",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundImage: `linear-gradient(to top, #464646 20%, transparent 80%)`,
      opacity: 0,
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.short,
        delay: ".05s",
      }),
      zIndex: 1,

      ...(shadowed === true && {
        opacity: 1,
      }),
    },

    "&:hover": {
      ...(shadowed === "hover" && {
        "& .ProductCard-text": {
          transform: "translate3d(-50%, 0, 0)",
          opacity: 1,
          transition: theme.transitions.create(["opacity", "transform"], {
            duration: theme.transitions.duration.short,
          }),
        },

        "&::after": {
          opacity: 1,
          transition: theme.transitions.create("opacity", {
            duration: theme.transitions.duration.short,
          }),
        },
      }),
    },
  };
});

// Component
export const ProductCard = (props: ProductCardProps) => {
  const { shadowed, ...other } = props;

  return <ProductCardStyles {...other} ownerState={{ shadowed }} />;
};

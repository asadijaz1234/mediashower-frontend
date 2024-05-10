import Image from "next/image";
import { styled } from "@mui/material/styles";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";
import _truncate from "lodash/truncate";

import { fDate, Maybe } from "~/utils";

//Interfaces
export interface BlogPost {
  id?: Maybe<string>;
  image?: Maybe<string>;
  title?: Maybe<string>;
  date?: Maybe<Date | string>;
  author?: Maybe<string>;
  href?: Maybe<string>;
  category?: Maybe<string>;
}

export interface BlogPostCardProps extends React.ComponentPropsWithoutRef<"a"> {
  data?: BlogPost;
  loading?: boolean;
}

interface CardStylesProps {
  ownerState?: {
    loading?: boolean;
  };
}

//Styles
const ImageStyles = styled(Image)(({ theme }) => {
  return {
    gridRow: "1 / 2",
    objectFit: "cover",
    objectPosition: "left top",
  };
});

const TitleStyles = styled((props: TypographyProps) => <Typography variant="h6" {...props} />)(({ theme }) => {
  return {
    fontWeight: theme.typography.fontWeightMedium,
  };
});

const AuthorStyles = styled("div")(({ theme }) => {
  return {
    ...theme.typography.body2,
    marginBottom: theme.spacing(1),

    "& strong": {
      color: theme.palette.secondary.main,
    },
  };
});

const ContentStyles = styled("div")(({ theme }) => {
  return {
    gridRow: "2 / -1",
    color: theme.palette.grey["800"],
    padding: theme.spacing(3),
  };
});

const CardStyles = styled("a", {
  target: "BlogPostCard-root",
})<CardStylesProps>(({ theme, ownerState }) => {
  const { loading } = ownerState || {};

  return {
    position: "relative",
    display: "grid",
    gridTemplateRows: "178px 1fr",
    textDecoration: "none",
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 4px 44px 0 rgba(0,0,0, .08)",

    "&:after": {
      position: "absolute",
      content: "''",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxShadow: `inset 0 0 0 2px ${theme.palette.secondary.main}`,
      borderRadius: "inherit",
      opacity: 0,
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.shorter,
      }),
    },

    ...(!loading && {
      "&:hover": {
        "&:after": {
          opacity: 1,
        },
      },
    }),
  };
});

//Component
export const BlogPostCard = (props: BlogPostCardProps) => {
  const { data, loading } = props;

  if (loading) {
    return (
      <CardStyles ownerState={{ loading }}>
        <Skeleton variant="rectangular" height="100%" width="100%" />
        <ContentStyles>
          <Skeleton variant="rounded" width="75%" height={11} sx={{ mb: 3 }} />
          <Skeleton variant="rounded" height={14} sx={{ mb: 1 }} />
          <Skeleton variant="rounded" height={14} sx={{ mb: 1 }} />
        </ContentStyles>
      </CardStyles>
    );
  }

  const title = data?.title ? _truncate(String(data.title), { length: 60 }) : "";

  const authorElement = data?.author ? <strong>{data.author}</strong> : "none";
  const dateElement = data?.date ? fDate(data.date, "dd/MM/Y") : "unknown";

  return (
    <CardStyles href={data?.href || "#"}>
      {data?.image && <ImageStyles src={data.image} alt={data?.title || ""} fill sizes="750px" quality={90} />}
      <ContentStyles>
        <AuthorStyles>
          by {authorElement} on {dateElement}
        </AuthorStyles>
        <TitleStyles>{title}</TitleStyles>
      </ContentStyles>
    </CardStyles>
  );
};

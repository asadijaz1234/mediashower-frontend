"use client";

import { useMemo, useState, useEffect, useCallback } from "react";

import NextLink from "next/link";
import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import { BlogPostCard } from "~/components/blog-post-card";
import { Carousel } from "~/components/carousel";
import { BlogPostApi } from "~/app/api/api-helpers";
import { IBlogPost } from "~/app/api/posts/list/route";

//Interfaces
export interface HomeLatestPostsSectionProps extends React.ComponentPropsWithoutRef<"div"> {
  items?: IBlogPost[];
}

interface SectionStylesProps {
  ownerState?: {
    loading?: boolean;
  };
}

//Styles
const TitleStyles = styled((props: TypographyProps) => <Typography variant="h4" {...props} />)(({ theme }) => {
  return {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  };
});

const PostListStyles = styled("div")(({ theme }) => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
    justifyContent: "center",
    gridGap: theme.spacing(4.5),

    [theme.breakpoints.down("xl")]: {
      gridGap: theme.spacing(2.5),
    },

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(min-content, 476px))`,
    },
  };
});

const FbarStyles = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(4),

    "& .MuiButton-root": {
      minWidth: 160,
    },

    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
    },
  };
});

const CarouselStyles = styled(Carousel)(({ theme }) => {
  return {
    "& .slick-list": {
      padding: 0,
      overflow: "initial",
    },

    "& .CarouselItem-root": {
      width: "100%",
      padding: theme.spacing(0, 1),
    },

    "& .BlogPostCard-root": {
      width: "100%",
      minHeight: 305,
      zIndex: 100,
    },
  };
});

const SectionStyles = styled("div")<SectionStylesProps>(({ theme, ownerState }) => {
  const { loading } = ownerState || {};

  return {
    overflow: loading ? "initial" : "hidden",
    margin: theme.spacing(8, 0),

    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(7, 0),
    },
  };
});

//Component
export const HomeLatestPostsSection = (props: HomeLatestPostsSectionProps) => {
  const { items = [] } = props;

  // const [items, setItems] = useState<IBlogPost[]>([]);
  // const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const shouldDisplayCarousel = useMediaQuery(theme.breakpoints.between(654, 897));

  // const fetchData = useCallback(async () => {
  //   try {
  //     setLoading(true);

  //     const response = await BlogPostApi.list({ limit: 3 });
  //     setItems(response);
  //   } catch (e) {
  //     console.error(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  const contentElement = useMemo(() => {
    let cardElements = items?.map((item, index) => {
      return <BlogPostCard key={index} data={item} />;
    });

    // if (loading) {
    //   cardElements = Array.from({ length: 3 }).map((_, index) => {
    //     return <BlogPostCard key={index} loading />;
    //   });
    // }

    if (shouldDisplayCarousel) {
      return (
        <CarouselStyles dots={false} slidesToShow={2} slidesToScroll={1} infinite={false}>
          {cardElements}
        </CarouselStyles>
      );
    }

    return <PostListStyles>{cardElements}</PostListStyles>;
  }, [shouldDisplayCarousel, items]);

  if (items?.length === 0) {
    return null;
  }

  return (
    <SectionStyles>
      <Container>
        <TitleStyles>Latest Posts</TitleStyles>
        {contentElement}

        <FbarStyles>
          <Button color="secondary" href="blog/">
            Read More
          </Button>
        </FbarStyles>
      </Container>
    </SectionStyles>
  );
};

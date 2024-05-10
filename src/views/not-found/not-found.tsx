"use client";

import NextLink from "next/link";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MainLayout } from "~/components/main-layout";

export const ContentStyles = styled("div")(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  };
});
export const ContentBodyStyles = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    maxWidth: 460,
    margin: theme.spacing(10, 3),
  };
});

export const ContainterStyles = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "row nowrap",
  };
});

export const NotFoundPage = () => {
  return (
    <MainLayout>
      <Container maxWidth="lg">
        <ContentStyles>
          <ContentBodyStyles>
            <Typography variant="h2" color="text.secondary" gutterBottom>
              404
            </Typography>
            <Typography variant="h5" color="text.secondary" align="center">
              Sorry, this page isn&apos;t available!
            </Typography>
            <Button href="/" sx={{ mt: 4 }}>
              Back to home
            </Button>
          </ContentBodyStyles>
        </ContentStyles>
      </Container>
    </MainLayout>
  );
};

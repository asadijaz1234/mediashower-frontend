"use client";

import { useMemo } from "react";

import dynamic from "next/dynamic";
import { ReactPlayerProps } from "react-player";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { styled } from "@mui/material/styles";

import { PlaySvg } from "~/assets/svg-icons";

// Interfaces
export interface PlayerSectionProps {
  PlayerProps: ReactPlayerProps;
}

// Styles
const PlayIconStyles = styled(PlaySvg, {
  target: "PlayerSection-playIcon",
})(({ theme }) => {
  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: theme.typography.pxToRem(48),
    width: "1em",
    height: "1em",
    fill: "#fff",
    opacity: 0.5,
    cursor: "pointer",
  };
});

const SectionStyles = styled("div", {
  target: "PlayerSection-root",
})(({ theme }) => {
  return {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.grey["150"],
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",

    "& .PlayerSection-playIcon": {
      transformOrigin: "top left",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },

    "&:hover": {
      "& .PlayerSection-playIcon": {
        transform: "scale(1.25) translate(-50%, -50%)",
      },
    },
  };
});

// Component
export const PlayerSection = (props: PlayerSectionProps) => {
  const { PlayerProps, ...other } = props;

  const defaultPlayerProps = useMemo<Partial<ReactPlayerProps>>(() => {
    return {
      light: true,
      playing: true,
      width: "100%",
      height: "100%",
      playIcon: <PlayIconStyles />,
    };
  }, []);

  return (
    <SectionStyles {...other}>
      <ReactPlayer {...defaultPlayerProps} {...PlayerProps} />
    </SectionStyles>
  );
};

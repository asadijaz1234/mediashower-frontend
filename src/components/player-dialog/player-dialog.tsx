"use client";

import { useCallback } from "react";

import { styled } from "@mui/material/styles";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import { Button, DialogActions } from "@mui/material";

//Interfaces
export interface PlayerDialogProps extends Omit<DialogProps, "onClose"> {
  PlayerProps?: ReactPlayerProps;
  onClose?: () => void;
}

//Styles
export const PlayerDialogStyles = styled(Dialog)(({ theme }) => {
  return {
    "& .MuiPaper-root": {
      width: "100%",
      maxWidth: 800,
      height: 500,
      borderRadius: theme.shape.borderRadiusLarge,
    },

    "& .MuiDialogContent-root": {
      padding: theme.spacing(2, 2, 0, 2),
      overflow: "hidden",
    },

    "& .MuiDialogActions-root": {
      padding: theme.spacing(2),
    },

    [theme.breakpoints.down("sm")]: {
      "& .MuiPaper-root": {
        maxWidth: "none",
        maxHeight: "none",
        height: "100%",
        margin: 0,
        borderRadius: 0,
      },
    },
  };
});

//Component
export const PlayerDialog = (props: PlayerDialogProps) => {
  const { PlayerProps, onClose, ...other } = props;

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <PlayerDialogStyles {...other} onClose={handleClose}>
      <DialogContent>
        <ReactPlayer {...PlayerProps} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </PlayerDialogStyles>
  );
};

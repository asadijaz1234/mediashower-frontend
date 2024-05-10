import { Theme, Components } from "@mui/material/styles";

import { CssBaseline } from "./css-baseline";
import { Container } from "./container";
import { Button } from "./button";
import { TextField } from "./text-field";
import { OutlinedInput } from "./outlined-input";

export const componentOverrides = (theme: Theme): Components => {
  return Object.assign(
    CssBaseline(theme),
    Container(theme),
    Button(theme),
    OutlinedInput(theme),
    TextField(theme)
  );
};

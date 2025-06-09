import { Box, Typography } from "@mui/material";
import React from "react";
import { blockHeaderStyle } from "./styles";

export default function BlockHeader({ text, icon, sx = {}, action }) {
  return (
    <Box sx={{ ...blockHeaderStyle, ...sx }}>
      {icon}
      <Typography>{text}</Typography>
      {action}
    </Box>
  );
}

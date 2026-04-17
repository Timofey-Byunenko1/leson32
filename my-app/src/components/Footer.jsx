import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ mt: 5, p: 2, background: "#eee" }}>
      <Typography>Контакты: your@email.com</Typography>
    </Box>
  );
}
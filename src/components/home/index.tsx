import React from "react";
import OurBlog from "../ourBlog";
import { Box } from "@mui/material";
import Services from "../services";
export default function Home() {
  return (
    <Box p={2}>
      <p>Welcome home!</p>
      <OurBlog />
      <Services />
    </Box>
  );
}

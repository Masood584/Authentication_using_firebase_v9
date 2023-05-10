import { Box, Typography } from "@mui/material";
import React from "react";
const header = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70px",
  backgroundColor: "tomato",
  color: "white",
};

const Header = () => {
  return (
    <Box sx={header} mb={10}>
      <Typography variant="h2">Masood.Com</Typography>
    </Box>
  );
};

export default Header;

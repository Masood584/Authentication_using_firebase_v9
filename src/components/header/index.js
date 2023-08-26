import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box
      height={70}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      backgroundColor={"#24B795"}
      color={"white"}
      padding={{ xs: " 0 1rem", sm: " 0 2rem" }}
    >
      <Typography variant="h4">Your Store </Typography>
      <Box>
        <Button
          backgroundColor={"white"}
          variant="contained"
          size={"small"}
          onClick={() => navigate("/login")}
          sx={{
            backgroundColor:"#000080",
            textTransform:"capitalize",
            "&:hover":{
              backgroundColor:"#000080",
            }
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Header;

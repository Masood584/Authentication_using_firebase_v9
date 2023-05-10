import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/header";



const Home = () => {
  return (
    <React.Fragment>
    <Header/>
      <Container maxWidth={"lg"}>
        <Box textAlign="center">
          <Typography variant="h1">Welcome To My Websites</Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;

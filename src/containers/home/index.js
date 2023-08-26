import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/header";
import { LogOut } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

const Home = () => {
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(false);

  const handleLogOut = () => {
    setIsloading(true);
    LogOut()
      .then((res) => {
        console.log(res, "reeeeeeeeeeeeeeeeeeeeeeeesssssssss");
        setIsloading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err, "errorrrrrrrrrrrrr");
        setIsloading(false);
      });
  };

  return (
    <React.Fragment>
      <Loader isloading={isloading} />
      <Header />
      <Container maxWidth={"lg"}>
        <Box textAlign="center">
          <Typography variant="h4">Welcome To My Websites</Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;

import React, { useState } from "react";
import { LogInWithEmailAndPassword } from "../../firebaseConfig";
import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Loader from "../../components/loader";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";

const Login = () => {
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    setIsloading(true);
    LogInWithEmailAndPassword(inputValue.email, inputValue.password)
      .then((res) => {
        console.log(res, "resssssssssssssssssssssss");
        setIsloading(false);
        Swal.fire({
          title: `Welcome ${inputValue.name}`,
          text: "Welcome to Masood.com",
          icon: "success",
          confirmButtonText: "welcome",
        });
        navigate("/");
        setInputValue({
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err.message, "errrrrrrrrrrrrrrrrrrrr");
        setIsloading(false);
        Swal.fire({
          title: "Warning!",
          text: "Wrong Email and Password",
          icon: "warning",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth={"xs"}>
        <Loader isloading={isloading} />
        <Box
          mt={6}
          sx={{
            padding: "30px",
            borderRadius: "20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; ",
          }}
        >
          <Typography variant="h4" sx={{ color: "tomato" }}>
            Login
          </Typography>
          <Grid container mt={4} mb={4} spacing={1.5}>
            <Grid item xs={12}>
              <InputLabel sx={{ fontSize: "14px" }}>Full Name</InputLabel>
              <TextField
                type="text"
                placeholder="Full Name"
                variant="outlined"
                required={true}
                autoFocus
                onChange={handleOnChange}
                value={inputValue.name}
                name="name"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel sx={{ fontSize: "14px" }}>Email</InputLabel>
              <TextField
                type="email"
                placeholder="Email"
                variant="outlined"
                required={true}
                autoFocus
                onChange={handleOnChange}
                value={inputValue.email}
                name="email"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel sx={{ fontSize: "14px" }}>Password</InputLabel>
              <TextField
                type="text"
                placeholder="Password"
                variant="outlined"
                required={true}
                autoFocus
                onChange={handleOnChange}
                value={inputValue.password}
                name="password"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
          <Button
            sx={{
              backgroundColor: "tomato",
              "&:hover": {
                backgroundColor: "tomato",
              },
            }}
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Typography mt={2} variant="body2" textAlign={"center"}>
            Do not have an account?
            <Button
            onClick={()=>navigate("/signup")}
              sx={{
                color: "tomato",
                padding:"3px 6px",
                textTransform: "lowercase",
                "&:hover": {
                  backgroundColor: "tomato",
                  color:"white"
                },
              }}
            >
              Sign up first{" "}
            </Button>{" "}
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Login;

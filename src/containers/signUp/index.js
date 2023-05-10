import React, { useState } from "react";
import { SignUpWithEmailAndPassword } from "../../firebaseConfig";
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

const SignUp = () => {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    setError(false)
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    if (inputValue.email == "") {
      setError(true);
    } else if (inputValue.password == "") {
      setError(true);
    } else {
      setIsloading(true);
      SignUpWithEmailAndPassword(inputValue.email, inputValue.password)
        .then((res) => {
          console.log(res, "resssssssssssssssssssssss");
          setIsloading(false);
          Swal.fire({
            title: "Success!",
            text: "Successfully sign up",
            icon: "success",
            confirmButtonText: "cool",
            confirmButtonColor: "tomato",
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
            text: "Already Sign up with this email and password",
            icon: "warning",
            confirmButtonText: "Ok",
            confirmButtonColor: "tomato",
          });
        });
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth={"xs"}>
        <Loader isloading={isloading} />
        <Box
          mt={10}
          sx={{
            padding: "30px",
            borderRadius: "20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; ",
          }}
        >
          <Typography variant="h4" sx={{ color: "tomato" }}>
            sign up
          </Typography>
          <Grid container mt={2} mb={4} spacing={3}>
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
              {error ? (
                <InputLabel sx={{ fontSize: "14px", color: "red" }}>
                  Email is required !
                </InputLabel>
              ) : null}
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
              {error ? (
                <InputLabel sx={{ fontSize: "14px", color: "red" }}>
                  Password is required !
                </InputLabel>
              ) : null}
            </Grid>
          </Grid>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{
              backgroundColor: "tomato",
              "&:hover": {
                backgroundColor: "tomato",
              },
            }}
          >
            sign up
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default SignUp;

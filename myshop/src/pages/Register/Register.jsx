import React from "react";
import { Box, Button, TextField, Typography, Card, CardContent, Link } from "@mui/material";
import { Link as Links } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm({});

  const registerForm = async (values) => {
    try {
      const response = await axios.post("https://knowledgeshop.runasp.net/api/Auth/Account/Register",values);
      console.log(response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ width: 600, p: 3 }} variant="outlined">
        <CardContent>
          <Typography variant="h4" textAlign="center" mb={3} sx={{fontWeight: "bold"}}>
            Create Account
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(registerForm)}
            sx={{ display: "flex", flexDirection: "column", alignItems:"center", gap: 3 }}
          >
            <TextField label="User Name" {...register("userName")} fullWidth />
            <TextField label="Email" {...register("email")} fullWidth />
            <TextField label="Full Name" {...register("fullName")} fullWidth />
            <TextField label="Password" type="password" {...register("password")} fullWidth/>
            <TextField label="Phone Number" {...register("phoneNumber")} fullWidth />
            <Button variant="contained" type="submit" sx={{ width: 100, p: 1 , backgroundColor:"#ce967e",
            "&:hover": { 
                backgroundColor: "#090b0d", transform: "scale(1.05)", 
            },transition: "0.3s" }}>
              Register
            </Button>
            <Link component={Links} to='/home'  color='inherit'>Return to store</Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;

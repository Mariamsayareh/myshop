import React from "react";
import { Box, Button, TextField, Typography, Card, CardContent, Link } from "@mui/material";
import { Link as Links } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Registerschema} from '../../Validation/Registerschema.js';

const Register = () => {
  const { register, handleSubmit ,formState:{errors}} = useForm({
    resolver:yupResolver(Registerschema),
    mode:'onBlur'
  });

  const registerForm = async (values) => {
    try {
      const response = await axios.post("https://knowledgeshop.runasp.net/api/Auth/Account/Register",values);
      console.log(response.data);
      alert("Registration successful!");
    } catch (error) {
      console.log(error);
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
            <TextField label="User Name" {...register("userName")} fullWidth 
            error={errors.userName} helperText={errors.userName?.message}
            />
            <TextField label="Full Name" {...register("fullName")} fullWidth 
            error={errors.fullName} helperText={errors.fullName?.message}
            />
            <TextField label="Email" {...register("email")} fullWidth 
            error={errors.email} helperText={errors.email?.message}
            />
            <TextField label="Password" type="password" {...register("password")} fullWidth 
            error={errors.password} helperText={errors.password?.message}
            />
            <TextField label="Phone Number" {...register("phoneNumber")} fullWidth 
            error={errors.phoneNumber} helperText={errors.phoneNumber?.message}
            />
            <Button variant="contained" type="submit" sx={{ p: 1 , backgroundColor:"#ce967e",
                "&:hover": { 
                    backgroundColor: "#090b0d", transform: "scale(1.05)", 
                },transition: "0.3s" }} fullWidth>
                    Register
            </Button>
            <Link component={Links} to='/home'  color='inherit' sx={{
                "&:hover": { 
                    color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                    },transition: "0.3s" }}>
                 Return to store
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;

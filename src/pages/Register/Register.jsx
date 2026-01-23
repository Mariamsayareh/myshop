import React from "react";
import { Box, Button, TextField, Typography, Card, CardContent, Link } from "@mui/material";
import { Link as Links,  } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Registerschema} from '../../Validation/Registerschema.js';
import ErrorIcon from '@mui/icons-material/Error';
import IconButton from '@mui/material/IconButton';
import useRegister from "../../Hooks/useRegister.js";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t, i18n } = useTranslation();
  const { register, handleSubmit ,formState:{errors}} = useForm({
    resolver:yupResolver(Registerschema),
    mode:'onBlur'
  });

  const {registerMutation, serverErrors} =useRegister();

  

  const registerForm = async (values) => {
    // try {
    //   const response = await axiosInstance.post("/Auth/Account/Register",values);
    //   console.log(response.data);
    //   alert("Registration successful!");
    // } catch (err) {
    //   console.log(err);
    //   setServerErrors(err.response?.data?.errors[0]|| []);
    //   //alert("Registration failed");
    // }
    await registerMutation.mutateAsync(values)
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ width: 600, p: 3 }} variant="outlined">
        <CardContent>
          <Typography variant="h4" textAlign="center" mb={3} sx={{fontWeight: "bold"}}>
            {t('Create Account')}
          </Typography>
          { serverErrors.map(( i) => (
              <Box key={i} sx={{ display: "flex", flexDirection:"column", gap: 1, color: "red" }}>
                <Box sx={{ display: "flex"}}>
                <ErrorIcon sx={{ fontSize: "30px" }} />
                <Typography variant="h6" sx={{fontWeight: "bold" , color:"#000" }}>{t('Please adjust the following')}:</Typography>
                </Box>
                <Typography component="p" variant="body" sx={{ color:"#000" , mb:2}}>
                  {t('This email address is already associated with an account.')} 
                  {t('If this account is yours, you can')} 
                  <Link component={Links} to='/log in'  color='inherit' sx={{
                   "&:hover": { 
                    color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                    },transition: "0.3s" }}>
                      {t('Login your account')}
                  </Link>,
                  {t('or you can')} 
                  <Link component={Links} to='/reset'  color='inherit'>
                  {t('reset your password')}
                  </Link>
                  </Typography>
              </Box>
              
            ))
          }



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
                    {t('Register')}
            </Button>
            <Link component={Links} to='/'  color='inherit' sx={{
                "&:hover": { 
                    color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                    },transition: "0.3s" }}>
                 {t('Return to store')}
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;

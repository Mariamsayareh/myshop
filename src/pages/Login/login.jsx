import React ,{ useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, Link } from "@mui/material";
import { Link as Links, useNavigate } from 'react-router-dom';
import axiosInstance from "../../Api/axiosInstance.js";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginSchema} from '../../Validation/loginSchema.js';
import ErrorIcon from '@mui/icons-material/Error';
import { useLocation} from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";

import { useLogin } from '../../Hooks/useLogin.js';
const Login = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
     //const navigate = useNavigate();
    
  const message = location.state?.message || "";
    // const [serverErrors, setServerErrors] = useState([]);
    const { register, handleSubmit ,formState:{errors}} = useForm({
        resolver:yupResolver(LoginSchema),
        mode:'onBlur'
      });
      const {  loginMutation, serverErrors } = useLogin();

      const loginForm = async (values) => {
         loginMutation.mutate(values);
        // try {
        //   const response = await axiosInstance.post("/Auth/Account/Login",values);
        //   if(response.status===200){
        //     console.log(response.data);
        //     setToken(response.data.accessToken);
        //     setAccessToken(response.data.accessToken);
        //     navigate('/home');

        //   }
        //    alert("Registration successful!");
        // } catch (error) {
        //   console.log("ERROR RESPONSE:", error.response);
        //   console.log("ERROR DATA:", error.response?.data);
        //   console.log("ERROR DATA:", error.response?.data.message);
        //   setServerErrors(error.response?.data?.message || []);
          
        //   //alert(error.response?.data || "Login failed");
        // }
      };
    
      return (
            <>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <Card sx={{ width: 600, p: 3 }} variant="outlined">
                    <CardContent>
                    <Typography variant="h4" textAlign="center" mb={3} sx={{fontWeight: "bold"}}>
                        {t('Log in to your account')}
                    </Typography>
                    {message && (
                        <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                            
                        }}
                        >
                        <CheckCircleIcon sx={{ color: "#4caf50", mr: 1 }} />
                        <Typography component="p" color="text.primary">{message}</Typography>
                        </Box>
                    )}
                    {serverErrors?.length > 0 &&
                        (Array.isArray(serverErrors) ? serverErrors : [serverErrors]).map((err, i) => (
                        <Box key={i} sx={{ display: "flex", flexDirection:"column", gap: 1, color: "red" }}>
                            <Box sx={{ display: "flex"}}>
                            <ErrorIcon sx={{ fontSize: "30px" }} />
                            <Typography variant="h6" sx={{fontWeight: "bold" , color:"text.primary" }}>{t('Please adjust the following')}:</Typography>
                            </Box>
                            <Typography component="p" variant="body" sx={{ color:"text.primary" , mb:2}}>
                            {t('This email address or password is invalid, you can')} <Link component={Links} to='/reset'  color='inherit'sx={{
                            "&:hover": { 
                                color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                                },transition: "0.3s" }}>
                            {t('reset your password')}
                            </Link>,
                            {t('or you can')} <Link component={Links} to='/register'  color='inherit' sx={{
                            "&:hover": { 
                                color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                                },transition: "0.3s" }}>
                                {t('Create an now account')}
                            </Link>
                            
                            </Typography>
                        </Box>
                        ))
                    }
            
                    <Box
                        component="form"
                        onSubmit={handleSubmit(loginForm)}
                        sx={{ display: "flex", flexDirection: "column", alignItems:"center", gap: 3 }}
                    >
                        <TextField label="Email" {...register("email")} fullWidth 
                        error={errors.email} helperText={errors.email?.message}
                        />
                        <TextField label="Password" type="password" {...register("password")} fullWidth 
                        error={errors.password} helperText={errors.password?.message}
                        />
                        <Box sx={{ width: "100%" }}>
                            <Link component={Links} to='/reset'  color='inherit' sx={{
                                display: "block",           
                                textAlign: "start",
                                transformOrigin: "left",
                                "&:hover": { 
                                    color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                                },transition: "0.3s" }}>
                                {t('Forgot your password?')}
                            </Link>
                        </Box>
                        <Button variant="contained" type="submit" sx={{ p: 1 , backgroundColor:"#ce967e",
                        "&:hover": { 
                            backgroundColor: "#090b0d", transform: "scale(1.05)", 
                        },transition: "0.3s" }} fullWidth>
                        {t('Register')}
                        </Button>
                        <Link component={Links} to='/register'  color='inherit' sx={{
                            "&:hover": { 
                                color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                            },transition: "0.3s" }}>
                           {t('No account yet? Create an account')}
                        </Link>
                    </Box>
                    </CardContent>
                </Card>
                </Box>
            </>
      );
}

export default Login;

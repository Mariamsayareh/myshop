import React from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, Link } from "@mui/material";
import { Link as Links } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm({});
    
      const loginForm = async (values) => {
        try {
          const response = await axios.post("https://knowledgeshop.runasp.net/api/Auth/Account/Login",values);
          console.log(response.data);
          alert("Registration successful!");
        } catch (error) {
          console.log("ERROR RESPONSE:", error.response);
          console.log("ERROR DATA:", error.response?.data);
          alert(error.response?.data || "Login failed");
        }
      };
    
      return (
            <>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <Card sx={{ width: 600, p: 3 }} variant="outlined">
                    <CardContent>
                    <Typography variant="h4" textAlign="center" mb={3} sx={{fontWeight: "bold"}}>
                        Log in to your account
                    </Typography>
            
                    <Box
                        component="form"
                        onSubmit={handleSubmit(loginForm)}
                        sx={{ display: "flex", flexDirection: "column", alignItems:"center", gap: 3 }}
                    >
                        <TextField label="Email" {...register("email")} fullWidth />
                        <TextField label="Password" type="password" {...register("password")} fullWidth/>
                        <Box sx={{ width: "100%" }}>
                            <Link component={Links} to='/reset'  color='inherit' sx={{
                                display: "block",           
                                textAlign: "start",
                                transformOrigin: "left",
                                "&:hover": { 
                                    color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                                },transition: "0.3s" }}>
                                Forgot your password?
                            </Link>
                        </Box>
                        <Button variant="contained" type="submit" sx={{ p: 1 , backgroundColor:"#ce967e",
                        "&:hover": { 
                            backgroundColor: "#090b0d", transform: "scale(1.05)", 
                        },transition: "0.3s" }} fullWidth>
                        Register
                        </Button>
                        <Link component={Links} to='/register'  color='inherit' sx={{
                            "&:hover": { 
                                color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                            },transition: "0.3s" }}>
                            No account yet? Create an account
                        </Link>
                    </Box>
                    </CardContent>
                </Card>
                </Box>
            </>
      );
}

export default Login;

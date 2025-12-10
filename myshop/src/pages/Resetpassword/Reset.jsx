import React from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, Link } from "@mui/material";
import { Link as Links } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";

const Reset = () => {
    const { register, handleSubmit } = useForm({});
    
      const resetForm = async (values) => {
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
        <div>
            <>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <Card sx={{ width: 600, p: 3 }} variant="outlined">
                    <CardContent>
                    <Typography variant="h5" textAlign="center" mb={1} sx={{fontWeight: "bold"}}>
                        Reset your password
                    </Typography>
                    <Typography variant="body" component="p" textAlign="center" mb={4} sx={{color: "#6c6868"}}>
                         We will send you an email to reset your password
                    </Typography>
            
                    <Box
                        component="form"
                        onSubmit={handleSubmit(resetForm)}
                        sx={{ display: "flex", flexDirection: "column", alignItems:"center", gap: 3 }}
                    >
                        <TextField label="Email" {...register("email")} fullWidth />
                        <Button variant="contained" type="submit" sx={{ p: 1 , backgroundColor:"#ce967e",
                        "&:hover": { 
                            backgroundColor: "#090b0d", transform: "scale(1.05)", 
                        },transition: "0.3s" }} fullWidth>
                        Submit
                        </Button>
                        <Link component={Links} to='/log in'  color='inherit' sx={{
                            "&:hover": { 
                                color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                            },transition: "0.3s" }}>
                            Cancel
                        </Link>
                    </Box>
                    </CardContent>
                </Card>
                </Box>
            </>
        </div>
    );
}

export default Reset;

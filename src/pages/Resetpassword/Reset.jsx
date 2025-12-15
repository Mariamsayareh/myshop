import React, { useState } from "react";
import { Box, Button, TextField, Typography, Card, CardContent, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axiosInstance from "../../Api/axiosInstance.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ResetSchema } from "../../Validation/ReserSchema";
import ErrorIcon from "@mui/icons-material/Error";

const Reset = () => {
  const [serverErrors, setServerErrors] = useState([]);
  const navigate = useNavigate();

  const form = useForm({
  resolver: yupResolver(ResetSchema),
  mode: "onBlur",
    });

    const { register, handleSubmit } = form;
    const errors = form.formState?.errors || {};

  const resetForm = async (values) => {
    try {
      const response =await axiosInstance.post("/Auth/Account/SendCode",values);
      console.log(response.data);
      localStorage.setItem("resetEmail", values.email);
      navigate("/new-password");
    } catch (error) {
            console.log("ERROR RESPONSE:", error.response);
            console.log("ERROR DATA:", error.response?.data);
            console.log("ERROR DATA:", error.response?.data.message);
      setServerErrors(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ width: 600, p: 3 }} variant="outlined">
        <CardContent>
          <Typography variant="h5" textAlign="center" mb={1} sx={{ fontWeight: "bold" }}>
            Reset your password
          </Typography>
          <Typography textAlign="center" mb={4} sx={{ color: "#6c6868" }}>
            We will send you an email to reset your password
          </Typography>
          {serverErrors && (Array.isArray(serverErrors)? serverErrors: [serverErrors]).map((err, i) => (
              <Box
                key={i}
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
              >
                <ErrorIcon sx={{ fontSize: 18, color: "red" }} />
                <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                  {err}
                </Typography>
              </Box>
            ))}

          <Box
            component="form"
            onSubmit={handleSubmit(resetForm)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3
            }}
          >
            <TextField label="Email" {...register("email")} fullWidth 
            error={!!errors.email} helperText={errors.email?.message}
            />

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                p: 1,
                backgroundColor: "#ce967e",
                "&:hover": {
                  backgroundColor: "#090b0d",
                  transform: "scale(1.05)"
                },
                transition: "0.3s"
              }}
            >
              Submit
            </Button>

            <Link
            component={RouterLink} to='/log in'  color='inherit' 
            sx={{
                                        "&:hover": { 
                                            color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                                        },transition: "0.3s" }}
            >
              Cancel
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Reset;

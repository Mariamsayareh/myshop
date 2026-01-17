import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Card, CardContent, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewpasswordSchema } from "../../Validation/NewpasswordSchema.js";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

import { useNewpass } from "../../Hooks/useNewpass.js";

const NewPassword = () => {
  
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm({
    resolver: yupResolver(NewpasswordSchema),
    mode: "onBlur",
  });

  const { register, handleSubmit, formState } = form;
  const errors = formState.errors || {};

  const {  newpassMutation, serverErrors } = useNewpass();

  const newpassForm = async (values) => {
      await newpassMutation.mutateAsync(values);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ width: 600, p: 3 }} variant="outlined">
        <CardContent>
          <Typography variant="h4" textAlign="center" mb={3} sx={{ fontWeight: "bold" }}>
            Create a New Password
          </Typography>

          {/* Server errors */}
          {serverErrors.length > 0 &&
            serverErrors.map((err, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <ErrorIcon sx={{ fontSize: "25px", mr: 1, color: "red" }} />
                <Typography>{err}</Typography>
              </Box>
            ))}

          {/* Success message */}
          {successMessage && (
            <Alert
              severity="success"
              sx={{ mb: 2, display: "flex", alignItems: "center", fontWeight: "bold" }}
              icon={<CheckCircleIcon />}
            >
              {successMessage}
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit(newpassForm)}
            sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}
          >
            <TextField
              label="Email"
              {...register("email")}
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Code"
              type="text"
              {...register("code")}
              fullWidth
              error={!!errors.code}
              helperText={errors.code?.message}
            />
            <TextField
              label="New Password"
              type="password"
              {...register("newPassword")}
              fullWidth
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
            />

            <Button
              variant="contained"
              type="submit"
              sx={{
                p: 1,
                backgroundColor: "#ce967e",
                "&:hover": {
                  backgroundColor: "#090b0d",
                  transform: "scale(1.05)",
                },
                transition: "0.3s",
              }}
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewPassword;

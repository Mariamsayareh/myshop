import * as yup from 'yup';
export const Registerschema = yup.object({
    userName: yup.string()
        .matches(/^[a-zA-Z0-9._-]+$/, "Invalid User Name")
        .min(4, "User Name must be at least 4 characters")
        .required("User Name is required"),
    fullName: yup.string()
        .required("Full Name is required"),
    email: yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowerercase letter")
        .matches(/[@#$&?!]/, "Must contain at least one special character"),
    phoneNumber: yup.string()
        .required("Phone Number is required")
        .matches(/[0-9]/, "The phone number must consist of digits only")
        .min(10, "The phone number must be 10 digits")
        .max(10, "The phone number must be 10 digits")

})
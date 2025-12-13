import * as yup from 'yup';
export const NewpasswordSchema = yup.object({
    email: yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    code: yup.string()
        .min(4, "The phone number must be 4 digits")
        .max(4, "The phone number must be 4 digits"),
    newPassword: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowerercase letter")
        .matches(/[@#$&?!]/, "Must contain at least one special character")

})
import { createTheme } from "@mui/material";

const getTheme = (mode) => {
    return createTheme({
        palette: {
            mode,
            primary: {
                main: mode === "dark" ? "#CE967E" : "#be9583ff",
            },
            background: {
                default: mode === "dark" ? "#121212" : "#f5f5f5",
                paper: mode === "dark" ? "#1e1e1e" : "rgba(255,255,255,.9)",
            },
            text: {
                primary: mode === "dark" ? "#fff" : "#000",
                secondary: mode === "dark" ? "#ccc" : "#555",
            },
        },


        typography: {
            fontFamily: "Jost, sans-serif",
        },
    });
};

export default getTheme;
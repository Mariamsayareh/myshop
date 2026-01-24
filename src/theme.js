import { createTheme } from "@mui/material";

const getTheme = (mode) => {
    return createTheme({
        palette: {
            mode,
            primary: {
                main: mode === 'dark' ? '#098cb4' : '#1976d2',
            },
            background: {
                default: mode === 'dark' ? '#121212' : '#f5f5f5',
                paper: mode === 'dark' ? '#1e1e1e' : '#ffffff'
            },
            text: {
                primary: mode === 'dark' ? '#fff' : '#000',
                secondary: mode === 'dark' ? '#ccc' : '#555'
            }
        }
    });
};

export default getTheme;
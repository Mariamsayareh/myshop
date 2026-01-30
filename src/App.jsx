
import { RouterProvider } from "react-router-dom";
import router  from './Route.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LanguageManager from "./utils/LanguageManager.js";
import { ThemeProvider } from "@emotion/react";
import useThemeStore from "./stor/useThemeStore.js";
import getTheme from "./theme.js";
export default function App() {
  const queryClient = new QueryClient();
  const mode =useThemeStore((state)=>state.mode);
  const theme=getTheme(mode);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LanguageManager/>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <RouterProvider router={router} />
          </ThemeProvider>
        
      
      </QueryClientProvider>
    </>
  )
}

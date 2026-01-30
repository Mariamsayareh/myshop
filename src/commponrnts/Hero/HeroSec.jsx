import React from 'react';
import {
  Box,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import heroSec from '../../img/heroSec.webp';
import { useTranslation } from "react-i18next";
const HeroSec = ({ pageName, children }) => {
    const { t } = useTranslation();
    return (
        <Box sx={{
            height:220,
            backgroundImage:`url(${heroSec})`,
            backgroundSize: "100% 100%",
        }}>
            <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} pt={6}>
                <Typography variant="h3" textAlign={'center'} fontWeight={500} mb={3}>
                    {pageName}
                </Typography>
                <Box display={'flex'} justifyContent={'center'} gap={1}>
                <Link
                    component={RouterLink}
                    to={'/'}
                    underline="none"
                    color='inherit'
                    
                    sx={{
                            color: "#000",
                            "&:hover": { 
                                color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                            },transition: "0.3s" }}
                  >
                   {t("Home")}
                  </Link>
                  <Box >
                    {children}
                  </Box>
                  </Box>

            </Box>
            
        </Box>
    );
}

export default HeroSec;

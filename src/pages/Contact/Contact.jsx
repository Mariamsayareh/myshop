import React from 'react';
import HeroSec from '../../commponrnts/Hero/HeroSec';
import {
  Box,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Contact = () => {
    return (
        <Box>
            <HeroSec pageName='Contact'>
                 /  Contact
            </HeroSec>
            Contact
        </Box>
    );
}

export default Contact;

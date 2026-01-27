import React from 'react';
import HeroSec from '../../commponrnts/Hero/HeroSec';
import {
  Box,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Blog = () => {
    return (
        <Box>
            <HeroSec pageName='Blog'>
                <Link
                    component={RouterLink}
                    to={'#'}
                    underline="none"
                    color='inherit'
                    
                    sx={{
                            color: "#000",
                             }}
                  >
                   / Blog
                  </Link>   / Blog
            </HeroSec>
            jjj
        </Box>
    );
}

export default Blog;

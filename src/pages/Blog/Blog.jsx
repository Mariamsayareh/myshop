import React from 'react';
import HeroSec from '../../commponrnts/Hero/HeroSec';
import {
  Box,
  Grid, 
  Container,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import CardItem from "../Card/CardItem.jsx";
import { cards } from "../Card/Cards.js";
import { useTranslation } from "react-i18next";

const Blog = () => {
    const { t ,i18n} = useTranslation();
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
                   / {t("Blog")}
                  </Link>   / {t("Blog")}
            </HeroSec>
            <Container my={4}>
                <Grid container spacing={4} my={8}>
                    {cards.map((card) => (
                    <Grid item xs={12} md={4} key={card.id} 
                    sx={{
                        width: { xs: "100%", sm: "60%", md: "30%" }, 
                        
                    }}>
                        <CardItem card={card} />
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Blog;

import { Box, Typography ,Link ,Grid} from '@mui/material';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import ringImg from "../../img/sec2.webp";
import braceletImg from "../../img/sec22.webp";
import pendantImg from "../../img/sec23.webp";
import { useTranslation } from "react-i18next";



const SectionTwoHome = () => {
  const { t ,i18n} = useTranslation();

    return (
    <Grid container spacing={8} sx={{p:6, backgroundColor: "background.paper",}}>
        <Grid item xs={12} md={6} >
          <Box
            sx={{
              backgroundColor: "background.default",
              position: "relative",
              overflow: "hidden",
              
              height: 400 ? 500 : 240,
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={`${ringImg}`}
              alt={"DIAMOND RIN"}
              sx={{
                cursor: "pointer",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform .6s ease",
                "&:hover": {
                  transform: "scale(1.09)", 
                },
              }}
            />

            {/* Content */}
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                left: 270,
                transform: "translateY(-50%)",
                backgroundColor: "background.default",
                p: 3,
                maxWidth: 300,
              }}
            >
              <Typography variant="caption" letterSpacing={1}>
                {t("DIAMOND RIN")}
              </Typography>

              <Typography fontSize={22} fontWeight={600} my={1}>
                {t("Yellow Gold & Diamond Ring")}
              </Typography>

              <Link
                component={RouterLink}
                to={'#'}
                underline="always"
                sx={{
                  fontWeight: 500,
                  color: "text.primary",
                  transition: ".3s",
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "none", 
                  },
                }}
              >
                {t("SHOP NOW")}
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
          
            sx={{
              
              display:'flex',
              flexDirection:'column',
              gap:3,
              height: 400 ? 500 : 240,
            }}
          >
            {/* sec2 */}
            <Box component="section"
            sx={{
                py:3,
              backgroundColor: "background.default",
              position: "relative",
              overflow: "hidden",
              
            }}
          >
                {/* Image */}
            <Box
              component="img"
              src={`${pendantImg}`}
              alt={"DIAMOND RIN"}
              sx={{
                cursor: "pointer",
                width: "80%",
                height: "100%",
                objectFit: "cover",
                transition: "transform .6s ease",
                "&:hover": {
                  transform: "scale(1.09)", 
                },
              }}
            />

            {/* Content */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: 270,
                transform: "translateY(-50%)",
                backgroundColor: "background.default",
                p: 3,
                maxWidth: 300,
              }}
            >
              <Typography variant="caption" letterSpacing={1}>
                {t("DIAMOND BRACELETS")}
              </Typography>
              <Typography fontSize={22} fontWeight={600} my={1}>
                {t("Infinity Diamond Bracelet")}
              </Typography>
              <Link
                component={RouterLink}
                to={'#'}
                sx={{
                  fontWeight: 500,
                  color: "text.primary",
                  transition: ".3s",
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "none", 
                  },
                }}
              >
                {t("SHOP NOW")}
              </Link>
            </Box>
            </Box>

            {/* sec3 */}
            <Box component="section"
            sx={{
              backgroundColor: "background.default",
              position: "relative",
              overflow: "hidden",
              height:200
              
            }}
          >
             {/* Content */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: {
                    xs: 270,   
                    sm: 270,   
                    md: 290,  
                    lg: 420,  
                },
                transform: "translateY(-50%)",
                backgroundColor: "background.default",
                p: 3,
                maxWidth: 300,
              }}
            >
              <Typography variant="caption" letterSpacing={1}>
                {t("DIAMOND PENDANT")}
              </Typography>
              <Typography fontSize={22} fontWeight={600} my={1}>
                {t("Teardrop Diamond Pendant")}
              </Typography>

              <Link
                component={RouterLink}
                to={'#'}
                sx={{
                  fontWeight: 500,
                  color: "text.primary",
                  transition: ".3s",
                  "&:hover": {
                    color: "primary.main",
                    textDecoration: "none", 
                  },
                }}
              >
                {t("SHOP NOW")}
              </Link>
            </Box>
                {/* Image */}
            <Box
              component="img"
              src={`${braceletImg}`}
              alt={"DIAMOND RIN"}
              sx={{
                cursor: "pointer",
                position: "absolute",
                top:'1%',
                left: {
                    xs: 200,   
                    sm: 330,   
                    md: 320,  
                    lg: 300,  
                },
                width: "50%",
                height: "100%",
               
                transition: "transform .6s ease",
                "&:hover": {
                  transform: "scale(1.09)", 
                },
              }}
            />
            </Box>
          </Box>
        </Grid>
      
    </Grid>
  );
}

export default SectionTwoHome;

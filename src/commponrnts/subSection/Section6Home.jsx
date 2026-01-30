import { Box, Typography, Button, Container } from "@mui/material";
import braceletImg from "../../img/diamond1.webp"; // غيري المسار حسب صورتك
import { useTranslation } from "react-i18next";

const Section6Home = () => {
    const { t ,i18n} = useTranslation();
  return (
    <Box sx={{ backgroundColor: "background.paper"}}>
        <Box sx={{ py: 10 ,mx:8 ,borderRadius:2 ,backgroundColor: "background.default"}}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent:'center',
            alignItems: "center",
            gap: 6,
            // flexDirection: { xs: "column", md: "row" }
          }}
        >
          {/* Text */}
          <Box >
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, fontWeight: 500 }}
            >
              {t("DIAMOND BRACELETS")}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                mt: 2,
                lineHeight: 1
              }}
            >
              {t("Rose Gold With Diamond")} <br />
              {t("Hotsell Bracelet")}
            </Typography>

            <Button
              variant="text"
              sx={{
                mt: 4,
                px: 0,
                fontWeight: 600,
                textDecoration: "underline",
                color: "text.primary",
                "&:hover": {
                    color: "#CE967E" ,
                  backgroundColor: "transparent"
                }
              }}
            >
              {t("SHOP NOW")}
            </Button>
          </Box>

          {/* Image */}
          <Box
            sx={{
             width:600,
            }}
          >
            <Box
              component="img"
              src={braceletImg}
              alt="Bracelet"
              sx={{
                cursor: "pointer",
                width: "100%",
                transition: "transform .6s ease",
                "&:hover": {
                  transform: "scale(1.09)", 
                },
              }}
            />
          </Box>
        </Box>
      </Container>
      </Box>
    </Box>
  );
};

export default Section6Home;

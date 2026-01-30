
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import HeroSec from '../../commponrnts/Hero/HeroSec';
import { useTranslation } from "react-i18next";


const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <Box>
        <HeroSec pageName='Contact'>
                 /  {t("Contact")}
        </HeroSec>
      {/* Content */}
      <Container sx={{ my: 8 }}>
        <Box display={'flex'} gap={2} sx={{flexDirection: { xs: "column", md: "row" },}}>
        <Box flex={1} >
            <Box
            sx={{
                border: "2px solid #eee",
                p: 4,
                display:'flex',
                flexDirection:'column',
                height:'100%'
            }}
            >
            <Typography variant="h5" fontWeight={600} mb={3}>
                {t("Do You Have Any Questions?")}
            </Typography>

            <Box container spacing={3}>
                <Box sx={{
                display:'flex',
                flexDirection:'column',
                gap:2
            }}>
                <Box display={'flex'} gap={2}>
                <TextField fullWidth placeholder={t("Name")} />
                <TextField fullWidth placeholder={t("Email")} />
                </Box>
                <TextField fullWidth placeholder={t("Phone number")} />
                <TextField
                    fullWidth
                    placeholder={t("Comment")}
                    multiline
                    rows={4}
                /> 
                <Button
                  variant="contained"
                  sx={{
                    width: "fit-content",
                    px: 4,
                    backgroundColor: "#CE967E",
                    "&:hover": { backgroundColor: "#000000" },
                    color: "#fff" 
                  }}
                >
                    {t("SEND")}
                </Button>
                </Box>
            </Box>
            </Box>
        </Box>
        <Box  >
            <Box
            sx={{
                 height:'100%',
                border: "1px solid #eee",
                p: 4,
                width:'100%'
            }}
            >
            <Typography variant="h5" fontWeight={600} mb={3}>
                {t("Get In Touch With Us")}
            </Typography>

            <Box display="flex" gap={2} mb={3}>
                <HomeIcon />
                <Typography>
                <b>{t("Address")}:</b>
                <br />
                {t("33 New Montgomery St.")}
                <br />
                {t("Ste 750 San Francisco,")}
                <br />
                {t("CA, USA 94105")}
                </Typography>
            </Box>

            <Box display="flex" gap={2} mb={3}>
                <PhoneIcon />
                <Typography>
                <b>{t("Contact No")}.:</b>
                <br />
                (+91) 9876-543-210
                </Typography>
            </Box>

            <Box display="flex" gap={2} mb={3}>
                <EmailIcon />
                <Typography>
                <b>{t("Email")}:</b>
                <br />
                jubilee@exampledemo.com
                </Typography>
            </Box>

            <Box display="flex" gap={2}>
                <InfoIcon />
                <Typography>
                <b>{t("Store Info")}:</b>
                <br />
                {t("Monday – Friday 10 AM – 8 PM")}
                </Typography>
            </Box>
            </Box>
        </Box>
        </Box>

      </Container>

      {/* Map */}
      <Box sx={{ mt: 6 }}>
        <iframe
          title="map"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=San%20Francisco&output=embed"
        />
      </Box>
    </Box>
  );
};

export default Contact;

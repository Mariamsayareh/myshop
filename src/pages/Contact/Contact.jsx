
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

const Contact = () => {
  return (
    <Box>
        <HeroSec pageName='Contact'>
                 /  Contact
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
                Do You Have Any Questions?
            </Typography>

            <Box container spacing={3}>
                <Box sx={{
                display:'flex',
                flexDirection:'column',
                gap:2
            }}>
                <Box display={'flex'} gap={2}>
                <TextField fullWidth placeholder="Name" />
                <TextField fullWidth placeholder="Email*" />
                </Box>
                <TextField fullWidth placeholder="Phone number" />
                <TextField
                    fullWidth
                    placeholder="Comment"
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
                    SEND
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
                Get In Touch With Us
            </Typography>

            <Box display="flex" gap={2} mb={3}>
                <HomeIcon />
                <Typography>
                <b>Address:</b>
                <br />
                33 New Montgomery St.
                <br />
                Ste 750 San Francisco,
                <br />
                CA, USA 94105
                </Typography>
            </Box>

            <Box display="flex" gap={2} mb={3}>
                <PhoneIcon />
                <Typography>
                <b>Contact No.:</b>
                <br />
                (+91) 9876-543-210
                </Typography>
            </Box>

            <Box display="flex" gap={2} mb={3}>
                <EmailIcon />
                <Typography>
                <b>Email:</b>
                <br />
                jubilee@exampledemo.com
                </Typography>
            </Box>

            <Box display="flex" gap={2}>
                <InfoIcon />
                <Typography>
                <b>Store Info:</b>
                <br />
                Monday – Friday 10 AM – 8 PM
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

import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  Link
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import newsletterBg from "../../img/bg.webp";
import app from '../../img/app.webp';
import googel from '../../img/google.webp';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcDiscover
} from "react-icons/fa";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const FooterSection = ({ title, items }) => {
  const renderItems = () => (
    items.map((item, index) => (
      <Box key={index} display="flex" alignItems="center" mb={1}>
        {item.icon && <Box mr={1}>{item.icon}</Box>}
        {item.path ? (
          <a
            href={item.path}
            style={{
              color: theme.palette.text.secondary,
              textDecoration: "none",
            }}
          >
            {item.label}
          </a>
        ) : (
          <Typography color="text.secondary">{item.label}</Typography>
        )}
      </Box>
    ))
  );

  if (isMobile) {
    return (
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight={600}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{renderItems()}</AccordionDetails>
      </Accordion>
    );
  }

  return (
    <>
      <Typography fontWeight={600} mb={2}>
        {title}
      </Typography>
      {renderItems()}
    </>
  );
};



  return (
    <Box mt={10}>
      {/* ======================================= */}
      <Box
        sx={{
            backgroundImage: `url(${newsletterBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            
          }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={600} pt={8} sx={{ color: "#000" }}>
                Subscribe To Our Newsletter
              </Typography>

              <Typography sx={{ color: "#333" }} mt={1}>
                Subscribe to our latest newsletter to get news about special discounts and upcoming sales
              </Typography>

              <Box mt={4} display="flex" gap={2} mb={8}>
                <TextField
                  placeholder="Email"
                  fullWidth
                  variant="outlined"
                  sx={{ color: "#000" }}
                />

                <Button
                  variant="contained"
                  sx={{
                    px: 4,
                    backgroundColor: "#CE967E",
                    "&:hover": { backgroundColor: "#000000" },
                    color: "#fff" 
                  }}
                >
                  SUBSCRIBE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ===================================== */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          
          {/* About */}
          <Grid item xs={12} md={3} 
          sx={{
            width: { xs: "100%", md: "250px" }
          }}>
            <Typography fontWeight={600} mb={2}>
              About Our Store
            </Typography>
            <Typography color="text.secondary" lineHeight={1.8}>
              Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer service.
            </Typography>
            <Box mt={2} display="flex" gap={1}>
              <Link component={RouterLink} to="#">
               <Box component="img" src={app} alt="app" style={{  borderRadius: 4 }} />
              </Link>
              <Link component={RouterLink} to="#">
                <Box component="img" src={googel} alt="googel" style={{ borderRadius: 4 }} />
              </Link>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2} sx={{ width: { xs: "100%", md: "auto" } }}>
            <FooterSection
              title="Quick Links"
              items={[
                { label: "Contact Us", path: "/contact" },
                { label: "Shipping", path: "/shipping" },
                { label: "Sitemap", path: "/sitemap" },
                { label: "FAQs", path: "/faqs" },
                { label: "Size Chart", path: "/size-chart" },
                { label: "About Us", path: "/about" },
              ]}
            />
          </Grid>
          



          {/* Services */}
         <Grid item xs={12} md={2} sx={{ width: { xs: "100%", md: "auto" } }}>
            <FooterSection
              title="Services"
              items={[
                { label: "Privacy Policy", path: "/contact" },
                { label: "Refund Policy", path: "/shipping" },
                { label: "Shipping Policy", path: "/sitemap" },
                { label: "Terms of Service", path: "/faqs" },
                { label: "Policy for Buyers", path: "/size-chart" },
                { label: "Policy for Sellers", path: "/about" },
              ]}
            />
          </Grid>

          {/* Account */}
          <Grid item xs={12} md={2} sx={{ width: { xs: "100%", md: "auto" } }}>
            <FooterSection
              title="Your Account"
              items={[
                { label: "Search", path: "/search" },
                { label: "Delivery Information", path: "/delivery-info" },
                { label: "Locality", path: "/locality" },
                { label: "Order Tracking", path: "/order-tracking" },
                { label: "Terms and Conditions", path: "/terms" },
                { label: "Shipping & Refund", path: "/shipping-refund" },
              ]}
            />
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={2} sx={{ width: { xs: "100%", md: "auto" } }}>
            <FooterSection
              title="Contact Us"
              items={[
                { icon: <PlaceOutlinedIcon sx={{
                    color: "#CE967E"
                  }} />, label: "Jubilee - Jewellery Store" },
                { icon: <MailOutlineIcon sx={{
                    color: "#CE967E"
                  }} />, label: "hello@blocks.com", path: "mailto:hello@blocks.com" },
                { icon: <SupportAgentOutlinedIcon sx={{
                    color: "#CE967E"
                  }} />, label: "(+91) 9876-543-210", path: "tel:+919876543210" },
              ]}
            />
          </Grid>

        </Grid>
      </Container>
 {/* ===================================== */}
      <Divider />
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
           {/* face-insta-yout-x */}
          <Box  textAlign="center">
            <Button sx={{borderRadius:8 ,color: "#222222" ,backgroundColor: "#F5F0ED",
            "&:hover": { backgroundColor: "#CE967E",color: "#fff"  }}}>
              <FacebookOutlinedIcon sx={{
              borderRadius:'50%'
                  }}/></Button>
            <Button sx={{borderRadius:8 ,color: "#222222" ,backgroundColor: "#F5F0ED",
            "&:hover": { backgroundColor: "#CE967E",color: "#fff"  }}}><InstagramIcon sx={{
              borderRadius:'50%'
                  }}/></Button>
            <Button sx={{borderRadius:8 ,color: "#222222" ,backgroundColor: "#F5F0ED",
            "&:hover": { backgroundColor: "#CE967E",color: "#fff"  }}}>
              <YouTubeIcon sx={{
              borderRadius:'50%'
                  }}/></Button>
            <Button sx={{borderRadius:8 ,color: "#222222" ,backgroundColor: "#F5F0ED",
            "&:hover": { backgroundColor: "#CE967E",color: "#fff"  }}}
            ><XIcon sx={{
              borderRadius:'50%'
                  }}/></Button>
          </Box>
          <Box  textAlign="center">
            <Typography variant="body2"  color="text.secondary">
              © 2026, Jubilee - Jewellery Store Powered by Shopify
            </Typography>
          </Box>
          {/* visa */}
            <Box display="flex" px={5} gap={2} fontSize={36}>
              <FaCcVisa sx={{borderRadius:8 ,color: "#222222" ,backgroundColor: "#F5F0ED",
                "&:hover": { backgroundColor: "#CE967E",color: "#fff"  }}}/>
              <FaCcMastercard sx={{borderRadius:8 ,color: "#222222" ,backgroundColor: "#F5F0ED",
                "&:hover": { backgroundColor: "#CE967E",color: "#fff"  }}}/>
              <FaCcAmex sx={{borderRadius:8 ,color: "#222222" ,backgroundColor: "#F5F0ED",
                "&:hover": { backgroundColor: "#CE967E",color: "#fff"  }}}/>
              <FaCcPaypal sx={{borderRadius:8 ,color: "#222222" ,backgroundColor: "#F5F0ED",
                "&:hover": { backgroundColor: "#CE967E",color: "#fff"  }}}/>
              <FaCcDiscover sx={{borderRadius:8 ,color: "#222222" ,backgroundColor: "#F5F0ED",
                "&:hover": { backgroundColor: "#CE967E",color: "#fff"  }}}/>
            </Box>

        </Grid>
      </Container>
    </Box>
  );
}

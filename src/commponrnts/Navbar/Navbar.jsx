import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { InputBase, Slide } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import logo from "../../img/logo.webp"
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useAuthStore from "../../stor/authStore";
import useThemeStore from "../../stor/useThemeStore";
import CloseIcon from "@mui/icons-material/Close";


export default function Navbar() {
  const { t ,i18n} = useTranslation();
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const {mode,toggleTheme}=useThemeStore();
  const [menuLevel, setMenuLevel] = useState("main"); 
  const [activePage, setActivePage] = useState(null);

  const { token, user, logout } = useAuthStore((state) => state);
  const toggleLanguage =()=>{
    const newLng = i18n.language === 'ar'?'en':'ar';
    i18n.changeLanguage(newLng);
  }
  const pages = [
    { label: t("Home"), path: "/" },
    {
      label: t("Shop"),
      path: "/shop",
      megaMenu: [
        { title: "Rings", items: ["Diamond Ring", "Rose Gold Ring", "Gold Ring", "Cocktail Ring"] },
        { title: "Anklet", items: ["Ankle Bracelets", "Beaded Anklet", "Braided Anklet", "Charmed Ankle"] },
        { title: "Earring", items: ["Dangles Earring", "Drops Earring", "Hoops Earring", "Mamuli Earring"] },
        { title: "Bracelets", items: ["Antique Bangle", "Beaded Bracelets", "Charm Bracelet", "Tennis Bracelets"] },
      ],
    },
    {
      label: t("Collection"),
      path: "/collection",
      options: ["Choker", "Butterfly Pendant", "Flower Necklace", "Princess Necklace"],
    },
    { label: t("Necklaces"), path: "/necklaces" },
    { label: t("Contact"), path: "/contact" },
    {
      label: t("Blog"),
      path: "/blog",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/log in");
  };


  return (
    <AppBar position="static"
      elevation={0}
      sx={{
         bgcolor: "background.paper",
          color: "text.primary",
        
      }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "25px",
          }}
        >
          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={(e) => {
                  setAnchorElNav(e.currentTarget);
                  setMenuLevel("main");
                  setActivePage(null);
                }}
              >
                <MenuIcon />
              </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={() => setAnchorElNav(null)}>
                  <Link
                    component={RouterLink}
                    to={page.path}
                    underline="none"
                    color='inherit'
                    sx={{
                            color: "text.primar",
                            "&:hover": { 
                                color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                            },transition: "0.3s" }}
                  >
                    {page.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo */}
          <Link component={RouterLink} to="/">
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{m:1, height: 40 ,background:"#fff" ,p:1}}
            />
          </Link>

          <Typography variant="h6" sx={{p:3, fontWeight: 700,fontSize:16 }}>
            {t("Welcome")} {user?.name}
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {pages.map((page) => {
              const isMega = Boolean(page.megaMenu);
              const hasDropdown = Boolean(page.options || isMega);

              if (!hasDropdown) {
                return (
                  <Button key={page.path} sx={{ color: "text.primary" }}>
                    <Link
                      component={RouterLink}
                      to={page.path}
                      underline="none"
                      color='inherit'
                      sx={{
                            color: "text.primar",
                            "&:hover": { 
                                color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                            },transition: "0.3s" }}
                    >
                      {page.label}
                    </Link>
                  </Button>
                );
              }

              return (
                <ClickAwayListener key={page.path} onClickAway={() => setDropdownOpen(null)}>
                  <Box
                    sx={{ position: "relative" }}
                    onMouseEnter={() => setDropdownOpen(page.path)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <Button color='inherit'
                    sx={{
                            color: "text.primar",
                            "&:hover": { 
                                color: "#ce967e", transform: "scale(1.05)",textDecoration: "none"
                            },transition: "0.3s" }}>
                      {page.label} <KeyboardArrowDownIcon />
                    </Button>

                    {dropdownOpen === page.path && isMega && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "40px",
                          bgcolor: "white",
                          color: "black",
                          p: 2,
                          boxShadow: 3,
                          display: "grid",
                          gridTemplateColumns: `repeat(${page.megaMenu.length}, 1fr)`,
                          gap: 2,
                          zIndex: 20,
                        }}
                      >
                        {page.megaMenu.map((col) => (
                          <Box key={col.title}>
                            <Typography fontWeight={700}>{col.title}</Typography>
                            {col.items.map((item) => (
                              <MenuItem key={item}>{item}</MenuItem>
                            ))}
                          </Box>
                        ))}
                      </Box>
                    )}

                    {dropdownOpen === page.path && page.options && !isMega && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "40px",
                          bgcolor: "white",
                          color: "black",
                          p: 1,
                          boxShadow: 3,
                          zIndex: 20,
                        }}
                      >
                        {page.options.map((opt) => (
                          <MenuItem key={opt}>{opt}</MenuItem>
                        ))}
                      </Box>
                    )}
                  </Box>
                </ClickAwayListener>
              );
            })}
          </Box>

          {/* Right Icons */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: { xs: 120, md: "auto" },
            }}
          >
            <Box>
      {/* Search Icon */}
      <IconButton onClick={() => setOpenSearch(true)}>
        <SearchIcon />
      </IconButton>

      {/* فتح نافذة السيرش */}
      {openSearch && (
        <Box
          onClick={() => setOpenSearch(false)}
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.6)",
            zIndex: 1300
          }}
        >
          <Slide direction="down" in={openSearch} mountOnEnter unmountOnExit>
            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                bgcolor: "#fff",
                height: 260,
                px: { xs: 3, md: 10 },
                pt: 6,
                position: "relative"
              }}
            >
              {/* Close */}
              <IconButton
                onClick={() => setOpenSearch(false)}
                sx={{ position: "absolute", top: 20, right: 20 }}
              >
                <CloseIcon />
              </IconButton>

              {/* Title */}
              <Typography
                variant="h4"
                fontWeight={600}
                textAlign="center"
                mb={4}
              >
                What are you looking for?
              </Typography>

              {/* Search Input */}
              <Box
                sx={{
                  maxWidth: 700,
                  mx: "auto",
                  borderBottom: "1px solid #ddd",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <InputBase
                
                  autoFocus
                  placeholder="Search"
                  fullWidth
                  sx={{ py: 1.5, fontSize: 18 }}
                />
                <SearchIcon sx={{ color: "text.secondary" }} onClick={() => setOpenSearch(false)}/>
              </Box>
            </Box>
          </Slide>
        </Box>
      )}
    </Box>

            {/* Account */}
            <Box sx={{ width: { xs: "33.33%", md: "auto" }, textAlign: "center" }}>
              <Tooltip title="Account">
                <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)}>
                  <PersonIcon />
                </IconButton>
              </Tooltip>
            </Box>

            {/* Favorite */}
            <Box sx={{ width: { xs: "33.33%", md: "auto" }, textAlign: "center" }}>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>

            {/* Cart */}
            {token && (
              <Box sx={{ width: { xs: "33.33%", md: "auto" }, textAlign: "center" }}>
                <IconButton component={RouterLink} to="/cart">
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            )}

            {/* Language */}
            <Box sx={{ width: { xs: "33.33%", md: "auto" }, textAlign: "center" }}>
              <Button onClick={toggleLanguage} sx={{ color: "text.primary" }}>
                {i18n.language === "ar" ? "EN" : "ع"}
              </Button>
            </Box>

            {/* Theme */}
            <Box sx={{ width: { xs: "33.33%", md: "auto" }, textAlign: "center" }}>
              <Button onClick={toggleTheme} sx={{ color: "text.primary" }}>
                {mode === "dark" ? (
                  <>
                    {t("Light")} <LightModeIcon fontSize="small" />
                  </>
                ) : (
                  <>
                    {t("Dark")} <NightlightIcon fontSize="small" />
                  </>
                )}
              </Button>
            </Box>

            {/* Menu */}
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {!token ? (
                <>
                  <MenuItem component={RouterLink} to="/log in">
                    {t("Log in")}
                  </MenuItem>
                  <MenuItem component={RouterLink} to="/register">
                    {t("Register")}
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem component={RouterLink} to="/profile">
                    {t("Profile")}
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    {t("Log out")}
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useAuthStore from "../../stor/authStore";
import useThemeStore from "../../stor/useThemeStore";

export default function Navbar() {
  const { t ,i18n} = useTranslation();
  const navigate = useNavigate();

  const { token, user, logout } = useAuthStore((state) => state);
  const toggleLanguage =()=>{
    const newLng = i18n.language === 'ar'?'en':'ar';
    i18n.changeLanguage(newLng);
  }

  const pages = [
    { label: t("Home"), path: "/home" },
    {
      label: t("Shop"),
      path: "/shop",
      megaMenu: [
        { title: "col1", items: ["1", "2", "3"] },
        { title: "col2", items: ["1", "2", "3"] },
        { title: "col3", items: ["1", "2", "3"] },
      ],
    },
    {
      label: t("Collection"),
      path: "/collection",
      options: ["1", "2", "3"],
    },
    { label: t("Necklaces"), path: "/necklaces" },
    { label: t("Contact"), path: "/contact" },
    {
      label: t("More"),
      path: "/more",
      options: [t("Blog")],
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleLogout = () => {
    logout();
    navigate("/log in");
  };
  const {mode,toggleTheme}=useThemeStore();

  return (
    <AppBar position="static">
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
            <IconButton color="inherit" onClick={(e) => setAnchorElNav(e.currentTarget)}>
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
                    color="inherit"
                  >
                    {page.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            <Link component={RouterLink} to="/home" underline="none" color="inherit">
              JUBILEE
            </Link>
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {t("Welcome")} {user?.name}
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {pages.map((page) => {
              const isMega = Boolean(page.megaMenu);
              const hasDropdown = Boolean(page.options || isMega);

              if (!hasDropdown) {
                return (
                  <Button key={page.path} sx={{ color: "white" }}>
                    <Link
                      component={RouterLink}
                      to={page.path}
                      underline="none"
                      color="inherit"
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
                    <Button sx={{ color: "white" }}>
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
          <Box>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>

            <Tooltip title="Account">
              <IconButton color="inherit" onClick={(e) => setAnchorElUser(e.currentTarget)}>
                <PersonIcon />
              </IconButton>
            </Tooltip>

            <IconButton color="inherit">
              <FavoriteBorderIcon />
            </IconButton>

            {token && (
              <IconButton color="inherit">
                <Link component={RouterLink} to="/cart" underline="none" color="inherit">
                  <ShoppingCartIcon />
                </Link>
              </IconButton>
            )}
            <Button color="inherit"
             onClick={toggleLanguage}
            >
              {i18n.language === 'ar' ? 'EN' :'ع'}
            </Button>
            <Button color="inherit"
             onClick={toggleTheme}
            >
              {mode === 'dark' ? t('Light') : t('Dark')}
            </Button>

            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {!token && (
                <>
                  <MenuItem onClick={() => setAnchorElUser(null)}>
                    <Link component={RouterLink} to="/log in" underline="none" color="inherit">
                      {t("Log in")}
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorElUser(null)}>
                    <Link component={RouterLink} to="/register" underline="none" color="inherit">
                      {t("Register")}
                    </Link>
                  </MenuItem>
                </>
              )}

              {token && (
                <MenuItem onClick={handleLogout}>
                  <Link component={RouterLink} to="/log in" underline="none" color="inherit">
                    {t("Log out")}
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

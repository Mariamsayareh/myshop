import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as Links } from 'react-router-dom';


const pages = [
  { name: 'Home' },
  { 
    name: 'Shop', 
    megaMenu: [
      { title: 'col1', items: ['1', '2', '3'] },
      { title: 'col2', items: ['1', '2', '3'] },
      { title: 'col2', items: ['1', '2', '3'] },
    ] 
  },
  { name: 'Collection', options: ['1', '2', '3'] },
  { name: 'Necklaces'},
  { name: 'Contact' },
  { name: 'More', options: ['Blog'] },
];

const settings = ['Log in', 'Register', 'Compare'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [dropdownOpen, setDropdownOpen] = React.useState(null);
  const [dropdownPinned, setDropdownPinned] = React.useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  }
  const handleOpenUserMenu = (e) => {
    console.log(e.currentTarget)
    setAnchorElUser(e.currentTarget);
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: { xs: 'flex', md: 'flex' }, justifyContent: {md: 'space-between' }, alignItems: {md: 'center' },  padding:"25px"}}>


          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            sx={{ mr: 4,flexGrow:{ xs:1 ,md:0}, display: { md: 'flex' }, fontWeight: 700 }}
          >
            <Link component={Links} to='/home' underline='none' color='inherit'>JUBILEE</Link>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{  display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => {
              const isMega = page.megaMenu && page.megaMenu.length > 0;
              const hasDropdown = page.options || isMega;

              if (!hasDropdown) {
                return (
                  <Button key={page.name} sx={{ color: 'white' }}>
                   
                    <Link component={Links} to={page.name === 'home' ? '/home' : `/${page.name.toLowerCase()}`} underline='none' color='inherit'>{page.name}</Link>
                  </Button>
                );
              }

              return (
                <ClickAwayListener
                  key={page.name}
                  onClickAway={() => { if (dropdownPinned !== page.name) setDropdownOpen(null); }}
                >
                  <Box
                    sx={{ position: 'relative', display: 'inline-block' }}
                    onMouseEnter={() => { if (!dropdownPinned) setDropdownOpen(page.name); }}
                    onMouseLeave={() => { if (!dropdownPinned) setDropdownOpen(null); }}
                  >
                    <Button
                      key={page.name}
                      component={Links}
                      to={page.name === 'home' ? '/home' : `/${page.name.toLowerCase()}`}
                      sx={{ color: 'white' }}
                    >
                      {page.name} <KeyboardArrowDownIcon />
                    </Button>


                    {/* Mega Menu */}
                    {dropdownOpen === page.name && isMega && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '40px',
                          left: 0,
                          bgcolor: 'white',
                          color: 'black',
                          boxShadow: 3,
                          borderRadius: 1,
                          zIndex: 20,
                          p: 2,
                          minWidth: 400,
                          display: 'grid',
                          gridTemplateColumns: `repeat(${page.megaMenu.length}, 1fr)`,
                          gap: 2,
                        }}
                      >
                        {page.megaMenu.map((col) => (
                          <Box key={col.title}>
                            <Typography sx={{ fontWeight: 700, mb: 1 }}>{col.title}</Typography>
                            {col.items.map((item) => (
                              <MenuItem
                                key={item}
                                onClick={() => { setDropdownPinned(null); setDropdownOpen(null); }}
                              >
                                {item}
                              </MenuItem>
                            ))}
                          </Box>
                        ))}
                      </Box>
                    )}

                    {/* Dropdown عادي */}
                    {dropdownOpen === page.name && page.options && !isMega && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '40px',
                          left: 0,
                          bgcolor: 'white',
                          color: 'black',
                          boxShadow: 3,
                          borderRadius: 1,
                          minWidth: 150,
                          p: 1,
                          zIndex: 20,
                        }}
                      >
                        {page.options.map((opt) => (
                          <MenuItem
                            key={opt}
                            onClick={() => { setDropdownPinned(null); setDropdownOpen(null); }}
                          >
                            {opt}
                          </MenuItem>
                        ))}
                      </Box>
                    )}
                  </Box>
                </ClickAwayListener>
              );
            })}
          </Box>

          {/* Right Icons */}
          <Box sx={{}}>
            <IconButton color="inherit"><SearchIcon /></IconButton>
            <Tooltip title="Account">
              <IconButton color="inherit" onClick={handleOpenUserMenu}>
                <PersonIcon />
              </IconButton>
            </Tooltip>
            <IconButton color="inherit"><FavoriteBorderIcon /></IconButton>
            <IconButton color="inherit"><ShoppingCartIcon /></IconButton>

            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Link component={Links} to={setting === 'register' ? '/register' : `/${setting.toLowerCase()}`} underline='none' color='inherit'>{setting}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

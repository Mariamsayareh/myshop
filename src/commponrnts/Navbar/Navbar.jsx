import  react ,{useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../stor/authStore';

const pages = [
  { name: 'Home' },
  {
    name: 'Shop',
    megaMenu: [
      { title: 'col1', items: ['1', '2', '3'] },
      { title: 'col2', items: ['1', '2', '3'] },
      { title: 'col3', items: ['1', '2', '3'] },
    ],
  },
  { name: 'Collection', options: ['1', '2', '3'] },
  { name: 'Necklaces' },
  { name: 'Contact' },
  { name: 'More', options: ['Blog'] },
];

export default function Navbar() {
  
  const {token} = useAuthStore(state=>state);
  const logout=useAuthStore(state=>state.logout);
  const user=useAuthStore(state=>state.user);
  console.log(`ddd: ${token} `);
  const navigate=useNavigate('');
  const handleLogout=()=>{
    logout();
    navigate('/log in');
  }
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownPinned, setDropdownPinned] =useState(null);

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '25px',
          }}
        >
          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            <Link component={Links} to="/home" underline="none" color="inherit">
              JUBILEE
            </Link>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Welcome {user?.name}
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => {
              const isMega = page.megaMenu?.length > 0;
              const hasDropdown = page.options || isMega;

              if (!hasDropdown) {
                return (
                  <Button key={page.name} sx={{ color: 'white' }}>
                    <Link
                      component={Links}
                      to={`/${page.name.toLowerCase()}`}
                      underline="none"
                      color="inherit"
                    >
                      {page.name}
                    </Link>
                  </Button>
                );
              }

              return (
                <ClickAwayListener
                  key={page.name}
                  onClickAway={() =>
                    dropdownPinned !== page.name && setDropdownOpen(null)
                  }
                >
                  <Box
                    sx={{ position: 'relative' }}
                    onMouseEnter={() =>
                      !dropdownPinned && setDropdownOpen(page.name)
                    }
                    onMouseLeave={() =>
                      !dropdownPinned && setDropdownOpen(null)
                    }
                  >
                    <Button sx={{ color: 'white' }}>
                      {page.name} <KeyboardArrowDownIcon />
                    </Button>

                    {dropdownOpen === page.name && isMega && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '40px',
                          bgcolor: 'white',
                          color: 'black',
                          p: 2,
                          boxShadow: 3,
                          display: 'grid',
                          gridTemplateColumns: `repeat(${page.megaMenu.length}, 1fr)`,
                          gap: 2,
                          zIndex: 20,
                        }}
                      >
                        {page.megaMenu.map((col) => (
                          <Box key={col.title}>
                            <Typography fontWeight={700}>
                              {col.title}
                            </Typography>
                            {col.items.map((item) => (
                              <MenuItem key={item}>{item}</MenuItem>
                            ))}
                          </Box>
                        ))}
                      </Box>
                    )}

                    {dropdownOpen === page.name && page.options && !isMega && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '40px',
                          bgcolor: 'white',
                          color: 'black',
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
              <IconButton color="inherit" onClick={handleOpenUserMenu}>
                <PersonIcon />
              </IconButton>
            </Tooltip>

            <IconButton color="inherit">
              <FavoriteBorderIcon />
            </IconButton>

            {token && (
              <IconButton color="inherit">
                <Link
                      component={Links}
                      to="/cart"
                      underline="none"
                      color="inherit"
                    >
                      <ShoppingCartIcon />
                    </Link>
              </IconButton>
            )}

            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!token && (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      component={Links}
                      to="/log in"
                      underline="none"
                      color="inherit"
                    >
                      Log in
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      component={Links}
                      to="/register"
                      underline="none"
                      color="inherit"
                    >
                      Register
                    </Link>
                  </MenuItem>
                </>
              )}

              {token && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link
                    component={Links}
                    to="/log in"
                    underline="none"
                    color="inherit"
                    onClick={handleLogout}
                  >
                    Log out
                  </Link>
                  
                <Tooltip title="Account">
                  <Link
                    component={Links}
                    to="/log in"
                    underline="none"
                    color="inherit"
                  >
                     <PersonIcon />
                  </Link>
                 
                </Tooltip>


                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

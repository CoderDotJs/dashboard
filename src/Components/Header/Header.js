import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useFirebase from '../../firebase/useFirebase';
import { NavLink } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from './logo.png';
import { InputBase} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F7F6F4',
    '&:hover': {
      backgroundColor: '#F7F6F4',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

    const { user, logOut, googleSignIn } = useFirebase();

    const { displayName, photoURL } = user;


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };


    return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{backgroundColor: 'white', color: 'black'}}>
        <Toolbar disableGutters sx={{display: {xs: 'flex', justifyContent: 'center', alignItems: 'center'}}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={logo} alt="logo"  width="120px"/>
          </Typography>

          { /*Responsive menu  */}

           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>


            

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Course"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography as={NavLink} to="products" textAlign="center" >Products</Typography>
                  <Typography as={NavLink} to="blog" textAlign="center" >Blog</Typography>
                </MenuItem>
            </Menu>
          </Box>

          {/* Responsive logo  */}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={logo} alt="logo"  width="120px" style={{display: 'block', margin: '0 auto'}}/>
          </Typography>



          {/* Nav Menu Element  */}

          <Box sx={{ flexGrow: 1, display: { md: 'flex' }, flexDirection: 'row', alignItems: 'center',margin: '0 0 0 40px'}}>

              <Button variant="contained" id="demo-simple-select-label" 
              endIcon={<KeyboardArrowDownIcon />} sx={{
                display: 
                { 
                  xs: 'none',
                  md: 'flex'
                }
              }} 
              >
                Explore
              </Button>

               {/* Search Element */}

           <Search sx={{
                display: 
                { 
                  xs: 'none', 
                  md: 'flex'
                }
              }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Course"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

           </Box> 
          {/* User Menu Element  */}

          {
            user.email 
            ?
            <Box sx={{ flexGrow: 0, alignItems: 'center', display: {xs: 'flex',md:'flex'} }}>
                <IconButton color="primary" sx={{margin: '0 10px 0 0', display: {xs: 'none', md: 'block'}}} aria-label="add to shopping cart">
                  <NotificationsNoneIcon sx={{color: 'black'}} />
                </IconButton>
            <Tooltip title="Open settings" sx={{display: {xs: 'none', md: 'block'}}}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt={displayName} src={photoURL} />
              </IconButton>
            </Tooltip>
            <Box sx={{ flexDirection: 'column', alignItems: 'start', m: '0 0 0  10px', display: {xs: 'none', md: 'block'}}}>
              <p style={{margin: '0', fontWeight: '500'}}>{displayName}
              <IconButton color="primary" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <KeyboardArrowDownIcon />
              </IconButton>
              
              </p>
              <p style={{margin: '0'}}>93873733</p>
            </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={logOut}>Logout</Typography>
              </MenuItem>
                
            </Menu>
          </Box>
          :
          <Button variant='contained' onClick={googleSignIn}>Login</Button> 
          }
        </Toolbar>
      </Container>
    </AppBar>
    );
};

export default Header;
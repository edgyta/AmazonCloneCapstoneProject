import React from 'react';
import { AppBar, Toolbar, InputBase, Button, Typography, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { makeStyles } from '@material-ui/core/styles';
import amazonLogo from './images/amazonLogo.png';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  appbar: {
    background: '#131921',
  },
  toolbar: {
    margin: 0,
    paddingLeft: '1rem',
  },
  logo: {
    width: '6.7rem',
    height: '1.9rem',
    marginTop: '0.2rem',
  },
  location: {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '0.5rem 0.25rem',
  '&:hover': {
    outline: '1px solid',
  },
},
icon: {
  marginRight: '0.1rem',
  display: 'inline-block',
  verticalAlign: 'middle', // Align the icon vertically in the middle
},
  text: {
    fontSize: '0.7rem',
    lineHeight: '1rem',  // Adjusted line height
    cursor: 'pointer',
    color: '#CCCCCC',
  },
  text2: {
  fontSize: '0.9rem',
  fontWeight: 500,
  cursor: 'pointer',
  display: 'inline-block', // Display the text inline
  marginLeft: '0.2rem', // Add some margin between the icon and text
},
  search: {
    display: 'flex',
    alignItems: 'center',
  },
  searchbar: {
    width: '49vw',
    marginLeft: '1rem',
    height: '2.5rem',
    borderRadius: '0.3rem',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: 'none',
    fontSize: '1rem',
    outline: 'none',
    '&:focus': {
      outline: '1px solid #FEBD69',
    },
    backgroundColor: 'white', 
    padding: '0 0.5rem',  
  },
  searchBtn: {
    width: '3rem',
    minWidth: '2rem',
    height: '2.7rem',
    borderRadius: '0.3rem',
    border: 'none',
    background: '#FEBD69',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    '&:hover': {
      background: '#FEBD69',
    },
  },
  searchIcon: {
    width: '2rem',
    height: '2rem',
  },
  headerButton: {
    margin: '0.2rem 0.4rem 0 0.5rem',
    padding: '0.5rem 0.25rem',
    '&:hover': {
      outline: '1px solid',
    },
  },
  flagDiv: {
    display: 'flex',
    alignItems: 'end',
    marginTop: '0.4rem',
    justifyContent: 'end',
  },
  downIcon: {
    fontSize: '0.7rem',
    marginLeft: '0.3rem',
  },
  cart: {
    fontSize: '0.9rem',
    textDecoration: 'none',
    color: 'white',
    marginLeft: '0.8rem',
    display: 'flex',
    alignItems: 'end',
  },
  header_cart: {
    display: 'flex',
    textAlign: 'end',
    justifyContent: 'end',
    position: 'relative',
    marginRight: '0.3rem',
  },
  cartItems: {
    marginTop: '0.5rem',
    position: 'absolute',
    width: '1rem',
    height: '1rem',
    top: '-1.2rem',
    borderRadius: '50%',
    background: 'red',
    color: '#fff',
    boxSizing: 'border-box',
    fontSize: '0.7rem',
    display: 'flex',
    justifyContent: 'center',
  },
  cartIcon: {
    marginTop: '0.3rem',
    fontSize: '1.9rem',
  },
  linkBtn: {
    textDecoration: 'none',
    color: 'white',
  },
});

const Header = () => {
  const classes = useStyles();
 const cartCount = useSelector((state) => state.cart.count);

 

  return (
    <AppBar position="sticky" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <img src={amazonLogo} alt="Amazon Logo" className={classes.logo} />
        </Link>

        
       <div className={classes.headerButton}>
          <Typography className={classes.text} style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}>Hello,</Typography>
          <Typography className={classes.text2} style={{ verticalAlign: 'middle' }}>
          <LocationOnOutlinedIcon className={classes.icon} style={{ verticalAlign: 'middle' }} />
              Select your address
          </Typography>
       </div>


        <div className={classes.search}>
          <InputBase placeholder="Search..." className={classes.searchbar} />
          <Button className={classes.searchBtn}>
            <SearchIcon className={classes.searchIcon} />
          </Button>
        </div>

        <div className={classes.headerButton}>
          <Typography className={classes.text}>Hello, Guest</Typography>
           <Typography className={classes.text2}>
            <Link to="/login" className={classes.linkBtn}>
              Sign In
            </Link>
          </Typography>
        </div>

        <div className={classes.headerButton}>
          <Typography className={classes.text}>Returns</Typography>
          <Typography className={classes.text2}>& Orders</Typography>
        </div>

        <div className={classes.header_cart}>
          <Link to="/checkout" className={classes.linkBtn}>
            <ShoppingCartOutlinedIcon className={classes.cartIcon} />
            <span className={classes.cartItems}>{cartCount}</span>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

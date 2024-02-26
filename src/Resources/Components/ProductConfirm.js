// ProductConfirmation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Paper } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100vh',
    backgroundColor: '#F0F0F0', 
    padding: '2rem 2rem 0rem 2rem',
  },
  link:{
    textDecoration: 'none',
  },
  confirmationContainer: {
    flex: '0 0 auto', 
    width: '60%',
    padding: '1rem',
  },
  productInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  productImage: {
    height: '60vh',
    width: '22vw',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  productDetails: {
    marginLeft: '2rem',
    textAlign: 'left',
  },
  confirmationText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  checkCircle: {
    color: 'green',
    fontSize: '2rem',
    marginRight: '0.5rem',
  },
  cartInfoContainer: {
    flex: '0 0 auto', 
    width: '35%',
    marginLeft: '2rem',
  },
  cartInfoContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'white', 
    borderRadius: '0.5rem',
  },
  cartTotal: {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1rem',
  },
  button: {
    background: '#FFD814',
    height: '3.5rem',
    width: '8rem',
    fontSize: '1rem',
    textTransform: 'none',
    borderRadius: '0.5rem',
    marginBottom: '0.5rem',
    '&:hover': {
      background: '#F7CA00',
    },
  },
  seeMoreLink: {
  color: 'teal',
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
},
});

const ProductConfirmation = () => {
  const classes = useStyles();
  const { id } = useParams();
  const queryParams = new URLSearchParams(window.location.search);
  const quantity = queryParams.get("quantity");
  const products = useProducts([[id]]);
  const product = products && products.length > 0 ? products[0] : null;
  const navigate = useNavigate();

  if (!product) {
    return <div>Loading...</div>;
  }

  const subtotal = product.price * quantity;
   const handleGoToCart = () => {
    navigate('/checkout');
  };
  

  return (
    <div className={classes.main}>
      <Paper className={classes.confirmationContainer}>
        <div className={classes.productInfoContainer}>
          <div
            className={classes.productImage}
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
          <div className={classes.productDetails}>
            <Typography className={classes.confirmationText}>
              <CheckCircle className={classes.checkCircle} />
              Added to Cart
            </Typography>
            <Typography variant="h6">{product.title}</Typography>
            <Typography>Quantity: {quantity}</Typography>
          </div>
        </div>
      </Paper>
      <Paper className={classes.cartInfoContainer}>
        <div className={classes.cartInfoContent}>
          <Typography className={classes.cartTotal}>Cart Subtotal: ${subtotal.toFixed(2)}</Typography>
          <div className={classes.buttonsContainer}>
            <Button variant="contained"  className={classes.button} >
              Proceed to Buy
            </Button>
            <Link to="/checkout" style={{ textDecoration: 'none' }}>
              <Button variant="contained" onClick={handleGoToCart} className={classes.button}>
                  Go to Cart
              </Button>
            </Link>
          </div>
        </div>
      </Paper>
       <Typography className={classes.seeMoreLink}>
        <Link to="/" className={classes.link}>
          {'< See More Products'}
        </Link>
      </Typography>
    </div>
  );
};

export default ProductConfirmation;

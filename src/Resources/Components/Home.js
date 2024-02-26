// Home.js
import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useProducts from '../hooks/useProducts';
import { Link, useNavigate } from 'react-router-dom';
import amazonBanner from './images/amazonBanner.jpg';

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${amazonBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw 70vh',
    height: '70vh',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'default', 
  },
  main: {
    paddingBottom: '2rem',
  },
  productBox: {
    height: '65vh',
    width: '23vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: 'none',
    marginTop: '2rem',
    borderRadius: '1rem',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    '&:hover $quickLookLink': {
      visibility: 'visible',
    },
  },
  title: {
    height: '2rem',
    width: '90%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginTop: '0.5rem',
  },
  image: {
    height: '70%',
    width: '100%',
    marginTop: '0.5rem',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    transition: 'opacity 0.3s',
    position: 'relative',
    '&:hover': {
      opacity: 0.7,
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    background: 'transparent',
  },
  addToCart: {
    background: '#FEBD69',
    height: '2rem',
    width: '8rem',
    borderRadius: '0.5rem',
    marginTop: '0.5rem',
    marginLeft: 'auto', 
    marginRight: 'auto',
    '&:hover': {
      background: '#FEBD69',
    },
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  quickLookLink: {
    textDecoration: 'none',
    color: 'black',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    whiteSpace: 'nowrap',  
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginTop: '1rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    transition: 'opacity 0.3s',
  },
  productBoxHover: {
     position: 'relative',
    '&:hover $image': {
      opacity: 0.7,
    },
    '&:hover $quickLookLink': {
      opacity: 1,
    },
  },
    quickLookLinkContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   visibility: 'hidden',
    transition: 'visibility 0.3s',
  },
    priceAndRating: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },

  price: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },

  starRating: {
    display: 'flex',
    alignItems: 'center',
  },
});

const Home = ({ onShowProduct }) => {
  const classes = useStyles();
  const [productIds, setProductIds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const products = useProducts(productIds);
  const navigate = useNavigate();

   const handleQuickLookClick = (product) => {
    onShowProduct(product);
    navigate(`/show-product/${product.id}`);
  };

const handleShowNowClick = (product) => {
  console.log('Product ID:', product.id);
  navigate(`/product/${product.id}`);
};
 const renderStars = (rate) => {
  const roundedStars = rate % 1 >= 0.5 ? Math.ceil(rate) : Math.floor(rate);
  return (
    <span role="img" aria-label="star">
      {'⭐'.repeat(roundedStars)}
    </span>
  );
};

   return (
    <div className={classes.main}>
      <div className={classes.banner}></div>

      <Grid container spacing={3} justify="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={3} className={`${classes.gridItem} ${classes.productBoxHover}`}>
            {product && (
              <Paper elevation={3} className={classes.productBox}>
                <Typography variant="h6" className={classes.title}>
                  {product.title}
                </Typography>
                <div className={classes.image} style={{ backgroundImage: `url(${product.image})` }} />
                <div className={classes.priceAndRating}>
                  <Typography className={classes.price}>
                    ${product.price.toFixed(2)}
                  </Typography>
                  <div className={classes.starRating}>
                    {renderStars(product.rating.rate)}
                    <span className={classes.count}>({product.rating.count} reviews)</span>
                  </div>
                </div>
                <div className={classes.quickLookLinkContainer}>
                  <Link to={`/show-product/${product.id}`}
                    className={classes.quickLookLink}
                    onClick={() => handleQuickLookClick(product)}
                  >
                    Quick Look
                  </Link>
                </div>
                <div className={classes.footer}>
                  <Button className={classes.addToCart} onClick={() => handleShowNowClick(product)}>
                    Show Now
                  </Button>
                </div>
              </Paper>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
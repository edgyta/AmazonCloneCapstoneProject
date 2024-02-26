import React from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
   main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '2rem',
  },
  productBox: {
    width: '50%',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0px 0px 10px 0px grey',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '1rem',
  },
  description: {
    marginBottom: '1rem',
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#007185',
  },
});

const ShowProduct = ({ product }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={`${classes.main} show-product-main`} onClick={() => navigate('/')}>
      {product && (
        <Paper elevation={3} className={classes.productBox}>
          <Typography variant="h4" className={classes.title}>
            {product.title}
          </Typography>
          <img src={product.image} alt={product.title} className={classes.image} />
          <Typography variant="body1" className={classes.description}>
            {product.description}
          </Typography>
          <Typography variant="h6" className={classes.price}>
            Price: ₹{product.price.toFixed(2)}
          </Typography>
        </Paper>
      )}
    </div>
  );
};

export default ShowProduct;
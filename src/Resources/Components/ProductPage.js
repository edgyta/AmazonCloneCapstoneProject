// ProductPage.js
import React from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useProducts from '../hooks/useProducts';
import { Button, Divider, Select, MenuItem, Typography } from '@material-ui/core';
import {
  MonetizationOn,
  AssignmentReturn,
  LocalShipping,
  Security,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import amazonAddBanner4 from './images/amazonAddBanner4.jpg';
import { incrementCartCount } from '../Reducers/CartItemsReducer';
import { useDispatch } from 'react-redux';
import ProductConfirmation from './ProductConfirm';
import { addNewProductToCart, updateProduct } from '../Reducers/CartItemsReducer';
import { useSelector } from 'react-redux';
const renderStars = (rating) => {
  const roundedRating = Math.round(rating * 2) / 2; 
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<span key={i}>⭐</span>);
    } else {
      stars.push(<span key={i}></span>); 
    }
  }

  return stars;
};

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
  },
  addBanner: {
    backgroundImage: `url(${amazonAddBanner4})`,
    backgroundSize: '70vw 10vh',
    backgroundRepeat: 'no-repeat',
    height: '10vh',
    marginBottom: '3rem',
  },
  link: {
    textDecoration: 'none',
  },
  productInfoContainer: {
    display: 'flex',
    marginTop: '2rem',
  },
  image: {
  height: '60vh',
  width: '22vw',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
},
  title: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginRight: '2rem',
  },
  descriptionDiv: {
    marginLeft: '2rem',
    width: '60vw',
  },
  description: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  category: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  count: {
    marginLeft: '0.5rem',
    color: '#007185',
    fontSize: '1rem',
  },
  rateCategory: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
  offersDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
  },
  offerIcon: {
    marginRight: '1rem',
    fontSize: '2rem',
  },
  price: {
    fontSize: '1.7rem',
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
  },
  taxes: {
    fontSize: '0.9rem',
    margin: '0 0 0.5rem 0',
  },
  symbols: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1rem 0',
  },
  symbol: {
    fontSize: '2rem',
  },
  symbolText: {
    fontSize: '1rem',
  },
  divider: {
    margin: '0.5rem 0',
    width: '100%',
  },
  aboutItem: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '1rem 0',
  },
  bulletPoints: {
    paddingLeft: '2rem',
    fontSize: '1.2rem',
  },
  quantityDiv: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
  },
  quantityText: {
    marginRight: '1rem',
  },
  select: {
    width: '6rem',
    height: '2rem',
    outline: 'none',
    cursor: 'pointer',
  },
  addToCart: {
    background: '#FFD814',
    height: '2rem',
    width: '8rem',
    fontSize: '1rem',
    textTransform: 'none',
    borderRadius: '0.5rem',
    marginLeft: '2rem',
    '&:hover': {
      background: '#F7CA00',
    },
  },
});

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const classes = useStyles();
  const products = useProducts([id]);
  const product = products[0];
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
   const cartItems = useSelector(state => state.cart.items);
   const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      const newQuantity = existingProduct.quantity + quantity;
      dispatch(updateProduct({ id: product.id, quantity: newQuantity }));
    } else {
      // If the product is not in the cart, add it as a new product
      dispatch(addNewProductToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: quantity,
      }));
    }

    // Navigate to the ProductConfirmation page with the selected quantity
    navigate(`/product-confirmation/${product.id}?quantity=${quantity}`);
  };

  return (
    <div className={classes.main}>
      <div className={classes.addBanner}></div>
      <Link to={'/'}className={classes.link} >
        {'< Back to Products'}
      </Link>
      <div className={classes.productInfoContainer}>
        <div className={classes.image} style={{ backgroundImage: `url(${product.image})` }} />
        <div className={classes.descriptionDiv}>
          <Typography className={classes.title}>{product.title}</Typography>
          <div className={classes.rating}>
            {renderStars(product.rating.rate)}
            <span className={classes.count}>({product.rating.count} reviews)</span>
          </div>
          <Typography className={classes.category}>Category: {product.category}</Typography>
          <Divider className={classes.divider} />
          <div className={classes.rateCategory}>
            <div className={classes.price}>
              <Typography variant="inherit" className={classes.rupee}>
                Price: ${product.price.toFixed(2)}
              </Typography>
            </div>
            <Typography className={classes.taxes}>* Inclusive of all Taxes</Typography>
          </div>
          <Divider className={classes.divider} />
          <Typography className={classes.description}>{product.description}</Typography>
          <Divider className={classes.divider} />
          <div className={classes.offersDiv}>
            <div className={classes.symbols}>
              <MonetizationOn className={classes.symbol} />
              <Typography className={classes.symbolText}>Cash On Delivery</Typography>
            </div>
            <div className={classes.symbols}>
              <AssignmentReturn className={classes.symbol} />
              <Typography className={classes.symbolText}>Not Returnable</Typography>
            </div>
            <div className={classes.symbols}>
              <LocalShipping className={classes.symbol} />
              <Typography className={classes.symbolText}>Amazon Delivered</Typography>
            </div>
            <div className={classes.symbols}>
              <Security className={classes.symbol} />
              <Typography className={classes.symbolText}>1 Year Warranty</Typography>
            </div>
          </div>
          <Divider className={classes.divider} />
          <Typography className={classes.aboutItem}>About this item</Typography>
          <ul className={classes.bulletPoints}>
            <li>Satisfaction Guaranteed</li>
            <li>Return or exchange any order within 30 days</li>
            <li>Designed and sold by Hafeez centre in the United States</li>
          </ul>
          <Divider className={classes.divider} />
          <div className={classes.quantityDiv}>
            <Typography className={classes.quantityText}>Quantity:</Typography>
            <Select className={classes.select} defaultValue={1}  onChange={(e) => setQuantity(e.target.value)}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
            </Select>
            <Button className={classes.addToCart} onClick={handleAddToCart}>Add to Cart</Button>
          </div>
          {addedToCart && <ProductConfirmation product={product} quantity={quantity} />}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

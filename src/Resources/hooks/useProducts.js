// useProducts.js
import { useEffect, useState } from 'react';

const useProducts = (productIds) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await Promise.all(
        productIds.map(async (productId) => {
          try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            if (!response.ok) {
              throw new Error('Failed to fetch the product');
            }
            const data = await response.json();
            return data;
          } catch (err) {
            console.error(`Error fetching product ${productId}: ${err.message}`);
            return null;
          }
        })
      );

      console.log('Fetched products:', productsData);
      setProducts(productsData.filter((product) => product !== null));
    };

    console.log('Product IDs in useProducts:', productIds);
    fetchProducts();
  }, [productIds]);

  return products;
};

export default useProducts;

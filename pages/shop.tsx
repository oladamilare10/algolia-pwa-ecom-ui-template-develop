import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/Product';
import styles from '../styles/Shop.module.css';

// Sample data - replace with actual API call later
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'OTK Racing Kart',
    description: 'Professional racing kart for competitive racing',
    price: 3499.99,
    imageUrl: '/products/kart-1.jpg',
    category: 'Karts',
    stock: 5,
    brand: 'OTK'
  },
  {
    id: '2',
    name: 'Racing Helmet',
    description: 'Professional grade racing helmet',
    price: 599.99,
    imageUrl: '/products/helmet-1.jpg',
    category: 'Safety',
    stock: 10,
    brand: 'Bell'
  },
  {
    id: '3',
    name: 'Racing Suit',
    description: 'Professional karting suit',
    price: 299.99,
    imageUrl: '/products/suit-1.jpg',
    category: 'Apparel',
    stock: 15,
    brand: 'Alpinestars'
  },
  // Add more sample products as needed
];

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with sample data
    setTimeout(() => {
      setProducts(SAMPLE_PRODUCTS);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        Loading...
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shop</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 
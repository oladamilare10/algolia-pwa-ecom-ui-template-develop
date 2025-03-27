import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/ProductCard.module.css';
import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            alt={product.name}
            className={styles.image}
            height={300}
            src={product.imageUrl}
            width={300}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
} 
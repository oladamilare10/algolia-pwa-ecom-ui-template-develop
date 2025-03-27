import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/Product';
import styles from '../styles/ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
            className={styles.image}
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
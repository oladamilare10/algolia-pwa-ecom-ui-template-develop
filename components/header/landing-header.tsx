import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './landing-header.module.css';
import Image from 'next/image';

export default function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={150} 
            height={30} 
            className={styles.logo}
          />
        </Link>
        
        <button 
          className={styles.menuButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {isMenuOpen && (
          <div className={styles.backdrop} onClick={closeMenu} />
        )}

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileHeader}>
            <Link href="/" className={styles.logoLink} onClick={closeMenu}>
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={150} 
                height={30}
                className={styles.logo}
              />
            </Link>
            <button 
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className={styles.navLinks}>
            <Link href="/catalog" className={styles.link} onClick={closeMenu}>
              Shop
            </Link>
            <Link href="/about" className={styles.link} onClick={closeMenu}>
              About
            </Link>
            <Link href="/contact" className={styles.link} onClick={closeMenu}>
              Contact
            </Link>
            <Link href="/catalog" className={styles.ctaButton} onClick={closeMenu}>
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 
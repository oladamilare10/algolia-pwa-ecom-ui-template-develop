import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import LandingHeader from '../components/header/landing-header';

export default function Home() {
  return (
    <>
      {/* <LandingHeader /> */}
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>
                Welcome to <span className={styles.highlight}>KartCentral</span>
              </h1>
              
              <p className={styles.description}>
                Your one-stop destination for premium karting equipment and accessories
              </p>

              <Link href="/catalog">
                <div className={styles.ctaButton}>
                  Shop Now &rarr;
                </div>
              </Link>
            </div>

            <div className="relative w-fit md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-kart.jpg"
                alt="Professional Racing Kart"
                width={600}
                height={400}
                priority
                className="object-cover w-full h-full object-top"
              />
            </div>
          </div>

          <section className={styles.features}>
            <h2 className={styles.sectionTitle}>Why Choose KartCentral?</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🛍️</div>
                <h3>Premium Selection</h3>
                <p>Curated collection of top-quality karting gear from leading brands.</p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>👨‍🔧</div>
                <h3>Expert Support</h3>
                <p>Professional guidance from experienced racing enthusiasts.</p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>✨</div>
                <h3>Quality Guaranteed</h3>
                <p>Every product is tested and certified for performance.</p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>🚚</div>
                <h3>Fast Delivery</h3>
                <p>Express shipping available worldwide.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

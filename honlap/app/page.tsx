import Image from "next/image";
import styles from "./page.module.css";

const kepUtVonalak = [
  "Csend Image from Dani.jpg",
  "Erdei Álmok.jpeg",
  "Erdei Túrák.jpg",
  "Jacuzzi for Relaxation.jpg",
  "Pihentető Infraszauna.jpg",
  "Equipped Kitchen.jpg",
  "Honlap Dani.jpg",
  "Honlap Dani.png",
  "Dani Honlap June 25 2025.jpg",
  "Dani Honlap July 27 2025.jpg",
].map((n) => `/kepek/${n}`);

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <h1>Erdei Álmok – Vendégház</h1>
          <p>Csend, nyugalom és kikapcsolódás a természet szívében.</p>
          <a className={styles.primary} href="#kapcsolat">Foglalás és elérhetőség</a>
        </header>

  <section className={styles.section}>
          <h2>Galéria</h2>
          <div className={styles.grid}>
            {kepUtVonalak.map((src, i) => (
              <div key={src} className={styles.card}>
                <Image
                  src={src}
                  alt={`Galéria kép ${i + 1}`}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </section>

  <section id="kapcsolat" className={`${styles.section} ${styles.contact}`}>
          <h2>Kapcsolat</h2>
          <p>
            Érdeklődés és foglalás: {" "}
            <a href="mailto:info@erdeialmok.hu">info@erdeialmok.hu</a> vagy {" "}
            <a href="tel:+3612345678">+36 1 234 5678</a>
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Erdei Álmok – Vendégház</span>
      </footer>
    </div>
  );
}

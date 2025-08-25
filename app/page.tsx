import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import { PeopleIcon, NoWifiIcon, ParkingIcon, ACIcon, FireplaceIcon, CoffeeIcon, TerraceIcon, GrillIcon, JacuzziIcon, SaunaIcon, TrailIcon, ViewIcon, SpaIcon, FoodIcon } from "./components/Icons";
import Accordion from "./components/Accordion";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* HERO */}
        <section id="home" className={`${styles.section} ${styles.hero}`}>
          <div className={`container ${styles.heroWrap}`}>
            <div className={styles.heroText}>
              <h1 className={styles.h1}>Modern nyugalom az erdő szélén</h1>
              <p className={styles.lead}>Távol a zajtól, közel a természethez.</p>
              <div className={styles.ctas}>
                <a className={`${styles.primary}`} href="#arak">Foglalás</a>
                <a className={styles.secondary} href="#galeria">Galéria</a>
              </div>
            </div>
            <div className={styles.heroImageWrap}>
            <Image
              src="/kepek/Dani Honlap Apr 16 2025.jpg"
              alt="Mátrai A-frame vendégház terasszal"
              fill
              priority
              sizes="100vw"
              fetchPriority="high"
              className={styles.heroImage}
            />
            </div>
          </div>
        </section>

        {/* USP */}
        <section id="usp" className={styles.section}>
          <div className="container">
          <h2 className={styles.h2}>A ház röviden</h2>
          <ul className={styles.uspList}>
            <li><PeopleIcon aria-hidden /><span>2 fő</span></li>
            <li><NoWifiIcon aria-hidden /><span>Digitális detox</span></li>
            <li><ParkingIcon aria-hidden /><span>Parkoló</span></li>
            <li><ACIcon aria-hidden /><span>Fűtés/klíma</span></li>
            <li><FireplaceIcon aria-hidden /><span>Kandalló</span></li>
            <li><CoffeeIcon aria-hidden /><span>Kávégép</span></li>
            <li><TerraceIcon aria-hidden /><span>Terasz</span></li>
            <li><GrillIcon aria-hidden /><span>Bogrács</span></li>
            <li><JacuzziIcon aria-hidden /><span>Jakuzzi</span></li>
            <li><SaunaIcon aria-hidden /><span>Infraszauna</span></li>
          </ul>
      <div className={styles.mediaRow}>
            <Image
              src="/kepek/Dani Honlap Apr 16 2025 (1).jpg"
              alt="Erdei kilátás az A-keretből"
              width={1400}
              height={900}
              className={styles.media}
        loading="lazy"
            />
          </div>
      </div>
        </section>

        {/* RÓLUNK */}
        <section id="rolunk" className={styles.section}>
          <div className="container">
          <h2 className={styles.h2}>Rólunk</h2>
          <blockquote className={styles.pullQuote}><strong>„Kicsim”</strong> – egy hely, ahol újra egymásra hangolódtok.</blockquote>
          <p className={styles.text}>Romantikus, páros elvonulás a Mátrában – lelassulás és természetközeli élmény.</p>
          <div className={styles.mediaRow}>
            <Image
              src="/kepek/Csend Image from Dani.jpg"
              alt="Háromszög ablak – kilátás a fákra"
              width={1400}
              height={900}
              className={styles.media}
              loading="lazy"
            />
          </div>
          </div>
        </section>

        {/* FELSZERELTSÉG */}
        <section id="felszereltseg" className={styles.section}>
          <div className="container">
          <h2 className={styles.h2}>Felszereltség és szolgáltatások</h2>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <h3 className={styles.h3}>Konyha</h3>
              <p className={styles.text}>Modern, jól felszerelt; kávégép; mini konyha.</p>
              <Image
                src="/kepek/Equipped Kitchen.jpg"
                alt="Konyha – modern, jól felszerelt"
                width={1200}
                height={800}
                className={styles.media}
              loading="lazy" />
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.h3}>Wellness</h3>
              <div className={styles.mediaGrid2}>
                <Image
                  src="/kepek/Jacuzzi for Relaxation.jpg"
                  alt="Wellness – jakuzzi"
                  width={1200}
                  height={800}
                  className={styles.media}
                loading="lazy" />
                <Image
                  src="/kepek/Pihentető Infraszauna.jpg"
                  alt="Wellness – infraszauna"
                  width={1200}
                  height={800}
                  className={styles.media}
                loading="lazy" />
              </div>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.h3}>Kültér</h3>
              <p className={styles.text}>Erdei terasz, tűzrakó/bogrács.</p>
              <div className={styles.mediaGrid2}>
                <Image
                  src="/kepek/Dani Honlap Apr 07 2025.jpg"
                  alt="Kültéri nézet – előtér"
                  width={1200}
                  height={800}
                  className={styles.media}
                loading="lazy" />
                <Image
                  src="/kepek/Erdei Túrák.jpg"
                  alt="Ösvény & kerítés az erdőben"
                  width={1200}
                  height={800}
                  className={styles.media}
                />
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* GALÉRIA */}
        <section id="galeria" className={styles.section}>
          <div className="container">
          <h2 className={styles.h2}>Galéria</h2>
          <p className={styles.text}>Pillants bele a ház és az erdő világába.</p>
          <div className={styles.ctas}>
            <a className={styles.secondary} href="/galeria.zip" download aria-label="Galéria képek letöltése ZIP fájlban">Képek letöltése</a>
          </div>
          <div className={styles.galleryGrid}>
            {/* 1 */}
            <figure className={`${styles.card} ${styles.span2}`}>
              <Image src="/kepek/Dani Honlap Apr 16 2025.jpg" alt="A-frame homlokzat, terasz" width={1600} height={1066} />
              <figcaption>Első találkozás a házzal; natúr fa, grafitszürke tető.</figcaption>
            </figure>
            {/* 2 */}
            <figure className={styles.card}>
              <Image src="/kepek/Honlap Dani (1).jpg" alt="Erdei bekötőút" width={1600} height={1066} />
              <figcaption>Az érkezés is élmény; fák ölelésében kanyarog az út.</figcaption>
            </figure>
            {/* 3 */}
            <figure className={styles.card}>
              <Image src="/kepek/Dani Honlap Apr 16 2025 (1).jpg" alt="Háromszög ablak – reggeli fény" width={1600} height={1066} />
              <figcaption>A lombokon átszűrődő napfény a hálótérben.</figcaption>
            </figure>
            {/* 4 */}
            <figure className={styles.card}>
              <Image src="/kepek/Dani Honlap Jun 25 2025.jpg" alt="Belső tér az üveg tolóajtón át" width={1600} height={1066} />
              <figcaption>A terasz és az erdő egyetlen nagy nappalivá áll össze.</figcaption>
            </figure>
            {/* 5 */}
            <figure className={styles.card}>
              <Image src="/kepek/Equipped Kitchen.jpg" alt="Konyha közelről" width={1600} height={1066} />
              <figcaption>Tiszta vonalak, kényelmes főzés kettesben.</figcaption>
            </figure>
            {/* 6 */}
            <figure className={styles.card}>
              <Image src="/kepek/Csend Image from Dani.jpg" alt="Előlapi nézet – nyitott ajtókkal" width={1600} height={1066} />
              <figcaption>A ház és a természet határán.</figcaption>
            </figure>
            {/* 7 */}
            <figure className={styles.card}>
              <Image src="/kepek/Honlap Dani.png" alt="Kültéri lépcső és teraszburkolat" width={1600} height={1066} />
              <figcaption>Természetes textúrák, praktikus megoldások.</figcaption>
            </figure>
            {/* 8 */}
            <figure className={styles.card}>
              <Image src="/kepek/Dani Honlap July 27 2025.jpg" alt="Kert & kerítés, ösvény" width={1600} height={1066} />
              <figcaption>Csendes délutánok a fák között.</figcaption>
            </figure>
            {/* 9 */}
            <figure className={styles.card}>
              <Image src="/kepek/Jacuzzi for Relaxation.jpg" alt="Wellness – jakuzzi" width={1600} height={1066} />
              <figcaption>Esti csillagnézés meleg vízben.</figcaption>
            </figure>
            {/* 10 */}
            <figure className={styles.card}>
              <Image src="/kepek/Pihentető Infraszauna.jpg" alt="Wellness – infraszauna" width={1600} height={1066} />
              <figcaption>Lazítás esőnapokon is.</figcaption>
            </figure>
            {/* 11 */}
            <figure className={styles.card}>
              <Image src="/kepek/Erdei Túrák.jpg" alt="Erdei részlet" width={1600} height={1066} />
              <figcaption>Friss levegő, madárdal, simogató zöldek.</figcaption>
            </figure>
            {/* 12 */}
            <figure className={styles.card}>
              <Image src="/kepek/Dani Honlap June 25 2025.jpg" alt="Oldalnézet – tetősík, fa homlokzat" width={1600} height={1066} />
              <figcaption>Karakteres A-keret forma.</figcaption>
            </figure>
            {/* 13 */}
            <figure className={styles.card}>
              <Image src="/kepek/Erdei Álmok.jpeg" alt="Belső háromszög kuckó" width={1600} height={1066} />
              <figcaption>Meghitt, természetközeli pihenő.</figcaption>
            </figure>
            {/* 14 */}
            <figure className={styles.card}>
              <Image src="/kepek/Dani Honlap Apr 16 2025 (1).jpg" alt="Terasz – erdő felé" width={1600} height={1066} />
              <figcaption>Reggeli kávé színpada.</figcaption>
            </figure>
            {/* 15 */}
            <figure className={styles.card}>
              <Image src="/kepek/Dani Honlap Apr 07 2025.jpg" alt="Előkert, lépcsős feljáró" width={1600} height={1066} />
              <figcaption>Kényelmes megközelítés.</figcaption>
            </figure>
            {/* 16 */}
            <figure className={styles.card}>
              <Image src="/kepek/Dani Honlap Apr 16 2025.jpg" alt="Front – nappali fényben" width={1600} height={1066} />
              <figcaption>A ház nappal és este is fotogén.</figcaption>
            </figure>
            {/* 17 */}
            <figure className={styles.card}>
              <Image src="/kepek/Honlap Dani (1).jpg" alt="Érkezés – távolabbi totál" width={1600} height={1066} />
              <figcaption>Az erdő ölelésében megbúvó ház.</figcaption>
            </figure>
          </div>
          </div>
        </section>

        {/* LÁTNIVALÓK */}
        <section id="latnivalok" className={styles.section}>
          <div className="container">
            <h2 className={styles.h2}>Környék – Látnivalók és éttermek</h2>
            <p className={styles.text}>
              Erdei séták, közeli kilátók, termálfürdő, helyi gasztro.
            </p>
            <div className={styles.features}>
              <div className={styles.sights}>
                <div className={styles.sightCard}><TrailIcon aria-hidden /> Reggeli séta</div>
                <div className={styles.sightCard}><ViewIcon aria-hidden /> Délutáni túra a kilátóhoz</div>
                <div className={styles.sightCard}><FireplaceIcon aria-hidden /> Esti tűzrakás</div>
                <div className={styles.sightCard}><SpaIcon aria-hidden /> Fürdőzés a közeli termálban</div>
                <div className={styles.sightCard}><FoodIcon aria-hidden /> Gasztrotúra</div>
              </div>
              <Image
                src="/kepek/Erdei Túrák.jpg"
                alt="Közeli erdei ösvény"
                width={1400}
                height={900}
                className={styles.media}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ÁRAK & FOGLALÁS */}
        <section id="arak" className={styles.section}>
          <div className="container">
          <h2 className={styles.h2}>Árak és foglalás</h2>
          <div className={styles.pricingWrap}>
            <form className={styles.form} action={process.env.NEXT_PUBLIC_BOOKING_URL || undefined} method="get">
              <div className={styles.formWrap}>
                <div className={styles.fieldGrid}>
                  <label>
                    Név
                    <input name="name" type="text" placeholder="Vezetéknév Keresztnév" required />
                  </label>
                  <label>
                    E‑mail
                    <input name="email" type="email" placeholder="te@pelda.hu" required />
                  </label>
                  <label>
                    Érkezés
                    <input name="from" type="date" required />
                  </label>
                  <label>
                    Távozás
                    <input name="to" type="date" required />
                  </label>
                </div>
                <label>
                  Üzenet (opcionális)
                  <textarea name="message" rows={4} placeholder="Kérdésed, megjegyzés…" />
                </label>
                <label className={styles.checkbox}>
                  <input type="checkbox" required />
                  Elfogadom az ÁSZF‑et és az Adatkezelést
                </label>
                <div className={styles.ctas}>
                  <button className={styles.primary} type="submit">Küldés</button>
                </div>
              </div>
            </form>
            <aside className={styles.priceCard}>
              <h3 className={styles.h3}>Árak</h3>
              <p>Hétköznap: 38 000 Ft/éj</p>
              <p>Hétvége: 45 000 Ft/éj</p>
              <p>Minimum 2 éj • 3+ éj kedvezmény</p>
              <div className={styles.ctas}>
                <a className={styles.secondary} href={process.env.NEXT_PUBLIC_BOOKING_URL || "#"} target="_blank" rel="noopener noreferrer">Foglalás</a>
              </div>
              <div style={{marginTop:12}}>
                <Image
                  src="/kepek/Dani Honlap Jun 25 2025.jpg"
                  alt="Terasz – erdei kapcsolat"
                  width={1200}
                  height={800}
                  className={styles.media}
                  loading="lazy"
                />
              </div>
            </aside>
          </div>
          </div>
        </section>

        {/* GYIK */}
        <section id="gyik" className={styles.section}>
          <div className="container">
          <h2 className={styles.h2}>GYIK</h2>
          <div className={styles.faq}>
            <Accordion title="Parkoló van?">Igen, a ház mellett.</Accordion>
            <Accordion title="Wifi?">Nincs – tudatos digitális pihenés; térerő általában van.</Accordion>
            <Accordion title="Kisállat?">Nem.</Accordion>
            <Accordion title="Érkezés/Távozás?">Check‑in 15:00, check‑out 11:00.</Accordion>
          </div>
          </div>
        </section>

        {/* KAPCSOLAT */}
        <section id="kapcsolat" className={`${styles.section} ${styles.contact}`}>
          <div className="container">
          <h2 className={styles.h2}>Kapcsolat</h2>
          <p className={styles.text}>Kérdés esetén írj bátran.</p>
          <ul className={styles.contactList}>
            <li>
              Hely: Mátra, Magyarország (pontos cím foglalás után)
            </li>
            <li>
              E‑mail: <a href="mailto:info@erdeihaz.hu">info@erdeihaz.hu</a>
            </li>
            <li>
              Telefon: <a href="tel:+36301234567">+36 30 123 4567</a>
            </li>
          </ul>
          <div className={styles.mapPlaceholder} aria-label="Térkép">
            <iframe
              title="Mátra térkép"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44662.67228634752!2d19.951!3d47.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740f67f1f4b46a9%3A0x400c4290c1e28e0!2zTcOhdHJh!5e0!3m2!1shu!2shu!4v1699999999999"
            />
          </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <div>© {new Date().getFullYear()} Kicsim</div>
          <nav className={styles.footerNav}>
            <a href="#arak">Árak</a>
            <a href="#gyik">GYIK</a>
            <a href="#kapcsolat">Kapcsolat</a>
            <a href="#">Adatkezelés</a>
            <a href="#">ÁSZF</a>
          </nav>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

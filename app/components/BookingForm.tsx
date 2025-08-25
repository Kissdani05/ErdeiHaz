"use client";

import styles from "../page.module.css";

export default function BookingForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: küldés backendre / email szolgáltatásra
    alert("Köszönjük! Hamarosan felvesszük a kapcsolatot.");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.fieldGrid}>
        <label>
          Név
          <input type="text" name="name" required />
        </label>
        <label>
          E‑mail
          <input type="email" name="email" required />
        </label>
        <label>
          Érkezés
          <input type="date" name="arrival" required />
        </label>
        <label>
          Távozás
          <input type="date" name="departure" required />
        </label>
      </div>
      <label>
        Üzenet
        <textarea name="message" rows={4} />
      </label>
      <label className={styles.checkbox}>
        <input type="checkbox" required /> Elfogadom az adatkezelést.
      </label>
      <button className={styles.primary} type="submit">Foglalás elküldése</button>
    </form>
  );
}

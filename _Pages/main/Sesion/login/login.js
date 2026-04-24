'use client';

import Link from 'next/link';
import styles from './login.module.css';

export function LoginPage() {
  return (
    <section className={styles.page}>
      <div className={styles.backdrop}></div>

      <div className={styles.card}>
        <div className={styles.brandBlock}>
          <span className={styles.kicker}>Bienvenido de vuelta</span>
          <h1 className={styles.title}>Inicia sesion para volver a la arena</h1>
          <p className={styles.subtitle}>
            Entra con Steam o con tu correo y contrasena. Por ahora solo dejamos esas dos opciones.
          </p>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.steamButton}>
            <ion-icon name="logo-steam"></ion-icon>
            <span>Continuar con Steam</span>
          </button>

          <div className={styles.separator}>
            <span>o entra con correo</span>
          </div>

          <form className={styles.form}>
            <label className={styles.field}>
              <span>Correo</span>
              <input type="email" placeholder="shadowfiend@dota.pe" />
            </label>

            <label className={styles.field}>
              <span>Contrasena</span>
              <input type="password" placeholder="Ingresa tu contrasena" />
            </label>

            <button type="submit" className={styles.submitButton}>
              Ingresar
            </button>
          </form>

          <div className={styles.linksRow}>
            <Link href="/" className={styles.textLink}>
              Volver al inicio
            </Link>
            <button type="button" className={styles.textLinkButton}>
              Olvide mi contrasena
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
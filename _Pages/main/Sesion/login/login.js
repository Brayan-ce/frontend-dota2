'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './login.module.css';

export function LoginPage() {
  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <div className={styles.mainGrid}>
          <div className={styles.loginPane}>
            <div className={styles.headerSection}>
              <div className={styles.titleRow}>
                <Image
                  src="/steam.png"
                  alt="Logo de Steam"
                  width={40}
                  height={40}
                  className={styles.titleIcon}
                />
                <h1 className={styles.mainTitle}>INICIAR SESIÓN</h1>
              </div>
              <p className={styles.subtitle}>Con tu nombre de cuenta o email de Steam</p>
            </div>

            <div className={styles.form}>
              <input type="text" aria-label="Usuario" placeholder="sucursales@gmail.com" className={styles.input} />
              <input type="password" aria-label="Contrasena" placeholder="••••••" className={styles.input} />

              <label className={styles.rememberRow}>
                <input type="checkbox" className={styles.rememberBox} />
                <span className={styles.rememberLabel}>Recordarme?</span>
              </label>

              <button type="submit" className={styles.submitButton}>
                INICIAR SESIÓN
              </button>

              <p className={styles.legalText}>
                Al iniciar sesion aceptas nuestros{' '}
                <Link href="#" className={styles.legalLink}>Términos de Servicio</Link>
                {' '} y{' '}
                <Link href="#" className={styles.legalLink}>Política de Privacidad</Link>
              </p>
            </div>
          </div>

          <aside className={styles.qrPane} aria-label="Acceso rapido con QR">
            <div className={styles.qrHeader}>
              <h3 className={styles.qrTitle}>INICIA CON QR DE STEAM</h3>
              <p className={styles.qrSubtitle}>Escanea con la app de Steam en tu celular</p>
            </div>

            <div className={styles.qrFrame}>
              <div className={styles.qrCode}>
                <Image
                  src="/qr/qr.png"
                  alt="QR de prueba para acceso rapido"
                  width={240}
                  height={240}
                  className={styles.qrImage}
                />
              </div>
            </div>

            <div className={styles.qrSteps}>
              <p className={styles.qrStepTitle}>¿Cómo escanear?</p>
              <ol className={styles.qrList}>
                <li>Abre la app de Steam en tu celular</li>
                <li>Ve a Menú &gt; Preferencias &gt; Dispositivos</li>
                <li>Escanea este código para iniciar sesion</li>
              </ol>
            </div>

            <button type="button" className={styles.qrRefreshButton}>
              Actualizar código
            </button>
          </aside>
        </div>

        <div className={styles.footerLinks}>
          <span className={styles.helpText}>
            ¿No tienes una cuenta de Steam?{' '}
            <Link href="/" className={styles.helpLink}>Crea una gratis</Link>
          </span>
        </div>
      </div>
    </section>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './headerIzquierdo.module.css';

const mainNav = [
  { label: 'SALAS', href: '#', icon: 'grid-outline', active: true },
  { label: 'DUELOS', href: '#', icon: 'flash-outline', badge: 'NUEVO' },
  { label: 'LIGA DIARIA', href: '#', icon: 'trophy-outline' },
  { label: 'TABLA DE CLASIFICACIÓN', href: '#', icon: 'bar-chart-outline' },
  { label: 'JUGADORES BANEADOS', href: '#', icon: 'ban-outline' },
  { label: 'GUÍAS', href: '#', icon: 'book-outline' },
  { label: 'BONOS', href: '#', icon: 'gift-outline' },
];

const bottomNav = [
  { label: 'CLANES', href: '#', icon: 'shield-outline' },
];

const footerNav = [
  { label: 'CÓMO JUGAR', href: '#', icon: 'help-circle-outline' },
  { label: 'PREGUNTAS FRECUENTES', href: '#', icon: 'chatbubble-ellipses-outline' },
];

export function HeaderIzquierdo() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.gameHeader}>
        <div className={styles.gameIcon}>
          <Image src="/dota2-icon.png" alt="Dota 2" width={28} height={28} />
        </div>
        <span className={styles.gameLabel}>DOTA 2</span>
      </div>

      <nav className={styles.mainNav} aria-label="Navegación lateral principal">
        {mainNav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`${styles.navLink} ${item.active ? styles.navLinkActive : ''}`}
          >
            <ion-icon name={item.icon} class={styles.navIcon} />
            <span className={styles.navLabel}>{item.label}</span>
            {item.badge && <span className={styles.badge}>{item.badge}</span>}
          </Link>
        ))}
      </nav>

      <div className={styles.divider} />

      <nav className={styles.subNav} aria-label="Navegación lateral secundaria">
        {bottomNav.map((item) => (
          <Link key={item.label} href={item.href} className={styles.navLink}>
            <ion-icon name={item.icon} class={styles.navIcon} />
            <span className={styles.navLabel}>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.discordBanner}>
        <ion-icon name="logo-discord" class={styles.discordIcon} />
        <div className={styles.discordText}>
          <span className={styles.discordTitle}>ÚNETE A NUESTRO</span>
          <span className={styles.discordBrand}>Discord</span>
          <span className={styles.discordSub}>SORTEOS DIARIOS Y MUCHO MÁS</span>
        </div>
      </div>

      <div className={styles.spacer} />

      <nav className={styles.footerNav} aria-label="Navegación lateral inferior">
        {footerNav.map((item) => (
          <Link key={item.label} href={item.href} className={styles.footerLink}>
            <ion-icon name={item.icon} class={styles.navIcon} />
            <span className={styles.navLabel}>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
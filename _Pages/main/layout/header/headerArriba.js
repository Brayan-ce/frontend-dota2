'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './headerArriba.module.css';

export function HeaderArriba() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.brandText}>
          <span className={styles.brandName}>
            UNA <span className={styles.brandAccent}>MÁS</span> Y YA
          </span>
          <span className={styles.brandSub}>DOTA 2</span>
        </div>
      </div>

      <button type="button" className={styles.howToPlayBtn} aria-label="Como jugar">
        <Image src="/font/logo.png" alt="Logo Dota" width={18} height={18} className={styles.howToPlayLogo} />
        <span className={styles.howToPlay}>¿CÓMO JUGAR?</span>
      </button>

      <div className={styles.right}>
        <ion-icon name="volume-medium-outline" class={styles.iconBtn} />

        <Link href="#" className={styles.inviteBtn}>
          <ion-icon name="people-outline" />
          <div className={styles.inviteText}>
            <span className={styles.inviteLabel}>INVITA AMIGOS</span>
            <span className={styles.inviteSub}>GANA BONOS</span>
          </div>
        </Link>

        <div className={styles.balance}>
          <ion-icon name="cash-outline" class={styles.balanceIcon} />
          <span className={styles.balanceAmount}>S/ 0.00 PEN</span>
          <ion-icon name="eye-outline" class={styles.eyeIcon} />
        </div>

        <div className={styles.bonus}>
          <ion-icon name="gift-outline" class={styles.bonusIcon} />
          <span className={styles.bonusAmount}>S/ 10.00 PEN</span>
          <ion-icon name="eye-outline" class={styles.eyeIcon} />
        </div>

        <button className={styles.recargarBtn}>
          RECARGAR
          <ion-icon name="add-outline" />
        </button>

        <div className={styles.profileWrapper} ref={profileRef}>
          <button
            type="button"
            className={`${styles.profile} ${isProfileOpen ? styles.profileOpen : ''}`}
            onClick={() => setIsProfileOpen((current) => !current)}
            aria-haspopup="menu"
            aria-expanded={isProfileOpen}
            aria-label="Abrir menu de perfil"
          >
            <div className={styles.profileAvatar}>
              <Image src="/hero-avatar.png" alt="ShadowFiend" width={36} height={36} />
              <span className={styles.profileLevel}>7</span>
            </div>
            <div className={styles.profileInfo}>
              <span className={styles.profileName}>ShadowFiend</span>
              <span className={styles.profileMmr}>MMR 6120</span>
            </div>
            <span className={`${styles.profileChevron} ${isProfileOpen ? styles.profileChevronOpen : ''}`}>
              <ion-icon name={isProfileOpen ? 'chevron-up-outline' : 'chevron-down-outline'} />
            </span>
          </button>

          {isProfileOpen ? (
            <div className={styles.profileMenu} role="menu" aria-label="Menu de perfil">
              <button type="button" className={styles.profileMenuItem} role="menuitem">
                <ion-icon name="person-circle-outline" />
                <span>Mi perfil</span>
              </button>
              <button type="button" className={styles.profileMenuItem} role="menuitem">
                <ion-icon name="wallet-outline" />
                <span>Mi billetera</span>
              </button>
              <button type="button" className={styles.profileMenuItem} role="menuitem">
                <ion-icon name="settings-outline" />
                <span>Configuracion</span>
              </button>
              <Link
                href="/login"
                className={`${styles.profileMenuItem} ${styles.profileMenuDanger}`}
                role="menuitem"
                onClick={() => setIsProfileOpen(false)}
              >
                <ion-icon name="log-out-outline" />
                <span>Cerrar sesion</span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
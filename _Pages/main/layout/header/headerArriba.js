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
        <i className={`fa-solid fa-volume-high ${styles.iconBtn}`} aria-hidden="true" />

        <Link href="#" className={styles.inviteBtn}>
          <i className="fa-solid fa-user-group" aria-hidden="true" />
          <div className={styles.inviteText}>
            <span className={styles.inviteLabel}>INVITA AMIGOS</span>
            <span className={styles.inviteSub}>GANA BONOS</span>
          </div>
        </Link>

        <div className={styles.balance}>
          <i className={`fa-solid fa-coins ${styles.balanceIcon}`} aria-hidden="true" />
          <span className={styles.balanceAmount}>S/ 0.00 PEN</span>
          <i className={`fa-regular fa-eye ${styles.eyeIcon}`} aria-hidden="true" />
        </div>

        <div className={styles.bonus}>
          <i className={`fa-solid fa-gift ${styles.bonusIcon}`} aria-hidden="true" />
          <span className={styles.bonusAmount}>S/ 10.00 PEN</span>
          <i className={`fa-regular fa-eye ${styles.eyeIcon}`} aria-hidden="true" />
        </div>

        <button className={styles.recargarBtn}>
          RECARGAR
          <i className="fa-solid fa-plus" aria-hidden="true" />
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
              <Image src="/font/logo.png" alt="ShadowFiend" width={36} height={36} />
              <span className={styles.profileLevel}>7</span>
            </div>
            <div className={styles.profileInfo}>
              <span className={styles.profileName}>ShadowFiend</span>
              <span className={styles.profileMmr}>MMR 6120</span>
            </div>
            <span className={`${styles.profileChevron} ${isProfileOpen ? styles.profileChevronOpen : ''}`}>
              <i className={`fa-solid ${isProfileOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true" />
            </span>
          </button>

          {isProfileOpen ? (
            <div className={styles.profileMenu} role="menu" aria-label="Menu de perfil">
              <button type="button" className={styles.profileMenuItem} role="menuitem">
                <i className="fa-regular fa-circle-user" aria-hidden="true" />
                <span>Mi perfil</span>
              </button>
              <button type="button" className={styles.profileMenuItem} role="menuitem">
                <i className="fa-solid fa-wallet" aria-hidden="true" />
                <span>Mi billetera</span>
              </button>
              <button type="button" className={styles.profileMenuItem} role="menuitem">
                <i className="fa-solid fa-gear" aria-hidden="true" />
                <span>Configuracion</span>
              </button>
              <Link
                href="/login"
                className={`${styles.profileMenuItem} ${styles.profileMenuDanger}`}
                role="menuitem"
                onClick={() => setIsProfileOpen(false)}
              >
                <i className="fa-solid fa-right-from-bracket" aria-hidden="true" />
                <span>Cerrar sesion</span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './headerArriba.module.css';

export function HeaderArriba() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.brandLogo}>
          <Image src="/dota2-icon.png" alt="Dota 2" width={36} height={36} />
        </div>
        <div className={styles.brandText}>
          <span className={styles.brandName}>
            UNA <span className={styles.brandAccent}>MÁS</span> Y YA
          </span>
          <span className={styles.brandSub}>DOTA 2</span>
        </div>
      </div>

      <div className={styles.centerNav}>
        <ion-icon name="help-circle-outline" class={styles.navIcon} />
        <span className={styles.howToPlay}>¿CÓMO JUGAR?</span>
      </div>

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

        <div className={styles.profile}>
          <div className={styles.profileAvatar}>
            <Image src="/hero-avatar.png" alt="ShadowFiend" width={36} height={36} />
            <span className={styles.profileLevel}>7</span>
          </div>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>ShadowFiend</span>
            <span className={styles.profileMmr}>MMR 6120</span>
          </div>
          <ion-icon name="chevron-down-outline" />
        </div>
      </div>
    </header>
  );
}
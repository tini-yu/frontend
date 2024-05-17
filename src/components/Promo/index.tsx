'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Promo.module.scss';

export default function Promo() {
    return (
        <div className={styles.card}>
                <div className={styles.cardText}>
                    <div className={styles.cardTextTitle}>
                        Сильнее Снегопада
                    </div>
                    <div className={styles.cardTextDescription}>
                    Большой выбор снегоуборочных машин. Качественные устройства для любого бюджета
                    </div>
                    <div className={styles.cardTextButtons}>
                        <div className={styles.cardTextButtonsInfo}>
                            Подробнее
                        </div>
                        <div className={styles.cardTextButtonsArrows}>
                            <div className={styles.cardTextButtonsArrowsButton}>
                                <div className={styles.cardTextButtonsArrowsButtonImage}>
                                    <Image fill src="/assets/icons/arrow-left.svg" alt="arrow" />
                                </div>
                            </div>
                            <div className={styles.cardTextButtonsArrowsButton}>
                                <div className={styles.cardTextButtonsArrowsButtonImage}>
                                    <Image fill src="/assets/icons/arrow-right.svg" alt="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
}
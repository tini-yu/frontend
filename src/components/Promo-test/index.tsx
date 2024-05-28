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
                        <button className={styles.cardTextButtonsInfo} type='submit'>
                            Подробнее
                        </button>
                        <div className={styles.cardTextButtonsArrows}>
                            <button className={styles.cardTextButtonsArrowsButton} type='submit'>
                                <div className={styles.cardTextButtonsArrowsButtonImage}>
                                    <Image fill src="/assets/icons/arrow-left.svg" alt="arrow" />
                                </div>
                            </button>
                            <button className={styles.cardTextButtonsArrowsButton} type='submit'>
                                <div className={styles.cardTextButtonsArrowsButtonImage}>
                                    <Image fill src="/assets/icons/arrow-right.svg" alt="arrow" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

        </div>
    );
}
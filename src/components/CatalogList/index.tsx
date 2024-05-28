'use client';

import Image from 'next/image';
import styles from './CatalogList.module.scss';
import Link from 'next/link';
import CatalogCard from '../CatalogCard';

export default function CatalogList() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.catalog}>
                <div className={styles.catalogTop}>
                    <div className={styles.catalogTopTitle}>
                        Товары месяца
                    </div>
                    <div className={styles.catalogTopArrows}>
                        <div className={styles.catalogTopArrowsButton}>
                            <div className={styles.catalogTopArrowsButtonImage}>
                                <Image fill src="/assets/icons/arrow-left.svg" alt="arrow" />
                            </div>
                        </div>
                        <div className={styles.catalogTopArrowsButton}>
                            <div className={styles.catalogTopArrowsButtonImage}>
                                <Image fill src="/assets/icons/arrow-right.svg" alt="arrow" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.catalogBottom}>
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                    <CatalogCard />
                </div>
            </div>
        </div>
    );
}
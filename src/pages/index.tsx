import styles from './Page.module.scss';
import Head from 'next/head';
export default function Index() {
    return (
        <>
            <Head>
                <title>Electric Tattoo</title>
            </Head>

            <div className={styles['page']}>
                <div className={styles['page__header']}>
                    <div className={styles['header__logo']}>ELECTRIC TATTOO</div>
                </div>

                <div className={styles['page__content']}>
                    <article className={styles['content__item']}></article>
                    <article className={styles['content__item']}></article>
                    <article className={styles['content__item']}></article>
                    <article className={styles['content__item']}></article>
                    <article className={styles['content__item']}></article>
                    <article className={styles['content__item']}></article>
                    <article className={styles['content__item']}></article>
                    <article className={styles['content__item']}></article>
                    <article className={styles['content__item']}></article>
                </div>

                <div className={styles['page__footer']}>2021 &copy; Electric Tattoo</div>
            </div>
        </>
    );
}

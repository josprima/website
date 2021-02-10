import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../components/Navbar';

import css from './index.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Josprima Sihombing</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2f2f2f" />
        <meta name="description" content="Sekolah calon developer yang pengen jago react." />
      </Head>

      <main className={css.main}>
        <Navbar />

        <section className={css.hero}>
          <h1>Sekolah calon developer yang pengen jago react.</h1>
          <p>
            Belajar react secara terstruktur, dimulai dari hal hal basic yang perlu
            kamu pahami sebelum masuk ke reactjs. Sehingga fundamental nya lebih kuat.
            <b> Ayo belajar!</b>
          </p>

          <section className={css.action}>
            <Link href="/">
              <a className={`${css.button} ${css['button--secondary']}`}>Pelajari lebih lanjut</a>
            </Link>
            <Link href="/">
              <a className={`${css.button} ${css['button--primary']}`}>Mulai belajar</a>
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}

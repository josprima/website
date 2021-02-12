import PropTypes from 'prop-types';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import Navbar from '@components/Navbar';
import { getHomeContent } from '@lib/api';

import css from './index.module.scss';

export default function Home({ homeContent }) {
  return (
    <>
      <Head>
        <title>Josprima Sihombing</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2f2f2f" />
        <meta name="description" content="Sekolah calon developer yang pengen jago react." />
      </Head>

      <main className={css.main}>
        {/* <Navbar /> */}

        <section className={css.hero}>
          <h1>
            {homeContent.title}
          </h1>
          <p>
            {homeContent.description}
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

Home.propTypes = {
  homeContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export async function getStaticProps() {
  const homeContent = (await getHomeContent()) || [];

  return {
    props: {
      homeContent,
    },
  };
}

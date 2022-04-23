import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Home: NextPage = () => {
  useEffect(() => {
    console.log(location)
  }, [])

  
  return (
    <div className={styles.container}>
      <Head>
        <title>nibo.sh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          nibo.sh/
        </h1>

        <div className={styles.grid}>
          <a href="https://scrapbox.io/niboshi/niboshi" target="_blank" className={styles.card}>
            <h2>Profile</h2>
            <p>/niboshi on Scrapbox</p>
          </a>

          <a href="https://twitter.com/mpppk" target="_blank" className={styles.card}>
            <h2>Twitter</h2>
            <p>@mpppk</p>
          </a>

          <a
            href="https://github.com/mpppk"
            className={styles.card} target="_blank"
          >
            <h2>GitHub</h2>
            <p>@mpppk</p>
          </a>

            <Link href={'/pay'}>
              <a className={styles.card}>
                <h2>Pay</h2>
              <p>Kyash, PayPay</p>
              </a>
            </Link>
        </div>
      </main>
    </div>
  )
}

export default Home

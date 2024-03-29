import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { urls } from "../src/const";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>nibo.sh</title>
        <meta name="description" content="Profile for niboshi(@mpppk)" />
        <link rel="icon" href="/favicon.ico" />
        {Object.values(urls).map((u) => (
          <link rel="preconnect" key={u} href={u} />
        ))}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image
            className={"niboshi-logo"}
            src="https://i.gyazo.com/eafa8efaaad66776e010ec9123d28f9e.png"
            alt={"niboshi profile icon"}
            width={64}
            height={64}
          />
          <span>nibo.sh/</span>
        </h1>

        <div className={styles.grid}>
          <a
            href={urls.scrapbox}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
            data-cy={"link-scrapbox"}
          >
            <h2>Profile</h2>
            <p>/niboshi on Scrapbox</p>
          </a>

          <a
            href={urls.twitter}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
            data-cy={"link-twitter"}
          >
            <h2>Twitter</h2>
            <p>@mpppk</p>
          </a>

          <a
            href={urls.github}
            className={styles.card}
            target="_blank"
            rel="noreferrer"
            data-cy={"link-github"}
          >
            <h2>GitHub</h2>
            <p>@mpppk</p>
          </a>

          <a
            href={urls.pay}
            className={styles.card}
            target="_blank"
            rel="noreferrer"
            data-cy={"link-pay"}
          >
            <h2>Pay</h2>
            <p>PayPay, Kyash, etc.</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;

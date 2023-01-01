import Head from "next/head";
import React from "react";

import styles from "../../styles/Home.module.css";

export default function PalindromeChecker(props) {
  return (
    <>
      <Head>
        <title>Palindrome Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['main-palindromeChecker']}>
        <h1>Palindrome Checker</h1>
        <input type="text" />
        <button>Check</button>
        <button>Clear</button>
      </main>
    </>
  );
}

import React, { useState } from "react";
import Head from "next/head";

import styles from "../../styles/Home.module.css";

export default function PalindromeChecker(props) {
  const [words, setWords] = useState('');

  function handleInput(event) {
    setWords(event.target.value);
  }

  function clearInput() {
    setWords('');
  }

  return (
    <>
      <Head>
        <title>Palindrome Checker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['main-palindromeChecker']}>
        <h1>Palindrome Checker</h1>

        <input
          className={styles['text-input']}
          type="text"
          value={words}
          onChange={handleInput}
        />

        <div style={{ height: '10px' }} />
        <button>Check</button>
        <div style={{ height: '10px' }} />
        <button onClick={clearInput}>Clear</button>

        <h2>Result</h2>
        <p>{words}</p>
      </main>
    </>
  );
}

import React, { useState } from "react";
import Head from "next/head";

import { isPalindrome } from "../../utils";

import styles from "../../styles/Home.module.css";

export default function PalindromeChecker(props) {
  const [words, setWords] = useState('');
  const [isWordsPalindrome, setWordsPalindrome] = useState(null);

  function handleInput(event) {
    setWords(event.target.value);
    setWordsPalindrome(null);
  }

  function clearInput() {
    setWords('');
    setWordsPalindrome(null);
  }

  function handleCheckPalindrome() {
    if (words !== '') {
      let result = isPalindrome(words);
      setWordsPalindrome(result);
    } else {
      setWordsPalindrome(null);
    }
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
        <button onClick={handleCheckPalindrome}>Check</button>
        <div style={{ height: '10px' }} />
        <button onClick={clearInput}>Clear</button>

        {
          isWordsPalindrome === null
            ? <></>
            : isWordsPalindrome === true
            ? <>
                <h2>Result</h2>
                <p>"{words}" adalah palindrome</p>
              </>
            : <>
                <h2>Result</h2>
                <p>"{words}" bukan palindrome</p>
              </>
        }
      </main>
    </>
  );
}

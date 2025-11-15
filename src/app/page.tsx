"use client";
import { useState } from "react";
import Image from "next/image";
import { FcStart } from "react-icons/fc";

import { JsonView } from "@/app/components/JsonView";
import styles from "./page.module.css";

export default function Home() {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch("/api/beans");
      const newData = await response.json();

      setData(newData);
    } catch (e) {}
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/coffee-logo.png"
          alt="Next.js logo"
          width={Math.trunc(79 * 1.5)}
          height={Math.trunc(52 * 1.5)}
          priority
        />
        <h1>Coffee beans API</h1>
      </header>
      <main className={styles.main}>
        <div>
          <p>Информация о кофейных зернах</p>
          <ol>
            <li>
              <div className={styles.listItem}>
                <code>/api/beans</code>
                <button onClick={handleClick} aria-label="Run">
                  <FcStart />
                </button>
              </div>
            </li>
          </ol>
        </div>
        <JsonView code={data} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

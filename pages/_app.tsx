import Link from "next/link";
import React from "react";

const Header = () => (
  <div>
    <style jsx>{`
      a {
        padding: 20px;
        display: inline-block;
        color: white;
        font-size: 1.2em;
      }
    `}</style>
    <Link href={"/"}>
      <a href="/">Grid</a>
    </Link>
    <Link href={"/gif"}>
      <a href="/gif">Gif</a>
    </Link>
    <Link href={"/carousel"}>
      <a href="/carousel">Carousel</a>
    </Link>
    <Link href={"/search"}>
      <a href="/search">Search Bar (beta) </a>
    </Link>
  </div>
);
export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

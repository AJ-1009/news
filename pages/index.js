import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";

const categories = [
  "business",
  "health",
  "entertainment",
  "general",
  "science",
  "sports",
  "technology",
];
const nations = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];
const sources = [
  "abc-news",
  "bbc-news",
  "australian-financial-review",
  "bbc-sport",
  "business-insider",
  "cbc-news",
  "cnn",
  "fox-news",
  "google-news",
  "national-geographic",
  "news24",
  "the-hindu",
  "the-times-of-india",
];
const links = [
  {
    name: "general",
    link: "/general",
  },
  {
    name: "technology",
    link: "/technology",
  },
  {
    name: "health",
    link: "/health",
  },
  {
    name: "sports",
    link: "/sports",
  },
  {
    name:"entertainment",
    link:"/entertainment",
  },
  {
    name:'business',
    link:"/business"
  }
];
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar items={links} />
    </div>
  );
}

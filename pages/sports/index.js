import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import NewsCard from "../../components/NewsCard";
const channel = [
  {
    name: "ABC NEWS",
    link: "/sports/abc-news",
  },
  {
    name: "BBC NEWS",
    link: "/sports/bbc-news",
  },
  {
    name: "BBC SPORTS",
    link: "/sports/bbc-sports",
  },
  {
    name: "THE HINDU",
    link: "/sports/the-hindu",
  },
  {
    name: "CBC NEWS",
    link: "/sports/cbc-news",
  },
  {
    name: "CNN",
    link: "/sports/cnn",
  },
];
export default function slug() {
  const router = useRouter();
  const [news, setnews] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (!router.isReady) return;
    fetch(
      `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=4a5845cd978b4fe68078ff0ffc2c59b4&page=${page}`
    )
      .then((data) => data.json())
      .then((data) => {
        setnews(data.articles);
        setloading(false);
      });
  }, [router.isReady, page]);
  const prev = () => {
    setpage(page - 1);
    window.scrollTo(top);
  };
  const next = () => {
    setpage(page + 1);
    window.scrollTo(top);
  };
  if (!loading) {
    return (
      <div>
        <Navbar items={channel} />
        <div className="container">
          {news.map((details, index) => (
              <NewsCard details={details} key={index} />
          ))}
        </div>
        <div className="btn">
          <div onClick={prev} disabled={true}>
            &larr; PREVIOUS
          </div>
          <div onClick={next}>NEXT &rarr;</div>
        </div>
      </div>
    );
  }
}
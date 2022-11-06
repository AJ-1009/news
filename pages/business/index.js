import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import NewsCard from "../../components/NewsCard";

const channel = [
  {
    name: "INDIA",
    link: "/business/in",
  },
  {
    name: "china",
    link: "/business/ch",
  },
  {
    name: "usa",
    link: "/business/us",
  },
];

export default function Index() {
  const router = useRouter();
  const [news, setnews] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (!router.isReady) return;
    fetch(
      `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`
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
  return (
    <div>
      <Navbar items={channel} />
      {!loading && (
        <div className="container">
          {news?.map((details, index) => (
            <NewsCard details={details} key={index} />
          ))}
        </div>
      )}
      <div className="btn">
        <div onClick={prev} disabled={true}>
          &larr; PREVIOUS
        </div>
        <div onClick={next}>NEXT &rarr;</div>
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard";

export default function slug() {
  const router = useRouter();
  const [news, setnews] = useState([]);
  const [page, setpage] = useState(1);
  useEffect(() => {
    if (!router.isReady) return;
    fetch(
      `https://newsapi.org/v2/top-headlines?category=sports&country=${router.query.slug}&language=en&apiKey=${process.env.NEXT_PUBLIC_API_KEY }&page=${page}`
    )
      .then((data) => data.json())
      .then((data) => {
        setnews(data.articles);
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
      <div className="container">
        {news?.map((details, index) => (
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

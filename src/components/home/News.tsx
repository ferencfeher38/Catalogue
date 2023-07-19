import { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/home/News.scss";

type News = {
  id: number;
  active: boolean;
  title: string;
  description: string;
  image: string;
  createdAt: string;
};

export const News = function () {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://mockup-api.marso.hu/news");
        const sortedNews = response.data["hydra:member"].sort(
          (a: { createdAt: string }, b: { createdAt: string }) =>
            b.createdAt.localeCompare(a.createdAt)
        );
        setNewsData(sortedNews);
        setLoading(false);
      } catch (error) {
        setError("Hiba történt az adatok lekérésekor.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="news-container">
      {newsData.map((newsItem) => (
        <div key={newsItem.id} className="news-box">
          <img src={newsItem.image} alt={newsItem.title} />
          <div className="title">{newsItem.title}</div>
          <div className="description">{newsItem.description}</div>
        </div>
      ))}
    </div>
  );
};

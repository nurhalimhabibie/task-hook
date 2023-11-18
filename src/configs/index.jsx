import React, { useEffect, useState } from "react";

export const useApi = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=0d47ebeb9d044d2ebc1dda47cf8c9509")
      .then((res) => res.json())
      .then((data) => setNewsArticles(data.articles))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return {
    newsArticles,
  };
};

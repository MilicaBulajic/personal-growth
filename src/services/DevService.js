import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DevService() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=react", { cancelToken: source.token }
      );

      setData(result.data);
    };

    fetchData();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

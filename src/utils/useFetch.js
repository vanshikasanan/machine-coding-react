import React, { useEffect, useState } from "react";

const useFetch = ({ apiUrl }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(apiUrl);

        if (response?.status === 200) {
          let result = await response.json();
          setLoading(false);
          setData(result);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);
  return { data, loading, error };
};

export default useFetch;

import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (URL) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(URL);
        setData(response.data);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    getData();
  }, [URL]);

  return [data, isLoading, isError];
};

export default useFetch;

import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://global-warming.org/api/";

const useAxios = (id) => {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get(`${id}-api`)
      .then((res) => setRes(res.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [id]);

  return { res, loading };
};

export default useAxios;

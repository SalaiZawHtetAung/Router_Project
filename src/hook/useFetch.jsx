import React, { useState, useEffect } from "react";

const useFetch = (fetchFun, arg) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFun(arg);
        setData((pre) => {
          return {
            loading: false,
            data: data,
            error: null,
          };
        });
      } catch (e) {
        setData((pre) => {
          return {
            error: e.massage,
            loading: false,
            data: null,
          };
        });
      }
    })();
  }, []);
  return data;
};

export default useFetch;

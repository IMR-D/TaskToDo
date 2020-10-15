import axios from "axios";
import React, { useEffect, useState } from "react";

export const useHttp = () => {
  const [state, setState] = useState();
  useEffect(() => {
    const apiUrl =
      "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5";
    axios.get(apiUrl).then((response) => {
      let data = response.data;
      setState(data);
    });
  }, [setState]);

  return { state };
};

import axios from "axios";
import React, { useEffect, useState } from "react";

export const useHttp = () => {
  const [state, setState] = useState();
  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";
    axios.get(apiUrl).then((response) => {
      let data = response.data.slice(1, 5);
      data = data.map((e) => {
        return { id: e.id, text: e.title, completed: e.completed };
      });
      setState(data);
    });
  }, [setState]);

  return { state };
};

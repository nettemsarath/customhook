import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const useTest = (ID) => {
  console.log("ID", ID);
  const currentRef = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchUsers = async (ID) => {
    const value = currentRef.current;
    console.log("VALUE IS", value);
    currentRef.current = value + 1;
    console.log("reference.current", currentRef.current);
    setIsLoading(true);
    try {
      console.log(
        "API",
        `https://jsonplaceholder.typicode.com/comments?postId=${ID ? ID : 1}`
      );
      const { data: user } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${ID ? ID : 1}`
        // "https://api.twitter.com/1.1/statuses/update.json?include_entities=true"
      );
      setData(user);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers(ID);
    return () => {
      console.log("unmounting...");
      currentRef.current = 0;
      console.log("currentRef.current", currentRef.current);
    };
  }, []);
  return { isLoading, data, fetchUsers, error };
};

export default useTest;

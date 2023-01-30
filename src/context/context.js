import React, { useState, createContext } from "react";
import { useContext } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTopics } from "../graphql/queries";
import { useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);
  const fetchTopics = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listTopics));
      console.log("RESULT", result);
      setTopics(result.data.listTopics.items);
    } catch (error) {
      console.log("TOPICS NOT FEATCHED", error);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <AppContext.Provider value={{ topics, setTopics }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

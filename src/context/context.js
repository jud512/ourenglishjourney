import React, { useState, createContext } from "react";
import { useContext } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { listTopics, listWords } from "../graphql/queries";
import * as subscriptions from "../graphql/subscriptions";
import { useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children, user, signOut }) => {
  const [topics, setTopics] = useState([]);
  const [words, setWords] = useState([]);

  const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
  const isAdmin = groups ? groups[0] === "admin" : false;

  const fetchTopics = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listTopics));
      // console.log("RESULT TOPICS", result);
      setTopics(result.data.listTopics.items);
    } catch (error) {
      console.log("TOPICS NOT FEATCHED", error);
    }
  };

  const fetchWords = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listWords));
      // console.log("RESULT WORDS", result.data.listWords.items);
      setWords(result.data.listWords.items);
    } catch (error) {
      console.log("WORDS NOT FETCHED", error);
    }
  };

  const subscription = API.graphql(
    graphqlOperation(subscriptions.onCreateTopic)
  ).subscribe({
    next: ({ provider, value }) => {
      console.log({ provider, value });
      if (value) {
        setTopics([...topics, value.data.onCreateTopic]);
      }
    },
    error: (error) => console.warn(error),
  });

  const subscription2 = API.graphql(
    graphqlOperation(subscriptions.onDeleteTopic)
  ).subscribe({
    next: ({ provider, value }) => {
      console.log({ provider, value });
      if (value) {
        const newTopics = topics.filter(
          (item) => item.id !== value.data.onDeleteTopic.id
        );
        setTopics(newTopics);
        console.log("NEW TOPICS", newTopics);
        console.log("ID:", value.data.onDeleteTopic.id);
      }
    },
    error: (error) => console.warn(error),
  });
  const subscription3 = API.graphql(
    graphqlOperation(subscriptions.onUpdateTopic)
  ).subscribe({
    next: ({ provider, value }) => {
      console.log({ provider, value });
      if (value) {
        const newTopics = topics.map((item) => {
          return item.id === value.data.onUpdateTopic.id
            ? value.data.onUpdateTopic
            : item;
        });
        setTopics(newTopics);
        // console.log("NEW TOPICS", newTopics);
        // console.log("ID:", value.data.onUpdateTopic.id);
      }
    },
    error: (error) => console.warn(error),
  });

  useEffect(() => {
    fetchTopics();
    fetchWords();
  }, []);

  // subscription.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();

  // console.log("TOPICS FROM CONTEXT", topics);
  // console.log("USER", user);

  return (
    <AppContext.Provider
      value={{ topics, setTopics, user, signOut, words, isAdmin }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

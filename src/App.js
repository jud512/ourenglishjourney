import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createTopic } from "./graphql/mutations";
import { listTopics } from "./graphql/queries";
import awsconfig from "./aws-exports";
import { useEffect } from "react";
import CreateNewVocabulary from "./components/createNewVocabulary/CreateNewVocabulary";
import CreateNewTopic from "./components/createNewTopic/CreateNewTopic";
import ListTopic from "./components/listTopic/ListTopic";
import React from "react";
import { useState } from "react";
import { useGlobalContext } from "./context/context";
import { fetchTopics } from "./fetchData/fetchingFunc";
Amplify.configure(awsconfig);

const createTopicData = async () => {
  try {
    const result = await API.graphql(
      graphqlOperation(createTopic, {
        input: {
          title: "Environmental protection",
          book: "BOOK2",
        },
      })
    );
    console.log(result);
  } catch (error) {
    console.log("SOMETHING WENT WRONG", error);
  }
};

function App() {
  const { topics } = useGlobalContext();

  console.log("TOPICS", topics);
  return (
    <div className="App">
      <h1>Try Creating a Dictionary using Amplify, GraphQl and so on...</h1>
      <CreateNewTopic />
      <ListTopic />
      <CreateNewVocabulary />
    </div>
  );
}

export default App;

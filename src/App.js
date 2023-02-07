import { Amplify, API, graphqlOperation } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { createTopic } from "./graphql/mutations";
import { listTopics } from "./graphql/queries";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";
import CreateNewVocabulary from "./components/createNewVocabulary/CreateNewVocabulary";
import CreateNewTopic from "./components/createNewTopic/CreateNewTopic";
import ListTopic from "./components/listTopic/ListTopic";
import React from "react";
import { useState } from "react";
import { useGlobalContext } from "./context/context";
import { fetchTopics } from "./fetchData/fetchingFunc";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Vocabulary from "./pages/vocabulary/Vocabulary";
import "./App.css";
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

function App(isPassedToWithAuthenticator, signOut, user) {
  if (!isPassedToWithAuthenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`);
  }

  const { topics } = useGlobalContext();

  // console.log("TOPICS", topics);

  return (
    <Authenticator>
      {({ signOut, user, group }) => (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Layout user={user.username} signOut={signOut} />}
            >
              <Route
                index
                element={
                  <Home
                    user={user.username}
                    userAll={user}
                    isPassedToWithAuthenticator={isPassedToWithAuthenticator}
                    signOut={signOut}
                  />
                }
              />
              <Route
                path="vocabulary"
                element={<Vocabulary user={user.username} />}
              />
              {/* <Route
                path="vocabularycreate"
                element={<Modal children={<h1>I'm a child</h1>} />}
              /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App);

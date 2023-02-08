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
import Modal from "./components/modal/Modal";
import EditWord from "./components/editWord/EditWord";

import { AppProvider } from "./context/context";
import "./App.css";
import ListVocabulary from "./components/listVocabulary/ListVocabulary";
import LearnVocabulary from "./components/learnVocabulary/LearnVocabulary";
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

  // const { topics } = useGlobalContext();

  // console.log("TOPICS", topics);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <AppProvider user={user} signOut={signOut}>
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
                <Route
                  path="vocabulary/createvocabulary"
                  element={
                    <Modal
                      level={1}
                      shouldShowModal={true}
                      direct="/vocabulary"
                    >
                      <CreateNewVocabulary />
                    </Modal>
                  }
                />
                <Route
                  path="vocabulary/listvocabulary"
                  element={
                    <Modal
                      level={1}
                      shouldShowModal={true}
                      direct="/vocabulary"
                    >
                      <ListVocabulary />
                    </Modal>
                  }
                />
                <Route
                  path="vocabulary/listvocabulary/:edit"
                  element={
                    <Modal
                      level={1}
                      shouldShowModal={true}
                      direct="/vocabulary"
                    >
                      <EditWord />
                    </Modal>
                  }
                />
                <Route
                  path="vocabulary/learnvocabulary"
                  element={
                    <Modal
                      level={1}
                      shouldShowModal={true}
                      direct="/vocabulary"
                    >
                      <LearnVocabulary />
                    </Modal>
                  }
                />
                {/* <Route
                path="vocabularycreate"
                element={<Modal children={<h1>I'm a child</h1>} />}
              /> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </AppProvider>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App);

import { API, graphqlOperation } from "aws-amplify";
import { listTopics } from "../graphql/queries";

export const fetchTopics = async () => {
  try {
    const result = await API.graphql(graphqlOperation(listTopics));
    console.log("RESULT", result);
  } catch (error) {
    console.log("TOPICS NOT FEATCHED", error);
  }
};

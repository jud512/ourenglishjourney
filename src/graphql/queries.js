/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      title
      book
      WordTopic {
        items {
          id
          name
          speech
          description
          pronunciation
          sound
          example
          topicID
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        book
        WordTopic {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWord = /* GraphQL */ `
  query GetWord($id: ID!) {
    getWord(id: $id) {
      id
      name
      speech
      description
      pronunciation
      sound
      example
      TopicWord {
        id
        title
        book
        WordTopic {
          nextToken
        }
        createdAt
        updatedAt
      }
      topicID
      username
      createdAt
      updatedAt
    }
  }
`;
export const listWords = /* GraphQL */ `
  query ListWords(
    $filter: ModelWordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        speech
        description
        pronunciation
        sound
        example
        TopicWord {
          id
          title
          book
          createdAt
          updatedAt
        }
        topicID
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const wordsByTopicID = /* GraphQL */ `
  query WordsByTopicID(
    $topicID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelWordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    wordsByTopicID(
      topicID: $topicID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        speech
        description
        pronunciation
        sound
        example
        TopicWord {
          id
          title
          book
          createdAt
          updatedAt
        }
        topicID
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

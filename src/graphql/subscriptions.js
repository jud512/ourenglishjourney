/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTopic = /* GraphQL */ `
  subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onCreateTopic(filter: $filter) {
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
export const onUpdateTopic = /* GraphQL */ `
  subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput) {
    onUpdateTopic(filter: $filter) {
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
export const onDeleteTopic = /* GraphQL */ `
  subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput) {
    onDeleteTopic(filter: $filter) {
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
export const onCreateWord = /* GraphQL */ `
  subscription OnCreateWord($filter: ModelSubscriptionWordFilterInput) {
    onCreateWord(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWord = /* GraphQL */ `
  subscription OnUpdateWord($filter: ModelSubscriptionWordFilterInput) {
    onUpdateWord(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWord = /* GraphQL */ `
  subscription OnDeleteWord($filter: ModelSubscriptionWordFilterInput) {
    onDeleteWord(filter: $filter) {
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
      createdAt
      updatedAt
    }
  }
`;

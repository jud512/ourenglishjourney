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
      PictureTopic {
        items {
          id
          url
          title
          topicID
          createdAt
          updatedAt
        }
        nextToken
      }
      RewriteTaskTopic {
        items {
          id
          origin
          incomplete
          answer
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
        PictureTopic {
          nextToken
        }
        RewriteTaskTopic {
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
        PictureTopic {
          nextToken
        }
        RewriteTaskTopic {
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
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      id
      url
      title
      TopicPicture {
        id
        title
        book
        WordTopic {
          nextToken
        }
        PictureTopic {
          nextToken
        }
        RewriteTaskTopic {
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
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        title
        TopicPicture {
          id
          title
          book
          createdAt
          updatedAt
        }
        topicID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRewriteTask = /* GraphQL */ `
  query GetRewriteTask($id: ID!) {
    getRewriteTask(id: $id) {
      id
      origin
      incomplete
      answer
      TopicRewriteTask {
        id
        title
        book
        WordTopic {
          nextToken
        }
        PictureTopic {
          nextToken
        }
        RewriteTaskTopic {
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
export const listRewriteTasks = /* GraphQL */ `
  query ListRewriteTasks(
    $filter: ModelRewriteTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRewriteTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        origin
        incomplete
        answer
        TopicRewriteTask {
          id
          title
          book
          createdAt
          updatedAt
        }
        topicID
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
export const picturesByTopicID = /* GraphQL */ `
  query PicturesByTopicID(
    $topicID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    picturesByTopicID(
      topicID: $topicID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        url
        title
        TopicPicture {
          id
          title
          book
          createdAt
          updatedAt
        }
        topicID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const rewriteTasksByTopicID = /* GraphQL */ `
  query RewriteTasksByTopicID(
    $topicID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRewriteTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rewriteTasksByTopicID(
      topicID: $topicID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        origin
        incomplete
        answer
        TopicRewriteTask {
          id
          title
          book
          createdAt
          updatedAt
        }
        topicID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

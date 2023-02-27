/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createWord = /* GraphQL */ `
  mutation CreateWord(
    $input: CreateWordInput!
    $condition: ModelWordConditionInput
  ) {
    createWord(input: $input, condition: $condition) {
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
export const updateWord = /* GraphQL */ `
  mutation UpdateWord(
    $input: UpdateWordInput!
    $condition: ModelWordConditionInput
  ) {
    updateWord(input: $input, condition: $condition) {
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
export const deleteWord = /* GraphQL */ `
  mutation DeleteWord(
    $input: DeleteWordInput!
    $condition: ModelWordConditionInput
  ) {
    deleteWord(input: $input, condition: $condition) {
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
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
export const createRewriteTask = /* GraphQL */ `
  mutation CreateRewriteTask(
    $input: CreateRewriteTaskInput!
    $condition: ModelRewriteTaskConditionInput
  ) {
    createRewriteTask(input: $input, condition: $condition) {
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
export const updateRewriteTask = /* GraphQL */ `
  mutation UpdateRewriteTask(
    $input: UpdateRewriteTaskInput!
    $condition: ModelRewriteTaskConditionInput
  ) {
    updateRewriteTask(input: $input, condition: $condition) {
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
export const deleteRewriteTask = /* GraphQL */ `
  mutation DeleteRewriteTask(
    $input: DeleteRewriteTaskInput!
    $condition: ModelRewriteTaskConditionInput
  ) {
    deleteRewriteTask(input: $input, condition: $condition) {
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

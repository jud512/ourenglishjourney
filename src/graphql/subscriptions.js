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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture($filter: ModelSubscriptionPictureFilterInput) {
    onCreatePicture(filter: $filter) {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture($filter: ModelSubscriptionPictureFilterInput) {
    onUpdatePicture(filter: $filter) {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture($filter: ModelSubscriptionPictureFilterInput) {
    onDeletePicture(filter: $filter) {
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
export const onCreateRewriteTask = /* GraphQL */ `
  subscription OnCreateRewriteTask(
    $filter: ModelSubscriptionRewriteTaskFilterInput
  ) {
    onCreateRewriteTask(filter: $filter) {
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
export const onUpdateRewriteTask = /* GraphQL */ `
  subscription OnUpdateRewriteTask(
    $filter: ModelSubscriptionRewriteTaskFilterInput
  ) {
    onUpdateRewriteTask(filter: $filter) {
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
export const onDeleteRewriteTask = /* GraphQL */ `
  subscription OnDeleteRewriteTask(
    $filter: ModelSubscriptionRewriteTaskFilterInput
  ) {
    onDeleteRewriteTask(filter: $filter) {
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

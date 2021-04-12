import {types} from 'mobx-state-tree';

import ExampleCommentsStore from '@/mobx/models/ExampleCommentsStore';
import ExamplePostsStore from '@/mobx/models/ExamplePostsStore';

// Define a store just like a model
export const model = types.model({
  commentsStore: ExampleCommentsStore.model,
  postsStore: ExamplePostsStore.model,
});

// Define a store just like a model
export const initialState = {
  commentsStore: ExampleCommentsStore.initialState,
  postsStore: ExamplePostsStore.initialState,
};

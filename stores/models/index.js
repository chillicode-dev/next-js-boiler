import {types} from 'mobx-state-tree';

import ExampleCommentsStore from '@/stores/models/ExampleCommentsStore';
import ExamplePostsStore from '@/stores/models/ExamplePostsStore';

// Define a store just like a model
export const RootStore = types.model({
  commentsStore: ExampleCommentsStore.model,
  postsStore: ExamplePostsStore.model,
});

// Define a store just like a model
export const rootStoreInitialState = {
  commentsStore: ExampleCommentsStore.initialState,
  postsStore: ExamplePostsStore.initialState,
};

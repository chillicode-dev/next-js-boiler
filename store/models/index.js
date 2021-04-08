import {types} from 'mobx-state-tree';

import ExampleCommentsStore from '@/store/models/ExampleCommentsStore';
import ExamplePostsStore from '@/store/models/ExamplePostsStore';

// Define a store just like a model
export const RootStore = types.model({
  comments: ExampleCommentsStore.model,
  posts: ExamplePostsStore.model,
});

// Define a store just like a model
export const rootStoreInitialState = {
  comments: ExampleCommentsStore.initialState,
  posts: ExamplePostsStore.initialState,
};

import {useMemo} from 'react';
import {types, applySnapshot} from 'mobx-state-tree';

import CommentsStore from '@/stores/models/CommentsStore';
import PostsStore from '@/stores/models/PostsStore';
import {isServer} from '@/utils/env';

let store;

// Define a store just like a model
const RootStore = types.model({
  comments: CommentsStore.model,
  posts: PostsStore.model,
});

const rootStoreInitialState = {
  comments: CommentsStore.initialState,
  posts: PostsStore.initialState,
};

export function initStore(snapshot = null) {
  const _store = store ?? RootStore.create(rootStoreInitialState);

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (isServer) {
    return _store;
  }
  // Create the store once in the client
  if (!store) {
    store = _store;
  }

  return store;
}

export function useStore(initialState) {
  return useMemo(() => initStore(initialState), [initialState]);
}

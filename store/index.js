import {useMemo} from 'react';
import {inject, observer} from 'mobx-react';
import {applySnapshot} from 'mobx-state-tree';

import {RootStore, rootStoreInitialState} from '@/store/models';
import {isServer} from '@/utils/env';

let store;

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

export function connectMobX(component, stores = null) {
  return inject(stores || 'store')(observer(component));
}

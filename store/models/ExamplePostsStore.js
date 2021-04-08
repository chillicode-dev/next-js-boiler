import {types, destroy} from 'mobx-state-tree';

// Models
const Post = types.model({
  id: types.number,
  userId: types.number,
  title: types.string,
  body: types.string,
});

// Main store
const ExamplePostsStore = types
  .model({
    posts: types.array(Post),
    isLoading: types.boolean,
    error: types.string,
  })
  .actions(self => ({
    startLoading() {
      self.isLoading = true;
    },
    saveDataFromServer(posts) {
      self.posts = posts;
      self.isLoading = false;
    },
    async fetchData() {
      self.startLoading();
      const response = await fetch('http://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      self.saveDataFromServer(posts);
    },
    removePost(post) {
      destroy(post);
    },
  }));

// Instance initial state
const initialState = {
  posts: [],
  isLoading: false,
  error: '',
};

export default {
  model: ExamplePostsStore,
  initialState: initialState,
};

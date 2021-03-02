import {types, destroy, getParent} from 'mobx-state-tree';

// Define a couple models
const Comment = types
  .model({
    id: types.number,
    postId: types.number,
    name: types.string,
    email: types.string,
    body: types.string,
  })
  .actions(self => ({
    remove() {
      getParent(self, 2).remove(self);
    },
  }));

const CommentsStore = types
  .model({
    comments: types.array(Comment),
    isLoading: types.boolean,
    error: types.string,
  })
  .actions(self => ({
    startLoading() {
      self.isLoading = true;
    },
    saveDataFromServer(comments) {
      self.comments = comments;
      self.isLoading = false;
    },
    async fetchData() {
      self.startLoading();
      const response = await fetch('http://jsonplaceholder.typicode.com/comments');
      const comments = await response.json();
      self.saveDataFromServer(comments);
    },
    remove(comment) {
      destroy(comment);
    },
  }));

const initialState = {
  comments: [],
  isLoading: false,
  error: '',
};

export default {
  model: CommentsStore,
  initialState: initialState,
};

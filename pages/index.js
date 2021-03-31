import {getSnapshot} from 'mobx-state-tree';

import {initStore} from '@/stores';
import PostsView from '@/sections/PostsView';
import CommentsView from '@/sections/CommentsView';

function Index() {
  return (
    <div>
      <PostsView />
      <CommentsView />
    </div>
  );
}

export async function getServerSideProps() {
  const store = initStore();
  await Promise.all([store.posts.fetchData(), store.comments.fetchData()]);

  return {
    props: {
      initialState: getSnapshot(store),
    },
  };
}

export default Index;

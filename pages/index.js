import Link from 'next/link';
import {getSnapshot} from 'mobx-state-tree';

import TestIcon from '@/public/assets/icons/test-icon.svg';
import {initStore} from '@/stores';
import PostsView from '@/sections/PostsView';
import CommentsView from '@/sections/CommentsView';

function Index() {
  return (
    <div>
      <TestIcon width={64} height={64} />
      <h1>Homepage</h1>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
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

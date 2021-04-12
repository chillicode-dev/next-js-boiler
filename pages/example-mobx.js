import {getSnapshot} from 'mobx-state-tree';

import ExamplePostsSection from '@/sections/example-mobx/ExamplePostsSection';
import ExampleCommentsSection from '@/sections/example-mobx/ExampleCommentsSection';
import {initStore} from '@/stores';

function ExampleMobX() {
  return (
    <>
      <ExamplePostsSection />
      <ExampleCommentsSection />
    </>
  );
}

export async function getServerSideProps() {
  const store = initStore();
  await Promise.all([store.postsStore.fetchData(), store.commentsStore.fetchData()]);

  return {
    props: {
      initialState: getSnapshot(store),
    },
  };
}

export default ExampleMobX;

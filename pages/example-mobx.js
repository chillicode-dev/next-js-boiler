import {getSnapshot} from 'mobx-state-tree';

import ExamplePostsSection from '@/sections/example-mobx/ExamplePostsSection';
import ExampleCommentsSection from '@/sections/example-mobx/ExampleCommentsSection';
import {initStore} from '@/store';

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
  await Promise.all([store.posts.fetchData(), store.comments.fetchData()]);

  return {
    props: {
      initialState: getSnapshot(store),
    },
  };
}

export default ExampleMobX;

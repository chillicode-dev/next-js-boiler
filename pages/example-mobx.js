import {getSnapshot} from 'mobx-state-tree';

import ExamplePostsSection from '@/sections/example-mobx/ExamplePostsSection';
import ExampleCommentsSection from '@/sections/example-mobx/ExampleCommentsSection';

function ExampleMobX() {
  return (
    <>
      <ExamplePostsSection />
      <ExampleCommentsSection />
    </>
  );
}

ExampleMobX.getInitialProps = async ({store}) => {
  await Promise.all([store.postsStore.fetchDataIfNeeded(), store.commentsStore.fetchDataIfNeeded()]);
  return {};
};

export default ExampleMobX;

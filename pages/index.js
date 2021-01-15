import Link from 'next/link';

import {initStore} from '../store';
import {incrementCount} from '../store/modules/example';

function Index({reduxState}) {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Count: {reduxState.example.count}</p>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
}

// The data returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps() {
  const reduxStore = initStore();
  const {dispatch} = reduxStore;

  dispatch(incrementCount());
  dispatch(incrementCount());
  dispatch(incrementCount());

  return {
    props: {
      reduxState: reduxStore.getState(),
    },
  };
}

export default Index;

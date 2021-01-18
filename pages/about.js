import Link from 'next/link';
// import {initStore, useStore} from 'store';
import {ConnectedCounter} from 'components/Counter';

function About() {
  return (
    <div>
      <h1>About</h1>
      <div>
        <Link href="/">
          <a>homepage</a>
        </Link>
      </div>
      <ConnectedCounter />
    </div>
  );
}

// The data returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
// export function getServerSideProps() {
//   const reduxStore = initStore();
//
//   return {
//     props: {
//       reduxState: reduxStore.getState(),
//     },
//   };
// }

export default About;

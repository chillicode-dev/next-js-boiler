import Link from 'next/link';

import TestIcon from '@/public/assets/icons/test-icon.svg';

function About() {
  return (
    <div>
      <TestIcon width={64} height={64} />
      <h1>About</h1>
      <div>
        <Link href="/">
          <a>Index</a>
        </Link>
      </div>
    </div>
  );
}

export function getServerSideProps() {
  console.log('About getServerSideProps');

  return {
    props: {
      a: 1,
    },
  };
}

export default About;

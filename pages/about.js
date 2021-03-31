import Link from 'next/link';

import ExampleIcon from '@/public/assets/icons/example-icon.svg';

function About() {
  return (
    <div>
      <ExampleIcon width={64} height={64} />
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

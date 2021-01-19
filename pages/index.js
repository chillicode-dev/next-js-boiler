import Link from 'next/link';

import {ConnectedCounter} from 'components/Counter';
import TestIcon from 'public/assets/icons/test-icon.svg';

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
      <ConnectedCounter />
    </div>
  );
}

export default Index;

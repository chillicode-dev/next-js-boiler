import Link from 'next/link';

import ExampleIcon from '@/public/assets/icons/example-icon.svg';
import style from './style.module.scss';

function ExampleIntroSection() {
  return (
    <div className={style.ExampleIntroSection}>
      <div className={style.container}>
        <div>
          <ExampleIcon />
        </div>
        <h1 className={style.title}>Chillicode Next.js Boilerplate</h1>
        <div className={style.linksWrapper}>
          <Link href="/example-mobx">
            <a>Example MobX Usage</a>
          </Link>
          <a href="https://github.com/chillicode-dev/next-js-boiler" rel="noreferrer" target="_blank">
            Boilerplate Docs
          </a>
          <a href="https://nextjs.org/docs/getting-started" rel="noreferrer" target="_blank">
            Next.js Docs
          </a>
          <a href="https://storybook.js.org/docs/react/get-started/introduction" rel="noreferrer" target="_blank">
            Storybook Docs
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExampleIntroSection;

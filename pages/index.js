import Head from 'next/head';

import ExampleIntroSection from '@/sections/home/ExampleIntroSection';

function Index() {
  return (
    <>
      <Head>
        <title>Chillicode Next.js Boiler | Home</title>
      </Head>
      <ExampleIntroSection />
    </>
  );
}

export default Index;

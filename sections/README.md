### /sections/
Папка секций на страницах с уникальным контентом/дизайном. 
Каждая секция представляет уникальный компонент, чаще всего состоящий из reusable-компонентов
из папки `/components/`. 

Структура должна повторять структуру `/pages/`, только вместо файлов страниц создаются их папки с компонентами секций внутри.
Например, у нас есть страница `/pages/about` с секциями `IntroSection`, `AboutSection`, `ContactsSection`.

Тогда страница `about.js` будет выглядить примерно так:
```javascript
// Vendor
import React from 'react';
import Head from 'next/head';
// Internals
import {IntroSection, AboutSection, ContactsSection} from 'sections/about';

const About = () => (
  <React.Fragment>
    <Head>
      <title>About page</title>
    </Head>
    <IntroSection />
    <AboutSection />
    <ContactsSection />
  </React.Fragment>
);

export default About;

```

A внутри `/sections/` будет следующая структура:
```
./sections
 ├─...
 ├─about/
 │ ├─index.js // Файл экспорта секций
 │ ├─IntroSection.js
 │ ├─AboutSection.js
 │ └─ContactsSection.js
 └─...
```
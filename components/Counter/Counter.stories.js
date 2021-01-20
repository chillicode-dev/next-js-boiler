import React from 'react';

import Counter from './Counter';

export default {
  title: 'App/Counter',
  component: Counter,
  argTypes: {},
};

const Template = args => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 1,
};

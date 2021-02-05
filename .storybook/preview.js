import '@/styles/base.scss';
import '@/styles/storybook.scss';

import colors from '@/styles/config/colors.json';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  backgrounds: {
    default: 'primary',
    values: [
      {
        name: 'primary',
        value: colors.bgColor,
      },
      {
        name: 'secondary',
        value: colors.bgSecondaryColor,
      },
    ],
  },
};

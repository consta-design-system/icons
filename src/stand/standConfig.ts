import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta icons',
  id: 'icons',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
    },
    {
      title: 'Иконки',
      id: 'icons',
    },
  ],
  group: 'Иконки',
  image,
  description: 'Иконки дизайн-системы Consta',
});

import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';
import { StandPageDecoration as standPageDecoration } from './StandPageDecoration';

export const { createStand } = createConfig({
  title: 'Consta icons',
  id: 'icons',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
      initialOpen: true,
    },
    {
      title: 'Иконки',
      id: 'icons',
      initialOpen: true,
    },
    {
      title: 'Компоненты',
      id: 'components',
      initialOpen: true,
    },
  ],
  group: 'Основные библиотеки',
  repositoryUrl: 'https://github.com/consta-design-system/icons',
  image,
  standPageDecoration,
  description: 'Иконки дизайн-системы Consta',
});

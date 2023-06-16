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
    {
      title: 'HOCS',
      id: 'hocs',
      initialOpen: true,
    },
  ],
  group: 'Библиотеки',
  repositoryUrl: 'https://github.com/consta-design-system/icons',
  image,
  standPageDecoration,
  description: 'Иконки дизайн-системы Consta для любых сервисов и продуктов',
  figmaUrl:
    'https://www.figma.com/file/ArxQ0PPwc1poFIFPD03XyI/Consta-Graphics-(Community)?type=design&node-id=0-1&t=myF42h4nWvzjwuym-0',
});

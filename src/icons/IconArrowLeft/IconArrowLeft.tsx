import { createIcon } from '../Icon';
import IconArrowLeftSizeM from './IconArrowLeft_size_m';
import IconArrowLeftSizeS from './IconArrowLeft_size_s';
import IconArrowLeftSizeXs from './IconArrowLeft_size_xs';

export const IconArrowLeft = createIcon({
  l: IconArrowLeftSizeM,
  m: IconArrowLeftSizeM,
  s: IconArrowLeftSizeS,
  xs: IconArrowLeftSizeXs,
  name: 'IconArrowLeft',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

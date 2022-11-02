import { createIcon } from '../Icon';
import IconTopRightSizeM from './IconTopRight_size_m';
import IconTopRightSizeS from './IconTopRight_size_s';
import IconTopRightSizeXs from './IconTopRight_size_xs';

export const IconTopRight = createIcon({
  l: IconTopRightSizeM,
  m: IconTopRightSizeM,
  s: IconTopRightSizeS,
  xs: IconTopRightSizeXs,
  name: 'IconTopRight',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

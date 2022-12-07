import { createIcon } from '../Icon';
import IconSkypeSizeM from './IconSkype_size_m';
import IconSkypeSizeS from './IconSkype_size_s';
import IconSkypeSizeXs from './IconSkype_size_xs';

export const IconSkype = createIcon({
  l: IconSkypeSizeM,
  m: IconSkypeSizeM,
  s: IconSkypeSizeS,
  xs: IconSkypeSizeXs,
  name: 'IconSkype',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

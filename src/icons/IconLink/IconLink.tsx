import { createIcon } from '../createIcon/createIcon';
import IconLinkSizeM from './IconLink_size_m';
import IconLinkSizeS from './IconLink_size_s';
import IconLinkSizeXs from './IconLink_size_xs';

export const IconLink = createIcon({
  l: IconLinkSizeM,
  m: IconLinkSizeM,
  s: IconLinkSizeS,
  xs: IconLinkSizeXs,
  name: 'IconLink',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

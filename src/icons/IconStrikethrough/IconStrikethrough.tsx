import { createIcon } from '../Icon';
import IconStrikethroughSizeM from './IconStrikethrough_size_m';
import IconStrikethroughSizeS from './IconStrikethrough_size_s';
import IconStrikethroughSizeXs from './IconStrikethrough_size_xs';

export const IconStrikethrough = createIcon({
  l: IconStrikethroughSizeM,
  m: IconStrikethroughSizeM,
  s: IconStrikethroughSizeS,
  xs: IconStrikethroughSizeXs,
  name: 'IconStrikethrough',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

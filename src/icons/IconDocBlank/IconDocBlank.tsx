import { createIcon } from '../createIcon/createIcon';
import IconDocBlankSizeM from './IconDocBlank_size_m';
import IconDocBlankSizeS from './IconDocBlank_size_s';
import IconDocBlankSizeXs from './IconDocBlank_size_xs';

export const IconDocBlank = createIcon({
  l: IconDocBlankSizeM,
  m: IconDocBlankSizeM,
  s: IconDocBlankSizeS,
  xs: IconDocBlankSizeXs,
  name: 'IconDocBlank',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

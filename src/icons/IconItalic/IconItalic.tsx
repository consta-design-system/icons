import { createIcon } from '../Icon';
import IconItalicSizeM from './IconItalic_size_m';
import IconItalicSizeS from './IconItalic_size_s';
import IconItalicSizeXs from './IconItalic_size_xs';

export const IconItalic = createIcon({
  l: IconItalicSizeM,
  m: IconItalicSizeM,
  s: IconItalicSizeS,
  xs: IconItalicSizeXs,
  name: 'IconItalic',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

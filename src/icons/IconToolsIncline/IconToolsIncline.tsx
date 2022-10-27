import { createIcon } from '../createIcon/createIcon';
import IconToolsInclineSizeS from './IconToolsIncline_size_s';

export const IconToolsIncline = createIcon({
  l: IconToolsInclineSizeS,
  m: IconToolsInclineSizeS,
  s: IconToolsInclineSizeS,
  xs: IconToolsInclineSizeS,
  name: 'IconToolsIncline',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});

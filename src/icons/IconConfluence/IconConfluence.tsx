import { createIcon } from '../Icon';
import IconConfluenceSizeM from './IconConfluence_size_m';
import IconConfluenceSizeS from './IconConfluence_size_s';

export const IconConfluence = createIcon({
  l: IconConfluenceSizeM,
  m: IconConfluenceSizeM,
  s: IconConfluenceSizeS,
  xs: IconConfluenceSizeM,
  name: 'IconConfluence',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

import { createIcon } from '../Icon';
import IconBookmarkStrokedSizeL from './IconBookmarkStroked_size_l';
import IconBookmarkStrokedSizeM from './IconBookmarkStroked_size_m';
import IconBookmarkStrokedSizeS from './IconBookmarkStroked_size_s';
import IconBookmarkStrokedSizeXs from './IconBookmarkStroked_size_xs';

export const IconBookmarkStroked = createIcon({
  l: IconBookmarkStrokedSizeL,
  m: IconBookmarkStrokedSizeM,
  s: IconBookmarkStrokedSizeS,
  xs: IconBookmarkStrokedSizeXs,
  name: 'IconBookmarkStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

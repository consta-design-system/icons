import { createIcon } from '../Icon';
import IconRecordSizeM from './IconRecord_size_m';
import IconRecordSizeS from './IconRecord_size_s';
import IconRecordSizeXs from './IconRecord_size_xs';

export const IconRecord = createIcon({
  l: IconRecordSizeM,
  m: IconRecordSizeM,
  s: IconRecordSizeS,
  xs: IconRecordSizeXs,
  name: 'IconRecord',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

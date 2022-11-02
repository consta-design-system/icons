import { createIcon } from '../Icon';
import IconTestSizeM from './IconTest_size_m';
import IconTestSizeS from './IconTest_size_s';
import IconTestSizeXs from './IconTest_size_xs';

export const IconTest = createIcon({
  l: IconTestSizeM,
  m: IconTestSizeM,
  s: IconTestSizeS,
  xs: IconTestSizeXs,
  name: 'IconTest',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

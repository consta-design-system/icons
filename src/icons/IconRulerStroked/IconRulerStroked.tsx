import { createIcon } from '../Icon';
import IconRulerStrokedSizeM from './IconRulerStroked_size_m';
import IconRulerStrokedSizeS from './IconRulerStroked_size_s';
import IconRulerStrokedSizeXs from './IconRulerStroked_size_xs';

export const IconRulerStroked = createIcon({
  l: IconRulerStrokedSizeM,
  m: IconRulerStrokedSizeM,
  s: IconRulerStrokedSizeS,
  xs: IconRulerStrokedSizeXs,
  name: 'IconRulerStroked',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

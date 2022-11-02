import { createIcon } from '../Icon';
import IconRulerFilledSizeM from './IconRulerFilled_size_m';
import IconRulerFilledSizeS from './IconRulerFilled_size_s';
import IconRulerFilledSizeXs from './IconRulerFilled_size_xs';

export const IconRulerFilled = createIcon({
  l: IconRulerFilledSizeM,
  m: IconRulerFilledSizeM,
  s: IconRulerFilledSizeS,
  xs: IconRulerFilledSizeXs,
  name: 'IconRulerFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

import { createIcon } from '../Icon';
import IconFishboneFilledSizeM from './IconFishboneFilled_size_m';
import IconFishboneFilledSizeS from './IconFishboneFilled_size_s';
import IconFishboneFilledSizeXs from './IconFishboneFilled_size_xs';

export const IconFishboneFilled = createIcon({
  l: IconFishboneFilledSizeM,
  m: IconFishboneFilledSizeM,
  s: IconFishboneFilledSizeS,
  xs: IconFishboneFilledSizeXs,
  name: 'IconFishboneFilled',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

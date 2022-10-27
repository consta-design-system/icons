import { createIcon } from '../createIcon/createIcon';
import IconPanelBottomSizeM from './IconPanelBottom_size_m';
import IconPanelBottomSizeS from './IconPanelBottom_size_s';
import IconPanelBottomSizeXs from './IconPanelBottom_size_xs';

export const IconPanelBottom = createIcon({
  l: IconPanelBottomSizeM,
  m: IconPanelBottomSizeM,
  s: IconPanelBottomSizeS,
  xs: IconPanelBottomSizeXs,
  name: 'IconPanelBottom',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

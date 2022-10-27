import { createIcon } from '../createIcon/createIcon';
import IconPanelLeftSizeM from './IconPanelLeft_size_m';
import IconPanelLeftSizeS from './IconPanelLeft_size_s';
import IconPanelLeftSizeXs from './IconPanelLeft_size_xs';

export const IconPanelLeft = createIcon({
  l: IconPanelLeftSizeM,
  m: IconPanelLeftSizeM,
  s: IconPanelLeftSizeS,
  xs: IconPanelLeftSizeXs,
  name: 'IconPanelLeft',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

import { createIcon } from '../Icon';
import IconPanelRightSizeM from './IconPanelRight_size_m';
import IconPanelRightSizeS from './IconPanelRight_size_s';
import IconPanelRightSizeXs from './IconPanelRight_size_xs';

export const IconPanelRight = createIcon({
  l: IconPanelRightSizeM,
  m: IconPanelRightSizeM,
  s: IconPanelRightSizeS,
  xs: IconPanelRightSizeXs,
  name: 'IconPanelRight',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

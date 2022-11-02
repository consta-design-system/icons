import { createIcon } from '../Icon';
import IconPanelTopSizeM from './IconPanelTop_size_m';
import IconPanelTopSizeS from './IconPanelTop_size_s';
import IconPanelTopSizeXs from './IconPanelTop_size_xs';

export const IconPanelTop = createIcon({
  l: IconPanelTopSizeM,
  m: IconPanelTopSizeM,
  s: IconPanelTopSizeS,
  xs: IconPanelTopSizeXs,
  name: 'IconPanelTop',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

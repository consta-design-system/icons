import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPanelTopSizeM from './IconPanelTop_size_m';
import IconPanelTopSizeS from './IconPanelTop_size_s';
import IconPanelTopSizeXs from './IconPanelTop_size_xs';

const props: CreateIconArguments = {
  l: IconPanelTopSizeM,
  m: IconPanelTopSizeM,
  s: IconPanelTopSizeS,
  xs: IconPanelTopSizeXs,
  name: 'IconPanelTop',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;

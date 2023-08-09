import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconPanelLeftSizeM from './IconPanelLeft_size_m';
import IconPanelLeftSizeS from './IconPanelLeft_size_s';
import IconPanelLeftSizeXs from './IconPanelLeft_size_xs';

const props: CreateIconArguments = {
  l: IconPanelLeftSizeM,
  m: IconPanelLeftSizeM,
  s: IconPanelLeftSizeS,
  xs: IconPanelLeftSizeXs,
  name: 'IconPanelLeft',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;

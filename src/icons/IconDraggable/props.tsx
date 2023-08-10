import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconDraggableSizeM from './IconDraggable_size_m';
import IconDraggableSizeS from './IconDraggable_size_s';
import IconDraggableSizeXs from './IconDraggable_size_xs';

const props: CreateIconArguments = {
  l: IconDraggableSizeM,
  m: IconDraggableSizeM,
  s: IconDraggableSizeS,
  xs: IconDraggableSizeXs,
  name: 'IconDraggable',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;

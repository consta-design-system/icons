import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconCursorMouseSizeM from './IconCursorMouse_size_m';
import IconCursorMouseSizeS from './IconCursorMouse_size_s';
import IconCursorMouseSizeXs from './IconCursorMouse_size_xs';

const props: CreateIconArguments = {
  l: IconCursorMouseSizeM,
  m: IconCursorMouseSizeM,
  s: IconCursorMouseSizeS,
  xs: IconCursorMouseSizeXs,
  name: 'IconCursorMouse',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;

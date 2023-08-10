import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconArtBrushSizeM from './IconArtBrush_size_m';
import IconArtBrushSizeS from './IconArtBrush_size_s';
import IconArtBrushSizeXs from './IconArtBrush_size_xs';

const props: CreateIconArguments = {
  l: IconArtBrushSizeM,
  m: IconArtBrushSizeM,
  s: IconArtBrushSizeS,
  xs: IconArtBrushSizeXs,
  name: 'IconArtBrush',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;

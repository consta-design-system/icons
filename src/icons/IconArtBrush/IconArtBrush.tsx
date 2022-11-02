import { createIcon } from '../Icon';
import IconArtBrushSizeM from './IconArtBrush_size_m';
import IconArtBrushSizeS from './IconArtBrush_size_s';
import IconArtBrushSizeXs from './IconArtBrush_size_xs';

export const IconArtBrush = createIcon({
  l: IconArtBrushSizeM,
  m: IconArtBrushSizeM,
  s: IconArtBrushSizeS,
  xs: IconArtBrushSizeXs,
  name: 'IconArtBrush',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

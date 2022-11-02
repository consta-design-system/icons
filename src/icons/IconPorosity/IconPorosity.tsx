import { createIcon } from '../Icon';
import IconPorositySizeS from './IconPorosity_size_s';

export const IconPorosity = createIcon({
  l: IconPorositySizeS,
  m: IconPorositySizeS,
  s: IconPorositySizeS,
  xs: IconPorositySizeS,
  name: 'IconPorosity',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});

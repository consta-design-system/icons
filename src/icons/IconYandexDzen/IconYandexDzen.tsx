import { createIcon } from '../Icon';
import IconYandexDzenSizeM from './IconYandexDzen_size_m';
import IconYandexDzenSizeS from './IconYandexDzen_size_s';
import IconYandexDzenSizeXs from './IconYandexDzen_size_xs';

export const IconYandexDzen = createIcon({
  l: IconYandexDzenSizeM,
  m: IconYandexDzenSizeM,
  s: IconYandexDzenSizeS,
  xs: IconYandexDzenSizeXs,
  name: 'IconYandexDzen',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

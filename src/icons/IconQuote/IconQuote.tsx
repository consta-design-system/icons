import { createIcon } from '../Icon';
import IconQuoteSizeM from './IconQuote_size_m';
import IconQuoteSizeS from './IconQuote_size_s';
import IconQuoteSizeXs from './IconQuote_size_xs';

export const IconQuote = createIcon({
  l: IconQuoteSizeM,
  m: IconQuoteSizeM,
  s: IconQuoteSizeS,
  xs: IconQuoteSizeXs,
  name: 'IconQuote',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

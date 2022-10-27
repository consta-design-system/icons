import { createIcon } from '../createIcon/createIcon';
import IconColoredEventSizeXs from './IconColoredEvent_size_xs';

export const IconColoredEvent = createIcon({
  l: IconColoredEventSizeXs,
  m: IconColoredEventSizeXs,
  s: IconColoredEventSizeXs,
  xs: IconColoredEventSizeXs,
  name: 'IconColoredEvent',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});

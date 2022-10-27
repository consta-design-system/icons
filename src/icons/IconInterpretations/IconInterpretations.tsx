import { createIcon } from '../createIcon/createIcon';
import IconInterpretationsSizeS from './IconInterpretations_size_s';

export const IconInterpretations = createIcon({
  l: IconInterpretationsSizeS,
  m: IconInterpretationsSizeS,
  s: IconInterpretationsSizeS,
  xs: IconInterpretationsSizeS,
  name: 'IconInterpretations',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'multiple',
});

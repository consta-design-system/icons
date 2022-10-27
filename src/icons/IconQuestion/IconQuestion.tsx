import { createIcon } from '../createIcon/createIcon';
import IconQuestionSizeM from './IconQuestion_size_m';
import IconQuestionSizeS from './IconQuestion_size_s';
import IconQuestionSizeXs from './IconQuestion_size_xs';

export const IconQuestion = createIcon({
  l: IconQuestionSizeM,
  m: IconQuestionSizeM,
  s: IconQuestionSizeS,
  xs: IconQuestionSizeXs,
  name: 'IconQuestion',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
});

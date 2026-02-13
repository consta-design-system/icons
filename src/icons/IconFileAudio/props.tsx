import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconFileAudioSizeM from './IconFileAudio_size_m';
import IconFileAudioSizeS from './IconFileAudio_size_s';

const props: CreateIconArguments = {
  l: IconFileAudioSizeM,
  m: IconFileAudioSizeM,
  s: IconFileAudioSizeS,
  xs: IconFileAudioSizeM,
  name: 'IconFileAudio',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;

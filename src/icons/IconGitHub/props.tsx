import { CreateIconArguments } from '##/icons/Icon/helpers';

import IconGitHubSizeM from './IconGitHub_size_m';
import IconGitHubSizeS from './IconGitHub_size_s';
import IconGitHubSizeXs from './IconGitHub_size_xs';

const props: CreateIconArguments = {
  l: IconGitHubSizeM,
  m: IconGitHubSizeM,
  s: IconGitHubSizeS,
  xs: IconGitHubSizeXs,
  name: 'IconGitHub',
  renderType: { l: 'use', m: 'use', s: 'use', xs: 'use' },
  color: 'mono',
};

export default props;

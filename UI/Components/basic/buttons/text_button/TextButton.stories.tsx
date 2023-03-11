/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react-native';

import AppButton from './TextButton';
import Colors from '../../../config/Colors';

storiesOf('Test Component', module).add('example', () => (
  <AppButton
    text="hello hhhhhhhhh"
    backgroundColor={Colors.primary}
    color={Colors.white}
  />
));

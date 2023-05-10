import { ScrollView, View } from 'react-native';
import styles from './style/index';
import AppText from '@components/basic/app_text';
import BorderContainer from '@containers/border_container';
import PrimaryButton from '@components/basic/buttons/primary_button';
import AppTextInput from '@components/basic/inputs/app_text_input';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import routes from '@navigation/routes';
import { StepStackParamList } from '@navigation/step_navigator/StepNavigator';
import { MainStackParamList } from '@navigation/main_navigator/MainNavigator';

type NavigationProp = CompositeNavigationProp<
  StackNavigationProp<StepStackParamList, 'ConfirmationStep'>,
  StackNavigationProp<MainStackParamList>
>;

interface ConfirmStepProps {}
export default function ConfirmStep({}: ConfirmStepProps) {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView contentContainerStyle={styles.ConfirmStep}>
      <AppText text="Step 3: Confirm and publish!" style={styles.stepName} />
      <BorderContainer style={styles.infoWrapper}>
        <View style={styles.infoContainer}>
          <AppText text="you are going to pay" style={styles.description} />
          <View style={styles.priceContainer}>
            <AppText text="900" style={styles.price} />
            <AppText text="Dzd" style={styles.tag} />
          </View>
          <AppText text="using the option bellow:" style={styles.description} />
        </View>
        <BorderContainer style={styles.payTextContainer}>
          <AppText text="Pay on arrive" style={styles.payText} />
        </BorderContainer>
      </BorderContainer>
      <AppTextInput
        label="Add a note for the delivery guy:"
        inputProps={{
          // value: costumeDetail,
          // onChangeText: setCostumeDetail,
          multiline: true,
        }}
      />
      <View style={styles.controlsContainer}>
        <PrimaryButton
          text="Confirm"
          style={styles.confirmButton}
          onPress={() => {
            navigation.replace(routes.DeliveryFinished);
          }}
        />
        <PrimaryButton
          text="Cancel"
          style={styles.cancelButton}
          onPress={() => {
            navigation.replace(routes.HomeTabs);
          }}
        />
      </View>
    </ScrollView>
  );
}

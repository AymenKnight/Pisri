import { View } from 'react-native';
import styles from './style/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '@navigation/routes';
import DeliveryOptionsStep from '@components/delivery_options_step';
import PaymentMethodStep from '@components/payment_method_step';
import ConfirmStep from '@components/confirm_step';
import StepDotHeader from '@components/step_dot_header';
import { useState } from 'react';

export type StepStackParamList = {
  DeliveryOptionsStep: undefined;
  PaymentMethodStep: undefined;
  ConfirmationStep: undefined;
};
const StepStack = createNativeStackNavigator<StepStackParamList>();
interface StepNavigatorProps {}
export default function StepNavigator({}: StepNavigatorProps) {
  const [index, setIndex] = useState(0);
  const [routeNames, setRouteNames] = useState([]);

  return (
    <View style={styles.StepNavigator}>
      <StepDotHeader index={index} routeNames={routeNames} />
      <StepStack.Navigator
        screenListeners={({ navigation }) => ({
          state: (e) => {
            if (e.data) {
              setRouteNames((e.data as any).state.routeNames);
              setIndex((e.data as any).state.index);
            }
            if (!navigation.canGoBack()) {
              console.log("we're on the initial screen");
            }
          },
        })}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <StepStack.Screen
          name={routes.DeliveryOptionsStep}
          component={DeliveryOptionsStep}
        />
        <StepStack.Screen
          name={routes.PaymentMethodStep}
          component={PaymentMethodStep}
        />
        <StepStack.Screen
          name={routes.ConfirmationStep}
          component={ConfirmStep}
        />
      </StepStack.Navigator>
    </View>
  );
}

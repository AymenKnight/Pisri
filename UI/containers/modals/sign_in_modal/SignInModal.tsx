import * as yup from 'yup';
import { Formik } from 'formik';
import { Alert, View } from 'react-native';
import AppTextInput from '@components/basic/inputs/app_text_input';
import PasswordInput from '@components/basic/inputs/password_input';
import PrimaryButton from '@components/basic/buttons/primary_button';
import { useOverlayStore } from '@stores/overlayStore';
import style from './style';
import AppText from '@components/basic/app_text';
import TipFooter from '@components/tip_footer';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@api/firebase/firebase.utils';

const SignInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Not a valid email')
    .required('Email is required')
    .label('email'),
  password: yup
    .string()
    .required('Password is required')
    .min(4)
    .label('password'),
});
interface LoginFormValues {
  email: string;
  password: string;
}
interface SignInModalProps {
  handleToggle: () => void;
}
export default function SignInModal({ handleToggle }: SignInModalProps) {
  const { close } = useOverlayStore();
  const initialValues: LoginFormValues = { email: '', password: '' };
  const onSubmit = (values: LoginFormValues) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        close();
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(
          'Sign Up error !',
          error.message,
          [
            {
              text: 'Retry',
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
          },
        );
      });
  };

  return (
    <Formik
      validationSchema={SignInValidationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={style.SignInModal}>
          <AppText text="Sign In" style={style.headerTitle} />
          <View style={style.inputsContainer}>
            <AppTextInput
              label="Email"
              error={errors.email && touched.email ? errors.email : undefined}
              inputProps={{
                onChangeText: handleChange('email'),
                onBlur: handleBlur('email'),
                value: values.email,
                keyboardType: 'email-address',
              }}
            />

            <PasswordInput
              label="Password"
              error={
                errors.password && touched.password
                  ? errors.password
                  : undefined
              }
              inputProps={{
                onChangeText: handleChange('password'),
                onBlur: handleBlur('password'),
                value: values.password,
              }}
            />
          </View>

          <PrimaryButton text="Sign In" onPress={handleSubmit} />
          <TipFooter
            tipText="Don't have an account?"
            action={{
              text: 'Sign Up',
              onPress: () => {
                // close();

                // modal(<SignUpModal />).open();
                handleToggle();
              },
            }}
          />
        </View>
      )}
    </Formik>
  );
}

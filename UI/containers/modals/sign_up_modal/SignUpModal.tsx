import { View } from 'react-native';
import TipFooter from '@components/tip_footer';
import PrimaryButton from '@components/basic/buttons/primary_button';
import PasswordInput from '@components/basic/inputs/password_input';
import AppTextInput from '@components/basic/inputs/app_text_input';
import AppText from '@components/basic/app_text';
import { Formik } from 'formik';
import { useOverlayStore } from '@stores/overlayStore';
import * as yup from 'yup';
import style from './style';
import SignInModal from '@containers/modals/sign_in_modal';

const SignUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full name is required')
    .min(3)
    .label('full name'),
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
interface RegisterFormValues {
  email: string;
  password: string;
  fullName: string;
}
interface SignUpModalProps {}
export default function SignUpModal({}: SignUpModalProps) {
  const { modal, close } = useOverlayStore();
  const initialValues: RegisterFormValues = {
    fullName: '',
    email: '',
    password: '',
  };
  const onSubmit = (values: RegisterFormValues) => {
    close();
  };
  return (
    <Formik
      validationSchema={SignUpValidationSchema}
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
        <View style={style.SignUpModal}>
          <AppText text="Sign Up" style={style.headerTitle} />
          <View style={style.inputsContainer}>
            <AppTextInput
              label="Full Name"
              error={
                errors.fullName && touched.fullName
                  ? errors.fullName
                  : undefined
              }
              inputProps={{
                onChangeText: handleChange('fullName'),
                onBlur: handleBlur('fullName'),
                value: values.fullName,
              }}
            />

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

          <PrimaryButton text="Sign Up" onPress={handleSubmit} />
          <TipFooter
            tipText="Already have an account?"
            action={{
              text: 'Sign In',
              onPress: () => {
                close();
                modal(<SignInModal />).open();
              },
            }}
          />
        </View>
      )}
    </Formik>
  );
}

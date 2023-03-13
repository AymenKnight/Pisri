import * as yup from 'yup';
import { Formik } from 'formik';
import { View } from 'react-native';
import AppTextInput from '@components/basic/inputs/app_text_input';
import PasswordInput from '@components/basic/inputs/password_input';
import PrimaryButton from '@components/basic/buttons/primary_button';
import { useOverlayStore } from '@stores/overlayStore';

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
interface SignInModalProps {}
export default function SignInModal({}: SignInModalProps) {
  const { modal, close } = useOverlayStore();
  const initialValues: LoginFormValues = { email: '', password: '' };
  const onSubmit = (values: LoginFormValues) => {
    close();
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
        <View>
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

          {/* {errors.email && touched.email && <Text>{errors.email}</Text>} */}
          <PasswordInput
            label="Password"
            error={
              errors.password && touched.password ? errors.password : undefined
            }
            inputProps={{
              onChangeText: handleChange('password'),
              onBlur: handleBlur('password'),
              value: values.password,
            }}
          />
          {/* {errors.password && touched.password && (
            <Text>{errors.password}</Text>
          )} */}

          <PrimaryButton text="Sign In" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

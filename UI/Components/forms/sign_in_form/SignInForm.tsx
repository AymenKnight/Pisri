import { View } from 'react-native';
import styles from './style/index';
import * as yup from 'yup';

const SignIn_validationSchema = yup.object().shape({
  Email: yup.string().email().required().label('Email'),
  Password: yup.string().required().min(4).label('Password'),
});

interface SignInFormProps {}
export default function SignInForm({}: SignInFormProps) {
  return <View style={styles.SignInForm}></View>;
}

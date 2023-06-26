import * as yup from 'yup';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5)
    .max(30)
    .required(`Username is required`),
  password: yup
    .string()
    .min(5)
    .max(50)
    .required(`Password is required`),
  confirmPassword: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const initialValues = {
  username: '',
  password: '',
  confirmPassword: ''
};

const styles = StyleSheet.create({
  content: {
    paddingTop: 10, 
    paddingLeft: 25, 
    paddingRight: 25,
    paddingBottom: 10
  }
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
    {( { handleSubmit }) => (
      <View style={styles.content}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <FormikTextInput name="confirmPassword" placeholder="Password confirmation" />
      <Pressable onPress={handleSubmit}>
      <Text fontWeight='bold' backgroundColor='primary' color='textWhite' style={{paddingTop: 8, paddingBottom: 8, textAlighVertically: 'center', textAlign: 'center', ...styles.input}}>Sign Up</Text>
      </Pressable>
    </View>
    )}
    </Formik>
  );
};

const SignUpContainer = ({ onSubmit }) => (
  <SignUpForm onSubmit={onSubmit} />
);

export default SignUpContainer;
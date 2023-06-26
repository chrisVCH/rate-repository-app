import * as yup from 'yup';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  });

const initialValues = {
    username: '',
    password: '',
  };

const styles = StyleSheet.create({
  content: {
    paddingTop: 10, 
    paddingLeft: 25, 
    paddingRight: 25,
    paddingBottom: 10
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
    {( { handleSubmit }) => (
      <View style={styles.content}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />
      <Pressable onPress={handleSubmit}>
      <Text fontWeight='bold' backgroundColor='primary' color='textWhite' style={{paddingTop: 8, paddingBottom: 8, textAlighVertically: 'center', textAlign: 'center', ...styles.input}}>Sign In</Text>
      </Pressable>
    </View>
    )}
    </Formik>
  );
};

const SignInContainer = ({ onSubmit }) => (
  <SignInForm onSubmit={onSubmit} />
);

export default SignInContainer;
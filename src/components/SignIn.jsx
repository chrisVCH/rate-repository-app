import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';

const styles = StyleSheet.create({
  content: {
    paddingTop: 10, 
    paddingLeft: 25, 
    paddingRight: 25,
    paddingBottom: 10
  }
 });

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const SignIn = () => (
  <>
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <View style={styles.content}>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />
        <Pressable onPress={onSubmit}>
          <Text fontWeight='bold' backgroundColor='primary' color='textWhite' style={{paddingTop: 8, paddingBottom: 8, textAlighVertically: 'center', textAlign: 'center', ...styles.input}}>Sign In</Text>
        </Pressable>
      </View>
    </Formik>
  </>
);

export default SignIn;
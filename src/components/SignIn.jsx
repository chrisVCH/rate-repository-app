import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  content: {
    paddingTop: 10, 
    paddingLeft: 25, 
    paddingRight: 25,
    paddingBottom: 10
  }
 });

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.content}>
    <FormikTextInput name="username" placeholder="Username" />
    <FormikTextInput secureTextEntry={true} name="password" placeholder="Password" />
    <Pressable onPress={onSubmit}>
      <Text fontWeight='bold' backgroundColor='primary' color='textWhite' style={{paddingTop: 8, paddingBottom: 8, textAlighVertically: 'center', textAlign: 'center', ...styles.input}}>Sign In</Text>
    </Pressable>
  </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    
    try {
      const { data } = await signIn({ username, password });
      if (data) {
        
        navigate("/");
      }
    } catch (e) {
      console.log('error...', e);
    }
  };
  return (
  <>
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
       {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  </>
)};

export default SignIn;
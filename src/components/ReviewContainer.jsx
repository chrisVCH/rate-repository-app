import * as yup from 'yup';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required(`Repository Owner's username is required`),
  repositoryName: yup
  .string()
    .required(`Repository's name is required`),
  rating: yup
    .number()
    .min(0, 'Too small!')
    .max(100, 'Too big!')
    .required('Rating is a number between 0 and 100'),
  text: yup
    .string()
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const styles = StyleSheet.create({
  content: {
    paddingTop: 10, 
    paddingLeft: 25, 
    paddingRight: 25,
    paddingBottom: 10
  }
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
    {( { handleSubmit }) => (
            <View style={styles.content}>
            <FormikTextInput name="ownerName" placeholder="Repository owner name" />
            <FormikTextInput name="repositoryName" placeholder="Repository name" />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
            <FormikTextInput name="text" placeholder="Review" multiline="true" />
            <Pressable onPress={handleSubmit}>
            <Text fontWeight='bold' backgroundColor='primary' color='textWhite' style={{paddingTop: 8, paddingBottom: 8, textAlighVertically: 'center', textAlign: 'center', ...styles.input}}>Create a review</Text>
            </Pressable>
          </View>
    )}
    </Formik>
  );
};

const ReviewContainer = ({ onSubmit }) => (
  <ReviewForm onSubmit={onSubmit} />
);

export default ReviewContainer;
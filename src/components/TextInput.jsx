import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 5,
    marginBottom: 5
  },
  normalBorder: {
    borderColor: theme.backgroundColors.primary
  },
  errorBorder: {
    borderColor: theme.colors.errorColor,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = error ? 
    [styles.input, styles.errorBorder, style].filter(Boolean)
    : [styles.input, styles.normalBorder, style].filter(Boolean);

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
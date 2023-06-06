import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.textWhite
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  backgroundColor: {
    backgroundColor: theme.colors.primary
  },
  borderRadius: {
    borderRadius: theme.borderRadius.primary
  },
  font: {
    fontFamily: Platform.select({
      android: 'sans-serif',
      ios: 'Arial',
      default: 'System'
    })
  }
});

const Text = ({ color, fontSize, fontWeight, style, backgroundColor, borderRadius, ...props }) => {
  const textStyle = [
    styles.text,
    styles.font,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'textWhite' && styles.colorWhite,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    backgroundColor === 'primary' && styles.backgroundColor,
    borderRadius === 'primary' && styles.borderRadius.primary,
    style
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
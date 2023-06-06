import { StyleSheet } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  }
});

const Main = () => (
  <>
    <AppBar />
    <Routes>
      <Route path="/" element={<RepositoryList style={styles.container} />} exact />
      <Route path="/signin" element={<SignIn />} exact />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default Main;
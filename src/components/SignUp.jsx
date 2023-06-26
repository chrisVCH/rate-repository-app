import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const [signUp] = useSignUp();
  const [singIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    
    try {
      const { data } = await signUp({ username, password });
      if (data) {
        const result = await singIn({ username, password });
          if (result.data) {
            navigate("/");
          }
      }
    } catch (e) {
      console.log('error...', e);
    }
  };
  return (
    <SignUpContainer onSubmit={onSubmit} />
)};

export default SignUp;
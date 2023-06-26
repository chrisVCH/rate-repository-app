import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      render(<SignInContainer onSubmit={onSubmit} />);
      
      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'myusername');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'mypassword');
      fireEvent.press(screen.getByText('Sign In'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'myusername',
          password: 'mypassword',
        }); 
      });
    });
  });
});
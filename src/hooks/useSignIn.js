import { useMutation, useApolloClient } from "@apollo/client";
import { USESR_LOG_IN } from "../../graphql/queries";
import { useAuthStorage } from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  const [mutate, result] = useMutation(USESR_LOG_IN, {
    onError: (error) => {
      console.log('error...', error.message);
    },
    onCompleted: async (data) => {
      const token = data.authenticate.accessToken;
      await authStorage.setAccessToken(token);
      apolloClient.resetStore();
    }
  });

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    //const data = { 'username': username, 'password': password }
    return await mutate({ variables: {
      credentials: { 
        'username': username, 
        'password': password 
      }
    }});
  };

  return [signIn, result];
};

export default useSignIn;
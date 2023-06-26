import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/queries";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER, {
    onError: (error) => {
      console.log('error...', error.message);
    },
    onCompleted: async (data) => {
      console.log('success...', data.createUser.id);
    }
  });

  const createUser = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    //const data = { 'username': username, 'password': password }
    return await mutate({ variables: {
      user: { 
        'username': username, 
        'password': password
      }
    }});
  };

  return [createUser, result];

};

export default useSignUp;

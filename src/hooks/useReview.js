import { useMutation } from "@apollo/client";
import { CREATE_REPOSITORY_REVIEW } from "../../graphql/queries";


const useReview = () => {

  const [mutate, result] = useMutation(CREATE_REPOSITORY_REVIEW, {
    onError: (error) => {
      console.log('error...', error.message);
    },
    onCompleted: async (data) => {
      console.log('success....', data.createReview.repositoryId);
    }
  });

  const createReview = async ({ ownerName, rating, repositoryName, text }) => {
    // call the mutate function here with the right arguments
    //const data = { 'username': username, 'password': password }
    return await mutate({ variables: {
      review: { 
        'ownerName': ownerName, 
        'rating': rating,
        'repositoryName': repositoryName,
        'text': text 
      }
    }});
  };

  return [createReview, result];
};

export default useReview;
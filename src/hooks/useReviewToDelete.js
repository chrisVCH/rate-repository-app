import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../../graphql/queries";

const useReviewToDelete = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    onError: (error) => {
      console.log('error...', error.message);
    },
    onCompleted: async (data) => {
      console.log('success...', data.deleteReview);
    }
  });

  const deleteReview = async ({ reviewId }) => {
    // call the mutate function here with the right arguments
    //const data = { 'username': username, 'password': password }
    return await mutate({ 
      variables: {
        "deleteReviewId": reviewId
      }
    });
  };

  return [deleteReview, result];

};

export default useReviewToDelete;

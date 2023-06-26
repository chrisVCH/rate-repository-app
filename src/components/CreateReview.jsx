import useReview from "../hooks/useReview";
import { useNavigate } from "react-router-native";
import ReviewContainer from "./ReviewContainer";

const CreateReview = () => {
  const [createReview] = useReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, rating, repositoryName, text } = values;
    const ratingValue = parseInt(rating);
    try {
      const { data } = await createReview({ ownerName, 'rating': ratingValue, repositoryName, text });
      if (data) {
        const repoId = data.createReview.repositoryId;
        navigate(`/github/${repoId}`);
      }
          
    } catch (e) {
      console.log('error...', e);
    }
  };
  
  return (
      <ReviewContainer onSubmit={onSubmit} />
  )
};

export default CreateReview;
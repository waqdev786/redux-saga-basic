import { useEffect } from "react";
import { Container } from "react-bootstrap";
import FooditemDetails from "../components/fooditemDetail";
import { useDispatch } from "react-redux";
import { getFoodDetails } from "../services/actions/fooditems/actions";
import { useParams } from "react-router-dom";

function Fooditem() {
  let params = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <Container className="single-post">
      <FooditemDetails />
    </Container>
  );
}
export default Fooditem;
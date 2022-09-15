import { Container } from "react-bootstrap";
import Fooditems from "../components/fooditems";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { getFoods } from "../services/reducers/FoodReducer";
import { GET_FOOD_ITEMS } from "../services/actions/fooditems/actionTypes";

export default function Home() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(({type:GET_FOOD_ITEMS}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="home">
      <Fooditems />
    </Container>
  );
}

import { get } from "./service_apis";
import * as url from "./url_apis";

//fooditems
export const getFooditems = () => get(url.GET_FOOD_ITEMS);

//fooditems
export const getFoodDetails = (id) =>
  get(url.GET_FOOD_DETAILS, {
    params: {
      id: id,
    },
 });
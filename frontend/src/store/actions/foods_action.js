import { FILTER_FOODS } from "./types";
import withQuery  from 'with-query';

export function fetchFoods(params) {
  return async(dispatch) => {
    try { 
      const response = await fetch(withQuery('/foods', params, {
        method: "GET",
        header: {
          Accept: "application/json"
        },
      }));
    
      if (!response.ok) throw new Error(`fetchFoods Failed, HTTP status ${ response.status }`);
      
      const foods = await response.json();
      dispatch({ type: FILTER_FOODS, foods });
    } catch (error) {
      console.error(error);
    }
  };
}
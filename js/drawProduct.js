import { drawItemProduct } from "./drawItemProduct.js";
import { API_PRODUCT } from "./constant.js";
import { params } from "./variables.js";

export const drawProduct = () => {
  let category = "";
  if(params.category != "") {
    category = `&category=${params.category}`
  }
  let api = `${API_PRODUCT}?_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}&q=${params.q}${category}`;
  drawItemProduct(api);
};
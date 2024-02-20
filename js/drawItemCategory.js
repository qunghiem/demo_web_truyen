import { getApi } from "./api.js";
import { category } from "./variables.js";
import { listenerClickCategory } from "./category.js";

export const drawItemCategory = (api) => {
  getApi(api).then((data) => {
    let arrayHTML = data.map((item) => {
      return `
        <div class="category-item" data-category="${item}">
          ${item}
        </div>
      `;
    });
    category.innerHTML = arrayHTML.join("");
    listenerClickCategory();
  });
};
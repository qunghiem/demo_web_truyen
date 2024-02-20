import { getApi } from "./api.js";

export const drawItemProduct = (api) => {
  getApi(api).then((data) => {
    let arrayHTML = data.map((item) => {
      let percent = item.discountPercentage.toFixed(0);
      return `
        <div class="product-item">
          <div class="product-item__image">
            <span class="product-item__discount">
              ${percent}%
            </span>
            <img src="${item.thumbnail}" alt="${item.title}" />
          </div>
          <div class="product-item__content">
            <h3 class="product-item__title">
              ${item.title}
            </h3>
            <div class="product-item__footer">
              <span class="product-item__price">
                ${item.price}$
              </span>
              <span class="product-item__stock">
                Còn lại: ${item.stock} sp
              </span>
            </div>
          </div>
        </div>
      `;
    });
    document.getElementById("products").innerHTML = arrayHTML.join("");
  });
};
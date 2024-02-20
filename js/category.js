import { drawProduct } from "./drawProduct.js";
import { drawItemCategory } from "./drawItemCategory.js";
import { API_CATEGORY } from "./constant.js";
import { params, category } from "./variables.js";

// Gọi hàm vẽ item
drawItemCategory(API_CATEGORY);
// Hết Gọi hàm vẽ item

// Lọc sản phẩm theo danh mục
export const listenerClickCategory = () => {
  category.querySelectorAll(".category-item").forEach(item => {
    item.addEventListener("click", function() {
      params.category = item.dataset.category;
      drawProduct();
    });
  });
}
// Hết Lọc sản phẩm theo danh mục
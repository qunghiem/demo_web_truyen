import { drawProduct } from "./drawProduct.js";
import { params, pagiPrev, pagiNumber, pagiNext, buttonSearch, inputSearch, filter } from "./variables.js";

// Gọi hàm vẽ item
drawProduct();
// Hết Gọi hàm vẽ item

// Phân trang
const paginate = (page = 1) => {
  params.page = `${page}`;
  pagiNumber.innerHTML = page;
  drawProduct();
};

pagiPrev.addEventListener("click", function () {
  if (parseInt(params.page) > 1) {
    paginate(parseInt(params.page) - 1);
  }
});

pagiNext.addEventListener("click", function () {
  paginate(parseInt(params.page) + 1);
});
// Hết Phân trang

// Tìm kiếm sản phẩm
const search = () => {
  let value = inputSearch.value;
  if (value != "") {
    params.q = `${value}`;
    drawProduct();
  } else {
    params.q = ``;
    drawProduct();
  }
};

buttonSearch.addEventListener("click", function () {
  search();
});

inputSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    search();
  }
});
// Hết Tìm kiếm sản phẩm

// Filter
filter.addEventListener("change", function (e) {
  switch (e.target.value) {
    case "mac-dinh":
      params.sort = ``;
      params.order = ``;
      break;
    case "gia-thap-den-cao":
      params.sort = `price`;
      params.order = `asc`;
      break;
    case "gia-cao-den-thap":
      params.sort = `price`;
      params.order = `desc`;
      break;
    case "giam-gia-nhieu":
      params.sort = `discountPercentage`;
      params.order = `desc`;
      break;
    default:
      break;
  }
  drawProduct();
});
// End Filter

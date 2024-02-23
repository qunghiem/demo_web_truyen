import { fetchApi } from "./fetchApi.js";


const typeNovel = document.querySelector("#type__Novel");
fetchApi("http://localhost:3000/categoty")
  .then(data => {
    let htmls = data.map(item => {
      // console.log(item);
      return `
        
        <div class="type__item">
            <a>${item.categoryName}</a>
        </div>
      `;
    })
    typeNovel.innerHTML = htmls.join("");
    console.log(htmls.join(""));
  })                                                                               
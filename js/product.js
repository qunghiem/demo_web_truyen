import { fetchApi } from "./fetchApi.js";

const listNovel = document.querySelector("#list__Novel");
fetchApi("http://localhost:3000/listNovel")
  .then(data => {
    let htmls = data.map(item => {
      // console.log(item);
      return `
      <div class="novel__item">
        <iframe class="novel__image" scrolling="no" src="${item.descriptionImage}" width="176px" height="270" allow="autoplay" title="${item.novelName} overflow="hidden""></iframe>
        <div class="novel__title">
          <a><h3 id="h3">${item.novelName}</h3></a>
        </div>
        <div class="novel__content">
          <div class="novel__author">
            <h4>Tác giả: <a>${item.authorName}</a></h4>
          </div>
            <div class="view">
              <p>Luợt xem: <span>${item.view}</span></p>
            </div>                                                            
            <div class="status">
              <p>Trạng thái: <span>${item.status}</span></p>
            </div>
    
        </div>
      </div>
      `;
    })
    listNovel.innerHTML = htmls.join("");
    console.log(htmls.join(""));
  })                                                                               
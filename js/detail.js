import { fetchApi } from "./fetchApi";

const detail = document.querySelector("#detail");
const h3 = document.querySelector("#h3");
console.log(h3.innerHTML);
fetchApi("http://localhost:3000/listNovel")
  .then(data => {
    function showNovelInfo(novelName) {
      const novel = listNovel.find(item => item.novelName === novelName);
      if (novel) {
            
        

          // Hiển thị thông tin truyện tương ứng
          // Ví dụ: hiển thị trong một thẻ div có id là 'novelInfo'
          
              
          
      }
      return ``
  }

  // Thêm sự kiện click cho tất cả thẻ h3 trong class 'novel__title'
  const titles = document.querySelectorAll('.novel__title h3');
  titles.forEach(title => {
      title.addEventListener('click', function() {
          const novelName = this.textContent; // Lấy nội dung của thẻ h3
          showNovelInfo(novelName); // Tìm và hiển thị thông tin truyện
      });
  });
  })     

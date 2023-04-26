 // Khởi tạo trình phát Plyr cho thẻ audio
const player = new Plyr('audio');

// slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false, // thêm thuộc tính này để tự động chuyển slide
  },
  spaceBetween: 20,
});

  // Đây là đoạn mã sử dụng thư viện Swiper để tạo ra một carousel với các thuộc tính sau:
  // mySwiper là tên của đối tượng swiper container.
  // slidesPerView là số lượng slide được hiển thị trên màn hình cùng lúc.
  // centeredSlides để giữ cho slide hiển thị trung tâm trên màn hình.
  // autoplay để tự động chuyển slide và có thời gian chuyển là 2000ms.
  // spaceBetween là khoảng cách giữa các slide.
  // pagination để tạo nút điều hướng slide dưới dạng phân số.
  // navigation để tạo nút điều hướng trước và sau.

const swiperSlide = document.querySelectorAll('.swiper-slide');
var sizeSwiper = swiperSlide.length;
for(let i = 0; i < sizeSwiper; i++) {
    swiperSlide[i].addEventListener('click', () => {
        if(i == 0) {
          window.location.href = 'index.html';
        }
        if(i == 1) {
          window.location.href = 'index2.html';
        }
        if(i == 2) {
          window.location.href = 'index3.html';
        }
        if(i == 3) {
          window.location.href = 'index4.html';
        }
        if(i == 4) {
          window.location.href = 'index5.html';
        }
        if(i == 5) {
          window.location.href = 'index6.html';
        }
        if(i == 6) {
          window.location.href = 'index7.html';
        }
        if(i == 7) {
          window.location.href = 'index8.html';
        }
    })
}


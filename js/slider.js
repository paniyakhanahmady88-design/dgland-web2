let show = document.querySelector("#slider .swiper-wrapper");
async function getSlides() {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/slider");
    if (res.status === 200) {
        console.log(res.data);
        
      res.data.map((slide) => {
        html +=
          `<div class="swiper-slide"><a href=""><img src=${slide.img} alt=${slide.alt} /></a></div>`;
      });
      show.innerHTML=html;
    }
  } catch (err) {
    console.log(err.message);
  }
}
export default getSlides();

let show = document.querySelector("#phone .swiper-wrapper");
async function getPhone() {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/phone");
    if (res.status === 200) {
        console.log(res.data);
        
      res.data.map((phone) => {
        html +=
          ` <div class="swiper-slide">
            <div class="flex gap-4">
        <a href="#">
          <img src=${phone.img} alt="" class="rounded-[15px]" />
        </a>
      </div>
          </div>`;
      });
      show.innerHTML=html;
    }
  } catch (err) {
    console.log(err.message);
  }
}
export default getPhone();

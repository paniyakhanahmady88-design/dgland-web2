let show = document.querySelector("#ielts .swiper-wrapper");
async function getIelts() {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/ielts");
    if (res.status === 200) {
      console.log(res.data);

      res.data.map((ielts) => {
        html += ` <div class="swiper-slide">
            <div class="m-5 flex justify-evenly">
        <a href="#" class="flex">
          <img src=${ielts.img} alt="#" class="rounded-3xl" />
        </a>
        </div>
          </div>`   ;
      });
      show.innerHTML = html;
    }
  } catch (err) {
    console.log(err.message);
  }
}
export default getIelts();

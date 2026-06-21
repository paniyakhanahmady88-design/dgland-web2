let show = document.querySelector("#speaker .swiper-wrapper");
async function getSpeaker() {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/speaker");
    if (res.status === 200) {
        console.log(res.data);
        
      res.data.map((speaker) => {
        html +=
          ` <div class="flex gap-4">
        <a href="#">
          <img src=${speaker.img} alt="" class="rounded-[15px]" />
        </a>
      </div> `;
      });
      show.innerHTML=html;
    }
  } catch (err) {
    console.log(err.message);
  }
}
export default getSpeaker();

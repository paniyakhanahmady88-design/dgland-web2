let show = document.querySelector("#bestphone .swiper-wrapper");
async function getBestphone() {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/bestphone");
    if (res.status === 200) {
        console.log(res.data);
        
      res.data.map((bestphone) => {
        html +=
          ` <div class="mt-2.5 px-2.5 py-5">
        <img src=${bestphone.img} alt="" />
      </div> `;
      });
      show.innerHTML=html;
    }
  } catch (err) {
    console.log(err.message);
  }
}
export default getBestphone();

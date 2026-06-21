let show = document.querySelector("#laptop .swiper-wrapper");
async function getLaptop() {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/laptop");
    if (res.status === 200) {
        console.log(res.data);
        
      res.data.map((laptop) => {
        html +=
          `  <div class="flex gap-4">
        <a href="#">
          <img src=${laptop.img} alt="" class="rounded-[15px]" />
        </a></div> `;
      });
      show.innerHTML=html;
    }
  } catch (err) {
    console.log(err.message);
  }
}
export default getLaptop();

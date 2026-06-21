let show = document.querySelector("#favsell .swiper-wrapper");
async function getFavsell() {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/favsell");
    if (res.status === 200) {
        console.log(res.data);
        
      res.data.map((favsell) => {
        html +=
          `<div class="w-50 pt-7.5 bg-white gap-1 rounded-[21px]">
          <img src=${favsell.img} alt="" />
          <span class="inline-block text-[14px] p-2.5"
            >هدفون بلوتوثی کیو سی وای مدل T13 TWS</span
          >
          <span class="text-red-600 px-3.5 pb-2.5 flex">تومان 1,790,000</span>
        </div>`;
      });
      show.innerHTML=html;
    }
  } catch (err) {
    console.log(err.message);
  }
}
export default getFavsell();

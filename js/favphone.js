let show = document.querySelector("#favphone .swiper-wrapper");
async function getFavphone() {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/favphone");
    if (res.status === 200) {
        console.log(res.data);
        
      res.data.map((favphone) => {
        html +=
          `
        <div class="w-50 pt-7.5 bg-white gap-1 rounded-[21px]">
          <img src=${favphone.img} alt="" />
          <span class="inline-block text-[14px] p-2.5"
            >گوشی موبایل سامسونگ مدل Galaxy A56 5G دو سیم کارت ظرفیت 256
            گیگابایت</span>
          <span class="text-red-600 px-3.5 pb-2.5 flex">تومان 62,090,000</span>
          </div> `;
      });
      show.innerHTML=html;
    }
  } catch (err) {
    console.log(err.message);
  }
}
export default getFavphone();

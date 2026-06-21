let show = document.querySelector("#bestsell .swiper-wrapper");
async function getBestsell() {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/bestsell");
    if (res.status === 200) {
        console.log(res.data);
        
      res.data.map((bestsell) => {
        html +=
          `     <div class="w-50 pt-7.5 bg-white gap-1 rounded-[21px]">
            <img src=${bestsell.img} alt="" class="flex mt-7.75" />
            <span class="inline-block text-[14px] p-2.5 mt-7.75"
              >شارژر اپل مدل 20 وات</span
            >
            <span class="text-red-600 px-4 pb-2.5 flex">تومان 2,800,000</span>
          </div>
          `;
      });
      show.innerHTML=html;
    }
  } catch (err) {
    console.log(err.message);
  }
}
export default getBestsell();

let show = document.querySelector("#discount .swiper-wrapper");
const getDiscount = async () => {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/discount");
    if (res.status === 200) {
      console.log(res.data);

      res.data.map((discount) => {
        html += `  <div class="swiper-slide">
        <div
            class="bg-white rounded-[28px] p-5 flex-col group hover:bg-black"
          >
            <a
              href=""
              class="bg-white rounded-[28px] p-5 flex-col group-hover:w-full h-25 mx-10"
            >
              <img src=${discount.img} alt="" class="mx-auto" />
              <span class="mt-3.25 text-[14px] block pb-5"
                >${discount.title}</span
              >
            </a>
            <span class="block">
              <span class="text-[#a4a4a4] text-[13px] mr-35 line-through"
                >7,070,000</span
              >
              <span class="text-[#a4a4a4] text-[13px]">تومان</span>
            </span>
            <span
              class="bg-[#e10a0a] rounded-[50%] ml-10 p-0.75 text-[12px] text-white"
              >%15</span
            >
            <span
              class="text-[#e10a0a] inline-block mr-5 py-2 text-[20px] font-bold"
              >6,020,000 تومان</span
            >
          </div>
          </div>
          `    
      });
      show.innerHTML = html;
    }
  } catch (err) {
    console.log(err.message);
  }
};

export default getDiscount();

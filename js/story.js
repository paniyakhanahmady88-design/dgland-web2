let show = document.querySelector("#story .swiper-wrapper");
const getStory = async () => {
  let html = "";
  try {
    let res = await axios.get("http://localhost:3000/story");
    if (res.status === 200) {
      console.log(res.data);

      res.data.map((story) => {
        html += ` <div class="swiper-slide ">
            <div class="m-12">
        <a href="#" class="flex-col">
          <img src=${story.img} alt=${story.alt} class="rounded-[50%] " />
          <span class="text-[14px] px-5">${story.title}</span>
        </a>
        </div>
          </div>`    
      });
      show.innerHTML = html;
    }
  } catch (err) {
    console.log(err.message);
  }
};

export default getStory();

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let mainDom = document.querySelector(".main");
let listItemDom = document.querySelector(".main .list");
let thumbnailDom = document.querySelector(".main .thumbnail");

let timeRunning = 3000;
let runTimeOut;

let timeAutoNext = 7000;
let runAutoRun = setTimeout( () => {
    nextDom.click();
},timeAutoNext);


const showSlider = (type) => {
  let itemSlider = document.querySelectorAll(".main .list .item");
  let itemThumbnail = document.querySelectorAll(".main .thumbnail .item");
  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    mainDom.classList.add("next");
}else if(type === 'prev'){
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    mainDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() =>{
    mainDom.classList.remove('next');
    mainDom.classList.remove('prev');

  },timeRunning);

clearTimeout(runAutoRun);
runAutoRun = setTimeout( () => {
        nextDom.click();
    },timeAutoNext);

}

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
    showSlider("prev");
  };
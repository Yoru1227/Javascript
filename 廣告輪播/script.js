let imgs = ["cheems.png", "huh.gif", "josh.jpg", "rick.jpg", "smurf cat.jpg", "cat.jpg", "lebronJames.png"];
// 預設
let index = 0;
let imageShow = document.getElementById("imageShow");
imageShow.style.backgroundImage = `url('${imgs[index]}')`;

function showImageInternal() {
    if (index == imgs.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    imageShow.style.backgroundImage = `url('${imgs[index]}')`;
}
// 定時播放圖片
let timeout = setInterval(showImageInternal, 3000);
// 下一張圖片按鈕點擊
var backwardBtn = document.getElementById("backward");
backwardBtn.addEventListener("click", () => {
    if (index == 0) {
        index = imgs.length - 1;
    }
    else {
        index--;
    }
    imageShow.style.backgroundImage = `url('${imgs[index]}')`;
    console.log(index);
});
// 上一張圖片按鈕點擊
var forwardBtn = document.getElementById("forward");
forwardBtn.addEventListener("click", () => {
    if (index == imgs.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    imageShow.style.backgroundImage = `url('${imgs[index]}')`;
    console.log(index);
});
// play/pause按鈕點擊
var isPauseClicked = false;
var pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", () => {
    if (isPauseClicked == false) {
        pauseBtn.innerHTML = '<i class="fa-solid fa-play">';
        isPauseClicked = true;
        clearInterval(timeout);
    }
    else {
        pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        isPauseClicked = false;
        timeout = setInterval(showImageInternal, 3000);
    }

});
// 新增圖片索引按鈕
let indexBtnsContainer = document.getElementById("indexContainer");
for (let i = 0; i < imgs.length; i++) {
    indexBtnsContainer.innerHTML += `<button class="indexBtn">${i + 1}</button>`;
}
// 圖片索引點擊
let indexBtns = document.getElementsByClassName("indexBtn");
for (let i = 0; i < indexBtns.length; i++) {
    indexBtns[i].addEventListener("click", () => {
        index = i;
        imageShow.style.backgroundImage = `url('${imgs[index]}')`;
    });
}
const stars = document.getElementById("div1").children;
let idnex = 0;
let rating = 0;

for (let i = 0; i < stars.length; i++) {
    // i代表被選中的第幾個星星
    stars[i].addEventListener("mouseover", () => {
        for (let j = 0; j < stars.length; j++) {
            // 當j <= i, 將第j顆星星換為實心星星, 並將第j顆星星之後的星星換為空心星星
            if (j <= i) {
                stars[j].className = "fa-solid fa-star";
            }
            else {
                stars[j].className = "fa-regular fa-star";
            }
        }
    });
    // 監聽第i顆星星的點擊事件
    stars[i].addEventListener("click", () => {
        index = i;
        rating = i + 1;
        document.getElementById("rating").innerHTML = `你給了${rating}顆星`;
    })
    // 監聽第i顆星星的雙擊事件
    stars[i].addEventListener("dblclick", () => {
        // 將所有星星換為空心星星
        for (let j = 0; j < stars.length; j++) {
            stars[j].className = "fa-regular fa-star";
        }
    })
}
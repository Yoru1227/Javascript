// 姓名檢查
function nameCheck() {
    // 從表單取得姓名的值
    let name = document.getElementById("name").value;
    // 姓名的regular expression
    re = /^[\u4E00-\u9FFF]{2,3}$/;
    let nameHint = document.getElementById("nameHint");
    // 輸入正確則顯示正確提示, 否則顯示錯誤提示
    if (re.test(name) == true) {
        nameHint.innerHTML = '<i class="fa-regular fa-circle-check"></i>正確';
        nameHint.style.color = "green";
        nameHint.style.fontStyle = "normal";
    }
    else {
        nameHint.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>名字輸入錯誤';
        nameHint.style.color = "red";
        nameHint.style.fontStyle = "oblique";
    }
}
// 密碼檢查
function pwdCheck(str) {
    // 從表單取得密碼的值
    let pwd = document.getElementById("password").value;
    // 密碼的regular expression
    re = /^[\w!@#$%^&*]{6,}$/;
    let pwdHint = document.getElementById("pwdHint");
    // 檢查密碼是否有英數字
    var isContainAlphabet = false;
    var isContainDigit = false;
    for (i = 0; i < pwd.length; i++) {
        if (pwd[i].toLowerCase() >= "a" && pwd[i].toLowerCase() <= "z") {
            isContainAlphabet = true;
        }
        if (pwd[i] >= "0" && pwd[i] <= "9") {
            isContainDigit = true;
        }
    }
    if (re.test(pwd) == false) {
        pwdHint.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>密碼輸入錯誤';
        pwdHint.style.color = "red";
        pwdHint.style.fontStyle = "oblique";
    }
    else if (isContainAlphabet == false) {
        pwdHint.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>密碼必須包含英文';
        pwdHint.style.color = "red";
        pwdHint.style.fontStyle = "oblique";
    }
    else if (isContainDigit == false) {
        pwdHint.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>密碼必須包含數字';
        pwdHint.style.color = "red";
        pwdHint.style.fontStyle = "oblique";
    }
    else {
        pwdHint.innerHTML = '<i class="fa-regular fa-circle-check"></i>正確';
        pwdHint.style.color = "green";
        pwdHint.style.fontStyle = "normal";
    }
}
// 日期檢查
function dateCheck(str) {
    // 從表單取得日期的值
    let dateStr = document.getElementById("date").value;
    // 日期的regular expression
    re = /^[\d]{4}[/]{1}[\d]{2}[/]{1}[\d]{2}$/;
    date = new Date(dateStr);
    let dateHint = document.getElementById("dateHint");
    if (re.test(dateStr) == false) {
        dateHint.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>格式錯誤';
        dateHint.style.color = "red";
        dateHint.style.fontStyle = "oblique";
    }
    else if(date == "Invalid Date"){
        dateHint.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>無此日期';
        dateHint.style.color = "red";
        dateHint.style.fontStyle = "oblique";        
    }
    else {
        dateHint.innerHTML = '<i class="fa-regular fa-circle-check"></i>正確';
        dateHint.style.color = "green";
        dateHint.style.fontStyle = "normal";
        console.log(date);
    }
}
// 監聽姓名輸入的移除焦點事件
var nameInput = document.getElementById("name").addEventListener("focusout", () => {
    nameCheck()
});
// 監聽密碼輸入的移除焦點事件
var pwdInput = document.getElementById("password").addEventListener("focusout", () => {
    pwdCheck()
});
// 監聽日期輸入的移除焦點事件
var dateInput = document.getElementById("date").addEventListener("focusout", () => {
    dateCheck()
});
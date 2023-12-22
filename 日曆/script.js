let year = document.getElementById("year");
let month = document.getElementById("month");
let date = document.getElementById("date");

today = new Date();
thisYear = today.getFullYear();
thisMonth = today.getMonth();
selectedDate = today.getDate();

for (let i = 2010; i <= 2030; i++) {
    // 預設今年selected
    if (i != thisYear)
        year.innerHTML += `<option>${i}</option>`;
    else
        year.innerHTML += `<option selected>${i}</option>`;
}

for (let i = 1; i <= 12; i++) {
    // 預設本月selected
    if (i != (thisMonth + 1))
        month.innerHTML += `<option>${i}</option>`;
    else
        month.innerHTML += `<option selected>${i}</option>`;
}
// 預設今天selected
setDate(thisYear, thisMonth, selectedDate)
// 點擊年份選單
year.addEventListener("click", () => {
    setDate(year.value, month.value, selectedDate);
    setTable(year.value, month.value - 1, selectedDate);
});
// 點擊月份選單
month.addEventListener("click", () => {
    setDate(year.value, month.value, selectedDate);
    setTable(year.value, month.value - 1, selectedDate);
});
// 點擊日期選單
date.addEventListener("click", () => {
    selectedDate = date.value;
    setTable(year.value, month.value - 1, selectedDate);
})
// 製作表格
document.write(`<table class="container"><tbody id="calendar"></tbody></table>`);
setTable(thisYear, thisMonth, selectedDate);
function setTable(year, month, date) {
    let calendar = document.getElementById("calendar");
    let calendarDate = new Date(year, month, 1);
    let index = 1;
    let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year))
        monthDay[1] = 29;
    for (let i = 0; i < 7; i++) {
        // 顯示星期
        if (i == 0) {
            let html = "";
            html += `<tr>`;
            html += `<th>Sun</th>`;
            html += `<th>Mon</th>`;
            html += `<th>Tue</th>`;
            html += `<th>Wed</th>`;
            html += `<th>Thu</th>`;
            html += `<th>Fri</th>`;
            html += `<th>Sat</th>`;
            html += `</tr>`;
            calendar.innerHTML = html;
        }
        // 顯示日期
        else {
            let html = "";
            html += "<tr>";
            for (let j = 0; j < 7; j++) {
                // 第一天之前的日期不顯示
                if (calendarDate.getDay() != j) {
                    html += `<td></td>`;
                }
                else {
                    // 選定的日期給其id
                    if (index == date) {
                        html += `<td id="selected">${calendarDate.getDate()}</td>`;
                        calendarDate = new Date(year, month, ++index);
                    }
                    else if (index <= monthDay[month]) {
                        html += `<td>${calendarDate.getDate()}</td>`;
                        calendarDate = new Date(year, month, ++index);
                    }
                    // 當月日期顯示完之後不顯示
                    else {
                        html += `<td></td>`;
                    }
                }
            }
            html += "</tr>";
            calendar.innerHTML += html;
        }
    }
}
// 設定日期選單, 依年月日調整
function setDate(selectedYear, selectedMonth, selectedDate) {
    date.innerHTML = "";
    let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // 若為閨年, 2月為29天
    if (isLeapYear(selectedYear))
        monthDay[1] = 29;

    for (let i = 1; i <= monthDay[selectedMonth - 1]; i++) {
        // 被選定的日期給其id
        if (i != selectedDate)
            date.innerHTML += `<option>${i}</option>`;
        else
            date.innerHTML += `<option selected>${i}</option>`;
    }
}
// 檢查是否為閨年
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
        return true;
    return false;
}
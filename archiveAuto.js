let file = document.getElementsByClassName('spanFileName fileType pdf');
let date = document.getElementsByClassName('t-input archiveDate');
let name = document.getElementsByClassName('displayNames');
for (var i = 0; i < date.length; i++) {
    date[i].value = file[i].innerText.replace(".pdf", "").replace(/-/g, "/");
    name[i].value = "Weekly Expenditure";
}
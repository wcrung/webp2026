var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

var dataset = [];
var currentIndex = 0;

var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    dataset = JSON.parse(this.responseText);
  }
};

function addNewData() {

  if (!dataset.length) {
    alert("無資料！");
    return;
  }

  if (currentIndex >= dataset.length) {
    alert("無資料！");
    return;
  }

  var table = document.getElementById("tourist").getElementsByTagName("tbody")[0];
  var data = dataset[currentIndex];

  var row = table.insertRow();

  row.insertCell(0).textContent = data['title'];

  if (data['showInfo'] && data['showInfo'].length > 0) {
    row.insertCell(1).textContent = data['showInfo'][0]['location'];
    row.insertCell(2).textContent = data['showInfo'][0]['price'];
  } else {
    row.insertCell(1).textContent = "無資料";
    row.insertCell(2).textContent = "無資料";
  }

  currentIndex++;
}

function delOldData() {
  var table = document.getElementById("tourist").getElementsByTagName("tbody")[0];

  if (table.rows.length > 0) {
    table.deleteRow(table.rows.length - 1);
    currentIndex--;
  }
}

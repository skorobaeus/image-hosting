/* ~~~ Переключение состояний ~~~ */

var container = document.getElementById("container");
var list = document.getElementById("list");

var selects = new Array(document.getElementsByClassName("select-files"))[0];  
selects = [].slice.call(selects);

list.onclick = function(e) {
  e.preventDefault();
  container.dataset.state="list";
};

selects.forEach(function(select) {
  select.onclick = function() {
    this.value = "";
  };
 select.onchange = function() {
    container.dataset.state="uploader";
  };
});



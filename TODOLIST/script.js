// script.js
var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt = 2;

button.addEventListener('click', clickButton);

function clickButton() {
  
  var temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button style='position: absolute; right: 0;' class='btnd' type='button' onclick='remove("+cnt+")'>delete</button>";
  list.appendChild(temp);
  cnt++;
  document.getElementById('input').value = ''
}

function remove(cnt) {
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
  }
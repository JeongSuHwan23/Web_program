var userscore = document.getElementById("userscore");
userscore.innerHTML=10;

var divarr = document.getElementsByTagName("div");
for(var i=0;i<divarr.length;i++){
    divarr[i].style.backgroundColor="black";
    divarr[i].style.color="white";
}

var newObj = document.createElement("p");
newObj.innerHTML = "컴퓨터가 이겼습니다."
newObj.setAttribute("id", "pid");
newObj.style.color="orange";
var bodyObj = document.getElementsByTagName("body")[0];
bodyObj.appendChild(newObj);
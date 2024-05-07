var id = document.getElementById("id");
var password = document.getElementById("password");
var pwdConpirm = document.getElementById("pwdConpirm");
var checkPwdButton = document.getElementById("checkPwdButton"); 
var genderArr = document.getElementsByName("gender"); 

checkPwdButton.onclick = pwdCheck;
checkPwdButton.onmouseover=mouseOver; 
checkPwdButton.onmouseout=mouseOut; 
id.addEventListener("keydown", noNumber);

function pwdCheck() {
  if (password.value == pwdConpirm.value){ 
    alert("비밀번호가 일치합니다");
  }
  else{
    alert("비밀번호가 일치하지 않습니다");
  }
}

function mouseOver() {
  checkPwdButton.style.color = "red";
}

function mouseOut() {
  checkPwdButton.style.color = "black";
}

function noNumber(e) {
  if(e.keyCode >= 48 && e.keyCode <= 57){
    alert("숫자 입력 x");
  }
}

function check() {
  if(!id.value){
    alert("아이디를 입력하세요");
    id.focus();
    return;
  }
  if(!password.value){
    alert("비밀번호를 입력하세요");
    password.focus();
    return;
  }
  if(!pwdConpirm.value){
    alert("비밀번호 재확인을 입력하세요");
    pwdConpirm.focus();
    return;
  }
  if(genderArr[0].checked == false && genderArr[1].checked == false){
    alert("성별을 입력하세요");
    return;
  }
  alert("모두 작성하였습니다. 최종제출됩니다.");
  document.getElementById("login_form").submit();
}
document.addEventListener('DOMContentLoaded', e=> {
  const div1 = document.getElementById("div1");
  const input1 = div1.querySelector("input");
  const btn1 = div1.querySelector("button");

  btn1.addEventListener('click', inputFunc);
  input1.addEventListener('keydown', e=>{
    console.log('key code : ', e.keyCode);
  });

  function inputFunc(e){
    console.log(e.target);
    console.log(input1.value);
  }
});
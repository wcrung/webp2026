var container = document.getElementById('container');

window.onload=function () {
  let n=Math.floor(Math.random()*3); 
  container.innerText=randomString(n);
  container.focus();
};

window.addEventListener("keyup", function(e){
  console.log(e.key);

  if(e.key){
    let text=container.innerText;
    if (text.length>0 && e.key==text[0]) {
      container.innerText=text.slice(1);
    }
  }
  add_new_chars();
});

function add_new_chars(){
  let n=Math.floor(Math.random()*3)+1;
  container.innerText += randomString(n);
}

function randomChar() {
  let chars="abcdefghijklmnopqrstuvwxyz";
  return chars[Math.floor(Math.random()*26)];
}

function randomString(n) {
  let str="";
  for (let i=0; i<n; i++) {
    str+=randomChar();
  }
  return str;
}

let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我是一名前端新人
*接下来我要加样式了
*首先加一个div
*然后，准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
    
   }
/*然后，将div变成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*再将圆分成左黑右白*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    word-wrap: break-all;
}
/*下面添加两个阵眼*/
#div1::before {
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
    word-wrap: break-all;
}
#div1::after {
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
    word-wrap: break-all;
}
`;
let n = 0;
let string2 = "";
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, document.body.scrollHeight);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n = n + 1;
      step();
    }
  }, 0);
};
step();

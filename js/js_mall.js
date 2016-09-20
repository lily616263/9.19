var divs =document.querySelectorAll(".ball");
var width = document.body.clientWidth;
var height =document.body.clientHeight;
console.log(divs.length);
var ballWidth=100;
for( var i =0;i<divs.length;i++ ){
    var div =divs[i];
    // 获取0-1之间的随机数
    // Math.random()
   
    div.style.top=(height-ballWidth) * Math.random() + "px";
     div.style.left=(width-ballWidth) * Math.random()  + "px";
     var temColor = Math.random() * 360;
     div.style.backgroundColor = "hsl(" + temColor + ",70%,50%)";
   div.style.transform = "rotate("+temColor+"deg)";
div.style.borderColor= "hsl(" + temColor + ",70%,50%)";
}
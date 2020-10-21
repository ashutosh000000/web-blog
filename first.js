 //<script src="second.js"></script>;
console.log("hiii!");
document.write("<h1>"+"hello!!"+"</h1>");
console.log(eval("3+3+3"));
var m='10'*'5';
console.log(m);				
console.log(38%5);

x=0;
y=2;
x-=y+=9;
console.log(x);


/*alert("welcome user !!");
var user= prompt("please enter any number");
var ans=Math.sqrt(user);
alert("the squareroot of "+user+" is "+ans);
document.write(user);
*/





var images=["ferrari.png","laferr.jpg","redcar.jpg","rocket.jpg","tron.jpg","car.png","carR.png","61475.jpg"]

var num=0;
function next()
{
var slider=document.getElementById("slider");
num++;
if(num>=images.length)
{
num=0;}
slider.src=images[num];
}
function prev()
{
var slider=document.getElementById("slider");
num--;
if(num<0)
{
num=2;
}
slider.src=images[num];
}



function person(name,age)
{
this.name=name;
this.age=age;
this.yearOfBirth=bornYear
}

function bornYear()
{
return 2020-this.age;
}

var p=new person("alex",21);
document.write(p.yearOfBirth());	


function dat(){
var date=new Date();
var h=document.getElementById("para").innerHTML="<h4>"+date+"</h4>";
}
setInterval(dat,1000);



/*function printTime()
{
var d=new Date();
var hours=d.getHours();
var mins=d.getMinutes();
var sec=d.getSeconds();
document.body.innerHTML=hours+":"+mins+":"+sec;
}
setInterval(printTime,1000);*/


var f=document.getElementById("para1");
f.style.color="33EA73";


var p=document.createElement("p");
var node =document.createTextNode("some new text");
p.appendChild(node);
var div=document.getElementById("demo");
div.appendChild(p);




var t,t1,img;
var pos=0;
var box=document.getElementById("car");
img=document.getElementById("car");
function move()
{
if(pos==140)
{
//img=document.getElementById("car");
//img.scr="carR.png";

t1=setInterval(moveR,10);
clearInterval(t);
}else{
pos+=1;
box.style.left=pos+"px";
}
img.scr="car.png";
}


function moveR()
{
if(pos==0)
{
//img=document.getElementById("car");
//img.scr="car.png";

t=setInterval(move,10);
clearInterval(t1);
}else
{
pos-=1;
box.style.left=pos+"px";
}
img.scr="carR.png";
}
t=setInterval(move,10);





//document.getElementById
//("date1").innerHTML=new Date();

/*function show()
{
document.getElementById("date1").innerHTML=Date();
};
var da=document.getElementById("date1");
da.onclick=show();


*/








function magic(...nums) {
  let sum = 0;
  nums.filter(n => n % 2 == 0).map(el => sum+= el);
console.log(n+"=n");
console.log(el+"=el");
  return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6));



var x1 = document.getElementById('x1');
var y1 = document.getElementById('y1');
var c1 = document.getElementById('c1');

var x2 = document.getElementById('x2');
var y2 = document.getElementById('y2');
var c2 = document.getElementById('c2');

var result = document.getElementById('result');

x1.addEventListener("input", solve);
y1.addEventListener("input", solve);
c1.addEventListener("input", solve);
x2.addEventListener("input", solve);
y2.addEventListener("input", solve);
c2.addEventListener("input", solve);

function solve() {
  
var x11 = parseFloat(x1.value) || 0;
var y11 = parseFloat(y1.value) || 0;
var c11 = parseFloat(c1.value) || 0;
var x22 = parseFloat(x2.value) || 0;
var y22 = parseFloat(y2.value) || 0;
var c22 = parseFloat(c2.value) || 0;
  
var d=((x11*y22)-(x22*y11));
var dx=((c11*y22)-(c22*y11));
var dy=((x11*c22)-(x22*c11));

var x = dx/d;
var y = dy/d;

result.innerHTML = "Your X is : " + x + "\nYour Y is : " + y ;

}
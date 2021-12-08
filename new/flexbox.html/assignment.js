var cont = document.getelEmentById("exp");
var button = document.getElementById("btn");
button.addEventListener("click",function () {
    console.log("Hello");
});
console.log(cont);
var container = document.getElementsByClassName("example");
var but = document.getElementById("button");
but[0].innerHTML = "Hello world";
but.addEventListener("click", function function1(){
    console.log("Hello everyone");
});
console.log(container);
var con = document.getElementsByName("forexample");
var butt = document.getElementById("butexp");
butt.addEventListener("click",function () {
    console.log("JavaScript");
});
console.log(con);
var tagg = document.getElementsByTagName("p");
var neww = document.getElementById("tag");
neww.addEventListener("click",function () {
    console.log("HTML");
});
console.log(tagg);
function myFunction(){
    document.getElementById("demo").innerHTML="hello world";
}
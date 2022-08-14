let name = sessionStorage.getItem("name");
let umarks= sessionStorage.getItem("marks");
let utime = sessionStorage.getItem("time");
document.querySelector(".name").innerHTML=name.toUpperCase();
document.querySelector(".marks").innerHTML=umarks;
document.querySelector(".time").innerHTML=utime;

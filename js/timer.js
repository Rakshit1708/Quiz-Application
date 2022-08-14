let dt= new Date(new Date().setTime(0));
let ctime= dt.getTime();
let seconds= Math.floor((ctime%(100*60))/1000);
let minutes= Math.floor((ctime%(1000*60*60))/(1000*60));
let time=0;
let interval = setInterval(function(){

  if(seconds<59){
    seconds++;
  }
  else{
    seconds=0;
    minutes++;
  }
  let sec_formate = seconds < 10 ? ` 0${seconds}`:`${seconds}`;
  let min_formate = minutes < 10 ? ` 0${minutes}`:`${minutes}`;
  document.querySelector(".time").innerHTML=`${min_formate}:${sec_formate}`;
 console.log(time);

},1000)  // 1000ms

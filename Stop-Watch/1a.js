//Event Listeners for starting,stopping,resetting the stopwatch
document.getElementById('btn').addEventListener('click',getData)

document.getElementById('pause').addEventListener('click',stopData)

document.getElementById('reset').addEventListener('click',resetData)

// --------------------------------------------------------------------------------------------------------------------------------

var timeValue = null;
var i=0,h=0,j=0;

function setData(t,h,i,j){

  let div=document.querySelector('.item');
 
  timeValue = setInterval(() => {
    
    j++;

    if(j === 100)
    { i++; j=0; }
    if(i === 60)
    { h++; i=0;}
    
    if(h<10 && i<10 && j<10)
      div.innerHTML=`0${h}:0${i}:0${j}`;
    else if(i<10 && h<10)
      div.innerHTML=`0${h}:0${i}:${j}`;
    else if(h<10 && j<10)
      div.innerHTML=`0${h}:${i}:0${j}`;
    else if(j<10 && i<10)
      div.innerHTML=`${h}:0${i}:0${j}`;
    else if(j<10)
      div.innerHTML=`${h}:${i}:0${j}`;
    else if(i<10)
      div.innerHTML=`${h}:0${i}:${j}`;
    else if(h<10)
      div.innerHTML=`0${h}:${i}:${j}`;
    else
      div.innerHTML=`${h}:${i}:${j}`;

    div.style.width="100px";
    div.style.padding="13px"
    div.style.border="1px double black";
    div.style.borderRadius="23px"
    div.style.background="#48feb3"

},t);
}

function getData(){                           //It will start the stopwatch
  
  document.getElementById('btn').style.display="none"
   setData(10,0,0,0);
}
//---------------------------------------------------------------------------------------------

function stopData(){                     //It will pause the stopwatch
  
   clearInterval(timeValue);
}


//---------------------------------------------------------------------------------------------
function resetData(){                   //It will reset the value of stopwatch
   
   clearInterval(timeValue);
   
   document.getElementById('btn').style.display="block"
   document.querySelector('.item').innerHTML="00:00:00";
}

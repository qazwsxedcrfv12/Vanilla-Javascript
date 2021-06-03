

document.getElementById('btn').addEventListener('click',getTime)

document.getElementById('hide').addEventListener('click',hideData)

//-----------------------------------------------------------------------------

var timeValue=null;

function getTime(){
     timeValue = setInterval(function(){
        const time=new Date();
        document.getElementById('time').innerHTML=time;
    },1000);
    
}

function hideData(){
    document.getElementById('time').innerHTML=" "
    clearInterval(timeValue)
}

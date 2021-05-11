

document.getElementById('btn').addEventListener('click',getTime)


function getTime(){
    setInterval(function(){
        const time=new Date();
        document.getElementById('time').innerHTML=time;
    },1000)
    
}
// Event Listener
document.getElementById('btn').addEventListener('click',getJokes);



//Clear Interval
function stopMyFunction(){
    document.querySelector('.time').innerHTML="00:00"
    clearInterval(interval)
}



// Function to be triggered on clicking button
function getJokes(e)
{
 
                 let div = document.querySelector('.jokes');

                 let output = '';
                 let number = document.getElementById('number').value;

                                                      document.getElementById('number').value=""



     if(number == ""){
         output+='<li>Please enter a valid number</li>';
         div.style.backgroundColor="red"
         div.innerHTML=output;
         setTimeout(()=>{
             div.style.backgroundColor="rgb(247, 159, 159)";
             output="";
             div.innerHTML=output;
         },2000);
     }
     else{

         let n=number;
         n=n*5;
         var interval=setInterval(()=>{
             if(n==0)
               stopMyFunction(); 
             document.querySelector('.time').innerHTML=`${n}`
             n--;
         },1000)


        div.style.backgroundColor="green";       // background color

        const xhr = new XMLHttpRequest();

        xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
   
       
        xhr.onload = function(){
            
           //  console.log('READYSTATE',this.readyState);
   
            if(this.status === 200){
                let response = JSON.parse(this.responseText);
   
                               let count = 0;
                  
                if(response.type === 'success'){
                
                    output+=`<code>You have ${number*5} seconds to read the joke</code>`   //Warning
                response.value.forEach(function(joke){
                   count++;
                   output+=`<li>${count}: ${joke.joke}</li>`
               });
               
                    div.innerHTML=output;
                    setTimeout(()=>{
                        div.style.backgroundColor="rgb(247, 159, 159)"
                        output="";
                        div.innerHTML=output
                    },number*5*1000);
                }
                else{
                    output+='<li>Something went wrong</li>';
                }
            }
        }
   
       
        xhr.send();
     }


    e.preventDefault();
}
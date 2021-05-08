

document.querySelector('.get-jokes').addEventListener('click',getData)


function getData(e){

    //  console.log(1)
    const val=document.querySelector('#number').value
    // console.log(val);

    const xhr=new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${val}`,true)
    
    xhr.onload=function(){

          if(this.status === 200){
              const res=JSON.parse(this.responseText);

              let output='';
              if(res.type === 'success'){
              res.value.forEach(function(jokes){
                   output+=`
                     <li>${jokes.joke}</li>
                   `
              })
            }
            else{
                output+=`<li>Something Went Wrong</li>`
            }
            document.querySelector('.jokes').innerHTML=output;
            
            const hh=document.createElement('h2')
            hh.innerHTML="Read Jokes, Laugh More"
            document.querySelector('.head').innerHTML=`
               <h4>Read More, Laugh More</h4>
            `
          }
    }

    xhr.send();

     e.preventDefault();
}
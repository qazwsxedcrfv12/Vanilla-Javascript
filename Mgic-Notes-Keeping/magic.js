document.getElementById('btn').addEventListener('click',getData)     //Listen event for click.

var i=0;

function createButton(i){                                        //Dynamically create Button.
                 
    const butt=document.createElement('button')
    butt.className=`add${i}`;
    butt.innerHTML="Delete Note"
    butt.style.background="rgb(3, 94, 212)"
    butt.style.color="whitesmoke"
    
    return butt;
}


function createDiv(val,i){                                    //Dynamically create div.
    const div=document.createElement('div')
    div.className='con'
    div.innerHTML=`
       <h5>Note${i}</h5>
       <p>${val}</p>
    `
    div.style.border="1px solid grey"
    div.style.padding="12px"
    div.style.margin="7px"
    div.style.background=`rgb(228, 225, 225)`
    div.style.borderRadius="23px" 
    div.style.width="200px"
    div.style.fontFamily="cursive"

    return div;
}


function clearFields(){                                          
    document.getElementById('name').value=""
}


function getData(e){           //Click event Function
    const value=document.querySelector('.check-notes').innerHTML;    //Check if main div tag in which (note is going to save) have some content or is empty.
    if(value == "")
      i=0;

    const val=document.getElementById('name').value;
    // console.log(val)
    if(val == ""){
        const div=document.querySelector('.check-notes')
        const h=document.createElement('h4')
        h.className='hh'
        h.style.color="red"
        h.innerHTML='Pease write a note and then try adding it 😑️😑️';
        div.appendChild(h);
        
        setTimeout(function(){
            document.querySelector('.hh').remove();
        },4000);
    }
    else{
        i++;
    
        let div=createDiv(val,i);
        let butt=createButton(i);
    
        const main=document.querySelector('.check-notes');
        
        
        main.appendChild(div)          //Insert the dynamically created div(containing note) in parent div tag.
        div.appendChild(butt)         //Insert the dynamically created button in dynamically created div.
        
        
        clearFields();           //Clear The input Fields
        
        
        document.querySelector(`.add${i}`).addEventListener('click',function(e){        //Delete the Dynamically created div
            e.target.parentElement.remove();
        })
    }
    
    e.preventDefault();
}

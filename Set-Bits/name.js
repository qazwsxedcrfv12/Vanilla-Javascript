document.getElementById('btn').addEventListener('click',getData)

function remove_content(){
    document.querySelector('#name').value=" ";
}

function showAlert(message,className){
    let res = document.querySelector('.results')
    let hh = document.createElement('h4')
    hh.innerHTML=`${message}`;
    hh.className='head'

    res.appendChild(hh);
    res.classList.add(`${className}`)

    setTimeout(function(){
        document.querySelector('.head').remove();
        document.getElementById('name').style.display="block"
        document.getElementById('btn').style.cursor="pointer"
        res.classList.remove(`${className}`)
        res.style.border=""
    },2000);
}

function createLogic(val){
    let count=0,q;
     
     q=val;

     while(q!=0)
    {
       count++;
       q=q&(q-1);
    }
   
    return count;  
}

function styleDiv(){
    
    let res = document.querySelector('.results');
    res.style.border="1px solid black";
    res.style.borderRadius="23px"
    res.style.width="200px"
    res.style.margin="auto"
    res.style.padding="12px"
}

function getData(e){

    let val=document.getElementById('name').value;

    if(val == " ")
    {
      showAlert('Please enter a number','failure')
      styleDiv();
    }    
    else
    {
        let count = createLogic(val)
        showAlert(`The no of set bits in given no is ${count}`,'success')
        styleDiv();
    }

    remove_content();
    document.getElementById('name').style.display="none"
    document.getElementById('btn').style.cursor="not-allowed"

    e.preventDefault();
}


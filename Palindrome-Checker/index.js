
document.getElementById('btn').addEventListener('click',getData)

//----------------------------------------------------------------------------------------------------

function logicPalindrome(){
    
    let flag = true;

    const value = document.getElementById('name').value;
    const len = value.length;

    for(let i=0; i<len/2; i++){
        if(value[i] != value[len-i-1])
        { flag=false;  break; }
    }
    
    return flag;
}
//----------------------------------------------------------------------------------------------------

function showResults(flag){
    
    let div = document.querySelector('.results')

    let hh=document.createElement('h4');
    hh.className="res";
    if(flag == true){
        hh.innerHTML="It is a Palindrome"
    }else{
        hh.innerHTML="It is not a Palindrome"
    }
    
    hh.style.fontFamily="cursive"
    
    if(flag == true)
     div.style.background="green"
    else
     div.style.background="red"
    div.appendChild(hh);

    setTimeout(function(){
        document.querySelector('.res').remove();
    },4000)
}
//-------------------------------------------------------------------------------------------------


function showAlert(message){
    let div = document.querySelector('.results')

    let hh=document.createElement('h4');
    hh.className="res";
    
    hh.innerHTML=message;
    hh.style.fontFamily="cursive"
     
    div.style.background="red"
    div.appendChild(hh);

    setTimeout(function(){
        document.querySelector('.res').remove();
    },4000)
}
//.................................................................................................


function clearFields(){
    document.getElementById('name').value=""
}

//------------------------------------------------------------------------------------------------.


function getData(e){
    
    let flag=logicPalindrome();

    let val = document.getElementById('name').value;
    if(val != "")
     showResults(flag);
    else
     showAlert("Please enter some text to check for")
    
     clearFields();
   
    e.preventDefault();
}
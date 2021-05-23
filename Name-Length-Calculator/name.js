
document.getElementById('btn').addEventListener('click',getLength)


function clearFields(){
    document.getElementById('name').value=''
}


function showAlert(len){
    if(len == 0){
        const div=document.querySelector('.length')
    
        const head=document.createElement('h2')
        head.className='head'
        head.innerHTML=`
          Please Enter some Name
        `
        div.appendChild(head)
        setTimeout(function(){
            document.querySelector('.head').remove();
        },8000)
    }
    else{
        const div=document.querySelector('.length')
    
        const head=document.createElement('h2')
        head.className='head'
        head.innerHTML=`
          The Length Of your name is ${len}
        `
        div.appendChild(head)
        setTimeout(function(){
            document.querySelector('.head').remove();
        },8000)
    }
}


function createDiv(){
    const val=document.getElementById('name').value;
    let len=val.length;
    showAlert(len)
}


function containerColor(){
     let con=document.querySelector('.container')
     let i=0;
    // con.style.background="red"
     let arr=["green","red","yellow","orange","aqua","tomato","grey","violet"]
    setInterval(() => {
    //    for(let i=0; i<arr.length; i++)
       con.style.background=arr[i];
       i++;
    },1000);
    
    setTimeout(() => {
        con.style.background=null;
    },8000);
    // e.preventDefault();
}


function getLength(e){

    containerColor();
    createDiv();
    clearFields();

    e.preventDefault();
}

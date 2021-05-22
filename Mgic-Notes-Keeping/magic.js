

document.getElementById('btn').addEventListener('click',getData)


function getData(e){
    const val=document.getElementById('name').value;
    // console.log(val)

    const li=document.createElement('li')
    li.innerHTML=val;

    const list=document.querySelector('.list')
    list.appendChild(li);

    document.getElementById('name').value=""

    e.preventDefault();
}
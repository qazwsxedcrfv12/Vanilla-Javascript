document.getElementById('btn').addEventListener('click',getData)


function getData(e){
    const val=document.getElementById('name').value;
    location.href=`https://www.${val}.com`

    document.getElementById('name').value=""

    e.preventDefault();
}
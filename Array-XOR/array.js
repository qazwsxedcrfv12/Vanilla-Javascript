var t;

function setvalue(val){
    t=val;
}


document.getElementById('btn').addEventListener('click', getData);

function getData(e){

    let val = document.getElementById('testcase').value;

    setvalue(val);
    startlogic(t);

    document.getElementById('testcase').value=" ";
    e.preventDefault();
}


function startlogic(t){
while(t--)
{

let n=prompt('Enter the number of elements in array',0);
n=Number(n);

arr=[];

for(let i=0; i<n; i++)
{
    a=Number(prompt('Enter the element',0));
    arr.push(a);
}

arr.sort();
arr.reverse();

var s=0;

let v =[];

v.push(arr[0]);

let c=arr.length/2
let j=0;

for(let i=1; i<arr.length; i++)
{
   if(j>c)
     break;
   if(arr[i]==v[v.length-1])
     v.push(arr[i]);
    else
    {
        j++;
        s+=(arr[i]^v[v.length-1]);
        v.pop();
    }
}

let div = document.querySelector('.result');
let hh = document.createElement('h4');

hh.innerHTML=`Maximal Sum is: ${s}`;
hh.className='head'

div.appendChild(hh)

setTimeout(function(){
    document.querySelector('.head').remove();
},4000)

console.log(s);
}
}
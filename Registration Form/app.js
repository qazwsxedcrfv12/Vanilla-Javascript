

document.querySelector('#btn').addEventListener('click',getData)


function clearFields(){
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
    document.getElementById('address').value='';
}

function showAlert(className,message)
{
     const div=document.createElement('div')
     div.className=`alert ${className}`
     div.appendChild(document.createTextNode(message));
     // Get parent
     const container = document.querySelector('.container');
     // Get form
     const form = document.querySelector('table');
     // Insert alert
     container.insertBefore(div, form);
   
     // Timeout after 1 sec
     setTimeout(function(){
       document.querySelector('.alert').remove();
     }, 2000);
}

function getData(e){

    
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phone=document.getElementById('phone').value;
    const address=document.getElementById('address').value;
    

    if(name === '' || email === '' || phone === '' || address === ''){
        showAlert('failure','Please fill in all details')
    }
    else{
        const data=document.querySelector('.data');
    
        const row=document.createElement('tr')
        
        row.innerHTML=`
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${address}</td>
        <td><a href="#">X</a></td>
        `;
        
        data.appendChild(row);
        clearFields();
        showAlert('success','Person Details Added');
    }
     e.preventDefault();
}
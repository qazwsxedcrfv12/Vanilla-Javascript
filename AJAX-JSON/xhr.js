document.getElementById('getcus').addEventListener('click',loadCustomer)
document.getElementById('getcust').addEventListener('click',loadCustomers)



//Load Customers Data

function loadCustomers(e){
    document.getElementById('getcust').style.backgroundColor="green"
    document.querySelector('.cust').style.display="block"
   
    setTimeout(()=>{
        document.getElementById('getcust').style.backgroundColor="grey";
    },400);

    const xhr = new XMLHttpRequest();

    xhr.open('GET','customers.json',true);

    xhr.onload = function(){
        if(this.status === 200){
            let customers = JSON.parse(this.responseText);
            let output='';

            customers.forEach(function(customer){
                output+=`
                <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                `
                document.querySelector('.cust').innerHTML=output;
            })
            setTimeout(()=>{
                document.querySelector('.cust').style.display="none"
            },4000)
        }
    }

    xhr.send();
    e.preventDefault();
}


// Load Customer Data

function loadCustomer(e){

    document.getElementById('getcus').style.backgroundColor="green"
    document.querySelector('.cus').style.display="block"

     setTimeout(()=>{
         document.getElementById('getcus').style.backgroundColor="grey";
     },400);

     const xhr = new XMLHttpRequest();

    xhr.open('GET','customer.json',true);

     xhr.onload = function(){
         if(this.status===200){
             let customer = JSON.parse(this.responseText);
             let output = `
             <ul>
               <li>ID: ${customer.id}</li>
               <li>Name: ${customer.name}</li>`
             document.querySelector('.cus').innerHTML=output;
         }
         setTimeout(()=>{
             document.querySelector('.cus').style.display="none"
         },4000)
     }

     xhr.send();



    e.preventDefault();
}
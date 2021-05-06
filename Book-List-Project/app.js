

function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}


function UI(){}

UI.prototype.addBookList=function(book){
     const list=document.getElementById('book-list');

     const row=document.createElement('tr')

     row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#">X</a></td>
     `
     list.appendChild(row);
}

//Clear task
UI.prototype.clearTask=function(){
    document.getElementById('title').value=''
    document.getElementById('author').value=''
    document.getElementById('isbn').value=''
}

//Validate
UI.prototype.showAlert=function(message,className){

    const div=document.createElement('div')
    div.className=`alert ${className}`;

    // div.appendChild(document.createTextNode(message));
    div.innerHTML=`${message}`

    const container=document.querySelector('.container')
    const form=document.querySelector('#book-form')

    container.insertBefore(div,form);

    //Timeout after 3sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },500)

}


//Event Listeners
let a=document.getElementById('book-form')

a.addEventListener('submit',function(e){
//Get form values
    const title=document.getElementById('title').value,
          author=document.getElementById('author').value,
          isbn=document.getElementById('isbn').value


          console.log(title,author,isbn)


//Intantiate Book
const book=new Book(title,author,isbn);


const ui=new UI();

//Valiadate
if(title ==='' || author === '' || isbn ===''){
    //Error Alert
    ui.showAlert("Please fill in all the fields",'error')
}
else{
    ui.addBookList(book);
    ui.showAlert("Success",'success')
     ui.clearTask();
}


    e.preventDefault();
})

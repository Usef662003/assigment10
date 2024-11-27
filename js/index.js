var bookName = document.getElementById('bookName');
var linkBook = document.getElementById('linkBook');
var books =[];
if (JSON.parse(localStorage.getItem('newBook')) !== null){
    books = JSON.parse(localStorage.getItem('newBook'));
    display();
}

function saveBook(){
    var book={
        bName: bookName.value,
        lBook: linkBook.value
    }
    books.push(book);
    localStorage.setItem('newBook',JSON.stringify(books));
    display();
    clearInput();
}

function clearInput(){
    bookName.value=null;
    linkBook.value=null;
}

function display(){
    cartona =``;
    for (var i=0 ; i<books.length;i++){
        cartona +=  `
                <div class="col-3">
                    <h3>${i+1}</h3>
                </div>
                <div class="col-3">
                    <h3>${books[i].bName}</h3>
                </div>
                <div class="col-3 text-center">
                    <button type="button" class="btn btn-success">
                    <a href="${books[i].lBook}" target="blank"><i class="fa-solid fa-eye"></i>  Visit</button></a>
                    
                </div>
                <div class="col-3 text-center">
                    <button onclick="DeleteBook(${i})" type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button>
                </div>`
    }
    document.getElementById('rowInputElement').innerHTML=cartona;
}

function DeleteBook(index){
    books.splice(index,1);
    display()
    localStorage.setItem('newBook',JSON.stringify(books))
}

var tast = /[a-z]{4,}|[A-Z]{4,}/
var tast2 = /^https:\/\/www\.[a-z]{1,}\.com$/
























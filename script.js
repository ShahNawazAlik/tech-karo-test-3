let book= 0;
let bookcost= 5.99;

function bookAdd(){

    book++;
    document.querySelector(".addsubdiv").innerHTML=book;
       document.querySelector("#result-divss").innerHTML= book*bookcost+`$`;
}

function bookSub(){

    book--;
    document.querySelector(".addsubdiv").innerHTML=book;
       document.querySelector("#result-divss").innerHTML= book/bookcost+`$`;
}


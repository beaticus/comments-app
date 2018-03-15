var pageCounter = 1;
var commentsContainer = document.getElementById("comment-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){

    var myComments = new XMLHttpRequest();
    myComments.open('GET', 'https://jsonplaceholder.typicode.com/comments?postId=' + pageCounter );
    myComments.onload = function(){
        var ourData = JSON.parse(myComments.responseText);
        renderHTML(ourData);
    };
    
    myComments.send();
    pageCounter++;
});

function renderHTML(data){
    var htmlString = ""; 

    for (i = 0; i < data.length; i++) {
        htmlString += "<ul>" + "<li>" + " Name: " + data[i].name + "</li>" + "<li>" + " Email address: " + data[i].email + "</li>" + "<li>" + " Comment: " + data[i].body + "</li>" + "</ul>";
    }


    commentsContainer.insertAdjacentHTML('beforeend', htmlString)
}






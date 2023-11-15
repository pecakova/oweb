var heart = document.getElementById("heart");
let likesCount = JSON.parse(localStorage.getItem('likesCount')) || 0;
var quantityElement = document.getElementById("quantity");
var quantity;
var sum = 0;
var sumElement = document.getElementById("sum");

document.getElementById('likes').innerText = likesCount;

function likes(){
    likesCount += 1;
    localStorage.setItem('likesCount', likesCount);
    document.getElementById('likes').innerText = likesCount;
}

function showDialog(){
    document.getElementById('dialogcart').showModal();
}
function closeDialog(){
    document.getElementById('dialogcart').close();    
}
function setQuantity(e) {
    quantity = e.target.value;
    sum += parseInt(quantity)*2;
    sumElement.innerText = "Sum: " + sum;
}

document.addEventListener("DOMContentLoaded", function() {
    var cart = document.getElementById('cart');
    heart.addEventListener("click", likes);
    cart.addEventListener("click", showDialog);
    quantityElement.addEventListener("keydown",function(e){
        if(e.key == 'Enter'){
            setQuantity(e);
        }
    });
    sumElement.innerText = "Sum: " + sum;
});
var comments = [];

function displayComments() {
    var commentsSection = document.getElementById('comments');
    commentsSection.innerHTML = '';

    for (var i = 0; i < comments.length; i++) {
        var commentNode = document.createElement('p');
        commentNode.textContent = comments[i];
        commentsSection.appendChild(commentNode);
    }
}

function submitComment() {
    var commentText = document.getElementById('comment').value;

    if (commentText.trim() !== '') {
        comments.push(commentText);
        displayComments();
    }

      document.getElementById('comment').value = '';
}

displayComments();


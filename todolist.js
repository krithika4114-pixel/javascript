var myForm = document.getElementById("myForm");
var myInput = document.getElementById("myInput");
var myItem = document.getElementById("myItem");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    createItem(myInput.value)
})

function createItem(myInputItems) {

    var item =  `<li>${myInputItems}<button onelick="deleteElement">Delete</button></li>`


myItem.insertAdjacentHTML("beforeend", item)
myInput.value = ""
}


function deleteElement(Element ToDelete) {
    ElementToDelete.parentElement.remove()
}

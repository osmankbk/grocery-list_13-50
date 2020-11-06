//IIFE
( () => {
//DOM elements saved in variables for easy access.
const feedBack = document.querySelector('.feedback');
const form = document.querySelector('form');
const inputButton = form.querySelector('input');
const listContainer = document.querySelector('.list-container');
const clearButton = listContainer.querySelector('.clearBtn');
let createdItems = [];

//The function the creates and remove an item from grocery list
const createAndRemoveItem = (listName) => {
//Create Section
    const item = document.createElement('div');
    item.classList.add('list-items');
    item.innerHTML = `<div class="item my-3 d-flex justify-content-between p-2">
    <h5 class="item-title text-capitalize">${listName}</h5>
    <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
   </div>`;
   createdItems.push(item);
   listContainer.prepend(item);
//Feedback of added item
   feedBack.innerHTML = `An item has been added to your list`
   feedBack.classList.add('showItem', 'alert-danger');
   setTimeout(() => {
    feedBack.classList.remove('showItem', 'alert-danger')
   }, 3000);

//Remove Section
    createdItems.forEach(item => {
        const removeBtn = item.querySelector('.fas');
        removeBtn.addEventListener('click', (e) => {
            item.remove();
        })
    })
   
}
//The func that clears the entire list
const clearList = (list) => {
    list.forEach(item => {
        item.remove();
    });
}

//clear list click event
clearButton.addEventListener('click', (e) => {
    clearList(createdItems);
})

//Submit form event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let listName = inputButton.value;
    if(listName){
        createAndRemoveItem(listName);
        inputButton.value = '';
    } else {
        feedBack.innerHTML = `Can't add an empty item!`
        feedBack.classList.add('showItem', 'alert-danger');
        setTimeout(() => {
            feedBack.classList.remove('showItem');
        }, 3000);
    }
   
})
})();


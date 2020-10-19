const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const createListElement = () =>{
    const li = document.createElement('li'); // create list item
    li.appendChild(document.createTextNode(input.value)); //create text node with text from input and attaches it to li
    ul.appendChild(li); // atach list element with text node to the unordered list
    input.value = ""; // clear input field
    li.addEventListener('click', () =>{
        li.classList.toggle('done');
    })
}
const isEnterClicked = (kC) =>{
    return kC === 13;
}

const addListElementAfterClick = () =>{
    if(input.value !== ""){ // check if input is empty
        createListElement();
    }
}
const addListElementAfterKeypress = (keyClicked) =>{
    if(isEnterClicked(keyClicked.keyCode) && input.value !== ""){
        createListElement();
    }
}

button.addEventListener('click', addListElementAfterClick);

input.addEventListener('keypress', addListElementAfterKeypress);
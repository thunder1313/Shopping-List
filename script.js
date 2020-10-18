const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    console.log("click");
    const li = document.createElement('li');
    if(input.value !== 0){
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
    }
})
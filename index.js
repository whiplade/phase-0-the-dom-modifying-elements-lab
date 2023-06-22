const element = document.querySelector('#main');
element.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "Whiplade is the champion!"


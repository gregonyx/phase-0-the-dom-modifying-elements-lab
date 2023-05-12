// Write your code here!
main.remove();
const header = document.querySelector('h1');
const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.textContent = "YOUR-NAME is the champion";
header.replaceWith(newHeader);
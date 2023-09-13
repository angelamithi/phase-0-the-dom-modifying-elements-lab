// Write your code here!
const mainID=document.querySelector('main#main');
mainID.remove();
let myName="Angela";
const newHeader=document.createElement('h1');
newHeader.id="victory";
newHeader.innerHTML=`${myName} is the champion`;
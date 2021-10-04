

const olElement=document.querySelector('ol');
const firstChild=olElement.firstElementChild;
const lastChild=olElement.lastElementChild;


olElement.insertBefore(lastChild,firstChild);


//-------swaping theH2 elements in section2 and Three-------------------------//

const mainSections=document.querySelector('main').children;
const section2=mainSections[1];
const section3=mainSections[2];
const sectionTest=mainSections[2].children[0];
console.log(sectionTest);


let h2_3rd =section2.children[0];
let h2_2nd=section3.children[0].children[0];

const placeHolder=document.createElement('h1');
section2.insertBefore(placeHolder,h2_3rd);
sectionTest.insertBefore(h2_3rd,h2_2nd);
section2.insertBefore(h2_2nd,placeHolder);
placeHolder.remove();





// -------Removing the last section------------//
console.log(mainSections);
mainSections[2].remove();


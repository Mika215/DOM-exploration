/**
 * 
 */

//I have seen a lot of programers using the below code to set an attibute and the innertext simultaneously.
// document.querySelectorAll(".important").setAttribute("title","This is an important item");
//however it seems that it ain't work for me. 
//ok i have figured it out now.querrySelectorAll targets the whole array of objects within the target class
//if i need to set attribute to each and every element of that object list then i have to loop through each of the elements like below.

//**--Adding a title attribute to every element that has the "important" class, stating "This is an important item"--***//
const importantClass = document.querySelectorAll(".important");


for(let element of importantClass){
    element.title="This is an important item"; 

}


// The same goes for setting a specific class property of each and every element inside an array of obejects like below
//**--Select all the imgs tags and loop through them. If they have no "important" class, turn their display property to none--**//
const imgs=document.querySelectorAll("img");


for (let img of imgs){
 
if(!img.classList.contains('important')) {
    img.style.display = "none";
}
};
//**--Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well--**//

const pElements= document.querySelectorAll("p");

for(let paragraph of pElements){

    if(paragraph.hasAttribute("class")){
        console.log(paragraph.innerText + " => has class name: " + paragraph.className);
    } else{
        
        console.log(paragraph.innerText);
    }
};

//**--Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.--**//



const randomizer=()=>{
    return Math.floor(Math.random() * 255);
}
for(let i=0;i<pElements.length;i++){
    if(!pElements[i].hasAttribute("class")){
pElements[i].style.color=`rgb(${randomizer()},${randomizer()},${randomizer()})`
    }
}




//**--my failed code: tryed and failed before i found out the randomizer solution--**//

// let colorArray=["red","blue","pink","orange"];
// for(let i=0;i<colorArray.length;i++){
// // for(paragraph of pElements){
// //     if(paragraph.hasAttribute("class")){
// //         continue;
// //     }
// //     paragraph.style.color=colorArray[i];
    
// // }
// if(!pElements[i].hasAttribute("class")){
// pElements[i].style.color=colorArray[i];
// }
// };
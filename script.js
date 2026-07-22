// Mobile Menu

function toggleMenu(){

let menu=document.getElementById("menu");

menu.classList.toggle("show");

}



// Typing Effect

let words=[

"IT Support Technician",

"Network Enthusiast",

"Web Developer",

"Future Cloud Engineer"

];


let index=0;

let char=0;

let typing=document.getElementById("typing");


function type(){

if(char < words[index].length){

typing.innerHTML += words[index].charAt(char);

char++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}



function erase(){

if(char>0){

typing.innerHTML=words[index].substring(0,char-1);

char--;

setTimeout(erase,50);

}

else{

index++;

if(index>=words.length){

index=0;

}

setTimeout(type,500);

}

}



type();




// Dark Mode

document.getElementById("theme").onclick=function(){

document.body.classList.toggle("dark");

};

// HAMBURGER MENU

function open(){
    document.getElementById('menu').classList.toggle("opened");
    document.getElementById('triangle').classList.toggle("opened");
}

document.getElementById("button").onclick = function(){
    open();
};

// CLICKED CONTACT BUTTON

let clickedButton = document.getElementById("clicked");

clickedButton.addEventListener('click', ()=>{
    clickedButton.classList.toggle('clicked');
})

// VISITED LEARN MORE LINKS

let yellowUnderline = document.getElementById("yellow__underline");

yellowUnderline.addEventListener('click', ()=>{
    yellowUnderline.classList.toggle('saturated-yellow');
})


let pinkUnderline = document.getElementById("pink__underline");

pinkUnderline.addEventListener("click", ()=>{
    pinkUnderline.classList.toggle("saturated-pink");
});

// VISITED FOOTER LINKS

let visitedContacts = document.getElementsByClassName('visited__contacts');

for (let i = 0; i < visitedContacts.length; i++){
    visitedContacts[i].addEventListener('click',()=>{
        visitedContacts[i].classList.toggle('clicked__links');
    })
}

let visitedIcons = document.getElementsByClassName('icon');

for (let i = 0; i < icon.length; i++){
    visitedIcons[i].addEventListener('click',()=>{
        visitedIcons[i].classList.toggle('clicked__links');
    })
}

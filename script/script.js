document.getElementById("button").onclick = function(){
    open();
};

function open(){
    document.getElementById('menu').classList.toggle("opened");
    document.getElementById('triangle').classList.toggle("opened");
}
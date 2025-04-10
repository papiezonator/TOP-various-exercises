

const parent = document.querySelector(".wrapper");
let main = parent.childNodes[1];

main.addEventListener("click", () => {
    //console.log("here", parent.childNodes[0]);
    for(let i = 3; i < parent.childNodes.length; i++){
        if(i % 2){
        console.log("e", parent.childNodes[i]);
        parent.childNodes[i].style.visibility = "visible";
        }
    
    };
    return;
    
})

//console.log(parent.childNodes[1]);


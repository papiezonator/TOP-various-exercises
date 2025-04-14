

const parent = document.querySelector(".wrapper");
let main = parent.childNodes[1];

main.addEventListener("click", () => {
    //console.log("here", parent.childNodes[0]);
    for(let i = 3; i < parent.childNodes.length; i++){
        if(i % 2){
            //console.log("e", parent.childNodes[i]);
            if(parent.childNodes[i].style.visibility === "hidden"){
                parent.childNodes[i].style.visibility = "visible";
            } else {
                parent.childNodes[i].style.visibility = "hidden";
            }
            
        }
    
    };
    return;
    
})

const carouselDisplay = document.querySelector(".carousel-display");

const right = () => {
    const btn = document.querySelector("#right");
    btn.addEventListener("click", () => {
        //slideRight();
        console.log("test");
        carouselDisplay.scrollLeft += 480;
        return;
    })
}

const left = () => {
    const btn = document.querySelector("#left");
    btn.addEventListener("click", () => {
        //lideLeft();
        carouselDisplay.scrollLeft -= 480;
        console.log("test");
        return;
    })
}



left();
right();
//console.log(parent.childNodes[1]);


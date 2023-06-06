// Select the caintar 

const image = document.querySelector(".caintainer");
const heartIcon = document.querySelector(".heart");

// add a double-click event listenr to the image
image.addEventListener("dblclick",(e) =>{
    //calclutae the x and y posotin of the mouse piont
    let xValue =  e.clientX - e.target.offsetLeft;
    let yValue =  e.clientY - e.target.offsetTop;

    //addinth heart position 
    heartIcon.style.left = `${xValue}px`
    heartIcon.style.top = `${yValue}px`

    //add 
    heartIcon.classList.add("active");
    setTimeout(()=>{
        heartIcon.classList.remove("active");
    },1000)
})
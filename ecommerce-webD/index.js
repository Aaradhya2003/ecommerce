// dropdown navbar 

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.querySelector(".pages");

if (bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add("active");
    })
}
if (close){
    close.addEventListener("click", ()=>{
        nav.classList.remove("active");
    })
}



// button JS property

const btnEL = document.querySelector(".btn");
const batnEL = document.querySelector(".batn");

btnEL.addEventListener("mouseover", (event)=>{
    const y = (event.pageY - btnEL.offsetTop);
    const x = (event.pageX - btnEL.offsetLeft);

    btnEL.style.setProperty("--xPos", x +"px");
    btnEL.style.setProperty("--yPos", y +"px");
});
batnEL.addEventListener("mouseover", (event)=>{
    const y = (event.pageY - batnEL.offsetTop);
    const x = (event.pageX - batnEL.offsetLeft);

    batnEL.style.setProperty("--xPos", x +"px");
    batnEL.style.setProperty("--yPos", y +"px");
});




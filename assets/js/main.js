//Creo carosello
const carousel = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp"
];

//console.log(carousel.length);

// Seleziono l'elemento della DOM dove inserire le immagini
const carouselEl = document.querySelector(".col-10");

//creo variabile per dare active alle immagini
let activeImg = 0;

// ciclo for per selezionare le immagini dell'array
for (let i = 0; i < carousel.length; i++){
    const thisImg = carousel[i];
    //console.log(thisImg);
    const imgEl = document.createElement("img"); 
    imgEl.src=`${thisImg}`;
    if(i === activeImg){
        
        imgEl.classList.add("active");
        //console.log(imgEl);
    }
    carouselEl.append(imgEl);
}
//prelevo dalla Dom i due button
const upBtnEl = document.querySelector("button.up");
const downBtnEl = document.querySelector("button.down");
//Aggiungo eventListener "click" ai button up e down
//UP
upBtnEl.addEventListener("click", function(){
    //console.log("vai su");
    const carouselImagesElements = document.querySelectorAll("img");
    //selezione img con indice = 0 = activeImg perchè è la prima
    const mainImg = carouselImagesElements[activeImg];
    //console.log(mainImg, mainImg.classList);
    
    //allora rimuovo classe active dalla img active
    mainImg.classList.remove("active");
    //incremento activeImg
    activeImg++;
    //Bonus: infiniteLoop
    if (activeImg > carousel.length - 1){
        activeImg = 0; 
    //console.log(activeImg);  
    };
    //quindi assegno classe active a nextImg
    const nextImg = carouselImagesElements[activeImg];
    nextImg.classList.add("active");
})

//DOWN
downBtnEl.addEventListener("click", function(){
    const carouselImagesElements = document.querySelectorAll("img");
    //selezione img con indice = 0 = activeImg perchè è la prima
    const mainImg = carouselImagesElements[activeImg];
    //allora rimuovo classe active dalla img active
    mainImg.classList.remove("active");
    //decremento activeImg
    activeImg--;
    //quindi assegno classe active a nextImg
    //console.log(activeImg);
    //Bonus: infiniteLoop
    if (activeImg < 0){
        activeImg = carousel.length - 1; 
    //console.log(activeImg);  
    };
    const nextImg = carouselImagesElements[activeImg];
    nextImg.classList.add("active");
})

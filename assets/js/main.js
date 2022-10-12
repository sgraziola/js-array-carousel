//Creo carosello
const slides = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp"
];

// Seleziono l'elemento della DOM dove inserire le immagini
const slidesEl = document.querySelector(".col-10");

//creo variabile per dare active alle immagini
let activeImg = 0;

// ciclo for per selezionare le immagini dell'array
for (let i = 0; i < slides.length; i++){
    const thisImg = slides[i];
    //console.log(thisImg);
    const imgMarkup = document.createElement("img"); 
    imgMarkup.src=`${thisImg}`;
    if(i === activeImg){
        
        imgMarkup.classList.add("active");
        console.log(imgMarkup);
    }
    slidesEl.append(imgMarkup);
}


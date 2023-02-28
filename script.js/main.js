const imageArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]



const caroselListDom = document.querySelector('.carosel-list');
const circleContainerDom = document.querySelector('.circle-container')

let caroselContent = ""
let circleContent = ""

for(let i = 0; i < imageArray.length; i++) {
    const newImageWrapper = ` <div class="image-wrapper">
                    <img class="image" src="${imageArray[i]}" alt="Prima immagine" />
                </div>`;


    const newCircle = `<div class="circle"></div>`
    
    

    caroselContent += newImageWrapper;
    circleContent += newCircle;

}

caroselListDom.innerHTML = caroselContent;
circleContainerDom.innerHTML = circleContent;

const imageWrapperDom = document.getElementsByClassName('image-wrapper')

console.log(imageWrapperDom)

let activeImage = 0;

imageWrapperDom [activeImage].classList.add('show');

const rightDom = document.querySelector('#right');
const leftDom = document.querySelector('#left');

rightDom.addEventListener('click', function() {

    if(activeImage < imageArray.length - 1){
        imageWrapperDom[activeImage].classList.remove('show');
    activeImage++;
    imageWrapperDom [activeImage].classList.add('show');

    } 

    
})


leftDom.addEventListener('click', function() {

    if(activeImage > 0){
        imageWrapperDom[activeImage].classList.remove('show');
    activeImage--;
    imageWrapperDom [activeImage].classList.add('show');

    }
    
})


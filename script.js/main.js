const imageArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]

let caroselContent = ""

const caroselDom = document.querySelector('.carosel');
for(let i = 0; i < imageArray.length; i++) {
    const newImageWrapper = ` <div class="image-wrapper">
                    <img class="image" src="${imageArray[i]}" alt="Prima immagine" />
                </div>`;

                caroselContent += newImageWrapper;

}

contentDom.innerHTML = caroselContent;

const imageWrapperDom = document.getElementsByClassName('image-wrapper')

console.log(imageWrapperDom)
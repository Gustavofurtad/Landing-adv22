let slides = window.document.querySelectorAll('.Slides');
let index = 0;


function prox(){
    slides[index].classList.remove('Active')
    index = (index + 1) % slides.length;
    slides[index].classList.add('Active')
}
// function ant(){
//     slides[index].classList.remove('Active')
//     index = (index - 1 + slides.length) % slides.length;
//     slides[index].classList.add('Active')
// }
setInterval(prox, 3000);

// SLIDE ESCRITORIO


let slides2 = window.document.querySelectorAll('.Slides2');
    let index2 = 0;

function proxEsc(){
    slides2[index2].classList.remove('Active')
    index2 = (index2 + 1) % slides2.length;
    slides2[index2].classList.add('Active')
    
}
setInterval(proxEsc, 3000)





function Burgue(){
    var Cabeca = window.document.querySelector('ul')
       Cabeca.classList.toggle("DisplayFlex");
}
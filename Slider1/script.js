// this is dynamically created slider
//total of three slides 
//should be able to click on left and right arrows to switch between slides
//also each dot is associated with each slide
//when first slide shows - first dot is dark-grey color etc

//the issue is that those dots are only work on the first slide
// when I click on right arrow, the 'active' class adds to the second dot of the first div, instead of second dot of second div
//my problem is that I don't know how to access dots on second and third slide. 


var main = document.getElementById('container');
//object that contains info of each slide
var page =  [
    {
        id: 1,
        bgImg:{
            url: './images/1.jpg',
            alt: '1'
        },
        capt: 'Caption One'
    },
    {
        id: 2,
        bgImg:{
            url: './images/2.jpg',
            alt: '2'
        },
        capt: 'Caption Two'
    },
    {
        id: 3,
        bgImg:{
            url: './images/3.jpg',
            alt: '3'
        },
        capt: 'Caption Three'
    }

];
//function that inserts each slide's info in HTML
function slider(s) {
const dynamic = document.createElement('div');
//HTML for each slide
dynamic.innerHTML =`
<div class="img">

<img src = '${s.bgImg.url}'/>

<p class = 'nums'>${s.id}/3</p>
<a href='#' onclick = 'next(1)' class="right"><img src="./images/right.svg" alt="right"></a>
<a href='#' onclick = 'next(-1)' class="left"><img src="./images/left.svg" alt="left"></a>
<p class = 'caption'>${s.capt}</p>
</div>`;

main.appendChild(dynamic);
console.log(dynamic)
}
// function that renders all three slides on the web page
for (let i = 0; i <page.length; i++) {
    slider(page[i]);
}

const dots = `
<div class="dots">
<span class = 'dot' onclick='changeSlide(1)'></span>
<span class = 'dot' onclick='changeSlide(2)'></span>
<span class = 'dot' onclick='changeSlide(3)'></span>
</div>`;
main.innerHTML += dots;
//creating index to access slides
let sliderIndex = 1;

// function that takes input from arrows - either 1 (to go to next slide) or -1 (to go to previous slide)
function next(m) {
    showSlides(sliderIndex+=m);
}


// this function is associates with onclick of each dot. It takes input(1,2,or 3, depending on which dot is clicked)
// then it passes this number to main function showSlides
function changeSlide(b) {
    sliderIndex = b;
    
    console.log(sliderIndex)
   showSlides(sliderIndex);
}
// main function. it has two consts - 'divs' - the main div on the page that contains all HTML elements
// and 'dots' that is a class name of each dot.
function showSlides(n) {
     const divs = document.getElementsByClassName('img');
     const dots = document.getElementsByClassName('dot');
    // when click right arrow and reach last slide(3rd) it goes back to the first slide
    if (n > page.length) {
        sliderIndex = 1;
        //when we click left arrow and reach first slide, it goes back to the third slide
    } else if (n == 0) { sliderIndex = page.length;}

    // we remove all slides from the page 
    // also remove 'active' class from dots
    for (let i = 0; i <page.length; i++) {

        divs[i].style.display = 'none';
        dots[i].className=dots[i].className.replace(' active', ''); 
   
   
}
   // now we make each slide show up one by one
   // as well as adding 'active' class to dot with the same index as slide, so it turns dark grey
    dots[sliderIndex-1].className += ' active';//this command should be able to access second and third dot of second and third slide
    // but it only switches dots on first slide

    divs[sliderIndex-1].style.display='block';
}

// another issue I just found - left arrow disappears from the screen for some reason while right one stays


showSlides(sliderIndex);





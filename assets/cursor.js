const cursor = document.getElementById('cursorText');

let cursorWidthHalf = cursor.offsetWidth / 10;
let cursorHeightHalf = cursor.offsetHeight / 10;

const onMouseMove = (e) => {

    let mouseX = e.clientX
    let mouseY = e.clientY

    cursor.style.left = `${mouseX - cursorWidthHalf}px`;
    cursor.style.top = `${mouseY - cursorHeightHalf}px`;
}

document.addEventListener('mousemove', onMouseMove, false);

let textWrapper = document.getElementById('cursorText');
let leftSide = document.querySelector('.left_side');
let rightSide = document.querySelector('.right_side');


  var imgs = document.images,
    len = imgs.length,
    counter = 0;

[].forEach.call( imgs, function( img ) {
    if(img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === len ) {
        console.log( 'All images loaded!' );
    }
}

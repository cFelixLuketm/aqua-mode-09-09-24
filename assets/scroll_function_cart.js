

const screenWidthscrollfunctioncart = window.matchMedia( "(max-width: 750px)" );

const cartWrapper = document.querySelector("#MainContent");
console.log(cartWrapper)
cartWrapperHeight = cartWrapper.clientHeight;
console.log(cartWrapperHeight)
const addToBag = document.querySelector("#addToBag");
console.log(addToBag)
const cartHeader = document.querySelector(".cart__title__price__mobile");
// mobileFooter = addToBag.clientHeight * 2;

if (screenWidthscrollfunctioncart.matches) {
  document.addEventListener("scroll", function (event) {
    const scroll = window.pageYOffset

     if(scroll > cartWrapperHeight - 850) {
       console.log(cartWrapperHeight)
       addToBag.style.bottom = "-6vh";
       cartHeader.style.bottom = "-6vh";
     } else {
       addToBag.style.bottom = "0vh";
       cartHeader.style.bottom = "6vh";
     }

    })
  }

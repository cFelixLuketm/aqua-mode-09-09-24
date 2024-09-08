
const screenWidthscrollfunction = window.matchMedia( "(max-width: 750px)" );

if (screenWidthscrollfunction.matches) {
  document.addEventListener("scroll", function (event) {
    const productWrapper = document.querySelector(".product__wrapper");
    productWrapperHeight = productWrapper.clientHeight;
    const addToBag = document.querySelector("#addToBag")
    mobileFooter = addToBag.clientHeight * 2;
    const productTitle = document.querySelector(".product__title__price__mobile");


    const scroll = window.pageYOffset

     if(scroll > productWrapperHeight) {
       console.log(productWrapperHeight)
       productTitle.classList.add('active');
       addToBag.classList.add('active');
     } else {
       productTitle.classList.remove('active');
       addToBag.classList.remove('active');
     }

    })
  }

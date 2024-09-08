

const productInformationField = document.getElementById('productInformationField');
const product__buttons = document.querySelectorAll('.product__buttons');
const titleContainer = document.querySelector(".title__container");

const screenWidthProductInformation = window.matchMedia( "(max-width: 750px)" );

if (screenWidthProductInformation.matches) {

  product__buttons.forEach(product__button => {
    product__button.addEventListener("click", function(){
      productInformationField.classList.add('active');
      titleContainer.style.display = "none";
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
  })


  const closeProductInfoButtons = document.querySelectorAll('#closeProductInfoButtons');
    closeProductInfoButtons.forEach(closeProductInfoButton => {
      closeProductInfoButton.addEventListener("click", function(){
        productInformationField.classList.remove('active');
        titleContainer.style.display = "flex";
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = `-${scrollY}`;
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      })
  })
})

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});



} else {



  product__buttons.forEach(product__button => {
    product__button.addEventListener("click", function(){
      productInformationField.classList.add('active');
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
  })


  const closeProductInfoButtons = document.querySelectorAll('#closeProductInfoButtons');
    closeProductInfoButtons.forEach(closeProductInfoButton => {
      closeProductInfoButton.addEventListener("click", function(){
        productInformationField.classList.remove('active');
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = `-${scrollY}`;
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      })
  })
})

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

}


function openProductInformationField(evt, contentType) {
  var i, productTabContent, tablinks;
  productTabContent = document.getElementsByClassName("product__tab__content");
  for (i = 0; i < productTabContent.length; i++) {
    productTabContent[i].style.display = "none";
  }
  productButtons = document.getElementsByClassName("product__buttons");
  for (i = 0; i < productButtons.length; i++) {
    productButtons[i].className = productButtons[i].className.replace(" active", "");
  }
  document.getElementById(contentType).style.display = "block";
  evt.currentTarget.className += " active";
}


const footerOptionsContainer = document.getElementById('footerOptionsContainer');
const footerOptionsContainerCloseButtons = document.querySelectorAll('#footerOptionsContainerCloseButton');
const content__buttons = document.querySelectorAll('.content__buttons');
const footerLine = document.getElementById('footerLine');
const subscribeBox = document.getElementById('subscribeBox');

const screenWidth = window.matchMedia( "(max-width: 750px)" );

// MOBILE DEPENDENCIES

const footerOptionsContainerMobile = document.getElementById('footerOptionsContainerMobile');
const MainContent = document.getElementById("MainContent");
const MobileHeader = document.getElementById("headerContainer");
// const mobileScroller = document.getElementById("mobileScroller");
const footer = document.querySelector(".footer");
const footerInMenu = document.querySelector(".footer_inmenu");
// const whiteBackground = document.getElementById("whiteBackground");


const homepageStyles = document.querySelectorAll(".header_menu, .logo, .search_enter, .header__field__input, .field__header, .lines");

if (screenWidth.matches) {

  const scrollmenu = document.querySelector(".scrollmenu")
  // FOR EACH BUTTON OPEN CONTAINER WNDOW
  content__buttons.forEach(content__button => {
    content__button.addEventListener("click", function(){

      homepageStyles.forEach(homepageStyle => {
        homepageStyle.classList.remove("homepage")
      })


      if(footerOptionsContainer.classList.contains('active')) {
        document.documentElement.classList.remove("footeractive-mobile");
        footer.style.display = "block";
        // content__button.classList.remove('active');
        // footerOptionsContainer.classList.remove('active')
      } else {
        setTimeout(function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          MainContent.classList.add("optionsActive");
          scrollmenu.style.opacity = 1;
          document.documentElement.classList.add("footeractive-mobile");
          MobileHeader.style.backgroundColor = "#ffffff";
          MobileHeader.style.height = "13vh";
          mobileScroller.style.pointerEvents = "all";
          footerInMenu.style.display = "block"
          footerOptionsContainer.classList.add('active');
          footer.style.display = "none";
          gradiantBox.style.display = "block";
          // whiteBackground.style.display = "block"
        }, (1000));

        // footerOptionsContainer.classList.add('active');
        // footerLine.classList.add('active');

        setTimeout(function() {
          contentWrapper = document.getElementsByClassName("content__wrapper");
          for (i = 0; i < contentWrapper.length; i++) {
            contentWrapper[i].style.opacity = 1;
            contentWrapper[i].style.position = "relative";
          }
        }, (1000));

        if(document.getElementById('subscribeBox')){
            subscribeBox.classList.add('closed');
        } else {
            null
        }
      }
    }, false)
  })

  const ContactMobileButton = document.querySelector(".contact-mobile-scroll-title");
  const ContactMobile = document.getElementById("ContactMobile");

  ContactMobileButton.addEventListener("click", function (){
    ContactMobile.style.height = "12vh";
  })

  // var RefundsAndExchanges = document.getElementById("RefundsAndExchanges").offsetTop;
  // console.log(RefundsAndExchanges)
  // const refundsButton = document.getElementById("refundsButton");
  //
  // refundsButton.addEventListener("click", function(){
  //   window.scrollTo({ top: RefundsAndExchanges, behavior: 'smooth'});
  // })
  //
  // var ShippingPolicy = document.getElementById("ShippingPolicy").offsetTop;
  // console.log(ShippingPolicy)
  // const shippingButton = document.getElementById("shippingButton");
  //
  // shippingButton.addEventListener("click", function(){
  //   window.scrollTo({ top: ShippingPolicy, behavior: 'smooth'});
  // })
  //
  // var Contact = document.getElementById("Contact").offsetTop;
  // console.log(Contact)
  // const contactButton = document.getElementById("contactButton");
  // contactButton.addEventListener("click", function(){
  //   window.scrollTo({ top: Contact, behavior: 'smooth'});
  // })
  //
  // var About = document.getElementById("About").offsetTop;
  // const aboutButton = document.getElementById("aboutButton");
  // aboutButton.addEventListener("click", function(){
  //   window.scrollTo({ top: About, behavior: 'smooth'});
  // })


  // CLOSE WINDOW AND DE SELECT OPTIONS
  footerOptionsContainerCloseButtons.forEach(footerOptionsContainerCloseButton => {
    footerOptionsContainerCloseButton.addEventListener("click", function(){
    // RE ENABLE SCROLL
      window.onscroll = function() {};
      if(footerOptionsContainer.classList.contains('active')) {
        content__buttons.forEach(content__button => {
          content__button.classList.remove('active');
        })

        setTimeout(function() {
          footerOptionsContainer.classList.remove('active');
        }, (1000));

        setTimeout(function() {
          footerLine.classList.remove('active');
        }, (1000));

          contentWrapper = document.getElementsByClassName("content__wrapper");
          for (i = 0; i < contentWrapper.length; i++) {
            contentWrapper[i].style.opacity = 0;
          }
        setTimeout(function() {
          contentWrapper = document.getElementsByClassName("content__wrapper");
          for (i = 0; i < contentWrapper.length; i++) {
            contentWrapper[i].style.position = "fixed";
          }
        }, (1000));

      }
    }, false)
  })



const mobileScrollerButtons = Array.from(document.querySelectorAll(".mobile-scroller-buttons"));
mobileScrollerButtons.forEach(mobileScrollerButton => {

const selection = (event) => {
  mobileScrollerButtons.forEach(mobileScrollerButton => {
    mobileScrollerButton.classList.remove("underlined");
  });
    event.currentTarget.classList.add("underlined");
  }
  mobileScrollerButton.addEventListener('click', selection)
})




} else {

  // const homepageStyles = document.querySelectorAll(".header_menu, .logo, .search_enter, .header__field__input, .field__header, .lines");
  // console.log(homepageStyles)


  // FOR EACH BUTTON OPEN CONTAINER WNDOW
  content__buttons.forEach(content__button => {
    content__button.addEventListener("click", function(){

      homepageStyles.forEach(homepageStyle => {
        homepageStyle.classList.remove("homepage")
      })


  // DISABLE SCROLL
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          window.onscroll = function() {
              window.scrollTo(scrollLeft, scrollTop);
          };
      if(footerOptionsContainer.classList.contains('active')) {
        // content__button.classList.remove('active');
        // footerOptionsContainer.classList.remove('active')
      } else {
        content__button.classList.add('active');
        footerOptionsContainer.classList.add('active');
        footerLine.classList.add('active');

        if(document.getElementById('subscribeBox')){
            subscribeBox.classList.add('closed');
        } else {
            null
        }
      }
    }, false)
  })

  function openTab(evt, contentType) {
    var i, contentWrapper, contentButtons;
    contentWrapper = document.getElementsByClassName("content__wrapper");
    for (i = 0; i < contentWrapper.length; i++) {
      contentWrapper[i].style.display = "none";
    }
    contentButtons = document.getElementsByClassName("content__buttons");
    for (i = 0; i < contentButtons.length; i++) {
      contentButtons[i].className = contentButtons[i].className.replace(" active", "");
    }
    document.getElementById(contentType).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // CLOSE WINDOW AND DE SELECT OPTIONS
  footerOptionsContainerCloseButtons.forEach(footerOptionsContainerCloseButton => {
    footerOptionsContainerCloseButton.addEventListener("click", function(){

      homepageStyles.forEach(homepageStyle => {
        homepageStyle.classList.add("homepage")
      })


    // RE ENABLE SCROLL
      window.onscroll = function() {};
      if(footerOptionsContainer.classList.contains('active')) {
        content__buttons.forEach(content__button => {
          content__button.classList.remove('active');
        })
        footerOptionsContainer.classList.remove('active');
        footerLine.classList.remove('active');
      }
    }, false)
  })
}

const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

const screenWidthHeader = window.matchMedia( "(max-width: 750px)" );


if (screenWidthHeader.matches) {

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });

  const mobileHeader = document.getElementById('mobileHeader');
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    lastScroll = currentScroll;
  });

  var anchor = document.querySelectorAll('.lines-button');

[].forEach.call(anchor, function(anchor){
  var open = false;
  anchor.onclick = function(event){
    event.preventDefault();
    if(!open){
      this.classList.add('close');
      open = true;
    }
    else{
      this.classList.remove('close');
      open = false;
    }
  }
});


  const mobileHeaderMenu = document.querySelector('.mobile__menu__wrapper');
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const filterButton = document.getElementById('filterButtonMobile');

  const searchBar = document.querySelector(".search__wrapper");
  // const searchBar = document.querySelector(".search-modal__form");
  const skincareTitle = document.getElementById("skincareTitle");
  const accessoriesTitle = document.getElementById("accessoriesTitle");

  const homepageStyles = document.querySelectorAll(".header_menu, .logo, .search_enter, .header__field__input, .field__header, .lines");

  const mobileScroller = document.getElementById("mobileScroller");

  mobileMenuButton.addEventListener("click", function(){

    if(mobileHeaderMenu.classList.contains('active')){

      const footerOptionsContainer = document.getElementById('footerOptionsContainer');
      if(footerOptionsContainer.classList.contains('active')) {

        const mobileScroller = document.getElementById("mobileScroller");
        const gradiantBox = document.getElementById("gradiantBox");
        const MobileHeader = document.getElementById("headerContainer");
        mobileScroller.style.zIndex = 10;
        mobileScroller.style.pointerEvents = "all";
        gradiantBox.style.zIndex = 10;
        MobileHeader.style.height = "13vh";

          searchBar.style.opacity = 0;
          skincareTitle.style.opacity = 0;
          accessoriesTitle.style.opacity = 0;
        mobileHeaderMenu.classList.remove('active');

        [].forEach.call(anchor, function(anchor){
          var open = false;
          anchor.onclick = function(event){
            event.preventDefault();
            if(!open){
              this.classList.add('close');
              open = true;
            }
          }
        });
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = `-${scrollY}`;
        window.scrollTo(0, parseInt(scrollY || '0') * -1);

      } else {
        const mobileScroller = document.getElementById("mobileScroller");
        const gradiantBox = document.getElementById("gradiantBox");
        const MobileHeader = document.getElementById("headerContainer");
        mobileScroller.style.zIndex = 10;
        mobileScroller.style.pointerEvents = "all";
        gradiantBox.style.zIndex = 10;
        MobileHeader.style.height = "13vh";

        homepageStyles.forEach(homepageStyle => {
          homepageStyle.classList.add("homepage")
        })

          searchBar.style.opacity = 0;
          skincareTitle.style.opacity = 0;
          accessoriesTitle.style.opacity = 0;
        mobileHeaderMenu.classList.remove('active');

        [].forEach.call(anchor, function(anchor){
          var open = false;
          anchor.onclick = function(event){
            event.preventDefault();
            if(!open){
              this.classList.add('close');
              open = true;
            }
          }
        });
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = `-${scrollY}`;
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    } else {


      const mobileScroller = document.getElementById("mobileScroller");
      const gradiantBox = document.getElementById("gradiantBox");
      const MobileHeader = document.getElementById("headerContainer");
      mobileScroller.style.zIndex = 0;
      mobileScroller.style.pointerEvents = "none";
      gradiantBox.style.zIndex = 0;
      MobileHeader.style.height = "0vh";



      homepageStyles.forEach(homepageStyle => {
        homepageStyle.classList.remove("homepage")
      })

      mobileHeaderMenu.classList.add('active');

      [].forEach.call(anchor, function(anchor){
        var open = false;
        anchor.onclick = function(event){
          event.preventDefault();
          this.classList.remove('close');
          open = false;
        }
      });

      setTimeout(() => {
        searchBar.style.opacity = 1;
      }, 400);

      setTimeout(() => {
        skincareTitle.style.opacity = 1;
      }, 500);

      setTimeout(() => {
        accessoriesTitle.style.opacity = 1;
      }, 600);

      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    }
  })


} else {


  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });
}





const fieldHeader = document.querySelector(".field__header");
const searchButton = document.querySelector(".search__button")

const screenWidthSearch = window.matchMedia( "(max-width: 750px)" );

if (screenWidthSearch.matches) {

  fieldHeader.addEventListener("mouseover", function(){
    searchButton.style.opacity = 1
    console.log(fieldHeader)
  })

} else {

  fieldHeader.addEventListener("click", function(){
    // fieldHeader.style.borderBottom = "1px solid rgba(62, 41, 7, 0.5)";
    fieldHeader.classList.add('clicked');
    searchButton.style.opacity = 1
  })

}

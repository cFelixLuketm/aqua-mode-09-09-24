
const buyButton = document.querySelector(".buy__button__style");
const purchaceButtonText = document.querySelector(".purchace_button_text");
const priceWrapper = document.querySelector(".price__wrapper");
const BagNum = document.querySelector("#bagNum");
const AddToBagLine = document.getElementById("addToBagLine");

buyButton.addEventListener("click", function(){

  window.setTimeout(function(){
    buyButton.style.pointerEvents = "none";
    AddToBagLine.style.marginTop = "-4.5vh";
    AddToBagLine.style.opacity = 1;
  }, 750)
})


// const BagNum = document.querySelector("#bagNum");
const addToBagButtons = document.querySelectorAll(".add__to__bag__text");
console.log(addToBagButtons)

addToBagButtons.forEach(addToBagButton => {
  addToBagButton.addEventListener("click", function(){
    console.log(addToBagButton)

    window.setTimeout(function(){
      addToBagButton.style.pointerEvents = "none";
      var addedValue = document.getElementById("bagNum").innerHTML;
      var newValue = parseInt(addedValue,10) + 1;
      document.getElementById("bagNum").innerHTML = newValue;
    }, 750)
  })
})


const hiddenDetailsButton = document.getElementById('hiddenDetailsButton');
const hiddenDetails = document.getElementById('hiddenDetails');
const maskedOverflow = document.querySelector(".masked-overflow");
console.log(maskedOverflow)

hiddenDetailsButton.addEventListener("click", function(){
  if(hiddenDetails.classList.contains('clicked')){
    hiddenDetails.classList.remove('clicked');
    hiddenDetailsButton.innerHTML = "Show Details";
    maskedOverflow.classList.remove("expanded")

    expandableDetailsOne.classList.remove('active')
    expandableDetailsOnePointTwo.classList.remove('active')
    expandableDetailsOnePointThree.classList.remove('active')
    expandableDetailsTwo.classList.remove('active')
    expandableDetailsThree.classList.remove('active')
  } else {
    hiddenDetails.classList.add('clicked');
    hiddenDetailsButton.innerHTML = "Hide Details";
    // maskedOverflow.classList.add("expanded");
  }
}, false);


const screenWidthProductPage = window.matchMedia( "(max-width: 750px)" );

const addToBag = document.getElementById('addToBag');
const addToBagText = document.getElementById('addToBagText');
const addToBagLine = document.getElementById('addToBagLine');

if (screenWidthProductPage.matches) {
  null
} else {
  addToBag.addEventListener("mouseover", function(){
    // addToBagText.style.paddingLeft = "12.5vw";
    addToBagLine.classList.add('hovered')
  })

  addToBag.addEventListener("mouseout", function(){
    // addToBagText.style.paddingLeft = "0px";
    addToBagLine.classList.remove('hovered')
  });
}


const expandableDetailsLabelOne = document.getElementById('expandableDetailsLabelOne');
const expandableDetailsOne = document.getElementById('expandableDetailsOne');

if(document.body.contains(expandableDetailsLabelOne)) {
  expandableDetailsLabelOne.addEventListener("click", function(){
    console.log("clicked")
    if(expandableDetailsOne.classList.contains('active')){
      expandableDetailsOne.classList.remove('active')
    } else {
      maskedOverflow.classList.add("expanded");
      expandableDetailsOne.classList.add('active');
    }
  }, false);
}

const expandableDetailsLabelOne__patchOne = document.getElementById('expandableDetailsLabelOne__patchOne');
const expandableDetailsOnePointTwo = document.getElementById('expandableDetailsOnePointTwo');

if(document.body.contains(expandableDetailsLabelOne__patchOne)) {
  expandableDetailsLabelOne__patchOne.addEventListener("click", function(){
    console.log("clicked")
    if(expandableDetailsOnePointTwo.classList.contains('active')){
      expandableDetailsOnePointTwo.classList.remove('active')
    } else {
      maskedOverflow.classList.add("expanded");
      expandableDetailsOnePointTwo.classList.add('active');
    }
  }, false);
}

const expandableDetailsLabelOne__patchTwo = document.getElementById('expandableDetailsLabelOne__patchTwo');
const expandableDetailsOnePointThree = document.getElementById('expandableDetailsOnePointThree');

if(document.body.contains(expandableDetailsLabelOne__patchTwo)) {
  expandableDetailsLabelOne__patchTwo.addEventListener("click", function(){
    console.log("clicked")
    if(expandableDetailsOnePointThree.classList.contains('active')){
      expandableDetailsOnePointThree.classList.remove('active')
    } else {
      maskedOverflow.classList.add("expanded");
      expandableDetailsOnePointThree.classList.add('active');
    }
  }, false);
}

const expandableDetailsLabelTwo = document.getElementById('expandableDetailsLabelTwo');
const expandableDetailsTwo = document.getElementById('expandableDetailsTwo');

if(document.body.contains(expandableDetailsLabelTwo)) {
  expandableDetailsLabelTwo.addEventListener("click", function(){
    console.log("clicked")
    if(expandableDetailsTwo.classList.contains('active')){
      expandableDetailsTwo.classList.remove('active')
    } else {
      expandableDetailsTwo.classList.add('active');
      maskedOverflow.classList.add("expanded");
    }
  }, false);
}

const expandableDetailsLabelThree = document.getElementById('expandableDetailsLabelThree');
const expandableDetailsThree = document.getElementById('expandableDetailsThree');

if(document.body.contains(expandableDetailsLabelThree)) {
  expandableDetailsLabelThree.addEventListener("click", function(){
    console.log("clicked")
    if(expandableDetailsThree.classList.contains('active')){
      expandableDetailsThree.classList.remove('active')
    } else {
      expandableDetailsThree.classList.add('active');
      maskedOverflow.classList.add("expanded");
    }
  }, false);
}

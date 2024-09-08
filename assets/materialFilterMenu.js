
const material__selectors = document.querySelectorAll(".material__selectors");

material__selectors.forEach(material__selector => {
  const valueLabel = material__selector.querySelector("#valueLabel");
  material__selector.addEventListener("mouseover", function(){
    valueLabel.classList.add('active');
  }, false)

  material__selector.addEventListener("mouseout", function(){
    valueLabel.classList.remove('active');
  }, false)
})

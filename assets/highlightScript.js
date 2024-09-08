
const select__wrappers = document.querySelectorAll(".select__wrappers")

select__wrappers.forEach(select__wrapper => {
  const highlight__text = select__wrapper.querySelector(".highlight__text");
  select__wrapper.addEventListener('mouseover', function handleMouseOver() {
    const dot = select__wrapper.querySelector(".dot");
    highlight__text.classList.add("hovered")
    dot.classList.add("hovered")
    select__wrapper.classList.add("hovered")
  });

  select__wrapper.addEventListener('mouseout', function handleMouseOver() {
    const dot = select__wrapper.querySelector(".dot");
    highlight__text.classList.remove("hovered")
    dot.classList.remove("hovered")
    select__wrapper.classList.remove("hovered")
  });
})

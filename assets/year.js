
const years = document.querySelectorAll("#year")

years.forEach(year => {
  year.innerHTML = new Date().getFullYear();
})

function displayLinks(className){
  let links = document.querySelectorAll('.'+className);

  links.forEach(link => {
    link.classList.toggle('show');
  })
}

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
document.addEventListener("click", (e) => {
  if (menu.classList.contains("show") && !menu.contains(e.target) && e.target !== hamburger) {
    menu.classList.remove("show");
  }
});
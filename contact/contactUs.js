document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_z9sck8c', 'template_3jrregy', this)
      .then(function() {
        alert("Message sent successfully!");
      }, function(error) {
        alert("Failed to send. Error: " + JSON.stringify(error));
      });
});

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
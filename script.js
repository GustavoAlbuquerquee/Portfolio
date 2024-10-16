
var i = 0;
var i2 = 0;
var txt = 'Desenvolvedor Front End'; 
var txt2 = 'GUSTAVO ALBQUERQUE'; 
var txt3 = 'OLÁ, EU SOU'

var speed = 100; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("digitando").innerHTML += txt.charAt(i);
    document.getElementById("gustavo").innerHTML += txt2.charAt(i);
    document.getElementById("ola").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.liPaginas a');

  links.forEach(function(link) {
      link.addEventListener('click', function(event) {
          // Verifica se o link é o "INICIO"
          if (link.textContent.trim() === 'INICIO') {
              event.preventDefault(); // Previne o comportamento padrão

              var target = document.getElementById('pagsobremim');
              if (target) {
                  var offset = 120; // Ajuste conforme necessário
                  var targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

                  window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                  });
              }
          }
      });
  });
});

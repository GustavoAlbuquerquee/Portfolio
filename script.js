
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
      
          if (link.textContent.trim() === 'INICIO') {
              event.preventDefault(); 

              var target = document.getElementById('pagsobremim');
              if (target) {
                  var offset = 120; 
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

let index = 0;
const totalImagens = 5;
const totalVisiveis = 3; 

function mostrarImagem() {
    const imagens = document.querySelector('.imagens');
    
   
    imagens.style.transform = `translateX(${-index * (100 / totalVisiveis)}%)`;
}

function mudarImagem(direcao) {
    index += direcao;
    
    
    if (index > totalImagens - totalVisiveis) {
        index = 0; 
    } else if (index < 0) {
        index = totalImagens - totalVisiveis; 
    }
    
    mostrarImagem();
}

mostrarImagem();


setInterval(() => {
    mudarImagem(1); 
}, 3000); 

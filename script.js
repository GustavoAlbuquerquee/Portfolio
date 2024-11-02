var i = 0;
var i2 = 0;
var txt = "Desenvolvedor Front End";
var txt2 = "GUSTAVO ALBQUERQUE";
var txt3 = "OLÁ, EU SOU";

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

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".liPaginas a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.textContent.trim() === "SOBRE") {
        event.preventDefault();

        var target = document.getElementById("paghabilidades");
        if (target) {
          var offset = 120;
          var targetPosition =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.textContent.trim() === "INICIO") {
        event.preventDefault();

        var target = document.getElementById("inicio");
        if (target) {
          var offset = 120;
          var targetPosition =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.textContent.trim() === "SOBRE") {
        event.preventDefault();

        var target = document.getElementById("pagsobremim");
        if (target) {
          var offset = 200;
          var targetPosition =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.textContent.trim() === "HABILIDADES") {
        event.preventDefault();

        var target = document.getElementById("paghabilidades");
        if (target) {
          var offset = 200;
          var targetPosition =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.textContent.trim() === "FORMAÇÃO") {
        event.preventDefault();

        var target = document.getElementById("experiencia");
        if (target) {
          var offset = 200;
          var targetPosition =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.textContent.trim() === "PROJETOS") {
        event.preventDefault();

        var target = document.getElementById("pagmeusprojetos");
        if (target) {
          var offset = 200;
          var targetPosition =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.textContent.trim() === "CONTATO") {
        event.preventDefault();

        var target = document.getElementById("pagcadastro");
        if (target) {
          var offset = 200;
          var targetPosition =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
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
  const imagens = document.querySelector(".imagens");

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

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Swapped text!";
  } else {
    x.innerHTML = "Hello";
  }
}

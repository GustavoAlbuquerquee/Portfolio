// document.getElementsByClassName('liPaginas').addEventListener('click', function() {
//     document.getElementById('nome').scrollIntoView({ behavior: 'smooth' });
// });

var i = 0;
var i2 = 0;
var txt = 'Desenvolvedor Front End'; /* The text */
var txt2 = 'GUSTAVO ALBQUERQUE'; /* The text */
var txt3 = 'OLÁ, EU SOU'

var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("digitando").innerHTML += txt.charAt(i);
    document.getElementById("gustavo").innerHTML += txt2.charAt(i);
    document.getElementById("ola").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
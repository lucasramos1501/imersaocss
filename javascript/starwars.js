function tocarMusica() {
    var musica = new Audio("../musica/starwars.mp3");
    musica.volume = 0.5;
    musica.play();
}
tocarMusica();

setInterval(() => {
    window.location.href = "/imersaocss/home.html";
}, 12000);


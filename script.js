var sobremim_btn = document.querySelector("#sobremim_btn");

sobremim_btn.addEventListener("click", function praesquerda(){
    var conteudo_sobremim = document.querySelector(".conteudo_sobremim");
    conteudo_sobremim.style.left = "50vw";

    var inicio = document.querySelector(".inicio");
    inicio.style.width = "50vw";
});
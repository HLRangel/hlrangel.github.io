function lightImagem(num) {
    const imagem = "imagem-" + num;

    const el_lightbox = document.getElementById("lightbox");
    const el_imagem = document.getElementById(imagem);
    const el_light = document.getElementById("lightbox-fill");

    if(el_imagem != null && el_light != null) {
        el_light.src = el_imagem.src;
    }

    el_lightbox.style.display = "block";
}

function fecharLightbox() {
    const el_lightbox = document.getElementById("lightbox");

    el_lightbox.style.display = "none";
}
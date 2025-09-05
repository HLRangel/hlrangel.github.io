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

function consultarGlossario(event) {
    // Bem feio :p
    const nome = event.innerText.toLowerCase();
    console.log(nome);

    let dica = "Dica padrão!";

    switch(nome) {
        case "incógnita":
            dica = `O intúito de uma equação é descobrir o valor de uma \
            ou mais incógnitas, que são números desconhecidos, geralmente \
            representados por uma letra (como, por exemplo, "x").`;
            break;
        case "𝑎":
            dica = `É denominada forma geral, forma normal, ou, ainda, forma \
            reduzida a equação do 2º grau que esteja escrita na forma de \
            𝑎⁢𝑥² + 𝑏⁢𝑥 + 𝑐 = 0, com 𝑎 ≠ 0.`;

            break;
    }

    const el = event.querySelector("[id=tooltip]");
    if(el == null) {
        event.innerHTML = event.innerHTML + `<div id="tooltip" class="tooltip-lado">\
        <div class="tooltip-lado-titulo"><p>Saiba mais sobre: <b>${nome}</b>\
        </p></div><p>${dica}</p></div>`;
    } else {
        el.remove();
    }

    console.log(dica);
}
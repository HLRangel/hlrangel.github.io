var tooltip = document.querySelectorAll('.tooltip-mouse');
var idtooltip = document.getElementById("waiting-tooltip");

document.addEventListener('mousemove', fn, false);

function fn(e) {
    if(!e.target.classList.contains("tooltip-linha")) {
        idtooltip.style.display = "none";
    } else {

        idtooltip.innerHTML = `<div class="tooltip-lado-titulo">\
        <div><img src="/images/exclamacao.svg" width="25" height="25"></div>\
        <div><p>Saiba mais sobre: <b>${e.target.innerText}</div>\
        </b></p></div><p>\
        ${listaPalavras(e.target.innerText)}</p>`

        e.target.innerText;
        idtooltip.style.display = "block";
        
        idtooltip.style.left = e.pageX + 'px';
        idtooltip.style.top = (e.pageY - 240) + 'px';
    }

}

function mouseTooltip(event) {

}

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

function listaPalavras(nome) {
    switch(nome) {
        case "incógnita":
            return `O intúito de uma equação é descobrir o valor de uma \
            ou mais incógnitas, que são números desconhecidos, geralmente \
            representados por uma letra (como, por exemplo, "x").`;
            break;
        case "𝑎":
            return `É denominada forma geral, forma normal, ou, ainda, forma \
            reduzida a equação do 2º grau que esteja escrita na forma de \
            𝑎⁢𝑥² + 𝑏⁢𝑥 + 𝑐 = 0, com 𝑎 ≠ 0.`;

            break;
    }

    return "Esse é o texto padrão!";
}

function consultarGlossario(event) {
    // Bem feio :p
    const nome = event.innerText.toLowerCase();
    console.log(nome);

    let dica = listaPalavras(nome);

    const el = event.querySelector("[id=tooltip]");
    if(el == null) {
        event.innerHTML = event.innerHTML + `<div id="tooltip" class="tooltip-estilo tooltip-lado">\
        <div class="tooltip-lado-titulo">\
        <div><img src="/images/exclamacao.svg" width="25" height="25"></div>\
        <div><p>Saiba mais sobre: <b>${nome}</b></div>\
        </p></div><p>${dica}</p></div>`;
    } else {
        el.remove();
    }

    console.log(dica);
}
function criptografar() {
    const input = document.querySelector('textarea').value;
    let output = 
    input
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

    mostrarOutput(output);
}

function descriptografar() {
    const input = document.querySelector('textarea').value;
    let output = 
    input
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

    mostrarOutput(output);
}

function mostrarOutput(mensagem) {
    const mensagemPadrao = document.querySelector('.empty-output-message');
    const output = document.querySelector('.output-message');

    if(mensagem) {
        mensagemPadrao.classList.add('hide');
        output.children[0].textContent = mensagem
        output.classList.remove('hide');
    } else {
        mensagemPadrao.classList.remove('hide');
        output.classList.add('hide');
    }
}

async function copiarTexto() {
    let text = document.querySelector('.output-message > p').innerHTML;

    try {
    await navigator.clipboard.writeText(text);
    } catch (err) {
    console.error('Failed to copy: ', err);
    }
}


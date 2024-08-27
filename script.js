function criptografar() {
    let texto = document.getElementById("textodeEntrada").value;

    if (texto.trim() === "") {
        alert("Por favor, insira algum texto para criptografar.");
        return;
    }

    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

        document.getElementById("texto-cripto").value = textoCriptografado;

     // Limpa o campo de entrada e volta ao estado inicial
     document.getElementById("textodeEntrada").value = "";  // Limpa o texto
     document.getElementById("textodeEntrada").placeholder = "Digite seu texto"; // Volta o placeholder ao estado inicial    

    // Oculta a imagem e exibe o textarea com o texto criptografado
    document.getElementById("minhaImagem").style.display = "none";
    document.getElementById("texto-cripto").style.display = "block";

    // Oculta as mensagens de "Nenhuma mensagem encontrada"
    document.querySelector(".conteudo__secundario__mensagem__primeira").style.display = "none";
    document.querySelector(".conteudo__secundario__mensagem__segunda").style.display = "none";
}

function descriptografar() {
    let textoCriptografado = document.getElementById("textodeEntrada").value;

    if (textoCriptografado.trim() === "") {
        alert("Por favor, insira algum texto para descriptografar.");
        return;
    }

    let textoOriginal = textoCriptografado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("texto-cripto").value = textoOriginal;

    // Limpa o campo de entrada e volta ao estado inicial
    document.getElementById("textodeEntrada").value = "";  // Limpa o texto
    document.getElementById("textodeEntrada").placeholder = "Digite seu texto"; // Volta o placeholder ao estado inicial

    // Oculta a imagem e exibe o textarea com o texto descriptografado
    document.getElementById("minhaImagem").style.display = "none";
    document.getElementById("texto-cripto").style.display = "block";

    // Oculta as mensagens de "Nenhuma mensagem encontrada"
    document.querySelector(".conteudo__secundario__mensagem__primeira").style.display = "none";
    document.querySelector(".conteudo__secundario__mensagem__segunda").style.display = "none";
}

function copiarTexto() {
    let textoCriptografado = document.getElementById("texto-cripto");
    textoCriptografado.select();
    textoCriptografado.setSelectionRange(0, 99999); // Para dispositivos móveis

    document.execCommand("copy");

     // Limpa o campo de texto após a cópia e exibe a mensagem "Nenhuma mensagem encontrada"
     textoCriptografado.value = ""; // Limpa o texto do textarea
     document.getElementById("minhaImagem").style.display = "block"; // Exibe a imagem novamente
     document.getElementById("texto-cripto").style.display = "none"; // Oculta o textarea
 
     // Exibe a mensagem de "Nenhuma mensagem encontrada"
     document.querySelector(".conteudo__secundario__mensagem__primeira").style.display = "block";
     document.querySelector(".conteudo__secundario__mensagem__segunda").style.display = "block";
}

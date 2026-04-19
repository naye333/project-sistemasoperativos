function mostrarSeccion(id) {
    document.getElementById("cmd").style.display = "none";
    document.getElementById("ps").style.display = "none";

    document.getElementById(id).style.display = "block";
}

function toggleCategoria(elemento) {
    const contenido = elemento.nextElementSibling;

    if (contenido.style.display === "block") {
        contenido.style.display = "none";
    } else {
        contenido.style.display = "block";
    }
}
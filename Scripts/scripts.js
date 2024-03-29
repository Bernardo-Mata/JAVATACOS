let hamburguerboton = document.getElementById("hamburguesaBoton")
let listaNav = document.getElementsByClassName("listaNav")

hamburguerboton.addEventListener("click", function () {
    for (var i = 0; i < listaNav.length; i++) {
        // Obtén el elemento actual
        var elemento = listaNav[i];
        
        // Aplica la función deseada, por ejemplo, eliminar una clase
        elemento.classList.toggle("max-sm:hidden");
        
      }

})



//Carrusel

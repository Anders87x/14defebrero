$(document).ready(function () {
  // Función para alternar la clase open
  function toggleOpen(className) {
    $(".container").toggleClass("open");
  }

  // Asignar el evento de clic a los elementos con las clases title y close
  $(".title, .close").on("click", function () {
    // Obtener el nombre de la clase del elemento clicado
    var className = $(this).attr("class");
    // Llamar a la función toggleOpen con el nombre de la clase
    toggleOpen(className);
  });
});
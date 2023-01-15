
document.addEventListener("contextmenu", function(event){
  event.preventDefault();
}, false);

document.addEventListener("copy", function(event){
  event.clipboardData.setData("text/plain", "No se permite copiar en esta página web");
   event.preventDefault();
}, false);


function zoomImages(className) {
  $(`.${className}`).unbind("click").on("click", function() {
    $("#div-zoom-area").css("display", "block");
    $("#img-zoom-area-content").attr("src", $(this)[0].src);

    $("#div-zoom-area").on("click", function() {
      $(this).css("display", "none");
    });
  });
}

(function($) {
  "use strict"; // Inicio de uso estricto

  // Desplazamiento suave usando la aceleración de jQuery
  $("a.js-scroll-trigger[href*='#']:not([href='#'])").click(function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
          scrollTop: (target.offset().top)
        }, 500, "easeInOutExpo");
        return false;
      }
    }
  });

  // Cierra el menú receptivo cuando se hace clic en un enlace de activación de desplazamiento
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Active scrollspy para agregar una clase activa a los elementos de la barra de navegación en el desplazamiento
  $("body").scrollspy({
    target: "#sideNav"
  });
  


  // Zoom de imágenes que tienen nombre de clase: img-zoomable
  zoomImages("img-zoomable");

})(jQuery); //Fin de uso estricto

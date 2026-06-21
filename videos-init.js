/* ════════════════════════════════════════════════════════════════════════
   "Clic para reproducir" — NO necesitas editar este archivo.

   Cada tarjeta de video se muestra como una miniatura con botón de play.
   Al hacer clic, se reemplaza por el reproductor de YouTube y empieza a
   reproducirse DENTRO de la página (sin abrir YouTube).

   Usa delegación de eventos sobre todo el documento para que funcione aunque
   el motor de Claude Design (support.js) vuelva a dibujar la página.
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  function activar(card) {
    if (!card || card.dataset.ytActivo === "1") return;
    var id = card.getAttribute("data-yt");
    if (!id) return;

    card.dataset.ytActivo = "1";
    var src =
      "https://www.youtube.com/embed/" + id +
      "?autoplay=1&rel=0&modestbranding=1&playsinline=1";

    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", src);
    iframe.setAttribute("title", "Reproductor de YouTube");
    iframe.setAttribute(
      "allow",
      "autoplay; encrypted-media; picture-in-picture; web-share; fullscreen"
    );
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("loading", "lazy");
    iframe.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;border:0;display:block;";

    // Reemplaza el contenido del recuadro (mantiene el aspect-ratio del padre).
    card.innerHTML = "";
    card.appendChild(iframe);
  }

  document.addEventListener("click", function (e) {
    var card = e.target.closest && e.target.closest("[data-yt]");
    if (card) activar(card);
  });
})();

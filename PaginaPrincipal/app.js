

  //Codigo para que se vea el iframe
  document.addEventListener("DOMContentLoaded", function () {
    var link = document.querySelector(".preview-link");
    var previewContainer = document.getElementById("iframe-preview");

    link.addEventListener("mouseover", function () {
      var url = this.getAttribute("data-url");
      previewContainer.innerHTML = ""; // Limpia el contenedor
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", url);
      iframe.style.width = "100%"; // Ajustamos el ancho al 100% del contenedor
      iframe.style.height = "100%"; // Ajustamos la altura al 100% del contenedor
      iframe.style.border = "0";
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("loading", "lazy");
      iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      previewContainer.appendChild(iframe);
      previewContainer.style.display = "block"; // Muestra el contenedor
    });

    link.addEventListener("mouseout", function () {
      previewContainer.style.display = "none"; // Oculta el contenedor
      previewContainer.innerHTML = ""; // Limpia el contenedor
    });
  });


  document.querySelectorAll('.mobile-nav .ClassA').forEach(item => {
    item.addEventListener('click', function() {
      document.getElementById('menu-toggle').checked = false;
    });
  });
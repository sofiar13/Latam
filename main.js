window.addEventListener('load', function() {
    if (typeof imageMapResize === 'function') {
      imageMapResize();
    }
  });


  function mostrarTarjeta(pais) {
    document.querySelectorAll('.tarjeta').forEach(t => t.style.display = 'none');
    document.getElementById('mensaje-inicial').style.display = 'none';

    const tarjeta = document.getElementById('tarjeta-' + pais);
    if (tarjeta) {
      tarjeta.style.display = 'block';
    }
  }


  
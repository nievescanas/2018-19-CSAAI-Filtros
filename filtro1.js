function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc')

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  //-- Acceso al deslizador
  deslizador_r = document.getElementById('deslizador_r')
  deslizador_a = document.getElementById('deslizador_a')
  deslizador_v = document.getElementById('deslizador_v')

  //-- Valor del deslizador
  range_value_r = document.getElementById('range_value_r')
  range_value_a = document.getElementById('range_value_a')
  range_value_v = document.getElementById('range_value_v')

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);


  //-- Obtener la imagen del canvas en pixeles
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  var data = imgData.data

  //-- Funcion de retrollamada del deslizador
  deslizador_r.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_r.innerHTML = deslizador_r.value

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador_r.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i] > umbral)
        data[i] = umbral;
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
  //-- Funcion de retrollamada del deslizador
  deslizador_a.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_a.innerHTML = deslizador_a.value

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador_a.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 2; i < data.length; i+=4) {
      if (data[i] > umbral)
        data[i] = umbral;
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
  //-- Funcion de retrollamada del deslizador
  deslizador_v.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_v.innerHTML = deslizador_v.value

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizador_v.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 1; i < data.length; i+=4) {
      if (data[i] > umbral)
        data[i] = umbral;
    }

    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
}

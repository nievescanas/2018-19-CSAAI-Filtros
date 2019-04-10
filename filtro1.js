
function filtro_color(data,umbral,color){
  var incremento = 0;
  var i=0;

  switch (color) {
  case 'rojo':
    incremento = 0;
    break;
  case 'azul':
    incremento = 1;
    break;
  case 'verde':
    incremento = 2;
    break;
  case 'luma':
    incremento = 3;
    break;
  default:
    incremento = 0;
    break;
  }

  for (var i = i+incremento; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }
  return data;
}

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
  ctx.drawImage(img, 0,0);

  //-- Funcion de retrollamada del deslizador
  deslizador_r.oninput = () => {
    ctx.drawImage(img, 0,0);
    //-- Obtener la imagen del canvas en pixeles
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //-- Obtener el array con todos los píxeles
    data = imgData.data
    //-- Mostrar el nuevo valor del deslizador
    range_value_r.innerHTML = deslizador_r.value
    umbral = deslizador_r.value

    data = filtro_color(data,umbral,'rojo')
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
  //-- Funcion de retrollamada del deslizador
  deslizador_a.oninput = () => {
    ctx.drawImage(img, 0,0);
    //-- Obtener la imagen del canvas en pixeles
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //-- Obtener el array con todos los píxeles
     data = imgData.data
    //-- Mostrar el nuevo valor del deslizador
    range_value_a.innerHTML = deslizador_a.value
    umbral = deslizador_a.value

    data = filtro_color(data,umbral,'azul')
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
  //-- Funcion de retrollamada del deslizador
  deslizador_v.oninput = () => {
    ctx.drawImage(img, 0,0);
    //-- Obtener la imagen del canvas en pixeles
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //-- Obtener el array con todos los píxeles
    data = imgData.data
    //-- Mostrar el nuevo valor del deslizador
    range_value_v.innerHTML = deslizador_v.value
    umbral = deslizador_v.value

    data = filtro_color(data,umbral,'verde')
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
}

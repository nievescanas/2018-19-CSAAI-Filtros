function filtro_gris(data){
  var i=0;
  var r;
  var g;
  var b;

  for (var i = i+0; i < data.length; i+=4){
    r = data[i] ;
    g = data[i+1] ;
    b = data[i+2] ;
    brillo = (3 * r + 4 * g + b)/8;
    data[i] = brillo;
    data[i+1] = brillo;
    data[i+2] = brillo;
  }
  return data;
}

function filtro_color(data,r,g,b){
  var i=0;
    for (var i = i+0; i < data.length; i+=4){
      if (data[i] > r){
        data[i] = r;
      }
    }
   i=0;
    for (var i = i+1; i < data.length; i+=4){
      if (data[i] > g){
        data[i] = g;
      }
    }
   i=0;
    for (var i = i+2; i < data.length; i+=4){
      if (data[i] > b){
        data[i] = b;
      }
    }
  return data;
}

function main() {
  console.log("En main()....")

  var boton1 = document.getElementById('color')
  var boton2 = document.getElementById('gris')
  var controles = document.getElementById('controles')

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
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  data = imgData.data

  boton1.onclick = () => {

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0,0);
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    data = imgData.data
    var umbral_r = 225;
    var umbral_g = 225;
    var umbral_b = 225;

    document.getElementById('controles').style.display = 'flex';
    //-- Funcion de retrollamada del deslizador
    deslizador_r.oninput = () => {
      ctx.drawImage(img, 0,0);
      imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      data = imgData.data
      range_value_r.innerHTML = deslizador_r.value
      umbral_r = deslizador_r.value
      data = filtro_color(data,umbral_r,umbral_g,umbral_b)
      ctx.putImageData(imgData, 0, 0);
    }

    deslizador_g.oninput = () => {
      ctx.drawImage(img, 0,0);
      imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      data = imgData.data
      range_value_g.innerHTML = deslizador_g.value
      umbral_g = deslizador_g.value
      data = filtro_color(data,umbral_r,umbral_g,umbral_b)
      ctx.putImageData(imgData, 0, 0);
    }

    deslizador_b.oninput = () => {
      ctx.drawImage(img, 0,0);
      imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      data = imgData.data
      range_value_b.innerHTML = deslizador_b.value
      umbral_b = deslizador_b.value
      data = filtro_color(data,umbral_r,umbral_g,umbral_b)
      ctx.putImageData(imgData, 0, 0);
    }
  }

  boton2.onclick = () => {
    document.getElementById('controles').style.display = 'none';
    ctx.drawImage(img, 0,0);
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    data = imgData.data
    data = filtro_gris(data);
    ctx.putImageData(imgData, 0, 0);
  }
}

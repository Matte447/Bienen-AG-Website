let num = 1;
let fotos = 6;

function Forward() {
  console.log("Test");
  num++;
  if (num < 1) {
    num = fotos;
  } else if (num > fotos) {
    num = 1;
  }

  document.getElementsByClassName("switchfoto")[0].src =
    "img/AboutUs" + num + ".JPG";
}

function Back() {
  console.log("Test");
  num--;
  if (num < 1) {
    num = fotos;
  } else if (num > fotos) {
    num = 1;
  }

  document.getElementsByClassName("switchfoto")[0].src =
    "img/AboutUs" + num + ".JPG";
}

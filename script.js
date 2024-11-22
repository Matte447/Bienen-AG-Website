function nav() {
  if (
    document.getElementsByClassName("navigation")[0].style.display == "none"
  ) {
    document.getElementsByClassName("navigation")[0].style.display = "flex";
    document.getElementsByClassName("ulli")[0].style.display = "flex";
    document.getElementsByClassName("ulli")[0].style.flexDirection = "column";
    document.getElementById("menüicon").style.right = "8rem";
  }else{
    document.getElementsByClassName("navigation")[0].style.display = "none";
    document.getElementsByClassName("ulli")[0].style.display = "none";
    document.getElementsByClassName("ulli")[0].style.flexDirection = "row";
    document.getElementById("menüicon").style.right = "0";
    document.getElementsByClassName("navigation")[0].style.right = "0";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  firstload();
});

function firstload() {
  if(window.innerWidth < 650){
      document.getElementsByClassName("navigation")[0].style.display = "none"
  }else{
    document.getElementsByClassName("navigation")[0].style.flexDirection="row"
  }


}



window.addEventListener("resize", function () {
  if (window.innerWidth < 650) {
    document.getElementsByClassName("navigation")[0].style.display = "none";
    document.getElementById("menüicon").style.display = "block";
  } else {
    document.getElementsByClassName("navigation")[0].style.display = "flex";
    document.getElementById("menüicon").style.display = "none";
  }
});

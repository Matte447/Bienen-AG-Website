let num = 1



function Forward(){
    console.log("Test")
    num++
    if(num<1){
        num = 5
    }else if(num>5){
        num = 1
    }

    document.getElementsByClassName("switchfoto")[0].src = "img/AboutUs" + num + ".JPG"
    
}

function Back(){
    console.log("Test")
    num--
    if(num<1){
        num = 5
    }else if(num>5){
        num = 1
    }

    document.getElementsByClassName("switchfoto")[0].src = "img/AboutUs" + num + ".JPG"
    
}
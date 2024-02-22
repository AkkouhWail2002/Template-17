document.getElementById("btn-menu").onclick=function(){
    if(document.getElementById("menu").style.opacity==0){
        document.getElementById("menu").style.opacity=1;
        document.getElementById("menu").style.transform="translateY(0%)";
    }
    else{
        document.getElementById("menu").style.opacity=0;
        document.getElementById("menu").style.transform="translateY(-100%)";
    }
    
}

document.getElementById("prev").onclick=function(){
    if(document.getElementById("slider1").style.opacity==0){
        document.getElementById("slider1").style.opacity=1;
        document.getElementById("slider2").style.opacity=0;
    }
    else if(document.getElementById("slider1").style.opacity==1){
        document.getElementById("slider1").style.opacity=0;
        document.getElementById("slider2").style.opacity=1;
    }
}
document.getElementById("next").onclick=function(){
    if(document.getElementById("slider1").style.opacity==0){
        document.getElementById("slider1").style.opacity=1;
        document.getElementById("slider2").style.opacity=0;
    }
    else if(document.getElementById("slider1").style.opacity==1){
        document.getElementById("slider1").style.opacity=0;
        document.getElementById("slider2").style.opacity=1;
    }
    
}

setInterval( timer,3000);
function timer(){
    if(document.getElementById("slider1").style.opacity==0){
        document.getElementById("slider1").style.opacity=1;
        document.getElementById("slider2").style.opacity=0;
    }
    else if(document.getElementById("slider1").style.opacity==1){
        document.getElementById("slider1").style.opacity=0;
        document.getElementById("slider2").style.opacity=1;
    }
}

onscroll=function(){
    if(this.scrollY<400){
        this.document.getElementById("a1").style.color="#000";
        this.document.getElementById("a2").style.color="#ff5a00";
        this.document.getElementById("a3").style.color="#ff5a00";
        this.document.getElementById("a4").style.color="#ff5a00";
    }
    if(this.scrollY>400){
        this.document.getElementById("a1").style.color="#ff5a00";
        this.document.getElementById("a2").style.color="#000";
        this.document.getElementById("a3").style.color="#ff5a00";
        this.document.getElementById("a4").style.color="#ff5a00";
    }
    if(this.scrollY>1000){
        this.document.getElementById("a1").style.color="#ff5a00";
        this.document.getElementById("a2").style.color="#ff5a00";
        this.document.getElementById("a3").style.color="#000";
        this.document.getElementById("a4").style.color="#ff5a00";
    }
    if(this.scrollY>1700){
        this.document.getElementById("a1").style.color="#ff5a00";
        this.document.getElementById("a2").style.color="#ff5a00";
        this.document.getElementById("a3").style.color="#ff5a00";
        this.document.getElementById("a4").style.color="#000";
    }
}
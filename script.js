function tutorial () {
    alert("Tutorial: Click the picture of the item you want to get in order to get that item, click the button to purchase that item if you want your production for that item to go up.");
}
var money=0;
function lem() {
    setTimeout(function() {
        document.getElementById("plem").value=0;
        clearInterval(plem);
        document.getElementById('glem').disabled=false;
        money=money+1;
        document.getElementById("moneys").innerHTML="$"+money+".00";
    },1100);
    var plem=setInterval(function(){
        document.getElementById("plem").value += 1;
    }
    ,10);
    document.getElementById('glem').disabled=true;
}
function news() {
    setTimeout(function() {
        document.getElementById("pnews").value=0;
        clearInterval(pnews);
        document.getElementById('gnews').disabled=false;
        money=money+2;
        document.getElementById("moneys").innerHTML="$"+money+".00";
    },2100);
    var pnews=setInterval(function(){
        document.getElementById("pnews").value += 1;
    }
    ,20);
    document.getElementById('gnews').disabled=true;
}
function car() {
    setTimeout(function() {
        document.getElementById("pcar").value=0;
        clearInterval(pcar);
        document.getElementById('gcar').disabled=false;
        money=money+3;
        document.getElementById("moneys").innerHTML="$"+money+".00";
    },3100);
    var pcar=setInterval(function(){
        document.getElementById("pcar").value += 1;
    }
    ,30);
    document.getElementById('gcar').disabled=true;
}
function pizza() {
    setTimeout(function() {
        document.getElementById("ppizza").value=0;
        clearInterval(ppizza);
        document.getElementById('gpizza').disabled=false;
        money=money+4;
        document.getElementById("moneys").innerHTML="$"+money+".00";
    },4100);
    var ppizza=setInterval(function(){
        document.getElementById("ppizza").value += 1;
    }
    ,40);
    document.getElementById('gpizza').disabled=true;
}
function donut() {
    setTimeout(function() {
        document.getElementById("pdonut").value=0;
        clearInterval(pdonut);
        document.getElementById('gdonut').disabled=false;
        money=money+5;
        document.getElementById("moneys").innerHTML="$"+money+".00";
    },5100);
    var pdonut=setInterval(function(){
        document.getElementById("pdonut").value += 1;
    }
    ,50);
    document.getElementById('gdonut').disabled=true;
}
function shrimp() {
    setTimeout(function() {
        document.getElementById("pshrimp").value=0;
        clearInterval(pshrimp);
        document.getElementById('gshrimp').disabled=false;
        money=money+6;
        document.getElementById("moneys").innerHTML="$"+money+".00";
    },6100);
    var pshrimp=setInterval(function(){
        document.getElementById("pshrimp").value += 1;
    }
    ,60);
    document.getElementById('gshrimp').disabled=true;
}
function hockey() {
    setTimeout(function() {
        document.getElementById("phockey").value=0;
        clearInterval(phockey);
        document.getElementById('ghockey').disabled=false;
        money=money+7;
        document.getElementById("moneys").innerHTML="$"+money+".00";
    },7100);
    var phockey=setInterval(function(){
        document.getElementById("phockey").value += 1;
    }
    ,70);
    document.getElementById('ghockey').disabled=true;
}
function movie() {
    setTimeout(function() {
        document.getElementById("pmovie").value=0;
        clearInterval(pmovie);
        document.getElementById('gmovie').disabled=false;
        money=money+8;
        document.getElementById("moneys").innerHTML="$"+money+".00";
    },8100);
    var pmovie=setInterval(function(){
        document.getElementById("pmovie").value += 1;
    }
    ,80);
    document.getElementById('gmovie').disabled=true;
}
function bank() {
    setTimeout(function() {
        document.getElementById("pbank").value=0;
        clearInterval(pbank);
        document.getElementById('gbank').disabled=false;
        money=money+9;
        document.getElementById("moneys").innerHTML="$"+money+".00";
    },9100);
    var pbank=setInterval(function(){
        document.getElementById("pbank").value += 1;
    }
    ,90);
    document.getElementById('gbank').disabled=true;
}
function oil() {
    setTimeout(function() {
        document.getElementById("poil").value=0;
        clearInterval(poil);
        document.getElementById('goil').disabled=false;
        money=money+10;
        document.getElementById("moneys").innerHTML="$"+money+".00";
    },10100);
    var poil=setInterval(function(){
        document.getElementById("poil").value += 1;
    }
    ,100);
    document.getElementById('goil').disabled=true;
}

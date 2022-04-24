var tip = [];

function loader() {
    var x = 1;
    while (document.getElementById("tip-"+x) != null) {
        document.getElementById("tip-"+x).style.top="-"+document.getElementById("tip-"+x).clientHeight+"px";
        document.getElementById("tip-"+x).style.opacity=0;
        document.getElementById("tip-"+x).style.transition="top 0.2s ease, opacity 0.1s ease";
        tip[x] = false;
        x++;
    }
    const load = document.getElementById("load");
    load.style.opacity = 0;
    load.style.top = "100vh";
}

function tooltip(x) {
    if (tip[x] == false) {
        document.getElementById("tip-"+x).style.opacity=1;
        document.getElementById("tip-"+x).style.top="0px";
        tip[x] = true;
    } else {
        document.getElementById("tip-"+x).style.opacity=0;
        document.getElementById("tip-"+x).style.top="-"+document.getElementById("tip-"+x).clientHeight+"px";
        tip[x] = false;
    }   
}
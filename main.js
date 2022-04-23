function loader(y) {
    if (y != undefined){
        for (var x = 1; x <= y; x++) {
            document.getElementById("tip-"+x).style.top="-"+document.getElementById("tip-"+x).clientHeight+"px";
            document.getElementById("tip-"+x).style.opacity=0;
            document.getElementById("tip-"+x).style.transition="top 0.2s ease, opacity 0.1s ease";
        }
    }
    const load = document.getElementById("load");
    load.style.opacity = 0;
    load.style.top = "100vh";
}

function tooltip(x) {
    document.getElementById("tip-"+x).style.opacity=1;
    document.getElementById("tip-"+x).style.top="0px";
}

function tooltipH(x) {
    document.getElementById("tip-"+x).style.opacity=0;
    document.getElementById("tip-"+x).style.top="-"+document.getElementById("tip-"+x).clientHeight+"px";
}
function loader() {
    const load = document.getElementById("load");
    load.style.opacity = 0;
    load.style.top = "100vh";
}

function tooltip(x) {
    document.getElementById("tip-"+x).style.visibility="visible";
}

function tooltipH(x) {
    document.getElementById("tip-"+x).style.visibility="hidden";
}
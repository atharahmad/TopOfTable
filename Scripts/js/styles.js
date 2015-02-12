window.onload = function (event) {

    window.onresize();
    Constructor();
    SidebarLeft();
    SidebarRight();
    

}

var flag = true;
window.onresize = function (event) {

    document.getElementById("sb_left").style.height = (window.innerHeight - 200) + "px";
    document.getElementById("sb_right").style.height = (window.innerHeight - 200) + "px";

   // alert("window.innerHeight: " + window.innerHeight);
    if (flag == true && window.innerWidth < 1100) {
        flag = false;
        leftsidebar();
        rightsidebar();
    }
    else if (flag == false && window.innerWidth > 1100) {
        flag = true;
        leftsidebar();
        rightsidebar();
    }
}

function Expand(tree, leaf, id) {
    var x = document.getElementById(tree + id);
    var y = document.getElementById(leaf + id);
    if (y.innerHTML == "+") {
        x.style.display = "none";
        y.innerHTML = "-";
    }
    else {
        x.style.display = "block";
        y.innerHTML = "+";
    }
}

function MakeActive(classId, buttonId) {
    var x = document.getElementById("th" + classId + "_" + buttonId);
    if (x.className == "btn btn-default") {
        for (var i = 1; i <= 5; i++) {
            var y = document.getElementById("th" + classId + "_" + i);
            y.className = "btn btn-default";
        }
        x.className = "active btn btn-default";
    }
}

function MouseOn(no) {
    for (var i = 0; i < 5; i++) {
        var x = document.getElementById("main" + i);
        x.style.backgroundImage = "url(images/slide" + no + ".jpg)";
    }
}

function MouseOff() {
    for (var i = 0; i < 5; i++) {
        var x = document.getElementById("main" + i);
        x.style.backgroundImage = "url(images/slide" + i + ".jpg)";
    }
}

function leftsidebar() {
    var x = document.getElementById("lefty");
    if (x.innerHTML == ". |") {
        x.innerHTML = "| .";
        x = document.getElementById("sb_left");
        x.style.display = "block";
        x = document.getElementById("body");
        x.style.paddingLeft = "230px";
    }
    else if (x.innerHTML == "| .") {
        x.innerHTML = ". |";
        x = document.getElementById("sb_left");
        x.style.display = "none";
        x = document.getElementById("body");
        x.style.paddingLeft = "15px";
    }
}

function rightsidebar() {
    var x = document.getElementById("righty");
    if (x.innerHTML == "| .") {
        x.innerHTML = ". |";
        x = document.getElementById("sb_right");
        x.style.display = "block";
        x = document.getElementById("body");
        x.style.paddingRight = "230px";
    }
    else {
        x.innerHTML = "| .";
        x = document.getElementById("sb_right");
        x.style.display = "none";
        x = document.getElementById("body");
        x.style.paddingRight = "15px"; s
    }
}

function zoomin() {
    document.getElementById("search").style.width="26px";
}

function zoomout() {
    document.getElementById("search").style.width="24px";
}

function ccolor(color) {
    var x = document.getElementById("logo");
    x.src = "images/toplogo" + color + ".png";
}

function newcolor(col) {
    var x = document.getElementById("new");
    x.src = "images/new" + col + ".png";
}

function rating(i, j, k) {
    for (var y = 1; y <= k; y++) {
        var x = document.getElementById("tb" + i + "_" + j + "_" + y);
        x.style.backgroundColor = "lightgrey";
    }
}

function getrate(i, j, k) {
    for (var y = 1; y <= k; y++) {
        var x = document.getElementById("tb" + i + "_" + j + "_" + y);
        x.style.backgroundColor = "";
    }
}

function DimOn(classId, i) {
    var x = document.getElementById("tb" + classId + "_tile" + i);
    if (x.className == "deactivetile") {
        x.style.opacity = .5;
        x.style.backgroundColor = "black";
    }
}
function DimOff(classId, i) {
    var x = document.getElementById("tb" + classId + "_tile" + i);
    if (x.className == "deactivetile") {
        x.style.opacity = .8;
        x.style.backgroundColor = "#428bca";
    }
}

function SwitchTile(classId, i) {
    for (var j = 0; j < 5; j++) {
        var x = document.getElementById("tb" + classId + "_tile" + j);
        if (x.className = "activetile") {
            x.style.opacity = .5;
            x.style.backgroundColor = "black";
            x.className = "deactivetile";
        }
    }
    var x = document.getElementById("tb" + classId + "_tile" + i);
    x.style.opacity = 1;
    x.style.backgroundColor = "#428bca";
    x.className = "activetile";
}



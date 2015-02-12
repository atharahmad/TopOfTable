var classes = ["Sports", "Computer", "Humans", "Film & TV", "Education", "Media", "Business", "Animals", "Plants", "Lifestyle"];
var subClass = [["Football", "Cricket", "Tennis", "Hockey", "BasketBall", "WWE"], ["Gaming", "Social Networking", "Developing", "Softwares", "Websites"], ["Man", "Woman"], ["Hollywood", "Bollywood"], ["Medical"], ["Politics"], ["Stock Exchange"], ["Dogs"], ["Rose"], [], []];
var verySubCl = [[["Premier League", "La Liga", "Serie A", "Bundesliga", "Ligue 1", "MLS League", "Super Ligue"], ["IPL", "CL"], ["USA Tour", "Wimbeldon", "French Open"], [], [], [], []], [["Mobile"], [], [], [], [], []], [[], [], []], [[], [], []], [[], []], [[], []], [[], []], [[], []], [[], []], [[]], [[]]];
var groups = ["Family", "Study", "Work", "Business"];
var fellows = [];

// Initialize data:
function Constructor() {
    classes[classes.length] = "Others";
    for (var i = 0; i < classes.length; i++) {
        subClass[i][subClass[i].length] = "Others";
        for (var j = 0; j < subClass[i].length; j++) {
            verySubCl[i][j][verySubCl[i][j].length] = "Others";
        }
    }
    for (var i = 0; i < groups.length; i++) {
        fellows[i] = [];
    }
}

function AddGroup(status) {
    if (status == 'yes') {
        var gName = document.getElementById("gName").value;
        for (var i = 0; i < groups.length; i++) {
            if (gName == "" || gName == groups[i]) {
                alert("Sorry! Invalid Group Name Or Already Exists.")
                return;
            }
        }
        groups[groups.length] = gName;
        fellows[fellows.length] = [];
        SidebarLeft();
        document.getElementById("addG").outerHTML = "<a id=\"addG\" style=\"text-decoration:underline\" onclick=\"AddGroup()\">+New Group ?</a>";
    }
    else if (status == 'no') {
        document.getElementById("addG").outerHTML = "<a id=\"addG\" style=\"text-decoration:underline\" onclick=\"AddGroup()\">+New Group ?</a>";
    }
    else {
        document.getElementById("addG").outerHTML = "<a id=\"addG\" style=\"height:35px;\"><input id=\"gName\" style=\"float:left; width:60%;\" type=\"text\"/>" +
        "<button onclick=\"AddGroup('yes')\" style=\"float:left; font-size:9px; height:100%; padding-bottom:11%; width:10%;\" class=\"btn btn-primary\">YES</button>" +
        "<button onclick=\"AddGroup('no')\" style=\"float:left; font-size:9px; height:100%; padding-bottom:11%; width:10%;\" class=\"btn btn-primary\">NO</button></a>";
    }
}

function AddFellow(gName, fellowId) {
    for (var i = 0; i < groups.length; i++) {
        if (gName == groups[i]) {
            fellows[i][fellows[i].length] = fellowId;
            return true;
        }
    }
    return false; 
}

function SidebarLeft() {
    var str = "<ul class=\"nav bs-sidenav\" style=\"margin:0px\">";
    for (var i = 0; i < groups.length; i++) {
        str += "<li><a href=\"#\" onclick=\"Expand('fellow','no'," + i + ")\"><div style=\"float:left;padding-right:2%;\" id=\"no" + i + "\">-</div>" + groups[i] + "</a>" +
            "<div id=\"fellow" + i + "\" style=\"display:none; padding-left:10%;\">" +
                "<div style=\"height:1px; background-color:lightgray;\"></div>" +
                "<ul class=\"nav bs-sidenav\" style=\"margin:0px; font-size:13px;\">";
                    for (var j = 0; j < fellows[i].length; j++) {
                        str += "<li><a href=\"#tiles\">@ " + fellows[i][j] + "</a></li>";
                    }
                str += "<li><a href=\"topoftable.com\find?\">Add Fellow ?</a></li></ul>" +
                "<div style=\"height:1px; background-color:lightgray;\"></div>" +
            "</div>" +
        "</li>";
    }
    str += "</ul>";
    var x = document.getElementById("sbleft");
    x.innerHTML = str;
}

function SidebarRight() {
    var str = "<ul class=\"nav bs-sidenav\" style=\"margin:0px\">";
    for (var i = 0; i < classes.length; i++) {
        str += "<li><a href=\"#\" onclick=\"Expand('ctg','sub'," + (i + 1) + ")\"><div style=\"float:left;padding-right:2%;\" id=\"sub" + (i + 1) + "\">-</div>" + classes[i] + "</a>" +
            "<div id=\"ctg" + (i + 1) + "\" style=\"display:none; padding-left:5%;\">" +
                "<div style=\"height:1px; background-color:lightgray;\"></div>" +
                "<ul class=\"nav bs-sidenav\" style=\"margin:0px; font-size:13px;\">";
                    for (var j = 0; j < subClass[i].length; j++) {
                        str += "<li><a href=\"#\" onclick=\"Expand('scctg','scsub'," + (i + 1) + "" + (j + 1) + ")\"><div style=\"float:left;padding-right:2%;\" id=\"scsub" + (i + 1) + (j + 1) + "\">-</div>" + subClass[i][j] + "</a>" +
                            "<div id=\"scctg" + (i + 1) + (j + 1) + "\" style=\"display:none; padding-left:7%;\">" +
                                "<div style=\"height:1px; background-color:lightgray;\"></div>" +
                                "<ul class=\"nav bs-sidenav\" style=\"margin:0px; font-size:13px;\">";
                                    for (var k = 0; k < verySubCl[i][j].length; k++) {
                                        str += "<li><a href=\"#tiles\"># " + verySubCl[i][j][k] + "</a></li>";
                                }
                                str += "</ul>" +
                                "<div style=\"height:1px; background-color:lightgray;\"></div>" +
                            "</div>" +
                        "</li>";
                        }
                    str += "</ul>" +
                "<div style=\"height:1px; background-color:lightgray;\"></div>" +
            "</div>" +
        "</li>";
    }
    str += "</ul>";
    document.getElementById("sbright").innerHTML = str;
}

    
//Table Properties
var noOfRows = 0;
var tableId = "";
var votes = 0;
var data = [];
var totalTables = 0;
var tableName = "Top 10 Footballers";
var followers = 0;
var totalVotes = 0;
var cell = [[1604708427, 568243086, 799607802, 1661415460, 758406880],
            [1774057665, 1005061283, 925797451, 17684059, 895028555],
            [893356064, 655754667, 1164990318, 1758536384, 1641897320],
            [1152883141, 56700471, 1324321363, 380159234, 554726942],
            [999242709, 1942433185, 1307292913, 383176330, 538647874],
            [1161436967, 738704861, 1988745245, 1793340204, 1970648063]];

function SelectTables() {
    //$.getJSON("https://spreadsheets.google.com/feeds/list/0AuESkiu4GRhZdHlVQ0dodWRtcWsyR0V5SzdIS3ZGMUE/od6/public/values?alt=json-in-script&callback=?",
    //function (json) {
    //    for (var i = 0; i < json.feed.entry.length; i++) {
    //        var cat = json.feed.entry[i].gsx$category.$t;
    //        for (var j = 0; j < categories.length; j++) {
    //            if (cat == categories[j]) {
    //                var subcat = json.feed.entry[i].gsx$subcat.$t;
    //                for (var k = 0; k < subctg[j].length; k++) {
    //                    if (subcat == subctg[j][k]) {
    //                        //,,,
    //                    }
    //                }
    //            }
    //        }
    //    }
    //});
}

function GetData() {
    $.getJSON("https://spreadsheets.google.com/feeds/list/0AuESkiu4GRhZdHlVQ0dodWRtcWsyR0V5SzdIS3ZGMUE/od6/public/values?alt=json-in-script&callback=?",
    function (json) {
        totaltables = json.feed.entry.length;
    });
}

function loadTable(tableNo) {
    $.getJSON("https://spreadsheets.google.com/feeds/list/0AuESkiu4GRhZdHlVQ0dodWRtcWsyR0V5SzdIS3ZGMUE/od6/public/values?alt=json-in-script&callback=?",
    function (json) {
        noOfRows = +(json.feed.entry[tableNo].gsx$noofrows.$t) + 1;
        tableId = json.feed.entry[tableNo].gsx$id.$t;
        tableName = json.feed.entry[row].gsx$name.$t;
        followers = json.feed.entry[row].gsx$followers.$t;
        for (var i = 0; i < noofrows ; i++) {
            var x = json.feed.entry[tableNo];
            switch (i) {
                case 0:
                    data[0] = x.gsx$image1.$t; data[1] = x.gsx$entry1.$t; data[2] = x.gsx$type1.$t; data[3] = x.gsx$votes1.$t; data[4] = x.gsx$website1.$t; break;
                case 1:
                    data[0] = x.gsx$image2.$t; data[1] = x.gsx$entry2.$t; data[2] = x.gsx$type2.$t; data[3] = x.gsx$votes2.$t; data[4] = x.gsx$website2.$t; break;
                case 2:
                    data[0] = x.gsx$image3.$t; data[1] = x.gsx$entry3.$t; data[2] = x.gsx$type3.$t; data[3] = x.gsx$votes3.$t; data[4] = x.gsx$website3.$t; break;
                case 3:
                    data[0] = x.gsx$image4.$t; data[1] = x.gsx$entry4.$t; data[2] = x.gsx$type4.$t; data[3] = x.gsx$votes4.$t; data[4] = x.gsx$website4.$t; break;
                case 4:
                    data[0] = x.gsx$image5.$t; data[1] = x.gsx$entry5.$t; data[2] = x.gsx$type5.$t; data[3] = x.gsx$votes5.$t; data[4] = x.gsx$website5.$t; break;
                case 5:
                    data[0] = x.gsx$image6.$t; data[1] = x.gsx$entry6.$t; data[2] = x.gsx$type6.$t; data[3] = x.gsx$votes6.$t; data[4] = x.gsx$website6.$t; break;
                case 6:
                    data[0] = x.gsx$image7.$t; data[1] = x.gsx$entry7.$t; data[2] = x.gsx$type7.$t; data[3] = x.gsx$votes7.$t; data[4] = x.gsx$website7.$t; break;
                case 7:
                    data[0] = x.gsx$image8.$t; data[1] = x.gsx$entry8.$t; data[2] = x.gsx$type8.$t; data[3] = x.gsx$votes8.$t; data[4] = x.gsx$website8.$t; break;
                case 8:
                    data[0] = x.gsx$image9.$t; data[1] = x.gsx$entry9.$t; data[2] = x.gsx$type9.$t; data[3] = x.gsx$votes9.$t; data[4] = x.gsx$website9.$t; break;
            }
            totalVotes += (+data[3]);
        }
    });
}

function loadTables() {
    var totalRows = 4;
    var noOfTables = 14;
    var str = '';
    //GetData();
    for (var i = 0; i < classes.length; i++) {
        str += "<h1>" + classes[i] + "</h1>";
        for (var j = 0; j < subClass[i].length; j++) {
            for (var k = 0; k < verySubCl[i][j].length; k++) {
                str += "<div style=\"margin:0;\" class=\"page-header\"></div><h3><a style=\"padding:0 10px 5px 10px; text-decoration:none; color:grey; background:whitesmoke;\">" + subClass[i][j] + " [ " + verySubCl[i][j][k] + " ]</a></h3>" +
                "<div>" + AddTable(+("" + i + j + k), totalRows, false) + AddTiles(+("" + i + j + k), noOfTables) + "</div>";
            }
        }
    }
    document.getElementById("body").innerHTML = str;
}

function AddTable(classId, totalRows, newFlag) {
    //loadTable(0);
    var str = "<div class=\"page-header\"><div class=\"panel panel-primary\" style=\"height:auto; padding-bottom:15px\">" +
        "<h4 style=\"float:right; margin:0; text-align:center; font-size:16px;\" class=\"panel-heading\">Followers: " + followers + "</h4>" +
        "<h4 style=\"float:left; margin:0; text-align:center; font-size:16px;\" class=\"panel-heading\">Votes: " + totalVotes + "</h4>";
    if (newFlag) {
        str += "<h4 style=\"margin:0; padding:0;\" class=\"panel-heading\"><input name='entry.1678875226' style=\"text-align:center; margin:0 auto; height:40px; width:50%;\" type=\"text\" placeholder=\"Name Of Table\" class=\"form-control\"></h4>" +
        "<table class=\"table\"><thead><tr><th style=\"text-align:left\">" +
            "<div style=\"padding-right:1%; float:right\"><button class=\"btn btn-default\">Cancel</button></div>" +
            "<div style=\"padding-right:2%; float:right\"><button class=\"btn btn-default\">Done</button></div>" +
        "</th></tr></thead></table>" +
    "</form>";
    }
    else {
        str += "<h4 style=\"margin:0; text-align:center; font-size:19px;\" class=\"panel-heading\">" + tableName + "</h4>" +
        "<table class=\"table\"><thead><tr><th style=\"text-align:left\">" +
            "<div style=\"padding-right:1%; float:left\"><button id=\"th" + classId + "_1\" class=\"active btn btn-default\" onclick=\"MakeActive(" + classId + ",1)\">Table</button></div>" +
            "<div style=\"padding-right:1%; float:left\"><button id=\"th" + classId + "_2\" class=\"btn btn-default\" onclick=\"MakeActive(" + classId + ",2)\">Graph</button></div>" +
            "<div style=\"padding-right:1%; float:left\"><button id=\"th" + classId + "_3\" class=\"btn btn-default\" onclick=\"MakeActive(" + classId + ",3)\">Pie-Chart</button></div>" +
            "<div style=\"padding-right:1%; float:left\"><button id=\"th" + classId + "_4\" class=\"btn btn-default\" onclick=\"MakeActive(" + classId + ",4)\">Statistics</button></div>" +
            "<div style=\"float:right\"><button id=\"th" + classId + "_5\" class=\"btn btn-default\" onclick=\"AddRow(" + classId + "," + totalRows + ")\">+ Entry</button></div>" +
        "</th></tr></thead></table>";
    }
    str += "<table class=\"table\" style=\"float:left; width:100%;\"><thead><tr style=\"background:whitesmoke; text-align:center;\">" +
        "<th style=\"width:5.5%\">#</th>" + "<th style=\"width:5.5%\">Icon</th>" + "<th style=\"width:17.5%\">Name</th>" +
        "<th style=\"width:17.5%\">Type</th>" + "<th style=\"width:12%\">Votes</th>" + "<th style=\"width:42%\">Image</th>" +
    "</tr><tr><td></td></tr></thead></table>" +
    "<div style=\"float:right; width:40%\"><table class=\"table\"><tbody><tr><td>" +
        "<div id=\"tb" + classId + "_image\" style=\"width:100%; height:373px; background: url('images/.jpg ') no-repeat; background-position:center; background-size:cover;\">" +
            "<div class=\"btn-group dropup\" style=\"float:right; width:25%; padding-top:300px\">" +
                "<input style=\"display:none\" name=\"entry." + cell[0][3] + "\" value=\"" + votes + "\" />" +
                "<button style=\"width:100%; height:50px;\" class=\"btn btn-primary\">Vote it!</button>" +
            "</div>" +
            "<div style=\"width:75%; padding-top:300px;\">" +
                "<p id=\"tb" + classId + "_news\" style=\"color:black; background-color:white; height:50px; opacity:.5\">This is a simple hero unit.<br /> 125 people average rating : 4 . 3</p>" +
            "</div>" +
        "</div>" +
    "</td></tr><tr><td></td></tr></tbody></table></div>" +
    "<div style=\"overflow-y:scroll; overflow-x:hidden; width:60%; height:391px;\"><table class=\"table\"><tbody>";
    if (!newFlag) {
        for (var rowNo = 0; rowNo < totalRows; rowNo++) {
            str += "<tr id=\"tb" + classId + "_" + rowNo + "\" onmouseover=\"TableImage(" + classId + "," + rowNo + "," + totalRows + ")\">" +
                "<td style=\"width:10%\">" + (rowNo + 1) + "</td>" + "<td style=\"width:10%\"><img src=\"images/" + (rowNo + 1) + ".jpg\" style=\"width:60%; height:20px\"/></td>" +
                "<td style=\"width:30%\">" + data[1] + "</td>" + "<td style=\"width:30%\">" + data[2] + "</td>" + "<td id=\"tv" + classId + "_" + rowNo + "\" style=\"width:20%\">" + data[3] + "</td>" +
            "</tr>";
        }
        str += "<tr id=\"tb" + classId + "_" + totalRows + "\" onmouseover=\"TableImage(" + classId + "," + totalRows + "," + totalRows + ")\">" +
            "<td colspan=\"6\" onclick=\"AddRow(" + classId + "," + totalRows + ")\" style=\"cursor:pointer;color:steelblue\"> + New Row</td>" +
        "</tr><tr><td colspan=\"6\"></td></tr>";
    }
    str += "</tbody></table></div>" +
"</div>";
    return str;
}
function AddTiles(classId, noOfTables)
{
    var str = "<div style=\"overflow-x:scroll; overflow-y:hidden; width:100%; height:140px;\"><div id=\"tilewidth\" style=\"width:" + (182 * noOfTables) + "px; height:140px;\">";
    for (var tableNo = 0; tableNo < noOfTables; tableNo++) {
        str += "<div style=\"width:167px; margin-right:15px; float:left\">" +
            "<a href=\"javascript:;\" onmouseover=\"DimOff(" + classId + "," + tableNo + ")\" onmouseout=\"DimOn(" + classId + "," + tableNo + ")\" onclick=\"SwitchTile(" + classId + "," + tableNo + ")\" style=\"text-decoration:none; float:left; width:167px; height:120px; background:url('images/" + tableNo + ".jpg ')no-repeat; background-position:center; background-size:cover;\">" +
                "<h4 id=\"tb" + classId + "_tile" + tableNo + "\" class=\"deactivetile\">Top 10 Sports Cars</h4>" +
            "</a>" +
        "</div>";
    }
    str += "</div>";
    return str;
}
function setClass(i) {
    document.getElementById('cls').value = classes[i];
    document.getElementById('scs').value = "";
    document.getElementById('vsc').value = "";
    var str = "";
    for (var j = 0; j < subClass[i].length; j++)
        str += "<li><a onclick=\"setSubClass(" + i + "," + j + ")\">" + subClass[i][j] + "</a></li>";
    document.getElementById('scsUl').innerHTML = str;
}
function setSubClass(i, j) {
    document.getElementById('scs').value = subClass[i][j];
    document.getElementById('vsc').value = "";
    var str = "";
    for (var k = 0; k < verySubCl[i][j].length; k++)
        str += "<li><a onclick=\"setVerySubClass(" + i + "," + j + "," + k + ")\">" + verySubCl[i][j][k] + "</a></li>";
    document.getElementById('vscUl').innerHTML = str;
}
function setVerySubClass(i, j, k) {
    document.getElementById('vsc').value = verySubCl[i][j][k];
}
function newTable() {
    var str = "<form action=\"https://docs.google.com/forms/d/1UWjDSQ3oRq2oUqdt0DmlaLBqyr_HODGSYl1QqE7Pv14/formResponse?edit=" + tableId + "-lcWhvAE\" method='post' target='hidden_iframe'>" +
        "<div style=\"margin-top:20px;\" class=\"page-header\">"+
            "<input style=\"display:none\" name=\"entry.635730690\" value=\"0\" />" +
            "<input style=\"display:none\" name=\"entry.1797774479\" value=\"" + tableId + "\" />" +
            "<h3 style=\"width:7%; float:left; margin:0\">Class</h3>" +
            "<div style=\"width:20%; float:left;\" class=\"input-group\">" +
                "<input id=\"cls\" name='entry.933702072' style=\"width:80%;\" readonly=\"\"  type=\"text\" placeholder=\"Choose One\" class=\"form-control\">" +
                "<button style=\"width:20%;\" type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>" +
                "<ul class=\"dropdown-menu pull-right\">";
                    for (var i = 0; i < classes.length; i++)
                        str += "<li><a onclick=\"setClass(" + i + ");\">" + classes[i] + "</a></li>";
                str += "</ul>" +
            "</div>" +
            "<h3 style=\"width:13.5%; padding-left:1%; float:left; margin:0\">Sub-Class</h3>" +
            "<div style=\"width:20%; float:left;\" class=\"input-group\">" +
                "<input id=\"scs\" name='entry.813013320' style=\"width:80%;\" readonly=\"\" type=\"text\" placeholder=\"Choose One\" class=\"form-control\">" +
                "<button style=\"width:20%;\" type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>" +
                "<ul id=\"scsUl\" class=\"dropdown-menu pull-right\"></ul>" +
            "</div>" +
            "<h3 style=\"width:19.5%; padding-left:1%; float:left; margin:0\">Very Sub-Class</h3>" +
            "<div style=\"width:20%;\" class=\"input-group\">" +
                "<input id=\"vsc\" name='entry.1766413975' style=\"width:80%; float:left;\" readonly=\"\" type=\"text\" placeholder=\"Choose One\" class=\"form-control\">" +
                "<button style=\"width:20%;\" type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>" +
                "<ul id=\"vscUl\" class=\"dropdown-menu pull-right\"></ul>" +
            "</div>" +
        "</div>";
    //form ends on AddTable() func
    str += AddTable(totalTables, 0, true);
    document.getElementById("body").innerHTML = str;
}

function AddRow(classId, totalRows) {
    MakeActive(classId, 5);
    var x = document.getElementById("tb" + classId + "_" + totalRows);
    x.outerHTML = "<tr id=\"tb" + classId + "_" + totalRows + "\" onmouseover=\"TableImage(" + classId + "," + totalRows + "," + totalRows + ")\">" +
        "<td style=\"width:5%\">" + (totalRows + 1) + "</td>" +
        "<form action=\"https://docs.google.com/forms/d/1UWjDSQ3oRq2oUqdt0DmlaLBqyr_HODGSYl1QqE7Pv14/formResponse?edit=" + tableId + "-lcWhvAE\" method='post' target='hidden_iframe'>" +
            "<td colspan=\"4\">" +
                "<input name=\"entry." + cell[totalRows][0] + "\" class=\"form-control add-row\" placeholder=\"ImgUrl\" name=\"icon\"/>" +
                "<input name=\"entry." + cell[totalRows][1] + "\" class=\"form-control add-row\" placeholder=\"Name\" name=\"entry\"/>" +
                "<input name=\"entry." + cell[totalRows][2] + "\" class=\"form-control add-row\" placeholder=\"Type\" name=\"type\"/>" +
                "<input name=\"entry." + cell[totalRows][4] + "\" class=\"form-control add-row\" placeholder=\"Url\" name=\"url\"/>" +
                "<button class=\"btn btn-default add-row\" onclick=\"DoneRow(" + classId + "," + totalRows + ")\">Done</button>" +
                "<button style=\"width:15%;\" class=\"btn btn-default\" onclick=\"DoneRow(" + classId + "," + totalRows + ")\">Cancel</button>" +
                "<input style=\"display:none\" name=\"entry.635730690\" value=\"" + totalRows + "\" />" +
            "</form>" +
        "</td>" +
    "</tr>";
}

function DoneRow(classId, totalRows) {
    MakeActive(classId, 1);
    var x = document.getElementById("th" + classId + "_1");
    x.className = "active btn btn-default";
    var x = document.getElementById("tb" + classId + "_" + totalRows);
    x.outerHTML = "<tr id=\"tb" + classId + "_" + totalRows + "\" onmouseover=\"TableImage(" + classId + "," + totalRows + "," + totalRows + ")\"><td colspan=\"6\" onclick=\"AddRow(" + classId + "," + totalRows + ")\" style=\"cursor:pointer;color:steelblue\"> + New Row</td></tr>";
}

function TableImage(classId, rowNo, totalRows) {
    var x = document.getElementById("tb" + classId + "_image");
    x.style.backgroundImage = "url(images/" + (rowNo + 1) + ".jpg)";
    for (var i = 0; i <= totalRows; i++) {
        var x = document.getElementById("tb" + classId + "_" + i);
        if (x.style.backgroundColor = "whitesmoke")
            x.style.backgroundColor = "";
    }
    var x = document.getElementById("tb" + classId + "_" + rowNo);
    x.style.backgroundColor = "whitesmoke";
}

function Personal(classId) {
    var y = document.getElementById("body");
    var str = "<div><table style=\"width:66.5%; float:right\">" +
        "<tr style=\"background:whitesmoke; text-align:left\"><td>" +
            "<h4 style=\"padding-left:20px; width:200px; float:left\">Name:</h4>" +
            "<h4 style=\"text-align:left;\">Athar Ahmad</h4>" +
        "</td></tr>";
    for (var i = 0; i < 3; i++) {
        str += "<tr style=\"text-align:left\"><td>" +
            "<h4 style=\"padding-left:20px; width:200px; float:left\">Address:</h4>" +
            "<h4 style=\"text-align:left;\">Athar Ahmad</h4>" +
        "</td></tr>" +
        "<tr style=\"background:whitesmoke; text-align:left\"><td>" +
            "<h4 style=\"padding-left:20px; width:200px; float:left\">Designation:</h4>" +
            "<h4 style=\"text-align:left;\">The Designer</h4>" +
        "</td></tr>";
    }
    str += "</table>" +
    "<div id=\"main0\" class=\"jumbotron\" style=\"width:32%; height:288px; background:url(images/slide0.jpg)no-repeat; background-position:center; background-size:cover;\">" +
        "<div style=\"float:right; padding-top:170px;\"><a class=\"btn btn-primary btn-lg\">Edit</a></div>" +
    "</div>" +
    "<div class=\"bs-docs-section\">" +
        "<div class=\"page-header\">" +
            "<h1>Fellows</h1>" +
        "</div>" +
        "<h4 id=\"thumbnails-default\">[ A - M ]</h4>";
        
    for (var r = 1; r <= 3; r++) {
        str = str + "<div style=\"height:150px;\">" +
            "<a href=\"javascript:;\" style=\"padding-top:90px; text-decoration: none; float:left; width:15.5%; height:130px; background: url('images/6.jpg ') no-repeat; background-position:center; background-size:cover;\">" +
                "<h4 id=\"tb" + classId + "_tile0\" style=\"color:black; background-color:white; height:25px; opacity:.7; text-align:center;\">Athar Ahmad Ch</h4>" +
            "</a>";
        for (var fellowNo = 1; fellowNo <= 5; fellowNo++) {
            str = str + "<h1 style=\"float:left; width:1.4%;\"></h1>" +
            "<a href=\"javascript:;\" style=\"padding-top:90px; text-decoration: none; float:left;  width:15.5%; height:130px; background: url('images/" + fellowNo + ".jpg ') no-repeat; background-position:center; background-size:cover;\">" +
                "<h4 id=\"tb" + classId + "_tile" + fellowNo + "\" style=\"color:black; background-color:white; height:25px; opacity:.7; text-align:center;\">Athar Ahmad</h4>" +
            "</a>";
        }
        str += "</div>";
    }
    str += "</div></div>";
    y.innerHTML = str;
}

function SignIn() {
    var fields = ["First Name", "Last Name", "Email", "Password", "Country"]
    var str = "<div style=\"background-color:#428bca; color:white;\"><h3 style=\"text-align:center; padding:5px;\"><b>Sign In</b></h3></div>" +
    "<div style=\"background-color:whitesmoke;\"><h3 style=\"width:12%; float:left; margin:0\">Email</h3>" +
    "<input style=\"float:left; width:25%;\" type=\"text\" placeholder=\"steve@xyz.com\" class=\"form-control\">" +
    "<h3 style=\"width:12%; padding-left:1%; float:left; margin:0\">Password</h3>" +
    "<input style=\"float:left; width:25%;\" type=\"password\" class=\"form-control\">" +
    "<button style=\"width:10%; margin-left:5%\" class=\"btn btn-default\">Done</button>" +
    "<button style=\"width:10%; margin-left:1%\" class=\"btn btn-default\">Cancel</button>" +
    "<label style=\"float:right; margin-left:1%\"><input type=\"checkbox\" checked=\"checked\"/> Remember me</label>" +
    "<label><input type=\"radio\"/> Forget Password</label></div>"+
    "<div style=\"padding-top:50px;\"><table style=\"width:58.5%; float:right\">" +
        "<tr style=\"background:#428bca; color:white;; text-align:left\"><td>" +
            "<h3 style=\"margin:5px; text-align:center;\"><b>Sign Up</b></h3>" +
        "</td></tr>"+
        "<tr><td><h3></h3></td></tr>" +
        "<tr style=\"background:whitesmoke;\"><td>" +
            "<h4 style=\"text-align:center;width:20%;float:left\">" + fields[0] + "</h4>" +
            "<input style=\"width:30%;float:left\" type=\"text\" class=\"form-control\">" +
            "<h4 style=\"text-align:center;width:20%;float:left\">" + fields[1] + "</h4>" +
            "<input style=\"width:30%\" type=\"text\" class=\"form-control\">" +
        "</td></tr>"
    for (var i = 2; i < 4; i++) {
        str += "<tr><td><h3></h3></td></tr>" +
        "<tr style=\"background:whitesmoke;\"><td>" +
            "<h4 style=\"text-align:center;width:20%;float:left\">" + fields[i] + "</h4>" +
            "<input style=\"width:80%\" type=\"text\" class=\"form-control\">" +
        "</td></tr>";
    }
    str += "<tr><td><h3></h3></td></tr>" +
        "<tr style=\"background:whitesmoke; text-align:left\"><td><form action=\"\">" +
            "<label style=\"width:40%;\" class=\"control radio\"><input type=\"radio\" name=\"sex\"/><span class=\"radio-label\">Male</label>" +
            "<label style=\"padding-top:15px; width:40%;\" class=\"control radio\"><input type=\"radio\" name=\"sex\"/><span class=\"radio-label\">Female</label>" +
        "</form></td></tr>" +
        "<tr><td><h3></h3></td></tr>" +
        "<tr style=\"background:whitesmoke;\"><td>" +
            "<button style=\"float:right; width:15%; margin-left:1%\" class=\"btn btn-default\">Cancel</button>" +
            "<button style=\"float:right; width:15%;\" class=\"btn btn-default\">Done</button>" +
        "</td></tr>" +
    "</table></div>" +
    "<div id=\"main0\" class=\"jumbotron\" style=\"width:40%; height:352px; background:url(images/slide0.jpg)no-repeat; background-position:center; background-size:cover;\">" +
        "<div style=\"padding-top:230px;\"><a class=\"btn btn-primary btn-lg\">Learn More</a></div>" +
    "</div>";
    var y = document.getElementById("body");
    y.innerHTML = str;
}

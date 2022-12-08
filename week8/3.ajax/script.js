function getXmlHttpObject() {
    var xmlHttp = null;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                console.log("Trình duyệt không hỗ trợ AJAX!");
            }
        }
    }
    return xmlHttp;
}

document.getElementById("loadHTML").onclick = function () {
    this.disabled = true;
    var xmlHttp = getXmlHttpObject();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4)
            document.getElementById("div").innerHTML = this.responseText;
    };

    var URL = "lmao.html";
    xmlHttp.open("GET", URL, true);
    xmlHttp.send(null);
};

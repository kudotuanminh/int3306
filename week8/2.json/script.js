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

document.getElementById("loadJSON").onclick = function () {
    this.disabled = true;
    var xmlHttp = getXmlHttpObject();

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var obj = JSON.parse(this.responseText);
                for (let i = 0; i < obj.length; i++) {
                    let r = document.createElement("tr");
                    let c1 = document.createElement("td");
                    let c2 = document.createElement("td");
                    let c3 = document.createElement("td");

                    c1.innerHTML = obj[i].name;
                    c2.innerHTML = obj[i].age;
                    c3.innerHTML = obj[i].cars.length;

                    for (var j = 0; j < obj[i].cars.length; j++)
                        c3.innerHTML +=
                            "<br>" +
                            obj[i].cars[j].name +
                            " - " +
                            obj[i].cars[j].models;

                    r.appendChild(c1);
                    r.appendChild(c2);
                    r.appendChild(c3);
                    document.querySelector("#table tbody").appendChild(r);
                }
            }
        }
    };

    var URL = "data.json";
    xmlHttp.open("GET", URL, true);
    xmlHttp.send(null);
};

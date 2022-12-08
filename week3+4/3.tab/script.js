var sel_ = null;
document.addEventListener("DOMContentLoaded", function () {
    mouseSelected(document.getElementById("button1"));
});

function mouseOver(r) {
    if (r !== sel_) r.className = "mouseHover";
}

function mouseOut(r) {
    if (r !== sel_) r.className = "mouseNormal";
}

function mouseSelected(r) {
    if (sel_ !== r) {
        if (sel_ !== null) sel_.className = "mouseNormal";

        sel_ = r;
        sel_.className = "mouseSelected";

        var frame = document.getElementById("webFrame");
        switch (sel_.id) {
            case "button1":
                frame.src = "https://vnexpress.net";
                break;
            case "button2":
                frame.src = "https://dantri.com.vn";
                break;
            case "button3":
                frame.src = "https://zingnews.vn";
                break;
            case "button4":
                frame.src = "https://kenh14.vn/";
                break;
            default:
                break;
        }
    }
}

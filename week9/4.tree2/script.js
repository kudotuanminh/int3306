$(document).ready(function () {
    $("img.treeToggle").click(function () {
        if (this.parentNode.lastChild.previousSibling.style.display == "") {
            this.parentNode.lastChild.previousSibling.style.display = "none";
            this.src = "images/plus.gif";
        } else {
            this.parentNode.lastChild.previousSibling.style.display = "";
            this.src = "images/minus.gif";
        }
    });
});

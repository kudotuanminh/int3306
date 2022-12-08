function toggleFolder(thisFolder) {
    if (thisFolder.parentNode.lastChild.previousSibling.style.display == "") {
        thisFolder.parentNode.lastChild.previousSibling.style.display = "none";
        thisFolder.src = "images/plus.gif";
    } else {
        thisFolder.parentNode.lastChild.previousSibling.style.display = "";
        thisFolder.src = "images/minus.gif";
    }
}

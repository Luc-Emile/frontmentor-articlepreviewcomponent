function seeSocialIcons() {
    var popup = document.getElementById("myPopup");
    if (popup.className === "pop-share") {
        popup.className += " show";
    } else {
        popup.className = "pop-share";
    }
}
var clickable = document.getElementById("clickable");
var icon = document.getElementById("icon");
var menu = document.getElementById("menu");
menu.style.right ="-300px";
clickable.onclick = function()
{
    console.log("clicked");
    if(menu.style.right == "-300px"){
        menu.style.right ="0";
        icon.src ="../assets/icon/close.png";
    }
    else{
        menu.style.right ="-300px";
        icon.src ="../assets/icon/bars2.png";
    }
}
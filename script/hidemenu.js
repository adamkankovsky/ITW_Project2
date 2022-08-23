function hideMenu(){
    var menu = document.getElementsByClassName("menu_full")[0];

    var button = document.getElementById("menu_btn");

    var displaySetting = menu.style.display;

    if (displaySetting=="block"){
        button.innerHTML = "+ menu";
        menu.style = "";
    }else{
        button.innerHTML = "- menu";
        menu.style.display = "block";
    }
}
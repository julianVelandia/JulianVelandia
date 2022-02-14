var SearchBox = document.getElementById("searchBox");
var SearchIcon = document.getElementById("searchIcon");
SearchIcon.onclick = function(){
    SearchBox.classList.toggle("navegation-active")
} 

var isDark = true
var NavegationDark = document.getElementById("navegationDark");
var NavegationDarkLuna = document.getElementById("navegationDarkLuna");
NavegationDarkLuna.onclick = function(){
    NavegationDark.classList.toggle("navegationLuz-active")
    
    if (isDark){
        NavegationDarkLuna.src = "static/img/sol.png";
        isDark = false
    }else{
        NavegationDarkLuna.src = "static/img/luna.png";
        isDark = true
    }
} 
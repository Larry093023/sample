var click = document.querySelector(".files-sub-sub-menu");
var show = document.querySelector(".menu")
let isClicked = true;

//show dropdown in Pages (no media query)
function togglePages () {
    click.classList.toggle("show");
}

//show and hide the nav bar when @media query
function showMenu () {
    document.querySelector(".menu").style.display = "flex";
}
function hideMenu () {
    document.querySelector(".menu").style.display = "none";
}

//show and hide the sub-menu when @media query
//function showSubMenu (div) {
//    div.nextElementSibling.style.display = "block";
//}

let showSubMenu = function (div) {
    if (isClicked) {
        div.nextElementSibling.style.display = "block";
        isClicked = false;
    }
    
    else {
        div.nextElementSibling.style.display = "none";
        isClicked = true;
    }
}






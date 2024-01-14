function click_more(number){
    var icon_more = document.getElementById("icon"+number);
    icon_more.src =  path_to_default_image() ;
    console.log("click on "+"iconstar"+number);
    if(icon_more.getAttribute("data-value") == "true"){
        console.log("get less");
        icon_more.src = "../images/icon-minus.svg";
        icon_more.setAttribute("data-value","false");
    }
    else if(icon_more.getAttribute("data-value") == "false"){
        console.log("get more");
        icon_more.src = "../images/icon-plus.svg";
        icon_more.setAttribute("data-value","true");
    }
}
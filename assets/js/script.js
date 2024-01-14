function click_more(number){
    var icon_more = document.getElementById("icon"+number);
    var details = document.getElementById("q"+number);
    console.log("click on "+"iconstar"+number);
    if(icon_more.getAttribute("data-value") == "true"){
        console.log("get less");
        icon_more.src = "assets/images/icon-plus.svg";
        icon_more.setAttribute("data-value","false");
        details.style = "display : none"
    }
    else if(icon_more.getAttribute("data-value") == "false"){
        console.log("get more");
        icon_more.src = "assets/images/icon-minus.svg";
        icon_more.setAttribute("data-value","true");
        details.style = "display : block"
    }
}
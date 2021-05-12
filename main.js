var get_menu=["Chicken Tandoori Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza","Veg Extravaganza Pizza","Veg Supreme Pizza"];
function getmenu()
{
    var html_data;
    html_data="<ol class='get_menu'>"
    get_menu.sort();
    for(var i=0;i<get_menu.length;i++)
    {
        html_data=html_data+'<li>'+get_menu[i];
    }
    html_data=html_data+"</ol>"
    document.getElementById("display_menu").innerHTML=html_data;
}
function add_item()
{
    var html_data;
    var item=document.getElementById("add_item_id").value;
    get_menu.push(item);
    html_data="<ol class='get_menu'>"
    get_menu.sort();
    for(var i=0;i<get_menu.length;i++)
    {
        html_data=html_data+'<li>'+get_menu[i];
    }
    html_data=html_data+"</ol>"
    document.getElementById("display_menu").innerHTML=html_data;
}
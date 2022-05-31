$(document).ready(function(){
    update_page_and_menu_selection('#head_content', 'pages/biography.html', 'biography', 'head_menu_selected');
    update_page_and_menu_selection('#body_content_container', 'pages/post.html', 'post', 'body_menu_selected', 'post_content', 'link_read_more');
});

function update_page_and_menu_selection(load_page_at, page_to_load, add_selection_to, menu_selection_class, containerClass="", linkClass="")
{
    load_page_and_read_more(load_page_at, page_to_load, containerClass, linkClass);
    remove_menu_selection(menu_selection_class);
    set_menu_selection(add_selection_to, menu_selection_class);
}

function load_page_and_read_more(load_page_at, page_to_load, containerClass, linkClass)
{
    //Know problem: it won't throw a exception when a page is not found;
    $(load_page_at).load(page_to_load, function(){
        if(isReadMoreActive(page_to_load))
        {
            group_container_and_link(containerClass, linkClass);
        }
    });
}

function remove_menu_selection(menu_selection_class)
{
    var menu_selected = document.getElementsByClassName(menu_selection_class);
    menu_selected[0].removeAttribute("class");
}

function set_menu_selection(add_selection_to, menu_selection_class)
{
    document.getElementById(add_selection_to).setAttribute("class", menu_selection_class);
}

function isReadMoreActive(pageUrl)
{
    var isActive = 0;

    if(pageUrl == 'pages/post.html' || pageUrl == 'pages/pea.html')
    {
        isActive = 1;
    }

    return isActive;
}

function group_container_and_link(containerClass, linkClass)
{
    var container = document.getElementsByClassName(containerClass);
    var link = document.getElementsByClassName(linkClass);

    for(var a=0; a < container.length; a++)
    {
        container[a].setAttribute("id", containerClass + "#" + (a+1));
        link[a].setAttribute("id", linkClass + "#" + (a+1));
    }

}

function read_more(originElement, containerClass, linkClass){
    id = regex_id(originElement);
    var containerClass = document.getElementById(containerClass+"#"+id);
    
    if(isContentCollapsed(containerClass))
    {
        expandContent(originElement, containerClass);
    }
    else
    {
        collapseContent(originElement, containerClass);
    }

}

function regex_id(e)
{
    return e.id.match(/\d+/g);
}

function isContentCollapsed(containerClass)
{
    var collapsed = 0;

    if(containerClass.getAttribute("class") == "post_content collapsed")
    {
        collapsed = 1;
    }

    return collapsed;
}

function expandContent(originElement, containerClass)
{
    containerClass.setAttribute("class", "post_content expanded");
    originElement.textContent="Ler menos";
}

function collapseContent(originElement, containerClass)
{
    containerClass.setAttribute("class", "post_content collapsed");
    originElement.textContent="Ler mais";
}
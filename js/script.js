window.onload = function(){
    UpdateDiv.update('#head_content', 'pages/biography.html', 'biography', 'head_menu_selected'); 
    UpdateDiv.update('#body_content_container', 'pages/post.html', 'post', 'body_menu_selected');
}

function set_up_read_more(){
    var postElem = document.getElementsByClassName("post_content");
    var postLink = document.getElementsByClassName("link_read_more");
    
    for(var a=0; a < postElem.length; a++){
        postElem[a].setAttribute("id", "post#" + (a+1));
        postLink[a].setAttribute("id", "post_link#" + (a+1));
    }

}

function read_more(e){
    alert(e.id);
}

var UpdateDiv = {

    //Update div without reloading entire page;
    update: function(id, url){

        $(id).load(url, function(data, textStatus, xhr){
            if(textStatus == "error"){
                alert("Erro ao carregar a página");
            }

        });

    },

    //Update both div and menu selection;
    update: function(id, url, element, className){

        $(id).load(url, function(data, textStatus, xhr){
            if(textStatus == "success" && element == "post"){
                set_up_read_more();
                var elem = document.getElementsByClassName(className);
                elem[0].removeAttribute("class");
                document.getElementById(element).setAttribute("class", className);
            }
            else{
                if(textStatus == "success"){
                    var elem = document.getElementsByClassName(className);
                    elem[0].removeAttribute("class");
                    document.getElementById(element).setAttribute("class", className);
                }
                else{

                    if(textStatus == "error"){
                        alert("Erro ao carregar a página");
                    }

                }
            }

        });

    },

};
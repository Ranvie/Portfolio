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
            if(textStatus == "success"){
                var elem = document.getElementsByClassName(className);
                elem[0].removeAttribute("class");
                document.getElementById(element).setAttribute("class", className);
            }
            if(textStatus == "error"){
                alert("Erro ao carregar a página");
            }

        });

    },

};
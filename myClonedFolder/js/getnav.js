$.get("http://lawrencetyleresguerra.github.io/myClonedFolder/partials/nav.html", function(data){
    
    
$(document).ready(function(){

    $(".container").prepend(data);
    $(".container").fadeIn();
    
    });
});
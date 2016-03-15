$.get("http://lawrencetyleresguerra.github.io/myClonedFolder/otherProjects/ajaxExamples/clients.html", function(data){
    
    
$(document).ready(function(){

    $(".container").prepend(data);
    
    });
});
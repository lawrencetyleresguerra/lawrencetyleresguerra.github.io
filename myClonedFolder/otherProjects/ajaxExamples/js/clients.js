$("#getClients").on("click", function(){
    $.getJSON("http://lawrencetyleresguerra.github.io/myClonedFolder/otherProjects/ajaxExamples/jsonDatabase/clients.json", function(data){
        
        alert(data);
        console.dir(data);
    });
    
})


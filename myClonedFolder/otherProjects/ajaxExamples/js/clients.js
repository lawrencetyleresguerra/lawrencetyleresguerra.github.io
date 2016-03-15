$(document).ready(function() {

    $("#getClients").on("click", function() {
        var url = "http://lawrencetyleresguerra.github.io/myClonedFolder/otherProjects/ajaxExamples/jsonDatabase/clients.json";
        $.getJSON("http://lawrencetyleresguerra.github.io/myClonedFolder/otherProjects/ajaxExamples/jsonDatabase/clients.json", function(data) {

            alert(data);
            console.dir(data);

        });

    });
});
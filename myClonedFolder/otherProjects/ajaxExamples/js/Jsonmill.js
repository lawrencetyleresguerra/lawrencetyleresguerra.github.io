$(document).ready(function() {

    $.getJSON("http://lawrencetyleresguerra.github.io/myClonedFolder/otherProjects/ajaxExamples/jsonDatabase/Jsonmill.json", function(data) {
        console.dir(data);
        var html = "";

        $.each(data, function(index, item) {
            html += '<div class="col-md-4">' +
                '<div class="clothingType">' + item.type + '</div>' +
                '<div class="clothingName">' + item.name + '</div>' +
                '<div class="clothingColor">' + item.color + '</div>' +
                '<img class="clothingImage" src="' + item.image + '"/>' +
                '<div class="commentsContainer">';
            $.each(item.comments, function(ind, i) {
                html += '<div class="buyerName">' + i.username + '</div>' +
                    '<div class="buyerComment">' + i.comment + '</div>' +
                    '<div class="buyerStars">';
                for (var i = 1; i <= 5; i++) {
                    if (i <= i.stars) {
                            html+='<img src="lawrencetyleresguerra.github.io/myClonedFolder/images/fullstar.png">';
                    } else {
                           html+='<img src="lawrencetyleresguerra.github.io/myClonedFolder/images/emptystar.png">'; 
                    }
                }
                html += '</div>'; //end stars
            }) //each comment

            html += '</div>' + //commentsContainer
            '</div>'; //col-md-4

        }) //each clothing
        $("#clothingData").append(html);
    })
})

/*
//one per cat
<div class="col-md-4">
    <div class="clothingType"></div>
    <div class="clothingName"></div>
    <div class="clothingColor"></div>
    <img src=""/>
    <div class="commentsContainer">
        //one per comment
        <div class="buyerName"></div>
        <div class="buyerLocation"></div>
        <div class="buyerStars">
        //5 stars, some full, some empty
        </div> //end stars
    </div> //end commentsContainer
</div> //end clothing
*/
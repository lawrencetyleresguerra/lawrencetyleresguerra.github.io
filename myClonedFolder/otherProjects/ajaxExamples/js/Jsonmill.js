$(document).ready(function() {

    $.getJSON("http://lawrencetyleresguerra.github.io/myClonedFolder/otherProjects/ajaxExamples/jsonDatabase/Jsonmill.json", function(data) {
        console.dir(data);
        var html = "";

        $.each(data, function(index, item) {
            html += '<div class="col-md-4">' +
                '<div class="clothingType">' + item.type + '</div>' +
                '<div class="clothingName">' + item.name + '</div>' +
                '<div class="clothingColor">' + item.color + '</div>' +
                '<img src="' + item.image + '"/>';

            html += '</div>';

        }) //each cat
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
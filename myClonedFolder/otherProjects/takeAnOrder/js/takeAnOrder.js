$(document).ready(function() {
    //$("#log").append("added some text");
    
    
    // user clicks the button
    $("#myButton").on("click", function() {

        //var myValue = $("#mySingleLineText").val();
        //var myTextArea = $("#myTextArea").val();
        //var mySelect = $("#mySelect").val();
        //var myRadio = $("[name='gender']:checked").val();
        //var myCheckValues = $("[name='vehicle']:checked").val();
        
        userOrder.myValue = $("#mySingleLineText").val();
        userOrder.myTextArea = $("#myTextArea").val();
        userOrder.mySelect = $("#mySelect").val();
        userOrder.myRadio = $("[name='gender']:checked").val();
        userOrder.myCheckValues = $("[name='vehicle']:checked").val();

        
        //$("#log").append("<br>User clicked the button");
        //$("#log").append("<br>Value of SingleLineText is " + myValue);
        //$("#log").append("<br>Value of TextArea is: " + myTextArea);
        //$("#log").append("<br>Value of select is: " + mySelect);
        //$("#log").append("<br>Value of radio button is: " + myRadio);
        //$("#log").append("<br>Value of checks is: " + myCheckValues);
        
        $("#log").append("<br>User clicked the button");
        $("#log").append("<br>Value of SingleLineText is " + userOrder.myValue);
        $("#log").append("<br>Value of TextArea is: " + userOrder.myTextArea);
        $("#log").append("<br>Value of select is: " + userOrder.mySelect);
        $("#log").append("<br>Value of radio button is: " + userOrder.myRadio);
        $("#log").append("<br>Value of checks is: " + userOrder.myCheckValues);
    });
    
    $("#mySingleLineText").on("focus", function() {
        $(this).css("background-color", "#F7F8E8");
    })
        .on("blur", function() {
            $(this).css("background-color", "#FFF");
        });

    $("#mySelect").on("change", function() {

        var val = $(this).val();
        $("#mySelectMessage").html(val + "... Nice.");
    });

});
$(document).ready(function(){

  $.getJSON("http://lawrencetyleresguerra.github.io/myClonedFolder/otherProjects/ajaxExamples/jsonDatabase/Jsonmill.json", function(data){
      console.dir(data);
  })
})
$.ajax("https://api.github.com/users/jamesdabbs/repos", {
  data: {
    sort: "updated",
    direction: "desc"
  }
}).then(function(result) {
  console.log("response is done");
  console.log("the data was", result);

  // console.log(result[0].name);

  for (var i=0; i < result.length; i++) {
    // name is result[i].name
    var item = $("<li>" + result[i].name + "</li>");
    $("#repos").append( item );
  }
})

console.log("Here");

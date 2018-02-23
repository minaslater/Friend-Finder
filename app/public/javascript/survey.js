$("#submit-btn").on("click", function() {
  event.preventDefault();
  
  var scoresArray = [];

  for (var i = 0; i < 10; i++) {
    scoresArray.push($("#question-" + (i+1)).val() * 1);
  }

  var requestData = {
    scores: JSON.stringify(scoresArray)
  };

  $.post("/api/friends", requestData)
    .then((data) => {
      console.log(data);
      
      var link = $("<a>");
      var image = $("<img>");
      link.attr("href", data.link);
      link.attr("target", "_blank");
      link.text("Follow me on Instagram!")
      image.attr("src", data.photo);
      image.attr("alt", "picture of " + data.name);
      image.attr("style", "width: 100%");

      $("#result-name").empty();
      $("#result-display").empty();
      $("#result-name").text(data.name);
      $("#result-display").append(link);
      $("#result-display").append(image);
    });
});

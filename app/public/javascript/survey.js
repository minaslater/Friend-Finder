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
    .then((data) => console.log(data));
});

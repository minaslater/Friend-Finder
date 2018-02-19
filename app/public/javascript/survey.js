$("#submit-btn").on("click", function() {
  event.preventDefault();

  var friendSeeker = {
    scores: JSON.stringify([5, 4, 2, 2, 4, 1, 5, 4, 3, 4])
  }

  $.post("/api/friends", friendSeeker)
    .then((data) => console.log(data));
});

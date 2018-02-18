$("#submit-btn").on("click", function() {
  event.preventDefault();
  $.ajax({
    url: "/api/friends",
    method: "POST",
  }).then(() => console.log("posted"));
});

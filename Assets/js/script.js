// Readme shows a save button on the right to log the content to local storage.
// JS will need to be added for the buttons themselves.
// Timeblocks will need to change color depending on which hour it is/has passed/is upcoming. MomentJS integration.
// Clock at the top of the page alongside the date might be a nice touch.

var save = document.getElementById("saveBtn");
var text = document.querySelectorAll("textarea")

$(save).on("click", function() {
  saveEvent();
})


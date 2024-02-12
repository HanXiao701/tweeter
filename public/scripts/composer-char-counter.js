$(document).ready(function () {
  console.log("ready");
  $("#tweet-text").on("input", function () {
    $(".counter")[0].value = 140 - this.value.length;
  });
});

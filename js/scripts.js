// back end

var gtol = function(number1) {
  return number1 * 3.785;
};

var ltog = function(number2) {
  return number2 / 3.785;
};


// interface

$(document).ready(function() {
  $("#congtol").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#gtol").val());
    var result = gtol(number1);
    $("#output").text(result);
  });

  $("#conltog").submit(function(event) {
    event.preventDefault();
    var number2 = parseInt($("#ltog").val());
    var result = ltog(number2);
    $("#output").text(result);
  });
});
